import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { corsHeaders, createSupabaseClient } from '../_shared/utils.ts'

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { gameCode, playerName } = await req.json() as { gameCode: string; playerName: string }

    if (!gameCode || !playerName) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const trimmedName = playerName.trim()
    if (trimmedName.length === 0 || trimmedName.length > 30) {
      return new Response(
        JSON.stringify({ error: 'Player name must be between 1 and 30 characters' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const supabase = createSupabaseClient(req)

    // Find game
    const { data: game, error: gameError } = await supabase
      .from('games')
      .select('*')
      .eq('game_code', gameCode.toUpperCase())
      .single()

    if (gameError || !game) {
      return new Response(
        JSON.stringify({ error: 'Game not found' }),
        { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    if (game.status !== 'waiting') {
      return new Response(
        JSON.stringify({ error: 'Game already started' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Check player count and name availability
    const { data: existingPlayers } = await supabase
      .from('players')
      .select('name')
      .eq('game_id', game.id)

    if (existingPlayers && existingPlayers.length >= 20) {
      return new Response(
        JSON.stringify({ error: 'Game is full (maximum 20 players)' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    if (existingPlayers?.some(p => p.name.toLowerCase() === trimmedName.toLowerCase())) {
      return new Response(
        JSON.stringify({ error: 'Name already taken' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Generate a cryptographically secure player ID
    const playerId = crypto.randomUUID()

    // Create player
    const { data: player, error: playerError } = await supabase
      .from('players')
      .insert({
        game_id: game.id,
        player_id: playerId,
        name: trimmedName,
        is_host: false,
        is_alive: true
      })
      .select()
      .single()

    if (playerError) throw playerError

    // Add join message
    await supabase
      .from('chat_messages')
      .insert({
        game_id: game.id,
        message: `👋 ${trimmedName} joined the game`,
        type: 'system'
      })

    return new Response(
      JSON.stringify({ 
        success: true,
        game,
        player,
        playerId: playerId
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    console.error('join-game error:', error)
    return new Response(
      JSON.stringify({ error: 'An internal error occurred. Please try again.' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})
