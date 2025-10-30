import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-interior.jpg";
const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };
  return <section id="hero" className="relative min-h-screen flex items-center pt-20 sm:pt-24">
      <div className="absolute inset-0 z-0" style={{
      backgroundImage: `url(${heroImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"
    }}>
        <div className="absolute inset-0 bg-gradient-to-r from-background/98 via-background/90 sm:via-background/85 to-background/50 sm:to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-2xl bg-background/20 backdrop-blur-sm p-6 sm:p-8 md:p-10 rounded-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
            Lilian Design de Interiores
          </h1>
          <h2 className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 leading-relaxed text-neutral-950 lg:text-2xl">
            Transformando ambientes em experiências únicas. Design sofisticado que reflete sua
            personalidade e valoriza cada detalhe do seu espaço.
          </h2>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button onClick={() => scrollToSection("portfolio")} size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto">
              Ver projetos
            </Button>
            <Button onClick={() => scrollToSection("contato")} size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto">
              Fale conosco
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;