import { createClient } from '@supabase/supabase-js'

// Server-side Supabase client with service role key
export function createServerSupabaseClient() {
  const supabaseUrl = process.env.SUPABASE_URL!
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!
  
  return createClient(supabaseUrl, supabaseServiceKey, {
    auth: {
      persistSession: false,
    },
  })
}

// Generate a random game code
export function generateGameCode(): string {
  return Math.random().toString(36).substring(2, 8).toUpperCase()
}

// Shuffle array using Fisher-Yates algorithm
export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

// Assign roles based on player count and settings
export function assignRoles(playerCount: number, settings: any) {
  const roles: string[] = []
  
  // Add werewolves
  const werewolfCount = settings?.werewolfCount || settings?.werewolves || Math.floor(playerCount / 3)
  for (let i = 0; i < werewolfCount; i++) {
    roles.push('werewolf')
  }
  
  // Add special roles (support both property naming conventions)
  if (settings?.hasSeer || settings?.seer) roles.push('seer')
  if (settings?.hasDoctor || settings?.doctor) roles.push('doctor')
  if (settings?.hasBodyguard || settings?.bodyguard) roles.push('bodyguard')
  if (settings?.hasMinion || settings?.minion) roles.push('minion')
  if (settings?.hasHunter || settings?.hunter) roles.push('hunter')
  if (settings?.hasWitch || settings?.witch) roles.push('witch')
  if (settings?.hasJester || settings?.jester) roles.push('jester')
  
  // Fill remaining with villagers
  while (roles.length < playerCount) {
    roles.push('villager')
  }
  
  return shuffleArray(roles)
}

// Check win condition
export function checkWinCondition(alivePlayers: any[]) {
  const aliveWerewolves = alivePlayers.filter(p => p.role === 'werewolf').length
  const aliveVillagers = alivePlayers.filter(p => p.role !== 'werewolf').length
  
  if (aliveWerewolves === 0) {
    return { gameOver: true, winner: 'villagers' }
  }
  
  if (aliveWerewolves >= aliveVillagers) {
    return { gameOver: true, winner: 'werewolves' }
  }
  
  return { gameOver: false, winner: null }
}

// Phase timer constants
export const PHASE_TIMERS = {
  role_reveal: 15,
  night: 120,
  day: 180,
  voting: 120,
  voting_results: 10
}

// CORS headers for API routes
export const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
}
