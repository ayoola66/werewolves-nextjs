import { Link } from 'wouter';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Footer from '@/components/Footer';

export default function TermsOfServicePage() {
  const lastUpdated = "15 January 2026";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl">
        {/* Back to Home */}
        <Link href="/" className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-6">
          ← Back to Game
        </Link>

        <h1 className="text-4xl md:text-5xl font-cinzel font-bold text-red-500 text-center mb-4">
          Terms of Service
        </h1>
        <p className="text-gray-400 text-center mb-8">
          Last updated: {lastUpdated}
        </p>

        <div className="space-y-6">
          {/* Agreement */}
          <Card className="bg-gray-800/80 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-xl text-purple-300">1. Agreement to Terms</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>
                By accessing or using Werewolf Online ("the Service"), you agree to be bound by these
                Terms of Service ("Terms"). If you do not agree to these Terms, please do not use the Service.
              </p>
              <p>
                We reserve the right to modify these Terms at any time. Continued use of the Service
                after changes constitutes acceptance of the new Terms.
              </p>
            </CardContent>
          </Card>

          {/* Description of Service */}
          <Card className="bg-gray-800/80 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-xl text-purple-300">2. Description of Service</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>
                Werewolf Online is a free-to-play, browser-based multiplayer social deduction game.
                The Service allows users to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Create and join game sessions with other players</li>
                <li>Communicate with other players during gameplay</li>
                <li>Participate in game mechanics including voting and role-based actions</li>
              </ul>
            </CardContent>
          </Card>

          {/* Eligibility */}
          <Card className="bg-gray-800/80 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-xl text-purple-300">3. Eligibility</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>
                You must be at least 13 years of age to use this Service. By using the Service,
                you represent and warrant that you meet this age requirement.
              </p>
              <p>
                If you are under 18, you should review these Terms with a parent or guardian
                to ensure they understand and agree to them.
              </p>
            </CardContent>
          </Card>

          {/* User Conduct */}
          <Card className="bg-gray-800/80 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-xl text-purple-300">4. User Conduct</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>When using the Service, you agree NOT to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use offensive, abusive, or discriminatory language</li>
                <li>Harass, bully, or threaten other players</li>
                <li>Share personal information of others without consent</li>
                <li>Impersonate other players or individuals</li>
                <li>Use automated scripts, bots, or cheating software</li>
                <li>Attempt to exploit bugs or vulnerabilities</li>
                <li>Disrupt gameplay or intentionally sabotage games</li>
                <li>Share inappropriate, illegal, or harmful content</li>
                <li>Violate any applicable laws or regulations</li>
              </ul>
            </CardContent>
          </Card>

          {/* Display Names */}
          <Card className="bg-gray-800/80 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-xl text-purple-300">5. Display Names</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>
                When joining a game, you choose a display name. You agree that your display name will not:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Contain offensive, vulgar, or discriminatory content</li>
                <li>Impersonate real people, celebrities, or public figures</li>
                <li>Include personal information (real names, addresses, phone numbers)</li>
                <li>Violate trademarks or intellectual property rights</li>
              </ul>
              <p className="mt-4">
                We reserve the right to remove players using inappropriate display names.
              </p>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card className="bg-gray-800/80 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-xl text-purple-300">6. Intellectual Property</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>
                The Service, including its design, graphics, code, and content, is owned by us and
                is protected by copyright, trademark, and other intellectual property laws.
              </p>
              <p>
                You are granted a limited, non-exclusive, non-transferable licence to use the
                Service for personal, non-commercial purposes only.
              </p>
            </CardContent>
          </Card>

          {/* Disclaimers */}
          <Card className="bg-gray-800/80 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-xl text-purple-300">7. Disclaimers</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>
                THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND,
                EITHER EXPRESS OR IMPLIED.
              </p>
              <p>We do not warrant that:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The Service will be uninterrupted or error-free</li>
                <li>Defects will be corrected</li>
                <li>The Service is free of viruses or harmful components</li>
                <li>The results from using the Service will meet your requirements</li>
              </ul>
            </CardContent>
          </Card>

          {/* Limitation of Liability */}
          <Card className="bg-gray-800/80 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-xl text-purple-300">8. Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT,
                INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF
                THE SERVICE.
              </p>
              <p>
                This includes, but is not limited to, damages for loss of profits, data, or
                other intangible losses, even if we have been advised of the possibility of such damages.
              </p>
            </CardContent>
          </Card>

          {/* Termination */}
          <Card className="bg-gray-800/80 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-xl text-purple-300">9. Termination</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>
                We reserve the right to terminate or suspend your access to the Service immediately,
                without prior notice, for any reason, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Violation of these Terms</li>
                <li>Engaging in prohibited conduct</li>
                <li>Any behaviour we deem harmful to other users or the Service</li>
              </ul>
            </CardContent>
          </Card>

          {/* Indemnification */}
          <Card className="bg-gray-800/80 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-xl text-purple-300">10. Indemnification</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>
                You agree to indemnify and hold us harmless from any claims, damages, losses,
                liabilities, and expenses (including legal fees) arising from:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your use of the Service</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any third-party rights</li>
              </ul>
            </CardContent>
          </Card>

          {/* Governing Law */}
          <Card className="bg-gray-800/80 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-xl text-purple-300">11. Governing Law</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>
                These Terms shall be governed by and construed in accordance with the laws of
                the United Kingdom, without regard to its conflict of law provisions.
              </p>
              <p>
                Any disputes arising from these Terms or your use of the Service shall be
                resolved through binding arbitration or in the courts of the United Kingdom.
              </p>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="bg-gray-800/80 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-xl text-purple-300">12. Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>
                If you have any questions about these Terms of Service, please contact us:
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
