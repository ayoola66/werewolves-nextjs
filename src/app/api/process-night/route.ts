import { NextResponse } from 'next/server'
import { createServerSupabaseClient, checkWinCondition, PHASE_TIMERS } from '@/lib/supabase-server'

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

    // Allow processing in night or role_reveal phase
    if (game.current_phase !== 'night' && game.current_phase !== 'role_reveal') {
      return NextResponse.json(
        { error: 'Not in night or role_reveal phase' },
        { status: 400 }
      )
    }

    // If in role_reveal, just transition to night
    if (game.current_phase === 'role_reveal') {
      const phaseTimer = PHASE_TIMERS.night
      const phaseEndTime = new Date(Date.now() + phaseTimer * 1000)
      
      await supabase
        .from('games')
        .update({ 
          current_phase: 'night',
          phase_timer: phaseTimer,
          phase_end_time: phaseEndTime.toISOString(),
          night_count: 1,
          last_phase_change: new Date().toISOString()
        })
        .eq('id', game.id)

      await supabase
        .from('chat_messages')
        .insert({
          game_id: game.id,
          message: '🌙 Night falls... Werewolves, choose your target.',
          type: 'system'
        })

      return NextResponse.json({ success: true, phase: 'night' })
    }

    // Get all night actions
    const { data: actions } = await supabase
      .from('night_actions')
      .select('*')
      .eq('game_id', game.id)

    // Get all players
    const { data: allPlayers } = await supabase
      .from('players')
      .select('*')
      .eq('game_id', game.id)

    if (!allPlayers || allPlayers.length === 0) {
      return NextResponse.json(
        { error: 'No players found' },
        { status: 400 }
      )
    }

    const messages: string[] = []
    const deaths: string[] = []

    // Process werewolf kill
    const killAction = actions?.find(a => a.action_type === 'kill')
    if (killAction) {
      const target = allPlayers.find(p => p.player_id === killAction.target_id)
      
      // Check for protection
      const doctorAction = actions?.find(a => a.action_type === 'protect' && 
        allPlayers.find(p => p.player_id === a.player_id)?.role === 'doctor')
      const shieldAction = actions?.find(a => a.action_type === 'shield' && 
        a.player_id === killAction.target_id)

      if (doctorAction?.target_id === killAction.target_id) {
        messages.push(`💊 The doctor saved ${target?.name || 'someone'} from death!`)
      } else if (shieldAction && target?.has_shield) {
        messages.push(`🛡️ ${target.name} activated their shield and survived!`)
        await supabase
          .from('players')
          .update({ has_shield: false })
          .eq('player_id', target.player_id)
      } else if (target) {
        deaths.push(target.player_id)
        messages.push(`💀 ${target.name} was killed during the night!`)
      }
    }

    // Process seer investigation
    const investigateAction = actions?.find(a => a.action_type === 'investigate')
    if (investigateAction) {
      const target = allPlayers.find(p => p.player_id === investigateAction.target_id)
      const isWerewolf = target?.role === 'werewolf'
      messages.push(`🔮 The seer investigated ${target?.name || 'someone'} and discovered they are ${isWerewolf ? 'a werewolf' : 'not a werewolf'}!`)
    }

    // Apply deaths
    for (const deadPlayerId of deaths) {
      await supabase
        .from('players')
        .update({ is_alive: false })
        .eq('player_id', deadPlayerId)
    }

    // Insert chat messages
    for (const message of messages) {
      await supabase
        .from('chat_messages')
        .insert({
          game_id: game.id,
          message,
          type: 'system'
        })
    }

    // Clear night actions
    await supabase
      .from('night_actions')
      .delete()
      .eq('game_id', game.id)

    // Check win condition
    const { data: alivePlayers } = await supabase
      .from('players')
      .select('*')
      .eq('game_id', game.id)
      .eq('is_alive', true)

    const winCheck = checkWinCondition(alivePlayers || [])

    if (winCheck.gameOver) {
      await supabase
        .from('games')
        .update({ 
          status: 'finished',
          current_phase: 'game_over'
        })
        .eq('id', game.id)

      await supabase
        .from('chat_messages')
        .insert({
          game_id: game.id,
          message: `🎉 Game Over! ${winCheck.winner === 'villagers' ? 'Villagers' : 'Werewolves'} win!`,
          type: 'system'
        })

      return NextResponse.json({
        success: true,
        gameOver: true,
        winner: winCheck.winner
      })
    }

    // Transition to day phase
    const phaseTimer = PHASE_TIMERS.day
    const phaseEndTime = new Date(Date.now() + phaseTimer * 1000)
    const newDayCount = (game.day_count || 0) + 1
    
    await supabase
      .from('games')
      .update({ 
        current_phase: 'day',
        phase_timer: phaseTimer,
        phase_end_time: phaseEndTime.toISOString(),
        day_count: newDayCount,
        last_phase_change: new Date().toISOString()
      })
      .eq('id', game.id)

    await supabase
      .from('chat_messages')
      .insert({
        game_id: game.id,
        message: '☀️ Day breaks. Discuss and vote to eliminate a suspect.',
        type: 'system'
      })

    return NextResponse.json({
      success: true,
      phase: 'day'
    })
  } catch (error: any) {
    console.error('Process night error:', error)
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    )
  }
}

export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 })
}
