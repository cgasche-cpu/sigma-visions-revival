import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-communication.jpg';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Professional communication and satellite technology"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-gradient opacity-85"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-hero-text/80 text-lg md:text-xl mb-4 animate-fade-in">
            Herzlich willkommen!
          </p>
          
          <h1 className="text-hero-text text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in-up">
            Überzeugende Kommunikation für{' '}
            <span className="text-primary">anspruchsvolle Themen</span>
          </h1>
          
          <p className="text-hero-text/90 text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up-delay">
            Wo KI an ihre Grenzen stößt, beginnt meine Arbeit: Mit strategischem Denken, 
            journalistischem Handwerk und über 20 Jahren Erfahrung sorge ich dafür, 
            dass Ihre Botschaft ankommt – klar, authentisch und wirkungsvoll.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up-delay-2">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-3 shadow-strong"
            >
              Kostenlose Erstberatung
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-hero-text text-hero-text hover:bg-hero-text hover:text-blue-primary text-lg px-8 py-3"
            >
              Mehr erfahren
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-hero-text/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-hero-text/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};