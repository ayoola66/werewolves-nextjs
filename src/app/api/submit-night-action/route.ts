import { NextResponse } from 'next/server'
import { createServerSupabaseClient } from '@/lib/supabase-server'

export async function POST(request: Request) {
  try {
    const { gameCode, playerId, targetId, action } = await request.json()
    
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
        { error: 'Can only perform night actions during night phase' },
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

    if (!player) {
      return NextResponse.json(
        { error: 'Player not found' },
        { status: 404 }
      )
    }

    if (!player.is_alive) {
      return NextResponse.json(
        { error: 'Dead players cannot perform actions' },
        { status: 403 }
      )
    }

    // Check for existing action
    const { data: existing } = await supabase
      .from('night_actions')
      .select('*')
      .eq('game_id', game.id)
      .eq('player_id', playerId)

    if (existing && existing.length > 0) {
      // Update existing action
      await supabase
        .from('night_actions')
        .update({ 
          target_id: targetId,
          action_type: action || 'skip'
        })
        .eq('id', existing[0].id)
    } else {
      // Create new action
      await supabase
        .from('night_actions')
        .insert({
          game_id: game.id,
          player_id: playerId,
          target_id: targetId,
          action_type: action || 'skip',
          phase: game.night_count || 1
        })
    }

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error('Submit night action error:', error)
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    )
  }
}

export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 })
}
