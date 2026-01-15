import { NextResponse } from 'next/server'
import { createServerSupabaseClient } from '@/lib/supabase-server'

// Scramble message for night phase village chat
function scrambleMessage(message: string, seed: number): string {
  const chars = message.split('')
  const scrambled: string[] = []
  
  let random = seed
  const nextRandom = () => {
    random = (random * 1103515245 + 12345) & 0x7fffffff
    return random / 0x7fffffff
  }
  
  for (const char of chars) {
    if (/[a-z]/.test(char)) {
      const newChar = String.fromCharCode(97 + Math.floor(nextRandom() * 26))
      scrambled.push(newChar)
    } else if (/[A-Z]/.test(char)) {
      const newChar = String.fromCharCode(65 + Math.floor(nextRandom() * 26))
      scrambled.push(newChar)
    } else {
      scrambled.push(char)
    }
  }
  
  return scrambled.join('')
}

export async function POST(request: Request) {
  try {
    const { gameCode, playerId, message, channel } = await request.json()
    
    if (!gameCode || !playerId || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: gameCode, playerId, and message' },
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

    // Verify player exists and is alive
    const { data: player } = await supabase
      .from('players')
      .select('is_alive, name, role')
      .eq('player_id', playerId)
      .eq('game_id', game.id)
      .single()

    if (!player) {
      return NextResponse.json(
        { error: 'Player not found in game' },
        { status: 404 }
      )
    }

    if (!player.is_alive) {
      return NextResponse.json(
        { error: 'Dead players cannot send messages' },
        { status: 403 }
      )
    }

    const currentPhase = game.current_phase
    const isWerewolf = player.role === 'werewolf' || player.role === 'minion'
    
    // Day phase: No chat allowed
    if (currentPhase === 'day') {
      return NextResponse.json(
        { error: 'Chat is disabled during day phase. Discuss verbally!' },
        { status: 403 }
      )
    }
    
    // Voting phase: No chat allowed
    if (currentPhase === 'voting' || currentPhase === 'voting_results') {
      return NextResponse.json(
        { error: 'Chat is disabled during voting phase.' },
        { status: 403 }
      )
    }

    // Determine message type and scrambling
    let messageType = 'player'
    let scrambledMessage: string | null = null
    
    if (currentPhase === 'night') {
      if (channel === 'werewolf' && isWerewolf) {
        messageType = 'werewolf'
      } else {
        messageType = 'scrambled'
        scrambledMessage = scrambleMessage(message, game.id)
      }
    }

    // Create chat message
    await supabase
      .from('chat_messages')
      .insert({
        game_id: game.id,
        player_id: playerId,
        player_name: player.name,
        message: messageType === 'scrambled' ? scrambledMessage : message,
        original_message: messageType === 'scrambled' ? message : null,
        type: messageType
      })

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error('Send chat error:', error)
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    )
  }
}

export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 })
}
