import { Link } from 'wouter';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl">
        {/* Back to Home */}
        <Link href="/" className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-6">
          ← Back to Game
        </Link>

        <h1 className="text-4xl md:text-5xl font-cinzel font-bold text-red-500 text-center mb-8">
          About Werewolf
        </h1>

        {/* What is Werewolf */}
        <Card className="bg-gray-800/80 border-purple-500/50 mb-6">
          <CardHeader>
            <CardTitle className="text-2xl text-purple-300 flex items-center gap-2">
              🐺 What is Werewolf?
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300 space-y-4">
            <p>
              Werewolf is one of the world's most popular social deduction party games. It's a game of{' '}
              <strong className="text-red-400">deception</strong>,{' '}
              <strong className="text-yellow-400">strategy</strong>, and{' '}
              <strong className="text-green-400">survival</strong> where players take on secret roles
              and must work together—or against each other—to achieve their objectives.
            </p>
            <p>
              The game creates unforgettable moments of tension, accusation, dramatic reveals, and
              hilarious betrayals. Whether you're the cunning Werewolf trying to blend in or the
              suspicious Villager trying to uncover the truth, every game is a unique story.
            </p>
          </CardContent>
        </Card>

        {/* Why This Version */}
        <Card className="bg-gray-800/80 border-purple-500/50 mb-6">
          <CardHeader>
            <CardTitle className="text-2xl text-purple-300 flex items-center gap-2">
              🎮 Why Play Our Online Version?
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300 space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-purple-900/30 rounded-lg border border-purple-500/50">
                <h3 className="font-bold text-purple-300 mb-2">🌐 Play Anywhere</h3>
                <p className="text-sm">No cards, no moderator needed. Play with friends across the world using just a web browser.</p>
              </div>
              <div className="p-4 bg-blue-900/30 rounded-lg border border-blue-500/50">
                <h3 className="font-bold text-blue-300 mb-2">⚡ Real-Time Action</h3>
                <p className="text-sm">Instant updates, live voting, and real-time chat. The tension never breaks.</p>
              </div>
              <div className="p-4 bg-green-900/30 rounded-lg border border-green-500/50">
                <h3 className="font-bold text-green-300 mb-2">🎭 Multiple Roles</h3>
                <p className="text-sm">Werewolf, Doctor, Seer, Bodyguard, Minion, and more. Each role adds new strategic possibilities.</p>
              </div>
              <div className="p-4 bg-amber-900/30 rounded-lg border border-amber-500/50">
                <h3 className="font-bold text-amber-300 mb-2">🛡️ Unique Features</h3>
                <p className="text-sm">One-time shields, message scrambling, lightning strikes for AFK players, and spirit vision for the eliminated.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Perfect For */}
        <Card className="bg-gray-800/80 border-purple-500/50 mb-6">
          <CardHeader>
            <CardTitle className="text-2xl text-purple-300 flex items-center gap-2">
              👥 Perfect For
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-2xl">🎉</span>
                <div>
                  <strong className="text-white">Parties &amp; Gatherings</strong>
                  <p className="text-sm text-gray-400">Break the ice and get everyone talking (and accusing!)</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">👨‍👩‍👧‍👦</span>
                <div>
                  <strong className="text-white">Family Game Nights</strong>
                  <p className="text-sm text-gray-400">Fun for ages 10 and up. Discover who in your family is the best liar!</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">💼</span>
                <div>
                  <strong className="text-white">Team Building</strong>
                  <p className="text-sm text-gray-400">Build communication skills and learn about your colleagues in a fun setting.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">🎥</span>
                <div>
                  <strong className="text-white">Online Hangouts</strong>
                  <p className="text-sm text-gray-400">Perfect for Discord calls, Zoom meetings, or virtual parties.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">🏫</span>
                <div>
                  <strong className="text-white">Classrooms &amp; Youth Groups</strong>
                  <p className="text-sm text-gray-400">Develops critical thinking, observation, and social skills.</p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* How Many Players */}
        <Card className="bg-gray-800/80 border-purple-500/50 mb-6">
          <CardHeader>
            <CardTitle className="text-2xl text-purple-300 flex items-center gap-2">
              🔢 Player Count
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300 space-y-4">
            <p>
              Werewolf works best with <strong className="text-yellow-400">5 to 15 players</strong>,
              though our online version can accommodate various group sizes:
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-gray-700/50 rounded-lg">
                <div className="text-2xl font-bold text-green-400">4-6</div>
                <div className="text-sm text-gray-400">Small &amp; Quick</div>
              </div>
              <div className="p-4 bg-purple-700/50 rounded-lg border-2 border-purple-500">
                <div className="text-2xl font-bold text-purple-300">7-10</div>
                <div className="text-sm text-gray-300">Ideal</div>
              </div>
              <div className="p-4 bg-gray-700/50 rounded-lg">
                <div className="text-2xl font-bold text-amber-400">11-15</div>
                <div className="text-sm text-gray-400">Epic Chaos</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Free to Play */}
        <Card className="bg-gradient-to-r from-green-900/50 to-emerald-900/50 border-green-500/50 mb-6">
          <CardContent className="p-6 text-center">
            <div className="text-4xl mb-3">🆓</div>
            <h2 className="text-2xl font-bold text-green-300 mb-2">Completely Free to Play</h2>
            <p className="text-gray-300">
              No downloads. No registration required. No hidden costs.
              Just create a game, share the code, and start playing!
            </p>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center mt-8 space-y-4">
          <Link
            href="/"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors"
          >
            🎮 Start Playing Now
          </Link>
          <div>
            <Link href="/how-to-play" className="text-purple-400 hover:text-purple-300">
              Learn how to play →
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
