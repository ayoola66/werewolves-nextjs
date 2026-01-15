'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900/95 border-t border-gray-700 py-8 mt-auto">
      <div className="container mx-auto px-4">
        {/* Navigation Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {/* Game */}
          <div>
            <h3 className="font-bold text-purple-400 mb-3 text-sm uppercase tracking-wider">Game</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Play Now
                </Link>
              </li>
              <li>
                <Link href="/how-to-play" className="text-gray-400 hover:text-white transition-colors">
                  How to Play
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="font-bold text-purple-400 mb-3 text-sm uppercase tracking-wider">About</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About the Game
                </Link>
              </li>
              <li>
                <Link href="/history" className="text-gray-400 hover:text-white transition-colors">
                  History of Werewolf
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-purple-400 mb-3 text-sm uppercase tracking-wider">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold text-purple-400 mb-3 text-sm uppercase tracking-wider">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/error-logs" className="text-gray-500 hover:text-gray-400 transition-colors text-xs">
                  Error Logs
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🐺</span>
            <span className="font-cinzel font-bold text-red-500">WEREWOLF</span>
          </div>
          <p className="text-gray-500 text-sm text-center">
            © {currentYear} Werewolf Online Game. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            A social deduction game of deception and survival
          </p>
        </div>
      </div>
    </footer>
  );
}
