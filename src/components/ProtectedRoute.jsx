
import React, { useState } from 'react';
import pb from '@/lib/pocketbaseClient.js';
import { Button } from '@/components/ui/button.jsx';
import { Mail, Lock, AlertCircle } from 'lucide-react';

export default function ProtectedRoute({ children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuth, setIsAuth] = useState(pb.authStore.isValid);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  if (isAuth) {
    return children;
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    try {
      await pb.collection('users').authWithPassword(email, password, { $autoCancel: false });
      setIsAuth(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    try {
      await pb.collection('users').create({ email, password, passwordConfirm: password }, { $autoCancel: false });
      await pb.collection('users').authWithPassword(email, password, { $autoCancel: false });
      setIsAuth(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4 bg-muted/20">
      <div className="w-full max-w-md bg-card p-8 rounded-2xl shadow-xl border border-border comic-panel">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold comic-font drop-shadow-sm mb-2">Access Required</h2>
          <p className="text-muted-foreground text-sm font-medium">Please login or register to view daily comics.</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-destructive/10 text-destructive rounded-lg flex items-center gap-3 border-2 border-destructive/20">
            <AlertCircle className="w-5 h-5 shrink-0" />
            <p className="text-sm font-bold">{error}</p>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-sm font-bold ml-1 text-foreground">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
              <input 
                type="email" 
                value={email} 
                onChange={e => setEmail(e.target.value)} 
                className="w-full pl-10 pr-4 py-2.5 border-2 border-border rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 bg-background text-foreground font-medium transition-all"
                placeholder="reader@example.com"
                required 
              />
            </div>
          </div>
          
          <div className="space-y-1.5 mb-6">
            <label className="text-sm font-bold ml-1 text-foreground">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
              <input 
                type="password" 
                value={password} 
                onChange={e => setPassword(e.target.value)} 
                className="w-full pl-10 pr-4 py-2.5 border-2 border-border rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 bg-background text-foreground font-medium transition-all"
                placeholder="••••••••"
                required 
                minLength={8}
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button 
              type="submit" 
              className="flex-1 border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:shadow-none hover:translate-y-1 transition-all"
              disabled={isLoading}
            >
              Login
            </Button>
            <Button 
              type="button" 
              variant="outline"
              onClick={handleRegister} 
              className="flex-1 border-2 border-black hover:bg-secondary transition-all"
              disabled={isLoading}
            >
              Create Account
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
