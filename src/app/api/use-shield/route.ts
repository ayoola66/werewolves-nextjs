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
        { error: 'Shield can only be used during night phase' },
        { status: 400 }
      )
    }

    // Verify player exists and has shield
    const { data: player } = await supabase
      .from('players')
      .select('*')
      .eq('player_id', playerId)
      .eq('game_id', game.id)
      .single()

    if (!player) {
      return NextResponse.json(
        { error: 'Player not found' },
        { status: 404 }
      )
    }

    if (!player.has_shield) {
      return NextResponse.json(
        { error: 'Player does not have a shield' },
        { status: 400 }
      )
    }

    // Record shield action
    await supabase
      .from('night_actions')
      .insert({
        game_id: game.id,
        player_id: playerId,
        action_type: 'shield',
        phase: game.night_count || 1
      })

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error('Use shield error:', error)
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    )
  }
}

export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 })
}
