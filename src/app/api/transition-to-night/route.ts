import { NextResponse } from 'next/server'
import { createServerSupabaseClient, PHASE_TIMERS } from '@/lib/supabase-server'

export async function POST(request: Request) {
  try {
    const { gameCode } = await request.json()
    
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

    if (game.current_phase !== 'voting_results') {
      return NextResponse.json(
        { error: 'Not in voting_results phase' },
        { status: 400 }
      )
    }

    const newNight = (game.night_count || 0) + 1
    const phaseTimer = PHASE_TIMERS.night
    const phaseEndTime = new Date(Date.now() + phaseTimer * 1000)

    await supabase
      .from('games')
      .update({
        current_phase: 'night',
        phase_timer: phaseTimer,
        phase_end_time: phaseEndTime.toISOString(),
        night_count: newNight,
        last_phase_change: new Date().toISOString()
      })
      .eq('id', game.id)

    await supabase
      .from('chat_messages')
      .insert({
        game_id: game.id,
        message: `🌙 Night ${newNight} falls... Werewolves, choose your target.`,
        type: 'system'
      })

    return NextResponse.json({
      success: true,
      phase: 'night'
    })
  } catch (error: any) {
    console.error('Transition to night error:', error)
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    )
  }
}

export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 })
}
