import { NextResponse } from 'next/server'
import { createServerSupabaseClient } from '@/lib/supabase-server'

export async function POST(request: Request) {
  try {
    const { gameCode, playerName } = await request.json()
    
    if (!gameCode || !playerName) {
      return NextResponse.json(
        { error: 'Missing required fields: gameCode and playerName' },
        { status: 400 }
      )
    }

    const supabase = createServerSupabaseClient()
    const playerId = crypto.randomUUID()

    // Find game by game_code
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

    if (game.status !== 'waiting') {
      return NextResponse.json(
        { error: 'Game has already started' },
        { status: 400 }
      )
    }

    // Check if name is taken
    const { data: existingPlayer } = await supabase
      .from('players')
      .select('id')
      .eq('game_id', game.id)
      .eq('name', playerName)
      .single()

    if (existingPlayer) {
      return NextResponse.json(
        { error: 'Name already taken in this game' },
        { status: 400 }
      )
    }

    // Create player
    const { error: playerError } = await supabase
      .from('players')
      .insert({
        game_id: game.id,
        player_id: playerId,
        name: playerName,
        is_host: false,
        is_alive: true,
        has_shield: game.settings?.shield !== false
      })

    if (playerError) {
      console.error('Player creation error:', playerError)
      return NextResponse.json(
        { error: 'Failed to join game' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      gameCode: game.game_code,
      playerId,
      gameId: game.id
    })
  } catch (error: any) {
    console.error('Join game error:', error)
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    )
  }
}

export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 })
}
