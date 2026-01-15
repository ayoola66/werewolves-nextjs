'use client';

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Footer from '@/components/Footer';

export default function HowToPlayPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl">
        {/* Back to Home */}
        <Link href="/" className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-6">
          ← Back to Game
        </Link>

        <h1 className="text-4xl md:text-5xl font-cinzel font-bold text-red-500 text-center mb-8">
          How to Play Werewolf
        </h1>

        <p className="text-gray-300 text-center text-lg mb-8">
          Master the art of deception and deduction in this classic social party game
        </p>

        {/* Game Overview */}
        <Card className="bg-gray-800/80 border-purple-500/50 mb-6">
          <CardHeader>
            <CardTitle className="text-2xl text-purple-300 flex items-center gap-2">
              🎮 Game Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300 space-y-4">
            <p>
              Werewolf is a social deduction game where players are secretly assigned roles: 
              <strong className="text-red-400"> Werewolves</strong> or 
              <strong className="text-green-400"> Villagers</strong>.
            </p>
            <p>
              The Werewolves know each other and must eliminate Villagers without being discovered. 
              The Villagers must work together to identify and vote out the Werewolves before it&apos;s too late.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="p-4 bg-red-900/30 rounded-lg border border-red-500/50">
                <h3 className="font-bold text-red-400 mb-2">🐺 Werewolf Goal</h3>
                <p className="text-sm">Eliminate enough Villagers until Werewolves equal or outnumber them.</p>
              </div>
              <div className="p-4 bg-green-900/30 rounded-lg border border-green-500/50">
                <h3 className="font-bold text-green-400 mb-2">🏘️ Villager Goal</h3>
                <p className="text-sm">Identify and vote out all Werewolves before they take over the village.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Game Phases */}
        <Card className="bg-gray-800/80 border-purple-500/50 mb-6">
          <CardHeader>
            <CardTitle className="text-2xl text-purple-300 flex items-center gap-2">
              🌙 Game Phases
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300 space-y-6">
            {/* Night Phase */}
            <div className="p-4 bg-indigo-900/30 rounded-lg border border-indigo-500/50">
              <h3 className="font-bold text-indigo-300 text-xl mb-3">🌙 Night Phase</h3>
              <ul className="space-y-2 text-sm">
                <li>• <strong>Werewolves</strong> secretly communicate and choose a Villager to eliminate</li>
                <li>• <strong>Doctor</strong> (if in game) chooses someone to protect from the Werewolf attack</li>
                <li>• <strong>Seer</strong> (if in game) investigates one player to learn their true role</li>
                <li>• <strong>Villagers</strong> must chat to avoid being struck by lightning (anti-AFK)</li>
                <li>• All players can activate their one-time shield for protection</li>
              </ul>
            </div>

            {/* Day Phase */}
            <div className="p-4 bg-amber-900/30 rounded-lg border border-amber-500/50">
              <h3 className="font-bold text-amber-300 text-xl mb-3">☀️ Day Phase</h3>
              <ul className="space-y-2 text-sm">
                <li>• The village awakens and discovers who was eliminated overnight</li>
                <li>• Players discuss verbally (via voice chat, video call, or in person)</li>
                <li>• Werewolves try to blend in and deflect suspicion</li>
                <li>• Villagers share information and try to identify the wolves</li>
                <li>• No in-game chat during the day - use your voice!</li>
              </ul>
            </div>

            {/* Voting Phase */}
            <div className="p-4 bg-red-900/30 rounded-lg border border-red-500/50">
              <h3 className="font-bold text-red-300 text-xl mb-3">⚖️ Voting Phase</h3>
              <ul className="space-y-2 text-sm">
                <li>• Each player votes to eliminate one suspect</li>
                <li>• Votes are secret until everyone has voted</li>
                <li>• The player with the most votes is eliminated</li>
                <li>• If there&apos;s a tie, no one is eliminated</li>
                <li>• After voting, the cycle returns to Night</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Roles */}
        <Card className="bg-gray-800/80 border-purple-500/50 mb-6">
          <CardHeader>
            <CardTitle className="text-2xl text-purple-300 flex items-center gap-2">
              🎭 Roles
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300">
            <div className="grid gap-4">
              {/* Evil Team */}
              <div className="p-4 bg-red-900/20 rounded-lg border border-red-500/30">
                <h3 className="font-bold text-red-400 text-lg mb-3">🔴 Evil Team</h3>
                <div className="space-y-3">
                  <div>
                    <span className="font-bold text-red-300">🐺 Werewolf</span>
                    <p className="text-sm text-gray-400">Hunts Villagers at night. Knows who other Werewolves are. Must blend in during the day.</p>
                  </div>
                  <div>
                    <span className="font-bold text-red-300">🦇 Minion</span>
                    <p className="text-sm text-gray-400">Knows who the Werewolves are but appears as a Villager. Wins with the Werewolves.</p>
                  </div>
                </div>
              </div>

              {/* Village Team */}
              <div className="p-4 bg-green-900/20 rounded-lg border border-green-500/30">
                <h3 className="font-bold text-green-400 text-lg mb-3">🟢 Village Team</h3>
                <div className="space-y-3">
                  <div>
                    <span className="font-bold text-green-300">👤 Villager</span>
                    <p className="text-sm text-gray-400">A regular village member with no special powers. Must use wit and observation to survive.</p>
                  </div>
                  <div>
                    <span className="font-bold text-green-300">💊 Doctor</span>
                    <p className="text-sm text-gray-400">Can protect one player each night from being killed. Cannot protect the same player twice in a row.</p>
                  </div>
                  <div>
                    <span className="font-bold text-green-300">🔮 Seer</span>
                    <p className="text-sm text-gray-400">Can investigate one player each night to learn if they are a Werewolf or not.</p>
                  </div>
                  <div>
                    <span className="font-bold text-green-300">🛡️ Bodyguard</span>
                    <p className="text-sm text-gray-400">Can protect one player each night. If the protected player is attacked, the Bodyguard may die instead.</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Special Features */}
        <Card className="bg-gray-800/80 border-purple-500/50 mb-6">
          <CardHeader>
            <CardTitle className="text-2xl text-purple-300 flex items-center gap-2">
              ⚡ Special Features
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300 space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-cyan-900/30 rounded-lg border border-cyan-500/50">
                <h3 className="font-bold text-cyan-300 mb-2">🛡️ One-Time Shield</h3>
                <p className="text-sm">Every player starts with a single-use shield. Activate it at night to protect yourself from any attack. Use it wisely - it&apos;s gone forever once used!</p>
              </div>
              <div className="p-4 bg-yellow-900/30 rounded-lg border border-yellow-500/50">
                <h3 className="font-bold text-yellow-300 mb-2">⚡ Lightning Strike</h3>
                <p className="text-sm">Stay active! Players who don&apos;t participate in the night chat may be struck by lightning and eliminated. Type at least 3 words every few seconds to stay safe.</p>
              </div>
              <div className="p-4 bg-purple-900/30 rounded-lg border border-purple-500/50">
                <h3 className="font-bold text-purple-300 mb-2">🔀 Message Scrambling</h3>
                <p className="text-sm">During night, Villager messages are scrambled. Only Werewolves can communicate clearly with each other.</p>
              </div>
              <div className="p-4 bg-blue-900/30 rounded-lg border border-blue-500/50">
                <h3 className="font-bold text-blue-300 mb-2">👻 Spirit Vision</h3>
                <p className="text-sm">If you&apos;re eliminated, you become a spirit. You can see who the Werewolves are and watch the game unfold!</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tips */}
        <Card className="bg-gray-800/80 border-purple-500/50 mb-6">
          <CardHeader>
            <CardTitle className="text-2xl text-purple-300 flex items-center gap-2">
              💡 Pro Tips
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300">
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span><strong>For Villagers:</strong> Pay attention to who defends whom. Werewolves often protect each other.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span><strong>For Werewolves:</strong> Don&apos;t always agree with each other. It&apos;s suspicious!</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span><strong>For Seers:</strong> Be careful about revealing your role too early. Werewolves will target you!</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span><strong>For Everyone:</strong> Watch voting patterns. They reveal alliances.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span><strong>Save your shield</strong> for when you suspect you&apos;re being targeted!</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center mt-8">
          <Link 
            href="/"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors"
          >
            🎮 Start Playing Now
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
