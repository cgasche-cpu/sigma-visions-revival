import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, Cog, Zap, TrendingUp, Users, Globe } from 'lucide-react';

export const Experience = () => {
  const industries = [
    {
      icon: Users,
      title: 'Beratung & Dienstleistung',
      description: 'Unternehmensberatungen, PR- & Marketing-Agenturen',
      color: 'bg-blue-500/10 text-blue-600'
    },
    {
      icon: Cog,
      title: 'Industrie & Technik',
      description: 'Automobilwirtschaft (OEM, Zulieferer), Luftfahrt, Produzierendes Gewerbe, Elektrotechnische Normung',
      color: 'bg-gray-500/10 text-gray-600'
    },
    {
      icon: Zap,
      title: 'Energie & IT',
      description: 'Energiedienstleister, IT-Hard- & Software, Cyber-Security',
      color: 'bg-primary/10 text-primary'
    },
    {
      icon: TrendingUp,
      title: 'Wirtschaft & Finanzen',
      description: 'Versicherungswirtschaft, Handel, E-Commerce',
      color: 'bg-green-500/10 text-green-600'
    },
    {
      icon: Globe,
      title: 'Gesellschaft & Organisationen',
      description: 'Stiftungen, Verbände, Bildungsträger, Politik',
      color: 'bg-purple-500/10 text-purple-600'
    }
  ];

  const achievements = [
    { number: '20+', label: 'Jahre Erfahrung' },
    { number: '500+', label: 'Projekte abgeschlossen' },
    { number: '100+', label: 'Zufriedene Kunden' },
    { number: '10+', label: 'Branchen abgedeckt' }
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-12">
            Zuhause in Ihrer Branche
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {achievement.number}
                </div>
                <div className="text-text-secondary font-medium">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>

          <p className="text-text-secondary text-lg md:text-xl max-w-3xl mx-auto mb-12">
            Tiefes Verständnis ist die Basis für exzellente Kommunikation. 
            Ich bringe langjährige Erfahrung in diesen Branchen mit:
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {industries.map((industry, index) => (
            <Card key={index} className="shadow-soft hover:shadow-strong transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg ${industry.color}`}>
                    <industry.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-text-primary mb-2">
                      {industry.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-text-secondary leading-relaxed">
                  {industry.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Special Project Highlight */}
        <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20 shadow-strong">
          <CardHeader>
            <div className="flex items-center space-x-3 mb-4">
              <Badge className="bg-primary text-primary-foreground">
                Langzeitprojekt
              </Badge>
              <span className="text-text-secondary">Seit 2012</span>
            </div>
            <CardTitle className="text-2xl md:text-3xl text-text-primary">
              Energie- und Ressourceneffizienz in Unternehmen
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-text-secondary text-lg leading-relaxed mb-6">
              Seit 2012 begleite ich die durch das Hessische Wirtschaftsministerium geförderte 
              Kampagne der LandesEnergieAgentur Hessen „Energieberatung für Unternehmen". 
              Ich unterstütze die bei der RKW Hessen GmbH angesiedelte Projektleitung mit 
              Presse- und Webseitentexten, Erstellung von Praxisbeispielen, Branchen-Infos, 
              Advertorials und Mailings.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                'EnEffTipps Broschüre 2022',
                'EnEffTipps Checkliste 2022', 
                'Krankenhausleitfaden 2022'
              ].map((doc, index) => (
                <div key={index} className="bg-background/80 rounded-lg p-4">
                  <div className="flex items-center space-x-2">
                    <Building2 className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium text-text-primary">{doc}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};