import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo: navigate to dashboard
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex">
      {/* Left: Dark branding panel */}
      <div className="hidden lg:flex lg:w-1/2 bg-hero-gradient relative overflow-hidden items-center justify-center p-12">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-primary/3 blur-3xl" />
        </div>
        <div className="relative max-w-md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-body text-sm font-semibold tracking-[0.2em] uppercase mb-6">
              SIGMA COMMUNICATION
            </p>
            <h1 className="text-hero-text text-4xl md:text-5xl font-bold leading-tight mb-6">
              Reden-<br />Generator<span className="text-gradient italic"> v3.1</span>
            </h1>
            <p className="text-hero-text/60 font-body leading-relaxed">
              Professionelle, personalisierte Reden für 18 Anlässe — 
              KI-gestützt mit journalistischer Präzision.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Right: Login form */}
      <div className="flex-1 flex items-center justify-center p-6 bg-background">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-sm"
        >
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-body mb-10"
          >
            <ArrowLeft className="h-4 w-4" /> Zurück zur Startseite
          </button>

          <div className="lg:hidden mb-8">
            <span className="text-xl font-bold tracking-tight font-body">
              <span className="text-primary">SIGMA</span> COMMUNICATION
            </span>
          </div>

          <h2 className="text-2xl font-bold text-foreground mb-2">Willkommen zurück</h2>
          <p className="text-muted-foreground font-body text-sm mb-8">
            Melden Sie sich mit Ihren Zugangsdaten an.
          </p>

          <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email" className="font-body text-sm">E-Mail</Label>
              <Input
                id="email"
                type="email"
                placeholder="ihre@email.de"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 font-body"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="font-body text-sm">Passwort</Label>
                <button type="button" className="text-xs text-primary hover:underline font-body">
                  Passwort vergessen?
                </button>
              </div>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-12 font-body pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <Button type="submit" className="w-full h-12 font-body text-base shadow-glow bg-accent-gradient hover:opacity-90">
              Anmelden
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground font-body mt-8">
            Noch keinen Zugang?{' '}
            <a
              href="mailto:info@sigmacommunication.de?subject=Zugang%20Reden-Generator"
              className="text-primary hover:underline"
            >
              Zugang anfragen
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
