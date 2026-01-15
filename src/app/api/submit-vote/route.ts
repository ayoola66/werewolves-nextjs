import { NextResponse } from 'next/server'
import { createServerSupabaseClient } from '@/lib/supabase-server'

export async function POST(request: Request) {
  try {
    const { gameCode, playerId, targetId } = await request.json()
    
    if (!gameCode || !playerId || !targetId) {
      return NextResponse.json(
        { error: 'Missing required fields: gameCode, playerId, and targetId' },
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

    if (game.current_phase !== 'voting') {
      return NextResponse.json(
        { error: 'Can only vote during voting phase' },
        { status: 400 }
      )
    }

    // Verify player is alive
    const { data: player } = await supabase
      .from('players')
      .select('is_alive')
      .eq('player_id', playerId)
      .eq('game_id', game.id)
      .single()

    if (!player?.is_alive) {
      return NextResponse.json(
        { error: 'Dead players cannot vote' },
        { status: 403 }
      )
    }

    // Check for existing vote
    const { data: existing } = await supabase
      .from('votes')
      .select('*')
      .eq('game_id', game.id)
      .eq('voter_id', playerId)

    if (existing && existing.length > 0) {
      // Update existing vote
      await supabase
        .from('votes')
        .update({ target_id: targetId })
        .eq('id', existing[0].id)
    } else {
      // Create new vote
      await supabase
        .from('votes')
        .insert({
          game_id: game.id,
          voter_id: playerId,
          target_id: targetId,
          phase: 'voting'
        })
    }

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error('Submit vote error:', error)
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    )
  }
}

export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 })
}
