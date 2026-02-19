import { Link } from 'wouter';
import { Card, CardContent } from '@/components/ui/card';
import Footer from '@/components/Footer';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How many players do I need to play?",
    answer: "Werewolf works best with 5-15 players, though you can play with as few as 4. The ideal group size is 7-10 players, which allows for enough roles and discussion without games becoming too long."
  },
  {
    question: "Is the game free to play?",
    answer: "Yes! Werewolf is completely free to play. No downloads, no registration required, and no hidden costs. Simply create a game, share the code with your friends, and start playing."
  },
  {
    question: "Do I need to download anything?",
    answer: "No downloads required. Werewolf runs entirely in your web browser. It works on desktop computers, laptops, tablets, and mobile phones."
  },
  {
    question: "How do I start a game?",
    answer: "Click 'Create New Game' on the homepage. You'll get a unique game code that you can share with your friends. Once everyone has joined using the code, the host can start the game."
  },
  {
    question: "What roles are available in the game?",
    answer: "The game includes: Werewolf, Villager, Doctor, Seer, Bodyguard, and Minion. The host can customise which special roles are included when setting up the game."
  },
  {
    question: "How does the day/night cycle work?",
    answer: "The game alternates between Night and Day phases. At Night, Werewolves choose a victim and special roles use their abilities. During Day, players discuss (verbally, not in-game) and vote to eliminate a suspect."
  },
  {
    question: "What is the one-time shield?",
    answer: "Every player starts with a single-use shield. You can activate it during any Night phase to protect yourself from all attacks. Once used, it's gone for the rest of the game - use it wisely!"
  },
  {
    question: "What is the lightning strike feature?",
    answer: "To keep games moving and prevent AFK (away from keyboard) players, those who don't participate in the night chat may be struck by lightning and eliminated. Stay active by typing at least 3 words periodically during Night."
  },
  {
    question: "Why are my messages scrambled?",
    answer: "During Night, Villager messages are scrambled so Werewolves cannot understand their coordination. Only Werewolves can communicate clearly with each other at Night."
  },
  {
    question: "Can I play with friends who are far away?",
    answer: "Absolutely! Werewolf is perfect for remote play. Share the game code with friends anywhere in the world. Use Discord, Zoom, or any voice/video chat for the verbal discussion during Day phase."
  },
  {
    question: "What happens when I'm eliminated?",
    answer: "If you're eliminated, you become a spirit! You can continue watching the game unfold and see who the Werewolves really are. You cannot participate in voting or actions, but you can enjoy the drama!"
  },
  {
    question: "How do Werewolves win?",
    answer: "Werewolves win when they equal or outnumber the remaining Villagers. This means if there are 2 Werewolves and 2 Villagers left, the Werewolves win."
  },
  {
    question: "How do Villagers win?",
    answer: "Villagers win by identifying and eliminating all Werewolves before being overrun. Work together, share information, and vote wisely!"
  },
  {
    question: "What happens if there's a tie in voting?",
    answer: "If the vote results in a tie, no one is eliminated and the game proceeds to the next Night phase."
  },
  {
    question: "Can the Doctor save themselves?",
    answer: "Yes, the Doctor can choose to protect themselves on any given night. However, they cannot protect the same player (including themselves) two nights in a row."
  },
  {
    question: "Is there a time limit for each phase?",
    answer: "Yes, each phase has a timer. Night is 2 minutes, Day discussion is 3 minutes, and Voting is 2 minutes. Games keep moving to maintain excitement!"
  },
  {
    question: "Can I play on my phone?",
    answer: "Yes! The game is fully responsive and works on mobile devices. For the best experience, we recommend using a device with a larger screen for easier reading."
  },
  {
    question: "Is voice chat required?",
    answer: "Voice chat is highly recommended for the Day discussion phase as it creates the best social deduction experience. However, you can adapt the game to text-only if needed."
  },
  {
    question: "How do I report bugs or issues?",
    answer: "Please visit our Contact page to report any bugs or issues you encounter. We actively work to improve the game based on player feedback."
  },
  {
    question: "Can I suggest new features?",
    answer: "We love hearing from players! Visit our Contact page to submit feature suggestions. Many of our best features came from player ideas."
  }
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl">
        {/* Back to Home */}
        <Link href="/" className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-6">
          ← Back to Game
        </Link>

        <h1 className="text-4xl md:text-5xl font-cinzel font-bold text-red-500 text-center mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-400 text-center mb-8">
          Everything you need to know about playing Werewolf online
        </p>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="bg-gray-800/80 border-purple-500/30 hover:border-purple-500/60 transition-colors">
              <CardContent className="p-4 md:p-6">
                <h3 className="text-lg font-bold text-purple-300 mb-2 flex items-start gap-2">
                  <span className="text-purple-500">Q:</span>
                  {faq.question}
                </h3>
                <p className="text-gray-300 pl-6">
                  <span className="text-green-500 font-bold">A:</span>{' '}
                  {faq.answer}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Still have questions */}
        <Card className="bg-gradient-to-r from-purple-900/50 to-indigo-900/50 border-purple-500/50 mt-8">
          <CardContent className="p-6 text-center">
            <div className="text-4xl mb-3">❓</div>
            <h2 className="text-2xl font-bold text-purple-300 mb-2">Still Have Questions?</h2>
            <p className="text-gray-300 mb-4">
              Can't find what you're looking for? We're here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-lg transition-colors"
              >
                📧 Contact Us
              </Link>
              <Link
                href="/how-to-play"
                className="inline-block bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-6 rounded-lg transition-colors"
              >
                📖 How to Play
              </Link>
            </div>
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
