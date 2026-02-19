import { Link } from 'wouter';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/PageLayout';

export default function PrivacyPolicyPage() {
  const lastUpdated = "15 January 2026";

  return (
    <PageLayout
      title="Privacy Policy"
      subtitle={`Last updated: ${lastUpdated}`}
    >
      <div className="space-y-4">
        <Card className="panel-stone border-iron-gray/60">
          <CardHeader>
            <CardTitle className="font-cinzel text-base text-ember">1. Introduction</CardTitle>
          </CardHeader>
          <CardContent className="text-parchment/60 space-y-3 text-sm leading-relaxed">
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

        <Card className="panel-stone border-iron-gray/60">
          <CardHeader>
            <CardTitle className="font-cinzel text-base text-ember">2. Information We Collect</CardTitle>
          </CardHeader>
          <CardContent className="text-parchment/60 space-y-4 text-sm leading-relaxed">
            <div>
              <h4 className="text-parchment/80 font-bold mb-2">Information You Provide:</h4>
              <ul className="space-y-1.5 pl-4">
                {[
                  ['Display Name', 'The nickname you choose when joining a game (not stored permanently)'],
                  ['Game Chat Messages', 'Messages sent during gameplay (temporary, deleted when game ends)'],
                  ['Contact Information', 'If you contact us via our contact form'],
                ].map(([term, def]) => (
                  <li key={term} className="flex gap-2">
                    <span className="text-ember flex-shrink-0">—</span>
                    <span><strong className="text-parchment/70">{term}:</strong> {def}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-parchment/80 font-bold mb-2">Information Collected Automatically:</h4>
              <ul className="space-y-1.5 pl-4">
                {[
                  ['Device Information', 'Browser type, operating system, device type'],
                  ['Usage Data', 'Pages visited, time spent on pages, game statistics'],
                  ['IP Address', 'For security and fraud prevention purposes'],
                  ['Cookies', 'Session cookies for game functionality'],
                ].map(([term, def]) => (
                  <li key={term} className="flex gap-2">
                    <span className="text-ember flex-shrink-0">—</span>
                    <span><strong className="text-parchment/70">{term}:</strong> {def}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="panel-stone border-iron-gray/60">
          <CardHeader>
            <CardTitle className="font-cinzel text-base text-ember">3. How We Use Your Information</CardTitle>
          </CardHeader>
          <CardContent className="text-parchment/60 text-sm leading-relaxed">
            <p className="mb-3">We use the information we collect to:</p>
            <ul className="space-y-1.5 pl-4">
              {[
                'Provide and maintain the game service',
                'Enable multiplayer functionality and real-time communication',
                'Improve and optimise the user experience',
                'Detect and prevent fraud, cheating, or abuse',
                'Respond to your enquiries and provide customer support',
                'Analyse usage patterns to improve our service',
                'Comply with legal obligations',
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-ember flex-shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="panel-stone border-iron-gray/60">
          <CardHeader>
            <CardTitle className="font-cinzel text-base text-ember">4. Data Retention</CardTitle>
          </CardHeader>
          <CardContent className="text-parchment/60 space-y-3 text-sm leading-relaxed">
            <p><strong className="text-parchment/80">Game Data:</strong> All game-related data (player names, chat messages, game actions) is temporary and is automatically deleted when the game session ends.</p>
            <p><strong className="text-parchment/80">Analytics Data:</strong> Anonymised usage statistics may be retained for up to 26 months for service improvement purposes.</p>
            <p><strong className="text-parchment/80">Contact Enquiries:</strong> If you contact us, we may retain your message and contact details for up to 2 years to improve our service.</p>
          </CardContent>
        </Card>

        <Card className="panel-stone border-iron-gray/60">
          <CardHeader>
            <CardTitle className="font-cinzel text-base text-ember">5. How We Share Your Information</CardTitle>
          </CardHeader>
          <CardContent className="text-parchment/60 text-sm leading-relaxed">
            <p className="mb-3">We do not sell your personal information. We may share information with:</p>
            <ul className="space-y-1.5 pl-4">
              {[
                ['Service Providers', 'Third-party services that help us operate (hosting, analytics)'],
                ['Legal Requirements', 'When required by law or to protect our rights'],
                ['Business Transfers', 'In the event of a merger, acquisition, or sale of assets'],
              ].map(([term, def]) => (
                <li key={term} className="flex gap-2">
                  <span className="text-ember flex-shrink-0">—</span>
                  <span><strong className="text-parchment/70">{term}:</strong> {def}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="panel-stone border-iron-gray/60">
          <CardHeader>
            <CardTitle className="font-cinzel text-base text-ember">6. Cookies and Tracking</CardTitle>
          </CardHeader>
          <CardContent className="text-parchment/60 text-sm leading-relaxed space-y-3">
            <p>We use cookies and similar technologies for:</p>
            <ul className="space-y-1.5 pl-4">
              {[
                ['Essential Cookies', 'Required for game functionality (session management)'],
                ['Analytics Cookies', 'Help us understand how users interact with our service'],
                ['Performance Cookies', 'Monitor and improve site performance'],
              ].map(([term, def]) => (
                <li key={term} className="flex gap-2">
                  <span className="text-ember flex-shrink-0">—</span>
                  <span><strong className="text-parchment/70">{term}:</strong> {def}</span>
                </li>
              ))}
            </ul>
            <p>You can control cookies through your browser settings. Note that disabling cookies may affect game functionality.</p>
          </CardContent>
        </Card>

        <Card className="panel-stone border-iron-gray/60">
          <CardHeader>
            <CardTitle className="font-cinzel text-base text-ember">7. Your Rights</CardTitle>
          </CardHeader>
          <CardContent className="text-parchment/60 text-sm leading-relaxed space-y-3">
            <p>Depending on your location, you may have the right to:</p>
            <ul className="space-y-1.5 pl-4">
              {[
                'Access the personal information we hold about you',
                'Request correction of inaccurate information',
                'Request deletion of your information',
                'Object to or restrict processing of your information',
                'Data portability (receive your data in a structured format)',
                'Withdraw consent at any time',
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-ember flex-shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>To exercise these rights, please contact us using the details provided below.</p>
          </CardContent>
        </Card>

        <Card className="panel-stone border-iron-gray/60">
          <CardHeader>
            <CardTitle className="font-cinzel text-base text-ember">8. Children's Privacy</CardTitle>
          </CardHeader>
          <CardContent className="text-parchment/60 text-sm leading-relaxed">
            <p>
              Our service is intended for users aged 13 and older. We do not knowingly collect
              personal information from children under 13. If you believe we have collected
              information from a child under 13, please contact us immediately.
            </p>
          </CardContent>
        </Card>

        <Card className="panel-stone border-iron-gray/60">
          <CardHeader>
            <CardTitle className="font-cinzel text-base text-ember">9. Data Security</CardTitle>
          </CardHeader>
          <CardContent className="text-parchment/60 text-sm leading-relaxed">
            <p>
              We implement appropriate technical and organisational measures to protect your
              information, including encryption, secure servers, and access controls. However,
              no method of transmission over the Internet is 100% secure.
            </p>
          </CardContent>
        </Card>

        <Card className="panel-stone border-iron-gray/60">
          <CardHeader>
            <CardTitle className="font-cinzel text-base text-ember">10. Changes to This Policy</CardTitle>
          </CardHeader>
          <CardContent className="text-parchment/60 text-sm leading-relaxed">
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any
              changes by posting the new policy on this page and updating the "Last updated" date.
            </p>
          </CardContent>
        </Card>

        <Card className="panel-stone border-iron-gray/60">
          <CardHeader>
            <CardTitle className="font-cinzel text-base text-ember">11. Contact Us</CardTitle>
          </CardHeader>
          <CardContent className="text-parchment/60 text-sm leading-relaxed space-y-4">
            <p>
              If you have any questions about this Privacy Policy or our data practices,
              please contact us:
            </p>
            <Link href="/contact">
              <Button className="btn-iron py-2 px-5 text-sm rounded font-bold">
                Contact Us
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      <div className="text-center mt-8 pb-8">
        <Link href="/">
          <Button className="btn-ember py-4 px-10 text-lg rounded font-bold">
            Back to Village
          </Button>
        </Link>
      </div>
    </PageLayout>
  );
}
