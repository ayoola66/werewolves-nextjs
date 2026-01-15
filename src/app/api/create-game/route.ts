import { NextResponse } from 'next/server'
import { createServerSupabaseClient, generateGameCode } from '@/lib/supabase-server'

export async function POST(request: Request) {
  try {
    const { playerName, settings } = await request.json()
    
    if (!playerName) {
      return NextResponse.json(
        { error: 'Missing required field: playerName' },
        { status: 400 }
      )
    }

    const supabase = createServerSupabaseClient()
    const gameCode = generateGameCode()
    const playerId = crypto.randomUUID()

    // Create game
    const { data: game, error: gameError } = await supabase
      .from('games')
      .insert({
        game_code: gameCode,
        host_id: playerId,
        status: 'waiting',
        settings: settings || {},
        current_phase: 'lobby'
      })
      .select()
      .single()

    if (gameError) {
      console.error('Game creation error:', gameError)
      return NextResponse.json(
        { error: 'Failed to create game' },
        { status: 500 }
      )
    }

    // Create host player
    const { error: playerError } = await supabase
      .from('players')
      .insert({
        game_id: game.id,
        player_id: playerId,
        name: playerName,
        is_host: true,
        is_alive: true,
        has_shield: settings?.shield !== false
      })

    if (playerError) {
      console.error('Player creation error:', playerError)
      return NextResponse.json(
        { error: 'Failed to create player' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      gameCode,
      playerId,
      gameId: game.id
    })
  } catch (error: any) {
    console.error('Create game error:', error)
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    )
  }
}

export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 })
}
