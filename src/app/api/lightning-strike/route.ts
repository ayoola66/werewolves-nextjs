import { NextResponse } from 'next/server'
import { createServerSupabaseClient } from '@/lib/supabase-server'

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

    // Find game
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

    if (game.current_phase !== 'night') {
      return NextResponse.json(
        { error: 'Lightning can only strike during night phase' },
        { status: 400 }
      )
    }

    // Verify player exists and is alive
    const { data: player } = await supabase
      .from('players')
      .select('*')
      .eq('player_id', playerId)
      .eq('game_id', game.id)
      .single()

    if (!player || !player.is_alive) {
      return NextResponse.json(
        { error: 'Player not found or already dead' },
        { status: 400 }
      )
    }

    // Kill the player - no protection can save from lightning!
    await supabase
      .from('players')
      .update({ is_alive: false, has_shield: false })
      .eq('player_id', playerId)

    // Add dramatic message
    await supabase
      .from('chat_messages')
      .insert({
        game_id: game.id,
        message: `⚡ LIGHTNING STRIKE! ⚡ ${player.name} was struck down by the Grand Wizard for failing to participate!`,
        type: 'death'
      })

    return NextResponse.json({
      success: true,
      playerName: player.name
    })
  } catch (error: any) {
    console.error('Lightning strike error:', error)
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    )
  }
}

export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 })
}
