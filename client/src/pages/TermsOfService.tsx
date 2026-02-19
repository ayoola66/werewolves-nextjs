import { Link } from 'wouter';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/PageLayout';

export default function TermsOfServicePage() {
  const lastUpdated = "15 January 2026";

  return (
    <PageLayout
      title="Terms of Service"
      subtitle={`Last updated: ${lastUpdated}`}
    >
      <div className="space-y-4">
        <Card className="panel-stone border-iron-gray/60">
          <CardHeader>
            <CardTitle className="font-cinzel text-base text-ember">1. Agreement to Terms</CardTitle>
          </CardHeader>
          <CardContent className="text-parchment/60 space-y-3 text-sm leading-relaxed">
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

        <Card className="panel-stone border-iron-gray/60">
          <CardHeader>
            <CardTitle className="font-cinzel text-base text-ember">2. Description of Service</CardTitle>
          </CardHeader>
          <CardContent className="text-parchment/60 text-sm leading-relaxed space-y-3">
            <p>Werewolf Online is a free-to-play, browser-based multiplayer social deduction game. The Service allows users to:</p>
            <ul className="space-y-1.5 pl-4">
              {[
                'Create and join game sessions with other players',
                'Communicate with other players during gameplay',
                'Participate in game mechanics including voting and role-based actions',
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
            <CardTitle className="font-cinzel text-base text-ember">3. Eligibility</CardTitle>
          </CardHeader>
          <CardContent className="text-parchment/60 space-y-3 text-sm leading-relaxed">
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

        <Card className="panel-stone border-iron-gray/60">
          <CardHeader>
            <CardTitle className="font-cinzel text-base text-ember">4. User Conduct</CardTitle>
          </CardHeader>
          <CardContent className="text-parchment/60 text-sm leading-relaxed space-y-3">
            <p>When using the Service, you agree NOT to:</p>
            <ul className="space-y-1.5 pl-4">
              {[
                'Use offensive, abusive, or discriminatory language',
                'Harass, bully, or threaten other players',
                'Share personal information of others without consent',
                'Impersonate other players or individuals',
                'Use automated scripts, bots, or cheating software',
                'Attempt to exploit bugs or vulnerabilities',
                'Disrupt gameplay or intentionally sabotage games',
                'Share inappropriate, illegal, or harmful content',
                'Violate any applicable laws or regulations',
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
            <CardTitle className="font-cinzel text-base text-ember">5. Display Names</CardTitle>
          </CardHeader>
          <CardContent className="text-parchment/60 text-sm leading-relaxed space-y-3">
            <p>When joining a game, you choose a display name. You agree that your display name will not:</p>
            <ul className="space-y-1.5 pl-4">
              {[
                'Contain offensive, vulgar, or discriminatory content',
                'Impersonate real people, celebrities, or public figures',
                'Include personal information (real names, addresses, phone numbers)',
                'Violate trademarks or intellectual property rights',
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-ember flex-shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>We reserve the right to remove players using inappropriate display names.</p>
          </CardContent>
        </Card>

        <Card className="panel-stone border-iron-gray/60">
          <CardHeader>
            <CardTitle className="font-cinzel text-base text-ember">6. Intellectual Property</CardTitle>
          </CardHeader>
          <CardContent className="text-parchment/60 space-y-3 text-sm leading-relaxed">
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

        <Card className="panel-stone border-iron-gray/60">
          <CardHeader>
            <CardTitle className="font-cinzel text-base text-ember">7. Disclaimers</CardTitle>
          </CardHeader>
          <CardContent className="text-parchment/60 text-sm leading-relaxed space-y-3">
            <p>
              THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND,
              EITHER EXPRESS OR IMPLIED.
            </p>
            <p>We do not warrant that:</p>
            <ul className="space-y-1.5 pl-4">
              {[
                'The Service will be uninterrupted or error-free',
                'Defects will be corrected',
                'The Service is free of viruses or harmful components',
                'The results from using the Service will meet your requirements',
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
            <CardTitle className="font-cinzel text-base text-ember">8. Limitation of Liability</CardTitle>
          </CardHeader>
          <CardContent className="text-parchment/60 space-y-3 text-sm leading-relaxed">
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

        <Card className="panel-stone border-iron-gray/60">
          <CardHeader>
            <CardTitle className="font-cinzel text-base text-ember">9. Termination</CardTitle>
          </CardHeader>
          <CardContent className="text-parchment/60 text-sm leading-relaxed space-y-3">
            <p>We reserve the right to terminate or suspend your access to the Service immediately, without prior notice, for any reason, including but not limited to:</p>
            <ul className="space-y-1.5 pl-4">
              {[
                'Violation of these Terms',
                'Engaging in prohibited conduct',
                'Any behaviour we deem harmful to other users or the Service',
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
            <CardTitle className="font-cinzel text-base text-ember">10. Indemnification</CardTitle>
          </CardHeader>
          <CardContent className="text-parchment/60 text-sm leading-relaxed space-y-3">
            <p>You agree to indemnify and hold us harmless from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from:</p>
            <ul className="space-y-1.5 pl-4">
              {[
                'Your use of the Service',
                'Your violation of these Terms',
                'Your violation of any third-party rights',
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
            <CardTitle className="font-cinzel text-base text-ember">11. Governing Law</CardTitle>
          </CardHeader>
          <CardContent className="text-parchment/60 space-y-3 text-sm leading-relaxed">
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

        <Card className="panel-stone border-iron-gray/60">
          <CardHeader>
            <CardTitle className="font-cinzel text-base text-ember">12. Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="text-parchment/60 text-sm leading-relaxed space-y-4">
            <p>If you have any questions about these Terms of Service, please contact us:</p>
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
