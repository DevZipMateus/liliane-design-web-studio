import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Store, ShoppingBag, Sparkles } from "lucide-react";

const VitrineSection = () => {
  return (
    <section id="vitrine-section" className="py-20 sm:py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Explore Nossa Vitrine Virtual
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Descubra uma seleção exclusiva de objetos de decoração e acessórios 
            cuidadosamente escolhidos para transformar seu ambiente. Nossa vitrine oferece 
            peças únicas que combinam design, qualidade e sofisticação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          <div className="bg-background/50 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-border hover:border-primary/50 transition-smooth shadow-soft">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Store className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Catálogo Completo
            </h3>
            <p className="text-muted-foreground">
              Navegue por nossa coleção completa de produtos disponíveis para compra e entrega.
            </p>
          </div>

          <div className="bg-background/50 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-border hover:border-primary/50 transition-smooth shadow-soft">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <ShoppingBag className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Compra Facilitada
            </h3>
            <p className="text-muted-foreground">
              Sistema simples e intuitivo para escolher e adquirir os produtos que você ama.
            </p>
          </div>

          <div className="bg-background/50 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-border hover:border-primary/50 transition-smooth shadow-soft">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Peças Exclusivas
            </h3>
            <p className="text-muted-foreground">
              Produtos selecionados com cuidado para trazer elegância e personalidade ao seu espaço.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link to="/vitrine">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant text-base sm:text-lg px-8 sm:px-12">
              Acessar Vitrine
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VitrineSection;
