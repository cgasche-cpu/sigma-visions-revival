import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: 'https://www.sigmacommunication.de/', label: 'Home', external: true },
    { href: 'https://www.sigmacommunication.de/#services', label: 'Dienstleistungen', external: true },
    { href: 'https://www.sigmacommunication.de/#approach', label: 'Arbeitsweise', external: true },
    { href: 'https://www.sigmacommunication.de/#erfahrung', label: 'Erfahrung', external: true },
    { href: '/Profil-Christian_Gasche-2025.pdf', label: 'Profil (PDF)', external: true },
    { href: 'https://www.sigmacommunication.de/#kontakt', label: 'Kontakt', external: true },
  ];

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <span className="text-2xl font-bold">
              <span className="text-primary">SIGMA</span>
              <span className="text-text-primary"> COMMUNICATION</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target={item.external ? '_blank' : '_self'}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className="text-text-secondary hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex">
            <Button 
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => window.open('mailto:cgasche@sigmacommunication.de?subject=Erstberatung%20Anfrage', '_blank')}
            >
              Erstberatung buchen
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-text-primary" />
            ) : (
              <Menu className="h-6 w-6 text-text-primary" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border">
            <nav className="py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target={item.external ? '_blank' : '_self'}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className="block text-text-secondary hover:text-primary transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mt-4"
                onClick={() => window.open('mailto:cgasche@sigmacommunication.de?subject=Erstberatung%20Anfrage', '_blank')}
              >
                Erstberatung buchen
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};