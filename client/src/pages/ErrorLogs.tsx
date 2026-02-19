import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import ErrorLogs from '@/components/ErrorLogs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ErrorLogsPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // Check if already authenticated (stored in sessionStorage)
  useEffect(() => {
    const authToken = sessionStorage.getItem('error_logs_auth');
    if (authToken === 'authenticated') {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const correctPassword = import.meta.env.VITE_ERROR_LOGS_PASSWORD;

    if (password === correctPassword) {
      sessionStorage.setItem('error_logs_auth', 'authenticated');
      setIsAuthenticated(true);
    } else {
      setError('Incorrect password. Access denied.');
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('error_logs_auth');
    setIsAuthenticated(false);
    setPassword('');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center">
        <p className="text-white">Loading...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center p-4">
        <Card className="w-full max-w-md bg-gray-800/90 border-2 border-purple-500">
          <CardHeader className="text-center">
            <div className="text-5xl mb-4">🔒</div>
            <CardTitle className="text-2xl font-cinzel text-purple-300">
              Protected Area
            </CardTitle>
            <p className="text-gray-400 text-sm mt-2">
              Error logs are restricted to developers only
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="password"
                  placeholder="Enter access code..."
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                  autoFocus
                />
              </div>

              {error && (
                <div className="p-3 bg-red-900/50 border border-red-500 rounded-lg">
                  <p className="text-red-300 text-sm text-center">{error}</p>
                </div>
              )}

              <Button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700"
                disabled={!password.trim()}
              >
                🔓 Access Error Logs
              </Button>

              <div className="text-center">
                <Link href="/" className="text-purple-400 hover:text-purple-300 text-sm">
                  ← Back to Game
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Logout button */}
      <div className="absolute top-4 right-4 z-50">
        <Button
          onClick={handleLogout}
          variant="outline"
          size="sm"
          className="bg-gray-800 border-gray-600 text-gray-300 hover:bg-gray-700"
        >
          🔒 Lock
        </Button>
      </div>
      <ErrorLogs />
    </div>
  );
}
