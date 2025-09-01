import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Clock, Star, CheckCircle } from 'lucide-react';
import professionalPortrait from '@/assets/professional-portrait.jpg';

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Lassen Sie uns über Ihre Ziele sprechen
          </h2>
          <p className="text-text-secondary text-lg md:text-xl max-w-3xl mx-auto">
            Sind Sie bereit für Kommunikation, die wirklich etwas bewegt? Finden wir in einem 
            unverbindlichen Gespräch heraus, wie ich Sie am besten unterstützen kann.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-strong">
            <CardHeader>
              <CardTitle className="text-2xl text-text-primary flex items-center">
                <Clock className="h-6 w-6 text-primary mr-3" />
                Kostenfreie Erstberatung (ca. 20 Minuten)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-text-primary">Vorname</Label>
                    <Input 
                      id="firstName" 
                      className="mt-1" 
                      placeholder="Ihr Vorname"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-text-primary">Nachname</Label>
                    <Input 
                      id="lastName" 
                      className="mt-1" 
                      placeholder="Ihr Nachname"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-text-primary">E-Mail</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    className="mt-1" 
                    placeholder="ihre.email@beispiel.de"
                  />
                </div>
                
                <div>
                  <Label htmlFor="company" className="text-text-primary">Unternehmen</Label>
                  <Input 
                    id="company" 
                    className="mt-1" 
                    placeholder="Ihr Unternehmen"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-text-primary">Ihr Anliegen</Label>
                  <Textarea 
                    id="message" 
                    rows={4} 
                    className="mt-1" 
                    placeholder="Beschreiben Sie kurz Ihr Projekt oder Ihre Anfrage..."
                  />
                </div>
                
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-3">
                  Erstberatung anfragen
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & About */}
          <div className="space-y-8">
            {/* Profile */}
            <Card className="shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-center space-x-6 mb-6">
                  <img 
                    src={professionalPortrait} 
                    alt="Christian Gasche - Freier Journalist und Redenschreiber"
                    className="w-24 h-24 rounded-full object-cover shadow-soft"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-text-primary">Christian Gasche</h3>
                    <p className="text-text-secondary">Freier Journalist & Redenschreiber</p>
                    <div className="flex items-center mt-2">
                      <Star className="h-4 w-4 text-primary fill-primary" />
                      <Star className="h-4 w-4 text-primary fill-primary" />
                      <Star className="h-4 w-4 text-primary fill-primary" />
                      <Star className="h-4 w-4 text-primary fill-primary" />
                      <Star className="h-4 w-4 text-primary fill-primary" />
                      <span className="ml-2 text-sm text-text-secondary">20+ Jahre Erfahrung</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center text-text-secondary">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    Über 500 erfolgreich abgeschlossene Projekte
                  </div>
                  <div className="flex items-center text-text-secondary">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    Spezialist für komplexe Fachthemen
                  </div>
                  <div className="flex items-center text-text-secondary">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    KI-gestützte Arbeitsweise für maximale Effizienz
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Direct Contact */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-xl text-text-primary">Direkter Kontakt</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-primary mr-3" />
                    <a 
                      href="mailto:cgasche@sigmacommunication.de" 
                      className="text-primary hover:underline"
                    >
                      cgasche@sigmacommunication.de
                    </a>
                  </div>
                  
                  <div className="bg-secondary/50 p-4 rounded-lg">
                    <p className="text-sm text-text-secondary leading-relaxed">
                      <strong>Schnelle Antwort garantiert:</strong> Ich antworte in der Regel 
                      innerhalb von 24 Stunden und biete Ihnen zeitnah einen Termin für 
                      unser unverbindliches Erstgespräch an.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* What to Expect */}
            <Card className="bg-primary/5 border-primary/20 shadow-soft">
              <CardHeader>
                <CardTitle className="text-xl text-text-primary">Was Sie erwarten können</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-text-secondary">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    Analyse Ihrer Kommunikationsziele
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    Konkrete Lösungsvorschläge für Ihr Projekt
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    Transparente Zeitplanung und Kostenübersicht
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    Unverbindliche Beratung ohne versteckte Kosten
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};