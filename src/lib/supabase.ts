import { createClient, RealtimeChannel } from '@supabase/supabase-js'

// Client-side Supabase client (uses public anon key)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  realtime: {
    params: {
      eventsPerSecond: 10
    }
  }
})

// API base URL - uses Next.js API routes instead of Supabase Edge Functions
const API_URL = '/api'

// Helper to call API routes
async function callAPI(endpoint: string, body: any) {
  const response = await fetch(`${API_URL}/${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.error || 'API call failed')
  }

  return response.json()
}

// Game API functions using Next.js API routes
export async function createGame(hostName: string, settings: any) {
  return callAPI('create-game', { playerName: hostName, settings })
}

export async function joinGame(gameCode: string, playerName: string) {
  return callAPI('join-game', { gameCode, playerName })
}

export async function startGame(gameCode: string, playerId: string) {
  return callAPI('start-game', { gameCode, playerId })
}

export async function sendChatMessage(gameCode: string, playerId: string, message: string, channel?: string) {
  return callAPI('send-chat', { gameCode, playerId, message, channel })
}

export async function submitVote(gameCode: string, playerId: string, targetId: string) {
  return callAPI('submit-vote', { gameCode, playerId, targetId })
}

export async function submitNightAction(gameCode: string, playerId: string, targetId: string, action: string) {
  return callAPI('submit-night-action', { gameCode, playerId, targetId, action })
}

export async function processNight(gameCode: string) {
  return callAPI('process-night', { gameCode })
}

export async function processVotes(gameCode: string) {
  return callAPI('process-votes', { gameCode })
}

export async function startVoting(gameCode: string, playerId: string) {
  return callAPI('start-voting', { gameCode, playerId })
}

export async function leaveGame(gameCode: string, playerId: string) {
  return callAPI('leave-game', { gameCode, playerId })
}

export async function useShield(gameCode: string, playerId: string) {
  return callAPI('use-shield', { gameCode, playerId })
}

export async function triggerLightningStrike(gameCode: string, playerId: string) {
  return callAPI('lightning-strike', { gameCode, playerId })
}

export async function transitionToNight(gameCode: string) {
  return callAPI('transition-to-night', { gameCode })
}

export async function getGameState(gameId: number) {
  const [
    { data: game },
    { data: players },
    { data: votes },
    { data: nightActions },
    { data: chatMessages }
  ] = await Promise.all([
    supabase.from('games').select('*').eq('id', gameId).single(),
    supabase.from('players').select('*').eq('game_id', gameId),
    supabase.from('votes').select('*').eq('game_id', gameId),
    supabase.from('night_actions').select('*').eq('game_id', gameId),
    supabase.from('chat_messages').select('*').eq('game_id', gameId).order('created_at', { ascending: true })
  ])

  return {
    game,
    players: players || [],
    votes: votes || [],
    nightActions: nightActions || [],
    chatMessages: chatMessages || []
  }
}

// Realtime subscriptions
export function subscribeToGame(gameId: number, callback: (payload: any) => void): RealtimeChannel {
  return supabase
    .channel(`game:${gameId}`)
    .on(
      'postgres_changes',
      {
        event: '*',
        schema: 'public',
        table: 'games',
        filter: `id=eq.${gameId}`
      },
      callback
    )
    .subscribe()
}

export function subscribeToPlayers(gameId: number, callback: (payload: any) => void): RealtimeChannel {
  return supabase
    .channel(`players:${gameId}`)
    .on(
      'postgres_changes',
      {
        event: '*',
        schema: 'public',
        table: 'players',
        filter: `game_id=eq.${gameId}`
      },
      callback
    )
    .subscribe()
}

export function subscribeToChatMessages(gameId: number, callback: (payload: any) => void): RealtimeChannel {
  return supabase
    .channel(`chat:${gameId}`)
    .on(
      'postgres_changes',
      {
        event: 'INSERT',
        schema: 'public',
        table: 'chat_messages',
        filter: `game_id=eq.${gameId}`
      },
      callback
    )
    .subscribe()
}

export function subscribeToVotes(gameId: number, callback: (payload: any) => void): RealtimeChannel {
  return supabase
    .channel(`votes:${gameId}`)
    .on(
      'postgres_changes',
      {
        event: '*',
        schema: 'public',
        table: 'votes',
        filter: `game_id=eq.${gameId}`
      },
      callback
    )
    .subscribe()
}

export function subscribeToNightActions(gameId: number, callback: (payload: any) => void): RealtimeChannel {
  return supabase
    .channel(`night_actions:${gameId}`)
    .on(
      'postgres_changes',
      {
        event: '*',
        schema: 'public',
        table: 'night_actions',
        filter: `game_id=eq.${gameId}`
      },
      callback
    )
    .subscribe()
}

export function unsubscribeAll() {
  supabase.removeAllChannels()
}
