import { NextResponse } from 'next/server'
import { createServerSupabaseClient, PHASE_TIMERS } from '@/lib/supabase-server'

export async function POST(request: Request) {
  try {
    const { gameCode, playerId } = await request.json()
    
    if (!gameCode) {
      return NextResponse.json(
        { error: 'Missing required field: gameCode' },
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

    if (game.current_phase !== 'day') {
      return NextResponse.json(
        { error: 'Voting can only be started during the day phase' },
        { status: 400 }
      )
    }

    // Transition to voting phase
    const phaseTimer = PHASE_TIMERS.voting
    const phaseEndTime = new Date(Date.now() + phaseTimer * 1000)

    await supabase
      .from('games')
      .update({
        current_phase: 'voting',
        phase_timer: phaseTimer,
        phase_end_time: phaseEndTime.toISOString(),
        last_phase_change: new Date().toISOString()
      })
      .eq('id', game.id)

    await supabase
      .from('chat_messages')
      .insert({
        game_id: game.id,
        message: '⚖️ Voting has begun! Cast your vote to eliminate a suspect.',
        type: 'system'
      })

    return NextResponse.json({
      success: true,
      phase: 'voting',
      phaseTimer
    })
  } catch (error: any) {
    console.error('Start voting error:', error)
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    )
  }
}

export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 })
}
