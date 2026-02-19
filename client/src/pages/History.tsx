import { Link } from 'wouter';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/PageLayout';

export default function HistoryPage() {
  return (
    <PageLayout
      title="The History of Werewolf"
      subtitle="From ancient folklore to modern party game phenomenon"
    >
      {/* Ancient Origins */}
      <Card className="panel-stone border-iron-gray/60 mb-6">
        <CardHeader>
          <CardTitle className="font-cinzel text-xl text-ember">Ancient Folklore Origins</CardTitle>
        </CardHeader>
        <CardContent className="text-parchment/70 space-y-4">
          <p>
            The werewolf legend dates back thousands of years, appearing in nearly every culture
            around the world. The concept of humans transforming into wolves under the full moon
            has captivated human imagination since ancient times.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mt-2">
            {[
              { title: 'Ancient Greece', body: 'The legend of Lycaon, a king transformed into a wolf by Zeus as punishment, gives us the term "lycanthropy" (werewolf condition).' },
              { title: 'Norse Mythology', body: 'Viking berserkers were said to transform into wolves and bears during battle, becoming unstoppable warriors.' },
              { title: 'Medieval Europe', body: 'Werewolf trials were common during the witch hunt era. Thousands were accused of being werewolves and faced execution.' },
              { title: 'Native American', body: 'Many tribes have skinwalker legends — shamans who could transform into animals, including wolves.' },
            ].map((item) => (
              <div key={item.title} className="p-4 bg-iron-gray/20 rounded border border-parchment/10">
                <h3 className="font-cinzel text-xs uppercase tracking-wider text-parchment mb-2">{item.title}</h3>
                <p className="text-sm text-parchment/60">{item.body}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* The Game's Birth */}
      <Card className="panel-stone border-iron-gray/60 mb-6">
        <CardHeader>
          <CardTitle className="font-cinzel text-xl text-ember">Birth of the Game</CardTitle>
        </CardHeader>
        <CardContent className="text-parchment/70 space-y-4">
          <div className="border-l-2 border-ember/50 pl-4 mb-6">
            <p className="text-base italic text-parchment/60">
              "The game that launched a thousand accusations"
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                year: '1986',
                title: 'Mafia is Created',
                body: 'Dmitry Davidoff, a psychology student at Moscow State University, creates "Mafia" as a study in group psychology. The game quickly spreads through universities.',
                highlight: false,
              },
              {
                year: '1997',
                title: 'Princeton Popularizes It',
                body: 'Andrew Plotkin documents the rules online, spreading the game to the broader internet community and introducing role variations.',
                highlight: false,
              },
              {
                year: '2001',
                title: 'Werewolf Theme Emerges',
                body: 'Looney Labs releases "Are You a Werewolf?" card game, retheming Mafia with a village and werewolves setting that becomes iconic.',
                highlight: false,
              },
              {
                year: '2008',
                title: 'The Resistance & Expansions',
                body: 'Don Eskridge creates The Resistance, and Ultimate Werewolf adds dozens of new roles, cementing social deduction as a genre.',
                highlight: false,
              },
              {
                year: '2020s',
                title: 'Digital Revolution',
                body: 'Online versions explode during the pandemic. Games like Among Us bring social deduction to mainstream gaming, and web versions make Werewolf accessible worldwide.',
                highlight: true,
              },
            ].map((item) => (
              <div key={item.year} className="flex gap-5">
                <div className={`font-cinzel text-xl font-bold min-w-[64px] flex-shrink-0 ${item.highlight ? 'text-blood' : 'text-ember/70'}`}>
                  {item.year}
                </div>
                <div className="pb-5 border-b border-iron-gray/30 flex-1 last:border-0">
                  <h4 className="font-bold text-parchment text-sm mb-1">{item.title}</h4>
                  <p className="text-sm text-parchment/50">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Why It Endures */}
      <Card className="panel-stone border-iron-gray/60 mb-6">
        <CardHeader>
          <CardTitle className="font-cinzel text-xl text-ember">Why Werewolf Endures</CardTitle>
        </CardHeader>
        <CardContent className="text-parchment/70 space-y-4">
          <p>
            Unlike most games that rely on luck or pure strategy, Werewolf taps into fundamental
            aspects of human psychology:
          </p>
          <ul className="space-y-4">
            {[
              { title: 'Psychology', desc: 'Reading body language, detecting lies, and understanding group dynamics' },
              { title: 'Performance', desc: 'Acting innocent when guilty, or convincingly accusing when you\'re sure' },
              { title: 'Social Bonds', desc: 'The shared experience of deception and revelation creates lasting memories' },
              { title: 'Emergent Storytelling', desc: 'Every game creates a unique narrative with heroes, villains, and plot twists' },
            ].map((item) => (
              <li key={item.title} className="flex items-start gap-4 pb-4 border-b border-iron-gray/25 last:border-0 last:pb-0">
                <div className="w-1.5 h-1.5 rounded-full bg-ember mt-2 flex-shrink-0" />
                <div>
                  <strong className="text-parchment text-sm">{item.title}</strong>
                  <p className="text-xs text-parchment/50 mt-0.5">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Pop Culture */}
      <Card className="panel-stone border-iron-gray/60 mb-6">
        <CardHeader>
          <CardTitle className="font-cinzel text-xl text-ember">The Game in Pop Culture</CardTitle>
        </CardHeader>
        <CardContent className="text-parchment/70 space-y-3">
          <p>Werewolf has become a staple of gatherings worldwide:</p>
          <ul className="space-y-2.5">
            {[
              { label: 'Gaming Conventions', detail: 'Massive Werewolf games with 50+ players are annual traditions at Gen Con and PAX' },
              { label: 'Silicon Valley', detail: 'Tech companies use Werewolf for team building and hiring evaluations' },
              { label: 'YouTube & Twitch', detail: 'Streamers play Werewolf games with millions of viewers watching the drama unfold' },
              { label: 'Among Us', detail: 'The 2020 phenomenon that brought social deduction to 500 million players worldwide' },
              { label: 'TV Shows', detail: 'Reality shows like The Mole and The Traitors are directly inspired by Werewolf mechanics' },
            ].map((item) => (
              <li key={item.label} className="flex items-start gap-3 text-sm">
                <span className="text-ember flex-shrink-0 font-cinzel text-xs mt-0.5">—</span>
                <span>
                  <strong className="text-parchment/80">{item.label}:</strong>{' '}
                  <span className="text-parchment/50">{item.detail}</span>
                </span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Quote */}
      <div className="panel-stone border border-ember/20 p-6 text-center mb-8">
        <div className="divider-medieval w-32 mx-auto mb-5" />
        <p className="text-lg italic text-parchment/70 mb-2">
          "The best games reveal who people really are when they think no one is watching."
        </p>
        <p className="text-parchment/40 text-xs uppercase tracking-widest">
          The Psychology of Social Deduction Games
        </p>
        <div className="divider-medieval w-32 mx-auto mt-5" />
      </div>

      <div className="text-center space-y-4 pb-8">
        <Link href="/">
          <Button className="btn-ember py-4 px-10 text-lg rounded font-bold">
            Experience the Legend
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
