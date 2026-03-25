import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mic, FileText, Sparkles, CheckCircle, Users, Award, BookOpen } from 'lucide-react';
import heroMicrophone from '@/assets/hero-microphone.jpg';
import { useNavigate } from 'react-router-dom';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6 }
  })
};

const Landing = () => {
  const navigate = useNavigate();

  const steps = [
    { num: '01', title: 'Anlass wählen', desc: '18 Anlässe — von Hochzeit bis Stadtratssitzung. Der Generator passt Stil, Struktur und Fragen automatisch an.', icon: BookOpen },
    { num: '02', title: 'Daten eingeben', desc: 'Name, Redezeit, Tonlage, optionales Datum. Die KI sucht passende historische Jahrestage.', icon: FileText },
    { num: '03', title: 'Interview führen', desc: '3–5 gezielte Rückfragen nach echten Geschichten. Per Tastatur oder Diktierfunktion.', icon: Mic },
    { num: '04', title: 'Rede erhalten', desc: 'KI-Generierung mit automatischer Qualitätsprüfung nach 7 Kriterien. Download als DOCX oder TXT.', icon: Sparkles },
  ];

  const occasions = {
    'Privat & Familie': ['Runder Geburtstag', 'Geburtstag', 'Hochzeit', 'Ruhestand', 'Trauerrede', 'Taufe / Kommunion', 'Schulabschluss'],
    'Beruf & Unternehmen': ['Firmenjubiläum', 'Mitarbeiterehrung', 'Messeauftritt', 'Jahrestagung', 'Verabschiedung', 'Unternehmensgründung'],
    'Politik & Gesellschaft': ['Gedenktag', 'Vereinsjubiläum', 'Eröffnungsrede', 'Ehrenamtsauszeichnung', 'Stadtratssitzung'],
  };

  const stats = [
    { value: '18', label: 'Anlässe' },
    { value: '70', label: 'Punkte Qualitäts-Score' },
    { value: '201+', label: 'Zitate in 12 Modulen' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="container mx-auto px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight font-body">
              <span className="text-primary">SIGMA</span>
              <span className="text-foreground"> COMMUNICATION</span>
            </span>
            <span className="text-xs text-muted-foreground font-body ml-2 hidden sm:inline">Reden-Generator · v3.1</span>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" className="font-body text-sm" onClick={() => navigate('/login')}>
              Anmelden
            </Button>
            <Button className="font-body text-sm shadow-glow" onClick={() => window.location.href = 'mailto:info@sigmacommunication.de?subject=Zugang%20Reden-Generator'}>
              Zugang anfragen
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-hero-gradient">
      {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={heroMicrophone}
            alt="Mikrofon auf Bühne"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-hero-gradient opacity-75" />
        </div>

        <div className="relative container mx-auto px-6 pt-24 pb-16">
          <div className="max-w-4xl">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-primary font-body text-sm font-semibold tracking-[0.2em] uppercase mb-6"
            >
              KI-gestützt · Journalistisch präzise
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-hero-text text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-8"
            >
              Ihre Rede{' '}
              <span className="text-gradient italic">wartet.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-hero-text/70 text-lg md:text-xl max-w-2xl leading-relaxed mb-10 font-body"
            >
              Der SIGMA Reden-Generator erstellt professionelle, personalisierte Reden
              für 18 Anlässe — vom runden Geburtstag bis zur Trauerrede.
              Ein kurzes Interview sammelt Ihre Geschichten.
              Die KI schreibt die Rede. Sie halten sie.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="font-body text-base px-8 py-6 shadow-glow bg-accent-gradient hover:opacity-90 transition-opacity"
                onClick={() => window.open('https://sigma-reden-generator.streamlit.app/', '_blank')}
              >
                App öffnen <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="font-body text-base px-8 py-6 border-hero-text/20 text-hero-text hover:bg-hero-text/10"
                onClick={() => window.location.href = 'mailto:info@sigmacommunication.de?subject=Zugang%20Reden-Generator'}
              >
                Zugang anfragen
              </Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-hero-text/40 text-sm font-body mt-6"
            >
              Geschlossener Beta-Betrieb · Zugang per E-Mail · Kein Abo · Kein Formular
            </motion.p>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-hero-text/20 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-primary rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="py-20 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary font-display">{stat.value}</div>
                <div className="text-sm text-muted-foreground font-body mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="text-center mb-16"
          >
            <p className="text-primary font-body text-sm font-semibold tracking-[0.2em] uppercase mb-4">So funktioniert es</p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              In vier Schritten zur <span className="text-gradient italic">fertigen Rede.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="group relative bg-card rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-strong transition-all duration-500"
              >
                <div className="absolute top-6 right-6 text-5xl font-bold text-muted/50 font-display">{step.num}</div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <step.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground font-display">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-body">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiator */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="text-center mb-16"
          >
            <p className="text-primary font-body text-sm font-semibold tracking-[0.2em] uppercase mb-4">Was andere KI-Tools nicht können</p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Kein KI-<span className="text-gradient italic">Einheitsbrei.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}
              className="bg-muted/50 rounded-2xl p-8 border border-border"
            >
              <div className="text-3xl mb-4">❌</div>
              <h3 className="text-lg font-bold mb-3 font-display text-foreground">Andere KI-Tools</h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                Name eingeben, Rede bekommen. Erkennbar generiert, austauschbar, ohne persönliche Note.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
              className="bg-card rounded-2xl p-8 border-2 border-primary/30 shadow-glow"
            >
              <div className="text-3xl mb-4">✓</div>
              <h3 className="text-lg font-bold mb-3 font-display text-primary">SIGMA Reden-Generator</h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                Journalistisches Befragungsprotokoll zwingt das System, <strong className="text-foreground">echte Geschichten</strong> zu sammeln.
                Das Ergebnis klingt nach Ihnen — nicht nach einer Maschine.
              </p>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}
            className="flex flex-wrap justify-center gap-4 mt-12 max-w-3xl mx-auto"
          >
            {['ABA-Prinzip', '7 Qualitätskriterien', 'Score-Ausweis', 'Zitat-Module', 'Diktierfunktion'].map(tag => (
              <span key={tag} className="px-4 py-2 rounded-full bg-secondary text-sm font-body text-foreground border border-border">
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Occasions */}
      <section className="py-24 bg-hero-gradient">
        <div className="container mx-auto px-6">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}
            className="text-center mb-16"
          >
            <p className="text-primary font-body text-sm font-semibold tracking-[0.2em] uppercase mb-4">Alle 18 Anlässe</p>
            <h2 className="text-3xl md:text-5xl font-bold text-hero-text">
              Für jeden Moment die <span className="text-gradient italic">richtige Rede.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {Object.entries(occasions).map(([category, items], i) => (
              <motion.div
                key={category}
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
                className="bg-glass rounded-2xl p-8 border border-hero-text/10"
              >
                <h3 className="text-lg font-bold mb-4 text-hero-text font-display">{category}</h3>
                <ul className="space-y-2">
                  {items.map(item => (
                    <li key={item} className="text-hero-text/70 text-sm font-body flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Bereit für Ihre <span className="text-gradient italic">perfekte Rede?</span>
            </h2>
            <p className="text-muted-foreground text-lg font-body mb-10 max-w-xl mx-auto">
              Öffnen Sie die App und erstellen Sie in wenigen Minuten eine professionelle, persönliche Rede.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="font-body text-base px-10 py-6 shadow-glow bg-accent-gradient hover:opacity-90"
                onClick={() => window.open('https://sigma-reden-generator.streamlit.app/', '_blank')}
              >
                App öffnen <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="font-body text-base px-10 py-6"
                onClick={() => window.location.href = 'mailto:info@sigmacommunication.de?subject=Zugang%20Reden-Generator'}
              >
                Zugang anfragen
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm text-muted-foreground font-body">
            SIGMA COMMUNICATION · Frankfurt am Main
          </span>
          <div className="flex gap-6">
            <a href="https://www.sigmacommunication.de/impressum" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors font-body">
              Impressum
            </a>
            <a href="https://www.sigmacommunication.de" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors font-body">
              sigmacommunication.de
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
