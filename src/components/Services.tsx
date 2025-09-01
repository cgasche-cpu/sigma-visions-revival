import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PenTool, Megaphone, Search, FileText, Users, Target } from 'lucide-react';
import speechWritingImage from '@/assets/speech-writing.jpg';
import contentStrategyImage from '@/assets/content-strategy.jpg';

export const Services = () => {
  const services = [
    {
      icon: PenTool,
      title: 'Redenschreibung',
      description: 'Brillante Formulierungen für Vorstände, Manager und Politiker. Ihre Stichworte werden zu überzeugenden Reden.',
      features: ['Individuelle Tonalität', 'Gründliche Recherche', 'Rhetorische Exzellenz']
    },
    {
      icon: FileText,
      title: 'Content Marketing',
      description: 'Von Fachartikeln bis Nachhaltigkeitsberichten – alle Formate aus einer Hand.',
      features: ['Kundenmagazine', 'Geschäftsberichte', 'Fachartikel', 'E-Books & Whitepaper']
    },
    {
      icon: Search,
      title: 'SEO-Texte',
      description: 'Nachhaltige Sichtbarkeit bei Google durch professionelle SEO-Optimierung.',
      features: ['Keyword-Recherche', 'Technische Optimierung', 'Content-Strategien']
    },
    {
      icon: Target,
      title: 'Strategisches Storytelling',
      description: 'Konsistente Markenerzählung über alle Kanäle hinweg.',
      features: ['Markenkommunikation', 'Narrative Entwicklung', 'Cross-Channel Konsistenz']
    },
    {
      icon: Megaphone,
      title: 'Prompt Engineering',
      description: 'KI als methodisches Werkzeug für schnellere und bessere Texte.',
      features: ['Beschleunigte Recherche', 'Stilistische Optimierung', 'Qualitätskontrolle']
    },
    {
      icon: Users,
      title: 'Projektkoordination',
      description: 'Komplette Corporate-Publishing-Projekte aus bewährtem Netzwerk.',
      features: ['One Face to Customer', 'Spezialistenteams', 'Projektmanagement']
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Meine Dienstleistungen
          </h2>
          <p className="text-text-secondary text-lg md:text-xl max-w-3xl mx-auto">
            Vielseitige Kommunikationslösungen – präzise auf Ihre Zielgruppe und 
            Ihr Corporate Wording abgestimmt.
          </p>
        </div>

        {/* Featured Services */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="overflow-hidden shadow-soft hover:shadow-strong transition-shadow duration-300">
            <div className="aspect-video overflow-hidden">
              <img 
                src={speechWritingImage} 
                alt="Professional speech writing service"
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-2xl text-text-primary">
                Reden schreiben lassen, die im Gedächtnis bleiben
              </CardTitle>
              <CardDescription className="text-text-secondary">
                Sie sind Vorstand, Manager oder Politiker und stehen oft im Rampenlicht? 
                Ich bin Ihre „verlängerte Werkbank".
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="overflow-hidden shadow-soft hover:shadow-strong transition-shadow duration-300">
            <div className="aspect-video overflow-hidden">
              <img 
                src={contentStrategyImage} 
                alt="Strategic content marketing and storytelling"
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-2xl text-text-primary">
                Strategisches Storytelling für Ihre Marke
              </CardTitle>
              <CardDescription className="text-text-secondary">
                Authentizität entsteht durch Konsistenz. Ich entwickle eine Gesamterzählung, 
                die sich durch alle Kanäle zieht.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Service Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="shadow-soft hover:shadow-strong transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg mr-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-text-primary">{service.title}</CardTitle>
                </div>
                <CardDescription className="text-text-secondary">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-text-secondary">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};