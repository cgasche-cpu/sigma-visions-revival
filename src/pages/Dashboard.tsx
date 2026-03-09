import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  Home, FileText, FolderOpen, Settings, LogOut, BookOpen, 
  ArrowRight, Mic, Sparkles, ChevronLeft, Menu, Shield
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }
  })
};

const navItems = [
  { icon: Home, label: 'Start', active: true },
  { icon: FileText, label: 'Rede erstellen', active: false },
  { icon: FolderOpen, label: 'Meine Reden', active: false },
];

const adminItems = [
  { icon: Shield, label: 'Admin-Bereich', active: false },
  { icon: BookOpen, label: 'Wissensbank', active: false },
];

const steps = [
  { num: '01', title: 'Anlass wählen', desc: '18 Anlässe von der Hochzeitsrede bis zur Stadtratssitzung. Der Generator passt Stil, Struktur und Fragen automatisch an.', icon: '🎯', color: 'bg-primary/10 text-primary' },
  { num: '02', title: 'Ersterfassung', desc: 'Name, Redezeit, Tonlage und optionales Datum. Mit Datum sucht die KI automatisch passende historische Jahrestage.', icon: '📋', color: 'bg-blue-primary/10 text-blue-primary' },
  { num: '03', title: 'Journalistisches Interview', desc: '3–5 gezielte Rückfragen — per Tastatur oder Diktierfunktion. Je konkreter die Antworten, desto persönlicher die Rede.', icon: '🔍', color: 'bg-orange-light/10 text-orange-accent' },
  { num: '04', title: 'KI-Generierung & Qualitätsprüfung', desc: 'Die Rede entsteht in zwei Stufen: Erstentwurf + automatische Qualitätsprüfung mit 7 Kriterien. Score unter Schwellwert → KI überarbeitet automatisch.', icon: '✨', color: 'bg-primary/10 text-primary' },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const userName = 'Christian Gasche';

  return (
    <div className="min-h-screen flex bg-background">
      {/* Sidebar */}
      <aside className={`
        fixed lg:sticky top-0 left-0 z-40 h-screen bg-sidebar text-sidebar-foreground flex flex-col transition-all duration-300
        ${collapsed ? 'w-16' : 'w-64'}
        ${mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Logo */}
        <div className="p-4 border-b border-sidebar-border flex items-center justify-between min-h-[64px]">
          {!collapsed && (
            <div>
              <span className="text-sm font-bold tracking-tight font-body">
                <span className="text-sidebar-primary">SIGMA</span>
                <span className="text-sidebar-foreground"> COMM.</span>
              </span>
              <p className="text-[10px] text-sidebar-foreground/40 font-body mt-0.5">REDEN-GENERATOR · V3.1</p>
            </div>
          )}
          <button
            onClick={() => { setCollapsed(!collapsed); setMobileOpen(false); }}
            className="text-sidebar-foreground/60 hover:text-sidebar-foreground transition-colors hidden lg:block"
          >
            <ChevronLeft className={`h-4 w-4 transition-transform ${collapsed ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-4 px-2 space-y-1">
          <p className={`text-[10px] font-semibold text-sidebar-foreground/30 tracking-[0.15em] uppercase px-3 mb-2 ${collapsed ? 'hidden' : ''}`}>
            Navigation
          </p>
          {navItems.map((item) => (
            <button
              key={item.label}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-body transition-colors
                ${item.active 
                  ? 'bg-sidebar-accent text-sidebar-primary font-medium' 
                  : 'text-sidebar-foreground/60 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground'}
              `}
            >
              <item.icon className="h-4 w-4 flex-shrink-0" />
              {!collapsed && <span>{item.label}</span>}
            </button>
          ))}

          <div className="pt-4">
            <p className={`text-[10px] font-semibold text-sidebar-foreground/30 tracking-[0.15em] uppercase px-3 mb-2 ${collapsed ? 'hidden' : ''}`}>
              Administration
            </p>
            {adminItems.map((item) => (
              <button
                key={item.label}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-body text-sidebar-foreground/60 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground transition-colors"
              >
                <item.icon className="h-4 w-4 flex-shrink-0" />
                {!collapsed && <span>{item.label}</span>}
              </button>
            ))}
          </div>
        </nav>

        {/* User / Logout */}
        <div className="p-3 border-t border-sidebar-border">
          {!collapsed && (
            <div className="flex items-center gap-2 mb-2 px-2">
              <span className="text-xs text-sidebar-foreground/50 font-body">Angemeldet als</span>
            </div>
          )}
          <div className="flex items-center justify-between px-2">
            {!collapsed && (
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-sidebar-foreground font-body">admin</span>
                <span className="text-[10px] bg-sidebar-primary text-sidebar-primary-foreground px-1.5 py-0.5 rounded font-body font-semibold">ADMIN</span>
              </div>
            )}
            <button
              onClick={() => navigate('/')}
              className="text-sidebar-foreground/60 hover:text-sidebar-foreground transition-colors p-1"
              title="Abmelden"
            >
              <LogOut className="h-4 w-4" />
            </button>
          </div>
        </div>
      </aside>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-foreground/50 z-30 lg:hidden" onClick={() => setMobileOpen(false)} />
      )}

      {/* Main content */}
      <div className="flex-1 min-w-0">
        {/* Top bar */}
        <header className="sticky top-0 z-20 bg-background/80 backdrop-blur-xl border-b border-border h-16 flex items-center px-6">
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden mr-4 text-foreground"
          >
            <Menu className="h-5 w-5" />
          </button>
          <div className="flex items-center justify-between w-full">
            <div>
              <span className="text-lg font-bold font-body">
                <span className="text-primary">SIGMA</span>
                <span className="text-foreground"> COMMUNICATION</span>
              </span>
              <span className="text-xs text-muted-foreground ml-3 hidden sm:inline font-body">
                Frankfurt am Main · Strategische Kommunikation · Journalismus · Redenschreiben
              </span>
            </div>
            <div className="text-right hidden md:block">
              <span className="text-xs text-muted-foreground font-body italic">Reden-Generator</span>
              <p className="text-[10px] text-primary font-body font-semibold tracking-wider">KI-GESTÜTZT · JOURNALISTISCH PRÄZISE · V3.1</p>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="p-6 lg:p-10 max-w-6xl">
          {/* Welcome */}
          <motion.div
            variants={fadeUp} initial="hidden" animate="visible" custom={0}
            className="bg-card rounded-2xl border-l-4 border-l-primary border border-border p-8 mb-8"
          >
            <p className="text-primary text-xs font-semibold tracking-[0.15em] uppercase mb-2 font-body">Willkommen zurück</p>
            <h1 className="text-2xl font-bold text-foreground mb-2">{userName}</h1>
            <p className="text-muted-foreground font-body">
              Mit dem SIGMA Reden-Generator erstellen Sie professionelle, personalisierte Reden für jeden Anlass – mit journalistischer Qualität.
            </p>
          </motion.div>

          {/* Action cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" custom={1}
              className="bg-card rounded-2xl border border-border p-8 hover:border-primary/30 hover:shadow-strong transition-all duration-300 group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <FileText className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-primary text-xs font-semibold tracking-[0.15em] uppercase mb-2 font-body">Rede erstellen</h3>
              <p className="text-muted-foreground text-sm font-body mb-4">
                Neuen Redeauftrag starten. Anlass wählen, Interview führen, fertige Rede in Minuten erhalten.
              </p>
              <span className="text-sm text-primary font-body font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                → Rede erstellen
              </span>
            </motion.div>

            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" custom={2}
              className="bg-card rounded-2xl border border-border p-8 hover:border-primary/30 hover:shadow-strong transition-all duration-300 group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <FolderOpen className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-primary text-xs font-semibold tracking-[0.15em] uppercase mb-2 font-body">Meine Reden</h3>
              <p className="text-muted-foreground text-sm font-body mb-4">
                Alle gespeicherten Reden einsehen, bearbeiten und als DOCX oder TXT herunterladen.
              </p>
              <span className="text-sm text-primary font-body font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                → Meine Reden
              </span>
            </motion.div>
          </div>

          {/* How it works */}
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={3}>
            <div className="border-t border-border pt-10">
              <p className="text-muted-foreground text-xs font-semibold tracking-[0.15em] uppercase mb-8 font-body">
                So funktioniert der SIGMA Reden-Generator
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                {steps.map((step, i) => (
                  <motion.div
                    key={step.num}
                    variants={fadeUp} initial="hidden" animate="visible" custom={4 + i}
                    className="bg-card rounded-xl border border-border p-6"
                  >
                    <p className="text-primary text-[10px] font-semibold tracking-[0.15em] uppercase mb-3 font-body">Schritt {step.num.replace('0', '')}</p>
                    <div className="text-2xl mb-3">{step.icon}</div>
                    <h4 className="text-sm font-bold text-foreground mb-2 font-body">{step.title}</h4>
                    <p className="text-xs text-muted-foreground font-body leading-relaxed">{step.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quality note */}
          <motion.div
            variants={fadeUp} initial="hidden" animate="visible" custom={8}
            className="mt-8 bg-primary/5 border border-primary/20 rounded-xl p-6"
          >
            <p className="text-sm font-body text-foreground">
              <span className="text-lg mr-2">⚡</span>
              <strong>Qualitätsstandard:</strong> Der Generator arbeitet nach dem <strong>ABA-Prinzip</strong> (Anknüpfung · Botschaft · Rückkehr) und prüft jede Rede anhand von 7 Kriterien. Mindestscore im Standard-Modus: <strong>56 von 70 Punkten</strong>. 
              · Bei Fragen: <a href="mailto:info@sigmacommunication.de" className="text-primary hover:underline">info@sigmacommunication.de</a>
            </p>
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
