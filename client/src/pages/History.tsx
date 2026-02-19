import { Link } from 'wouter';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Footer from '@/components/Footer';

export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl">
        {/* Back to Home */}
        <Link href="/" className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-6">
          ← Back to Game
        </Link>

        <h1 className="text-4xl md:text-5xl font-cinzel font-bold text-red-500 text-center mb-4">
          The History of Werewolf
        </h1>
        <p className="text-gray-400 text-center mb-8 italic">
          From ancient folklore to modern party game phenomenon
        </p>

        {/* Ancient Origins */}
        <Card className="bg-gray-800/80 border-purple-500/50 mb-6">
          <CardHeader>
            <CardTitle className="text-2xl text-purple-300 flex items-center gap-2">
              🌕 Ancient Folklore Origins
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300 space-y-4">
            <p>
              The werewolf legend dates back thousands of years, appearing in nearly every culture around
              the world. The concept of humans transforming into wolves under the full moon has captivated
              human imagination since ancient times.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-indigo-900/30 rounded-lg border border-indigo-500/50">
                <h3 className="font-bold text-indigo-300 mb-2">🏛️ Ancient Greece</h3>
                <p className="text-sm">The legend of Lycaon, a king transformed into a wolf by Zeus as punishment,
                gives us the term "lycanthropy" (werewolf condition).</p>
              </div>
              <div className="p-4 bg-green-900/30 rounded-lg border border-green-500/50">
                <h3 className="font-bold text-green-300 mb-2">🌲 Norse Mythology</h3>
                <p className="text-sm">Viking berserkers were said to transform into wolves and bears during battle,
                becoming unstoppable warriors.</p>
              </div>
              <div className="p-4 bg-amber-900/30 rounded-lg border border-amber-500/50">
                <h3 className="font-bold text-amber-300 mb-2">⛪ Medieval Europe</h3>
                <p className="text-sm">Werewolf trials were common during the witch hunt era. Thousands were accused
                of being werewolves and faced execution.</p>
              </div>
              <div className="p-4 bg-red-900/30 rounded-lg border border-red-500/50">
                <h3 className="font-bold text-red-300 mb-2">🐺 Native American</h3>
                <p className="text-sm">Many tribes have skinwalker legends—shamans who could transform into animals,
                including wolves.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* The Game's Birth */}
        <Card className="bg-gray-800/80 border-purple-500/50 mb-6">
          <CardHeader>
            <CardTitle className="text-2xl text-purple-300 flex items-center gap-2">
              🎲 Birth of the Game
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300 space-y-4">
            <div className="border-l-4 border-purple-500 pl-4 mb-4">
              <p className="text-lg italic text-purple-200">
                "The game that launched a thousand accusations"
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="text-2xl font-bold text-purple-400 min-w-[80px]">1986</div>
                <div>
                  <h4 className="font-bold text-white">Mafia is Created</h4>
                  <p className="text-sm text-gray-400">
                    Dmitry Davidoff, a psychology student at Moscow State University, creates "Mafia"
                    as a study in group psychology. The game quickly spreads through universities.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-2xl font-bold text-purple-400 min-w-[80px]">1997</div>
                <div>
                  <h4 className="font-bold text-white">Princeton Popularizes It</h4>
                  <p className="text-sm text-gray-400">
                    Andrew Plotkin documents the rules online, spreading the game to the broader
                    internet community and introducing role variations.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-2xl font-bold text-purple-400 min-w-[80px]">2001</div>
                <div>
                  <h4 className="font-bold text-white">Werewolf Theme Emerges</h4>
                  <p className="text-sm text-gray-400">
                    Looney Labs releases "Are You a Werewolf?" card game, retheming Mafia with
                    a village and werewolves setting that becomes iconic.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-2xl font-bold text-purple-400 min-w-[80px]">2008</div>
                <div>
                  <h4 className="font-bold text-white">The Resistance &amp; Expansions</h4>
                  <p className="text-sm text-gray-400">
                    Don Eskridge creates The Resistance, and Ultimate Werewolf adds dozens of
                    new roles, cementing social deduction as a genre.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-2xl font-bold text-red-400 min-w-[80px]">2020s</div>
                <div>
                  <h4 className="font-bold text-white">Digital Revolution</h4>
                  <p className="text-sm text-gray-400">
                    Online versions explode during the pandemic. Games like Among Us bring social
                    deduction to mainstream gaming, and web versions make Werewolf accessible worldwide.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Why It Endures */}
        <Card className="bg-gray-800/80 border-purple-500/50 mb-6">
          <CardHeader>
            <CardTitle className="text-2xl text-purple-300 flex items-center gap-2">
              💫 Why Werewolf Endures
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300 space-y-4">
            <p>
              Unlike most games that rely on luck or pure strategy, Werewolf taps into fundamental
              aspects of human psychology:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-xl">🧠</span>
                <div>
                  <strong className="text-white">Psychology</strong>
                  <p className="text-sm text-gray-400">Reading body language, detecting lies, and understanding group dynamics</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl">🎭</span>
                <div>
                  <strong className="text-white">Performance</strong>
                  <p className="text-sm text-gray-400">Acting innocent when guilty, or convincingly accusing when you're sure</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl">🤝</span>
                <div>
                  <strong className="text-white">Social Bonds</strong>
                  <p className="text-sm text-gray-400">The shared experience of deception and revelation creates lasting memories</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl">📖</span>
                <div>
                  <strong className="text-white">Emergent Storytelling</strong>
                  <p className="text-sm text-gray-400">Every game creates a unique narrative with heroes, villains, and plot twists</p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Famous Moments */}
        <Card className="bg-gray-800/80 border-purple-500/50 mb-6">
          <CardHeader>
            <CardTitle className="text-2xl text-purple-300 flex items-center gap-2">
              🏆 The Game in Pop Culture
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300 space-y-4">
            <p>
              Werewolf has become a staple of gatherings worldwide:
            </p>
            <ul className="space-y-2 text-sm">
              <li>• <strong>Gaming Conventions:</strong> Massive Werewolf games with 50+ players are annual traditions at Gen Con and PAX</li>
              <li>• <strong>Silicon Valley:</strong> Tech companies use Werewolf for team building and hiring evaluations</li>
              <li>• <strong>YouTube &amp; Twitch:</strong> Streamers play Werewolf games with millions of viewers watching the drama unfold</li>
              <li>• <strong>Among Us:</strong> The 2020 phenomenon that brought social deduction to 500 million players worldwide</li>
              <li>• <strong>TV Shows:</strong> Reality shows like The Mole and The Traitors are directly inspired by Werewolf mechanics</li>
            </ul>
          </CardContent>
        </Card>

        {/* Quote */}
        <div className="bg-gradient-to-r from-red-900/30 to-purple-900/30 p-6 rounded-lg border border-red-500/30 text-center mb-6">
          <p className="text-xl italic text-gray-200 mb-2">
            "The best games reveal who people really are when they think no one is watching."
          </p>
          <p className="text-gray-400 text-sm">— The Psychology of Social Deduction Games</p>
        </div>

        {/* CTA */}
        <div className="text-center mt-8 space-y-4">
          <Link
            href="/"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors"
          >
            🎮 Experience the Legend
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
