import { Link } from 'wouter';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-20 bg-deep-slate/95 border-t border-iron-gray py-8 mt-auto">
      <div className="container mx-auto px-4">
        {/* Navigation Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {/* Game */}
          <div>
            <h3 className="font-bold text-ember mb-3 text-sm uppercase tracking-wider">Game</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-parchment/60 hover:text-parchment transition-colors">
                  Play Now
                </Link>
              </li>
              <li>
                <Link href="/how-to-play" className="text-parchment/60 hover:text-parchment transition-colors">
                  How to Play
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-parchment/60 hover:text-parchment transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="font-bold text-ember mb-3 text-sm uppercase tracking-wider">About</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-parchment/60 hover:text-parchment transition-colors">
                  About the Game
                </Link>
              </li>
              <li>
                <Link href="/history" className="text-parchment/60 hover:text-parchment transition-colors">
                  History of Werewolf
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-ember mb-3 text-sm uppercase tracking-wider">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy-policy" className="text-parchment/60 hover:text-parchment transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-parchment/60 hover:text-parchment transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold text-ember mb-3 text-sm uppercase tracking-wider">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="text-parchment/60 hover:text-parchment transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/error-logs" className="text-parchment/30 hover:text-parchment/50 transition-colors text-xs">
                  Error Logs
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Medieval Divider */}
        <div className="divider-medieval w-full mb-6"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <img
              src="/logo/Werewolves-Village-t1-logo-sq-nobg-main.png"
              alt="Werewolves Village"
              className="h-10 w-auto opacity-60"
            />
            <span className="font-cinzel font-bold text-ember">WEREWOLVES VILLAGE</span>
          </div>
          <p className="text-parchment/40 text-sm text-center">
            &copy; {currentYear} Werewolves Village. All rights reserved.
          </p>
          <p className="text-parchment/30 text-xs">
            Forged in Moonlight
          </p>
        </div>
      </div>
    </footer>
  );
}
