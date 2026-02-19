import { Link } from 'wouter';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/PageLayout';

export default function AboutPage() {
  return (
    <PageLayout
      title="About Werewolf"
      subtitle="A tale of deception as old as the village itself"
    >
      <Card className="panel-stone border-iron-gray/60 mb-6">
        <CardHeader>
          <CardTitle className="font-cinzel text-xl text-ember">The Legend</CardTitle>
        </CardHeader>
        <CardContent className="text-parchment/70 space-y-4">
          <p>
            Werewolf is one of the world's most popular social deduction party games — a game of{' '}
            <strong className="text-blood">deception</strong>,{' '}
            <strong className="text-ember">strategy</strong>, and{' '}
            <strong className="text-parchment">survival</strong> where players take on secret roles
            and must work together, or against each other, to achieve their objectives.
          </p>
          <p>
            The game creates unforgettable moments of tension, accusation, dramatic reveals, and
            hilarious betrayals. Whether you're the cunning Werewolf trying to blend in or the
            suspicious Villager trying to uncover the truth, every game tells a unique story.
          </p>
        </CardContent>
      </Card>

      <Card className="panel-stone border-iron-gray/60 mb-6">
        <CardHeader>
          <CardTitle className="font-cinzel text-xl text-ember">Why Play Our Version?</CardTitle>
        </CardHeader>
        <CardContent className="text-parchment/70">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-ember/5 rounded border border-ember/25">
              <h3 className="font-cinzel text-xs uppercase tracking-wider text-ember mb-2">Play Anywhere</h3>
              <p className="text-sm text-parchment/60">No cards, no moderator needed. Play with friends across the world using just a web browser.</p>
            </div>
            <div className="p-4 bg-iron-gray/20 rounded border border-parchment/10">
              <h3 className="font-cinzel text-xs uppercase tracking-wider text-parchment mb-2">Real-Time Action</h3>
              <p className="text-sm text-parchment/60">Instant updates, live voting, and real-time chat. The tension never breaks.</p>
            </div>
            <div className="p-4 bg-iron-gray/20 rounded border border-parchment/10">
              <h3 className="font-cinzel text-xs uppercase tracking-wider text-parchment mb-2">Multiple Roles</h3>
              <p className="text-sm text-parchment/60">Werewolf, Doctor, Seer, Bodyguard, Minion, and more. Each role adds new strategic possibilities.</p>
            </div>
            <div className="p-4 bg-ember/5 rounded border border-ember/25">
              <h3 className="font-cinzel text-xs uppercase tracking-wider text-ember mb-2">Unique Features</h3>
              <p className="text-sm text-parchment/60">One-time shields, message scrambling, lightning strikes for AFK players, and spirit vision for the eliminated.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="panel-stone border-iron-gray/60 mb-6">
        <CardHeader>
          <CardTitle className="font-cinzel text-xl text-ember">Perfect For</CardTitle>
        </CardHeader>
        <CardContent className="text-parchment/70">
          <ul className="space-y-4">
            {[
              { title: 'Parties & Gatherings', desc: 'Break the ice and get everyone talking (and accusing!)' },
              { title: 'Family Game Nights', desc: 'Fun for ages 10 and up. Discover who in your family is the best liar!' },
              { title: 'Team Building', desc: 'Build communication skills and learn about your colleagues in a fun setting.' },
              { title: 'Online Hangouts', desc: 'Perfect for Discord calls, Zoom meetings, or virtual parties.' },
              { title: 'Classrooms & Youth Groups', desc: 'Develops critical thinking, observation, and social skills.' },
            ].map((item) => (
              <li key={item.title} className="flex items-start gap-4 pb-4 border-b border-iron-gray/30 last:border-0 last:pb-0">
                <div className="w-1.5 h-1.5 rounded-full bg-ember mt-2 flex-shrink-0" />
                <div>
                  <strong className="text-parchment">{item.title}</strong>
                  <p className="text-sm text-parchment/50 mt-0.5">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card className="panel-stone border-iron-gray/60 mb-6">
        <CardHeader>
          <CardTitle className="font-cinzel text-xl text-ember">Player Count</CardTitle>
        </CardHeader>
        <CardContent className="text-parchment/70 space-y-4">
          <p>
            Werewolf works best with <strong className="text-ember">5 to 15 players</strong>,
            though our online version can accommodate various group sizes:
          </p>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="p-4 bg-iron-gray/20 rounded border border-iron-gray/40">
              <div className="font-cinzel text-2xl font-bold text-parchment">4–6</div>
              <div className="text-xs text-parchment/50 mt-1 uppercase tracking-wider">Small & Quick</div>
            </div>
            <div className="p-4 bg-ember/10 rounded border-2 border-ember/50">
              <div className="font-cinzel text-2xl font-bold text-ember">7–10</div>
              <div className="text-xs text-parchment/70 mt-1 uppercase tracking-wider">Ideal</div>
            </div>
            <div className="p-4 bg-iron-gray/20 rounded border border-iron-gray/40">
              <div className="font-cinzel text-2xl font-bold text-parchment">11–15</div>
              <div className="text-xs text-parchment/50 mt-1 uppercase tracking-wider">Epic Chaos</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="panel-stone border-ember/30 mb-8">
        <CardContent className="p-6 text-center">
          <div className="divider-medieval w-32 mx-auto mb-5" />
          <h2 className="font-cinzel text-2xl text-ember mb-2">Completely Free</h2>
          <p className="text-parchment/60">
            No downloads. No registration required. No hidden costs.
            Just create a game, share the code, and start playing.
          </p>
          <div className="divider-medieval w-32 mx-auto mt-5" />
        </CardContent>
      </Card>

      <div className="text-center space-y-4 pb-8">
        <Link href="/">
          <Button className="btn-ember py-4 px-10 text-lg rounded font-bold">
            Enter the Village
          </Button>
        </Link>
        <div>
          <Link href="/how-to-play" className="text-ember/60 hover:text-ember transition-colors text-sm uppercase tracking-widest">
            Learn how to play →
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}
