import { useState } from 'react';
import { Link } from 'wouter';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Footer from '@/components/Footer';

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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl">
        {/* Back to Home */}
        <Link href="/" className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-6">
          ← Back to Game
        </Link>

        <h1 className="text-4xl md:text-5xl font-cinzel font-bold text-red-500 text-center mb-4">
          Contact Us
        </h1>
        <p className="text-gray-400 text-center mb-8">
          We'd love to hear from you! Get in touch with the Werewolf team.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="bg-gray-800/80 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-xl text-purple-300 flex items-center gap-2">
                📧 Send Us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              {status === 'success' ? (
                <div className="text-center py-8">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-xl font-bold text-green-400 mb-2">Message Sent!</h3>
                  <p className="text-gray-300 mb-4">
                    Thank you for contacting us. We'll get back to you as soon as possible.
                  </p>
                  <Button
                    onClick={() => setStatus('idle')}
                    className="bg-purple-600 hover:bg-purple-700"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      Your Name *
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-gray-700 border-gray-600 text-white"
                      placeholder="John Smith"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-gray-700 border-gray-600 text-white"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-700 border-gray-600 text-white rounded-md px-3 py-2"
                    >
                      <option value="">Select a topic...</option>
                      <option value="bug">🐛 Report a Bug</option>
                      <option value="feature">💡 Feature Suggestion</option>
                      <option value="feedback">📝 General Feedback</option>
                      <option value="business">💼 Business Enquiry</option>
                      <option value="support">🆘 Technical Support</option>
                      <option value="other">❓ Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-gray-700 border-gray-600 text-white rounded-md px-3 py-2 resize-none"
                      placeholder="Tell us what's on your mind..."
                    />
                  </div>

                  {status === 'error' && (
                    <div className="p-3 bg-red-900/50 border border-red-500 rounded-lg">
                      <p className="text-red-300 text-sm text-center">
                        Something went wrong. Please try again or email us directly at{' '}
                        <a href="mailto:ayoola@ayoola.me" className="underline hover:text-red-200">
                          ayoola@ayoola.me
                        </a>
                      </p>
                    </div>
                  )}

                  <Button
                    type="submit"
                    className="w-full bg-purple-600 hover:bg-purple-700"
                    disabled={status === 'sending'}
                  >
                    {status === 'sending' ? '⏳ Sending...' : '📨 Send Message'}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Direct Email */}
            <Card className="bg-gray-800/80 border-purple-500/30">
              <CardHeader>
                <CardTitle className="text-xl text-purple-300 flex items-center gap-2">
                  📮 Direct Email
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-3">
                <p>You can also reach us directly at:</p>
                <a
                  href="mailto:ayoola@ayoola.me"
                  className="block p-3 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors font-bold text-purple-300"
                >
                  ayoola@ayoola.me
                </a>
              </CardContent>
            </Card>

            {/* Quick Help */}
            <Card className="bg-gray-800/80 border-purple-500/30">
              <CardHeader>
                <CardTitle className="text-xl text-purple-300 flex items-center gap-2">
                  🆘 Quick Help
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-3">
                <p>Before contacting us, you might find your answer in:</p>
                <div className="space-y-2">
                  <Link
                    href="/faq"
                    className="block p-3 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    <span className="font-bold text-purple-300">❓ FAQ</span>
                    <p className="text-sm text-gray-400">Common questions answered</p>
                  </Link>
                  <Link
                    href="/how-to-play"
                    className="block p-3 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    <span className="font-bold text-purple-300">📖 How to Play</span>
                    <p className="text-sm text-gray-400">Game rules and instructions</p>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Response Time */}
            <Card className="bg-gray-800/80 border-purple-500/30">
              <CardHeader>
                <CardTitle className="text-xl text-purple-300 flex items-center gap-2">
                  ⏰ Response Time
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-3">
                <p>We aim to respond to all enquiries within:</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-green-400">🐛</span>
                    <span><strong>Bug Reports:</strong> 24-48 hours</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-400">💡</span>
                    <span><strong>Feature Suggestions:</strong> 3-5 business days</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-400">📝</span>
                    <span><strong>General Enquiries:</strong> 2-3 business days</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Social */}
            <Card className="bg-gradient-to-r from-purple-900/50 to-indigo-900/50 border-purple-500/50">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">🐺</div>
                <h3 className="text-xl font-bold text-purple-300 mb-2">Join the Pack</h3>
                <p className="text-gray-300 text-sm">
                  Stay updated with news, tips, and community events!
                </p>
              </CardContent>
            </Card>
          </div>
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
