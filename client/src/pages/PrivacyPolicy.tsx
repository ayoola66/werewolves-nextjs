import { Link } from 'wouter';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Footer from '@/components/Footer';

export default function PrivacyPolicyPage() {
  const lastUpdated = "15 January 2026";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl">
        {/* Back to Home */}
        <Link href="/" className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-6">
          ← Back to Game
        </Link>

        <h1 className="text-4xl md:text-5xl font-cinzel font-bold text-red-500 text-center mb-4">
          Privacy Policy
        </h1>
        <p className="text-gray-400 text-center mb-8">
          Last updated: {lastUpdated}
        </p>

        <div className="space-y-6">
          {/* Introduction */}
          <Card className="bg-gray-800/80 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-xl text-purple-300">1. Introduction</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>
                Welcome to Werewolf Online ("we," "our," or "us"). We are committed to protecting
                your privacy and ensuring you have a positive experience when playing our game.
              </p>
              <p>
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information
                when you visit our website and use our online game service.
              </p>
            </CardContent>
          </Card>

          {/* Information We Collect */}
          <Card className="bg-gray-800/80 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-xl text-purple-300">2. Information We Collect</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <h4 className="font-bold text-white">Information You Provide:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Display Name:</strong> The nickname you choose when joining a game (not stored permanently)</li>
                <li><strong>Game Chat Messages:</strong> Messages sent during gameplay (temporary, deleted when game ends)</li>
                <li><strong>Contact Information:</strong> If you contact us via our contact form</li>
              </ul>

              <h4 className="font-bold text-white mt-4">Information Collected Automatically:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Device Information:</strong> Browser type, operating system, device type</li>
                <li><strong>Usage Data:</strong> Pages visited, time spent on pages, game statistics</li>
                <li><strong>IP Address:</strong> For security and fraud prevention purposes</li>
                <li><strong>Cookies:</strong> Session cookies for game functionality</li>
              </ul>
            </CardContent>
          </Card>

          {/* How We Use Information */}
          <Card className="bg-gray-800/80 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-xl text-purple-300">3. How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              <p className="mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide and maintain the game service</li>
                <li>Enable multiplayer functionality and real-time communication</li>
                <li>Improve and optimise the user experience</li>
                <li>Detect and prevent fraud, cheating, or abuse</li>
                <li>Respond to your enquiries and provide customer support</li>
                <li>Analyse usage patterns to improve our service</li>
                <li>Comply with legal obligations</li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Retention */}
          <Card className="bg-gray-800/80 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-xl text-purple-300">4. Data Retention</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>
                <strong className="text-white">Game Data:</strong> All game-related data (player names, chat messages,
                game actions) is temporary and is automatically deleted when the game session ends.
              </p>
              <p>
                <strong className="text-white">Analytics Data:</strong> Anonymised usage statistics may be retained
                for up to 26 months for service improvement purposes.
              </p>
              <p>
                <strong className="text-white">Contact Enquiries:</strong> If you contact us, we may retain your
                message and contact details for up to 2 years to improve our service.
              </p>
            </CardContent>
          </Card>

          {/* Data Sharing */}
          <Card className="bg-gray-800/80 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-xl text-purple-300">5. How We Share Your Information</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>We do not sell your personal information. We may share information with:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Service Providers:</strong> Third-party services that help us operate (hosting, analytics)</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets</li>
              </ul>
            </CardContent>
          </Card>

          {/* Cookies */}
          <Card className="bg-gray-800/80 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-xl text-purple-300">6. Cookies and Tracking</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>We use cookies and similar technologies for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Essential Cookies:</strong> Required for game functionality (session management)</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how users interact with our service</li>
                <li><strong>Performance Cookies:</strong> Monitor and improve site performance</li>
              </ul>
              <p className="mt-4">
                You can control cookies through your browser settings. Note that disabling cookies
                may affect game functionality.
              </p>
            </CardContent>
          </Card>

          {/* Your Rights */}
          <Card className="bg-gray-800/80 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-xl text-purple-300">7. Your Rights</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>Depending on your location, you may have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Object to or restrict processing of your information</li>
                <li>Data portability (receive your data in a structured format)</li>
                <li>Withdraw consent at any time</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, please contact us using the details provided below.
              </p>
            </CardContent>
          </Card>

          {/* Children's Privacy */}
          <Card className="bg-gray-800/80 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-xl text-purple-300">8. Children's Privacy</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>
                Our service is intended for users aged 13 and older. We do not knowingly collect
                personal information from children under 13. If you believe we have collected
                information from a child under 13, please contact us immediately.
              </p>
            </CardContent>
          </Card>

          {/* Security */}
          <Card className="bg-gray-800/80 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-xl text-purple-300">9. Data Security</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>
                We implement appropriate technical and organisational measures to protect your
                information, including encryption, secure servers, and access controls. However,
                no method of transmission over the Internet is 100% secure.
              </p>
            </CardContent>
          </Card>

          {/* Changes */}
          <Card className="bg-gray-800/80 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-xl text-purple-300">10. Changes to This Policy</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any
                changes by posting the new policy on this page and updating the "Last updated" date.
              </p>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="bg-gray-800/80 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-xl text-purple-300">11. Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>
                If you have any questions about this Privacy Policy or our data practices,
                please contact us:
              </p>
              <div className="mt-4">
                <Link
                  href="/contact"
                  className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-lg transition-colors"
                >
                  📧 Contact Us
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Back to Game */}
        <div className="text-center mt-8">
          <Link
            href="/"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors"
          >
            🎮 Back to Game
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
