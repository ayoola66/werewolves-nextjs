'use client'

import { useGameState } from '@/hooks/useGameState'
import InitialScreen from '@/components/werewolf/InitialScreen'
import GameSettings from '@/components/werewolf/GameSettings'
import Lobby from '@/components/werewolf/Lobby'
import GameScreen from '@/components/werewolf/GameScreen'
import RoleRevealOverlay from '@/components/werewolf/overlays/RoleReveal'

export default function WerewolfGame() {
  const gameState = useGameState()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      
      {/* Main content */}
      <div className={`relative z-10 text-white flex items-center justify-center min-h-screen p-4 transition-all duration-1000 ${
        gameState.gameState?.phase === 'night' ? 'brightness-50' : 
        gameState.gameState?.phase === 'day' ? 'brightness-110' : ''
      }`}>
        <div className="w-full max-w-5xl mx-auto">
          {gameState.currentScreen === 'initial' && <InitialScreen gameState={gameState} />}
          {gameState.currentScreen === 'settings' && <GameSettings gameState={gameState} />}  
          {gameState.currentScreen === 'lobby' && <Lobby gameState={gameState} />}
          {gameState.currentScreen === 'game' && <GameScreen gameState={gameState} />}
          
          {/* Role Reveal Overlay */}
          {gameState.currentScreen === 'game' && 
           gameState.gameState?.phase === 'role_reveal' && 
           gameState.getPlayerRole() && (
            <RoleRevealOverlay gameState={gameState} />
          )}
        </div>
      </div>
    </div>
  )
}
