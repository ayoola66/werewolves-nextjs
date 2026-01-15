import { NextResponse } from 'next/server'
import { createServerSupabaseClient, assignRoles, shuffleArray, PHASE_TIMERS } from '@/lib/supabase-server'

export async function POST(request: Request) {
  try {
    const { gameCode, playerId } = await request.json()
    
    if (!gameCode || !playerId) {
      return NextResponse.json(
        { error: 'Missing required fields: gameCode and playerId' },
        { status: 400 }
      )
    }

    const supabase = createServerSupabaseClient()

    // Find game by game_code
    const { data: game, error: gameError } = await supabase
      .from('games')
      .select('*')
      .eq('game_code', gameCode.toUpperCase())
      .single()

    if (gameError || !game) {
      return NextResponse.json(
        { error: 'Game not found' },
        { status: 404 }
      )
    }

    // Verify player is host
    const { data: player } = await supabase
      .from('players')
      .select('is_host')
      .eq('player_id', playerId)
      .eq('game_id', game.id)
      .single()

    if (!player?.is_host) {
      return NextResponse.json(
        { error: 'Only host can start the game' },
        { status: 403 }
      )
    }

    if (game.status !== 'waiting') {
      return NextResponse.json(
        { error: 'Game has already started' },
        { status: 400 }
      )
    }

    // Get all players
    const { data: players } = await supabase
      .from('players')
      .select('*')
      .eq('game_id', game.id)

    if (!players || players.length < 3) {
      return NextResponse.json(
        { error: 'Need at least 3 players to start' },
        { status: 400 }
      )
    }

    // Assign roles - shuffle BOTH players AND roles for true randomness
    const roles = assignRoles(players.length, game.settings)
    const shuffledPlayers = shuffleArray([...players])
    
    for (let i = 0; i < shuffledPlayers.length; i++) {
      await supabase
        .from('players')
        .update({ role: roles[i] })
        .eq('id', shuffledPlayers[i].id)
    }

    // Start with role_reveal phase
    const phaseTimer = PHASE_TIMERS.role_reveal
    const phaseEndTime = new Date(Date.now() + phaseTimer * 1000)
    
    await supabase
      .from('games')
      .update({ 
        status: 'playing',
        current_phase: 'role_reveal',
        phase_timer: phaseTimer,
        phase_end_time: phaseEndTime.toISOString(),
        night_count: 0,
        day_count: 0
      })
      .eq('id', game.id)

    // Add system message
    await supabase
      .from('chat_messages')
      .insert({
        game_id: game.id,
        player_name: 'System',
        message: '🎮 The game has started! Roles are being revealed...',
        type: 'system'
      })

    return NextResponse.json({
      success: true,
      gameCode: game.game_code,
      phase: 'role_reveal',
      phaseTimer
    })
  } catch (error: any) {
    console.error('Start game error:', error)
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    )
  }
}

export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 })
}
