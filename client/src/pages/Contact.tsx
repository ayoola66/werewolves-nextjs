import { useState } from 'react';
import { Link } from 'wouter';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import PageLayout from '@/components/PageLayout';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch(`https://ayoolaogunrekun.supabase.co/functions/v1/send-contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <PageLayout
      title="Contact Us"
      subtitle="We'd love to hear from you"
    >
      <div className="grid md:grid-cols-2 gap-6">
        {/* Contact Form */}
        <Card className="panel-stone border-iron-gray/60">
          <CardHeader>
            <CardTitle className="font-cinzel text-lg text-ember">Send Us a Message</CardTitle>
          </CardHeader>
          <CardContent>
            {status === 'success' ? (
              <div className="text-center py-8">
                <div className="divider-medieval w-32 mx-auto mb-5" />
                <h3 className="font-cinzel text-xl text-ember mb-2">Message Sent</h3>
                <p className="text-parchment/60 text-sm mb-5">
                  Thank you for contacting us. We'll get back to you as soon as possible.
                </p>
                <Button
                  onClick={() => setStatus('idle')}
                  className="btn-iron py-2 px-5 text-sm rounded font-bold"
                >
                  Send Another Message
                </Button>
                <div className="divider-medieval w-32 mx-auto mt-5" />
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs uppercase tracking-wider text-parchment/50 mb-1.5">
                    Your Name *
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input-iron w-full"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs uppercase tracking-wider text-parchment/50 mb-1.5">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input-iron w-full"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs uppercase tracking-wider text-parchment/50 mb-1.5">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="input-iron w-full rounded px-3 py-2 text-sm"
                  >
                    <option value="">Select a topic...</option>
                    <option value="bug">Report a Bug</option>
                    <option value="feature">Feature Suggestion</option>
                    <option value="feedback">General Feedback</option>
                    <option value="business">Business Enquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs uppercase tracking-wider text-parchment/50 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="input-iron w-full rounded px-3 py-2 text-sm resize-none"
                    placeholder="Tell us what's on your mind..."
                  />
                </div>

                {status === 'error' && (
                  <div className="p-3 bg-blood/20 border border-blood/40 rounded">
                    <p className="text-parchment/70 text-xs text-center">
                      Something went wrong. Please try again or email us at{' '}
                      <a href="mailto:ayoola@ayoola.me" className="text-ember hover:underline">
                        ayoola@ayoola.me
                      </a>
                    </p>
                  </div>
                )}

                <Button
                  type="submit"
                  className="btn-ember w-full py-3 rounded font-bold"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>

        {/* Contact Info */}
        <div className="space-y-5">
          <Card className="panel-stone border-iron-gray/60">
            <CardHeader>
              <CardTitle className="font-cinzel text-lg text-ember">Direct Email</CardTitle>
            </CardHeader>
            <CardContent className="text-parchment/70 space-y-3">
              <p className="text-sm">You can also reach us directly at:</p>
              <a
                href="mailto:ayoola@ayoola.me"
                className="block p-3 bg-iron-gray/20 rounded border border-ember/20 hover:border-ember/50 transition-colors font-bold text-ember text-sm"
              >
                ayoola@ayoola.me
              </a>
            </CardContent>
          </Card>

          <Card className="panel-stone border-iron-gray/60">
            <CardHeader>
              <CardTitle className="font-cinzel text-lg text-ember">Quick Help</CardTitle>
            </CardHeader>
            <CardContent className="text-parchment/70 space-y-3">
              <p className="text-sm">Before contacting us, you might find your answer in:</p>
              <div className="space-y-2">
                <Link href="/faq">
                  <div className="block p-3 bg-iron-gray/20 rounded border border-parchment/10 hover:border-ember/30 transition-colors cursor-pointer">
                    <span className="font-cinzel text-xs uppercase tracking-wider text-parchment">FAQ</span>
                    <p className="text-xs text-parchment/50 mt-0.5">Common questions answered</p>
                  </div>
                </Link>
                <Link href="/how-to-play">
                  <div className="block p-3 bg-iron-gray/20 rounded border border-parchment/10 hover:border-ember/30 transition-colors cursor-pointer">
                    <span className="font-cinzel text-xs uppercase tracking-wider text-parchment">How to Play</span>
                    <p className="text-xs text-parchment/50 mt-0.5">Game rules and instructions</p>
                  </div>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="panel-stone border-iron-gray/60">
            <CardHeader>
              <CardTitle className="font-cinzel text-lg text-ember">Response Time</CardTitle>
            </CardHeader>
            <CardContent className="text-parchment/70">
              <ul className="space-y-2.5">
                {[
                  { label: 'Bug Reports', time: '24–48 hours' },
                  { label: 'Feature Suggestions', time: '3–5 business days' },
                  { label: 'General Enquiries', time: '2–3 business days' },
                ].map((item) => (
                  <li key={item.label} className="flex items-center justify-between text-sm">
                    <span className="text-parchment/60">{item.label}</span>
                    <span className="text-ember font-cinzel text-xs">{item.time}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
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
