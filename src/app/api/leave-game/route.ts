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

    // Remove player from game
    await supabase
      .from('players')
      .delete()
      .eq('player_id', playerId)
      .eq('game_id', game.id)

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error('Leave game error:', error)
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    )
  }
}

export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 })
}
