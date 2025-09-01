import { Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-blue-primary text-hero-text py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div>
            <div className="mb-4">
              <span className="text-2xl font-bold">
                <span className="text-primary">SIGMA</span>
                <span className="text-hero-text"> COMMUNICATION</span>
              </span>
            </div>
            <p className="text-hero-text/80 leading-relaxed">
              Überzeugende Kommunikation für anspruchsvolle Themen. 
              Mit über 20 Jahren Erfahrung und modernster KI-Unterstützung.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-hero-text">Dienstleistungen</h3>
            <ul className="space-y-2 text-hero-text/80">
              <li>Redenschreibung</li>
              <li>Content Marketing</li>
              <li>SEO-Texte</li>
              <li>Strategisches Storytelling</li>
              <li>Projektkoordination</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-hero-text">Kontakt</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-3" />
                <a 
                  href="mailto:cgasche@sigmacommunication.de" 
                  className="text-hero-text/80 hover:text-primary transition-colors"
                >
                  cgasche@sigmacommunication.de
                </a>
              </div>
              <p className="text-hero-text/60 text-sm">
                Kostenfreie Erstberatung<br />
                Antwort innerhalb von 24h
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-hero-text/20 mt-8 pt-8 text-center">
          <p className="text-hero-text/60 text-sm">
            © {new Date().getFullYear()} Sigma Communication - Christian Gasche. 
            Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};