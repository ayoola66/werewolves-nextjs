import { Link } from 'wouter';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/PageLayout';

export default function HowToPlayPage() {
  return (
    <PageLayout
      title="How to Play"
      subtitle="Master the art of deception and deduction"
    >
      {/* Game Overview */}
      <Card className="panel-stone border-iron-gray/60 mb-6">
        <CardHeader>
          <CardTitle className="font-cinzel text-xl text-ember">Game Overview</CardTitle>
        </CardHeader>
        <CardContent className="text-parchment/70 space-y-4">
          <p>
            Werewolf is a social deduction game where players are secretly assigned roles:{' '}
            <strong className="text-blood">Werewolves</strong> or{' '}
            <strong className="text-parchment">Villagers</strong>.
          </p>
          <p>
            The Werewolves know each other and must eliminate Villagers without being discovered.
            The Villagers must work together to identify and vote out the Werewolves before it's too late.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mt-2">
            <div className="p-4 bg-blood/10 rounded border border-blood/30">
              <h3 className="font-cinzel text-xs uppercase tracking-wider text-blood mb-2">Werewolf Goal</h3>
              <p className="text-sm text-parchment/60">Eliminate enough Villagers until Werewolves equal or outnumber them.</p>
            </div>
            <div className="p-4 bg-iron-gray/20 rounded border border-parchment/10">
              <h3 className="font-cinzel text-xs uppercase tracking-wider text-parchment mb-2">Villager Goal</h3>
              <p className="text-sm text-parchment/60">Identify and vote out all Werewolves before they take over the village.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Game Phases */}
      <Card className="panel-stone border-iron-gray/60 mb-6">
        <CardHeader>
          <CardTitle className="font-cinzel text-xl text-ember">Game Phases</CardTitle>
        </CardHeader>
        <CardContent className="text-parchment/70 space-y-5">
          <div className="p-4 bg-[#0a0f1e]/40 rounded border border-[#1e2a4a]/60">
            <h3 className="font-cinzel text-sm uppercase tracking-wider text-[#8ba7d4] mb-3">Night Phase</h3>
            <ul className="space-y-1.5 text-sm text-parchment/60">
              <li className="flex gap-2"><span className="text-ember flex-shrink-0">—</span><span><strong className="text-parchment/80">Werewolves</strong> secretly communicate and choose a Villager to eliminate</span></li>
              <li className="flex gap-2"><span className="text-ember flex-shrink-0">—</span><span><strong className="text-parchment/80">Doctor</strong> (if in game) chooses someone to protect from the Werewolf attack</span></li>
              <li className="flex gap-2"><span className="text-ember flex-shrink-0">—</span><span><strong className="text-parchment/80">Seer</strong> (if in game) investigates one player to learn their true role</span></li>
              <li className="flex gap-2"><span className="text-ember flex-shrink-0">—</span><span>Villagers must chat to avoid being struck by lightning (anti-AFK)</span></li>
              <li className="flex gap-2"><span className="text-ember flex-shrink-0">—</span><span>All players can activate their one-time shield for protection</span></li>
            </ul>
          </div>

          <div className="p-4 bg-ember/5 rounded border border-ember/20">
            <h3 className="font-cinzel text-sm uppercase tracking-wider text-ember mb-3">Day Phase</h3>
            <ul className="space-y-1.5 text-sm text-parchment/60">
              <li className="flex gap-2"><span className="text-ember flex-shrink-0">—</span><span>The village awakens and discovers who was eliminated overnight</span></li>
              <li className="flex gap-2"><span className="text-ember flex-shrink-0">—</span><span>Players discuss verbally (via voice chat, video call, or in person)</span></li>
              <li className="flex gap-2"><span className="text-ember flex-shrink-0">—</span><span>Werewolves try to blend in and deflect suspicion</span></li>
              <li className="flex gap-2"><span className="text-ember flex-shrink-0">—</span><span>Villagers share information and try to identify the wolves</span></li>
              <li className="flex gap-2"><span className="text-ember flex-shrink-0">—</span><span>No in-game chat during the day — use your voice!</span></li>
            </ul>
          </div>

          <div className="p-4 bg-blood/10 rounded border border-blood/25">
            <h3 className="font-cinzel text-sm uppercase tracking-wider text-blood mb-3">Voting Phase</h3>
            <ul className="space-y-1.5 text-sm text-parchment/60">
              <li className="flex gap-2"><span className="text-ember flex-shrink-0">—</span><span>Each player votes to eliminate one suspect</span></li>
              <li className="flex gap-2"><span className="text-ember flex-shrink-0">—</span><span>Votes are secret until everyone has voted</span></li>
              <li className="flex gap-2"><span className="text-ember flex-shrink-0">—</span><span>The player with the most votes is eliminated</span></li>
              <li className="flex gap-2"><span className="text-ember flex-shrink-0">—</span><span>If there's a tie, no one is eliminated</span></li>
              <li className="flex gap-2"><span className="text-ember flex-shrink-0">—</span><span>After voting, the cycle returns to Night</span></li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Roles */}
      <Card className="panel-stone border-iron-gray/60 mb-6">
        <CardHeader>
          <CardTitle className="font-cinzel text-xl text-ember">Roles</CardTitle>
        </CardHeader>
        <CardContent className="text-parchment/70 space-y-4">
          <div className="p-4 bg-blood/8 rounded border border-blood/25">
            <h3 className="font-cinzel text-xs uppercase tracking-wider text-blood mb-3">Evil Team</h3>
            <div className="space-y-3">
              <div>
                <span className="font-bold text-parchment text-sm">Werewolf</span>
                <p className="text-xs text-parchment/50 mt-0.5">Hunts Villagers at night. Knows who other Werewolves are. Must blend in during the day.</p>
              </div>
              <div className="border-t border-iron-gray/30 pt-3">
                <span className="font-bold text-parchment text-sm">Minion</span>
                <p className="text-xs text-parchment/50 mt-0.5">Knows who the Werewolves are but appears as a Villager. Wins with the Werewolves.</p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-iron-gray/15 rounded border border-parchment/10">
            <h3 className="font-cinzel text-xs uppercase tracking-wider text-parchment mb-3">Village Team</h3>
            <div className="space-y-3">
              {[
                { role: 'Villager', desc: 'A regular village member with no special powers. Must use wit and observation to survive.' },
                { role: 'Doctor', desc: 'Can protect one player each night from being killed. Cannot protect the same player twice in a row.' },
                { role: 'Seer', desc: 'Can investigate one player each night to learn if they are a Werewolf or not.' },
                { role: 'Bodyguard', desc: 'Can protect one player each night. If the protected player is attacked, the Bodyguard may die instead.' },
              ].map((item, i) => (
                <div key={item.role} className={i > 0 ? 'border-t border-iron-gray/30 pt-3' : ''}>
                  <span className="font-bold text-parchment text-sm">{item.role}</span>
                  <p className="text-xs text-parchment/50 mt-0.5">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Special Features */}
      <Card className="panel-stone border-iron-gray/60 mb-6">
        <CardHeader>
          <CardTitle className="font-cinzel text-xl text-ember">Special Features</CardTitle>
        </CardHeader>
        <CardContent className="text-parchment/70">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-ember/5 rounded border border-ember/25">
              <h3 className="font-cinzel text-xs uppercase tracking-wider text-ember mb-2">One-Time Shield</h3>
              <p className="text-sm text-parchment/60">Every player starts with a single-use shield. Activate it at night to protect yourself from any attack. Use it wisely — it's gone forever once used!</p>
            </div>
            <div className="p-4 bg-iron-gray/20 rounded border border-parchment/10">
              <h3 className="font-cinzel text-xs uppercase tracking-wider text-parchment mb-2">Lightning Strike</h3>
              <p className="text-sm text-parchment/60">Stay active! Players who don't participate in the night chat may be struck by lightning and eliminated. Type at least 3 words every few seconds to stay safe.</p>
            </div>
            <div className="p-4 bg-iron-gray/20 rounded border border-parchment/10">
              <h3 className="font-cinzel text-xs uppercase tracking-wider text-parchment mb-2">Message Scrambling</h3>
              <p className="text-sm text-parchment/60">During night, Villager messages are scrambled. Only Werewolves can communicate clearly with each other.</p>
            </div>
            <div className="p-4 bg-ember/5 rounded border border-ember/25">
              <h3 className="font-cinzel text-xs uppercase tracking-wider text-ember mb-2">Spirit Vision</h3>
              <p className="text-sm text-parchment/60">If you're eliminated, you become a spirit. You can see who the Werewolves are and watch the game unfold!</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tips */}
      <Card className="panel-stone border-iron-gray/60 mb-8">
        <CardHeader>
          <CardTitle className="font-cinzel text-xl text-ember">Pro Tips</CardTitle>
        </CardHeader>
        <CardContent className="text-parchment/70">
          <ul className="space-y-3">
            {[
              { tip: 'For Villagers', detail: 'Pay attention to who defends whom. Werewolves often protect each other.' },
              { tip: 'For Werewolves', detail: "Don't always agree with each other. It's suspicious!" },
              { tip: 'For Seers', detail: 'Be careful about revealing your role too early. Werewolves will target you!' },
              { tip: 'For Everyone', detail: 'Watch voting patterns. They reveal alliances.' },
              { tip: 'Save your shield', detail: 'For when you suspect you\'re being targeted!' },
            ].map((item) => (
              <li key={item.tip} className="flex items-start gap-3 pb-3 border-b border-iron-gray/25 last:border-0 last:pb-0">
                <div className="w-1.5 h-1.5 rounded-full bg-ember mt-2 flex-shrink-0" />
                <span className="text-sm">
                  <strong className="text-parchment">{item.tip}:</strong>{' '}
                  <span className="text-parchment/60">{item.detail}</span>
                </span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <div className="text-center pb-8">
        <Link href="/">
          <Button className="btn-ember py-4 px-10 text-lg rounded font-bold">
            Enter the Village
          </Button>
        </Link>
      </div>
    </PageLayout>
  );
}
