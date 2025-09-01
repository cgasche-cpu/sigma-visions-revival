import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Zap, Shield, CheckCircle } from 'lucide-react';

export const Approach = () => {
  const benefits = [
    {
      icon: Zap,
      title: 'Schnellere Ergebnisse',
      description: 'bei komplexen Fachartikeln, Whitepapern und Berichten.'
    },
    {
      icon: Brain,
      title: 'Bessere Texte',
      description: 'durch stilistische Varianten und eine klare, zielgruppengerechte Sprache.'
    },
    {
      icon: Shield,
      title: 'Volle Transparenz',
      description: 'über den Methodeneinsatz, ohne Kompromisse bei Qualität und Authentizität.'
    }
  ];

  return (
    <section id="approach" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Mein Ansatz: Menschliche Intelligenz trifft auf{' '}
            <span className="text-primary">künstliche Effizienz</span>
          </h2>
          <p className="text-text-secondary text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Ich setze KI nicht als Texter-Ersatz ein, sondern als methodisches Werkzeug und 
            kreativen Sparringspartner. Durch professionelles <strong>Prompt Engineering</strong> beschleunige 
            ich Recherchen, verfeinere Argumentationsketten und optimiere Texte iterativ für 
            maximale Wirkung. Doch die entscheidenden Instanzen bleiben immer mein journalistisches 
            Urteilsvermögen und meine redaktionelle Verantwortung.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-text-primary text-center mb-12">
            Für Sie bedeutet das:
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center shadow-soft hover:shadow-strong transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="mx-auto p-4 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-text-primary">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-text-secondary">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Process Flow */}
        <div className="bg-secondary/20 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-text-primary text-center mb-12">
            Mein Arbeitsprozess
          </h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Briefing & Analyse',
                description: 'Ihre Ziele, Zielgruppe und Botschaft verstehen'
              },
              {
                step: '02',
                title: 'KI-gestützte Recherche',
                description: 'Effiziente Informationsbeschaffung und Strukturierung'
              },
              {
                step: '03',
                title: 'Redaktionelle Arbeit',
                description: 'Journalistische Qualitätssicherung und Stiloptimierung'
              },
              {
                step: '04',
                title: 'Finalisierung',
                description: 'Abstimmung und finale Anpassungen mit Ihnen'
              }
            ].map((process, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="mx-auto w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mb-4">
                    {process.step}
                  </div>
                  <h4 className="font-semibold text-text-primary mb-2">{process.title}</h4>
                  <p className="text-sm text-text-secondary">{process.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-6 left-full w-6 h-0.5 bg-primary/30 transform translate-x-0"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};