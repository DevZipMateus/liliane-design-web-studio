import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import project1 from "@/assets/portfolio-1.jpg";
import project3 from "@/assets/portfolio-3.jpg";
import project4 from "@/assets/portfolio-4.jpg";
import project5 from "@/assets/portfolio-5.jpg";
import project6 from "@/assets/portfolio-6.jpg";
import project7 from "@/assets/portfolio-7.jpg";
import project8 from "@/assets/portfolio-8.jpg";
import project9 from "@/assets/portfolio-9.jpg";
import project12 from "@/assets/portfolio-12.jpg";
import closetModerno from "@/assets/closet-moderno.jpg";
import cozinhaRusticoVerde from "@/assets/cozinha-rustico-verde.png";
import cozinhaMadeiradaGrafite from "@/assets/cozinha-madeirada-grafite.png";
import cozinhaIntegrada1 from "@/assets/cozinha-integrada-1.jpg";
import cozinhaIntegrada2 from "@/assets/cozinha-integrada-2.png";
import lavaboMadeirado from "@/assets/lavabo-madeirado.jpg";
import cozinhaBranca1 from "@/assets/cozinha-branca-1.png";
import cozinhaBranca2 from "@/assets/cozinha-branca-2.png";
import cozinhaBranca3 from "@/assets/cozinha-branca-3.png";
import salaTv from "@/assets/sala-tv.jpg";
import salaTv2 from "@/assets/sala-tv-2.png";

type ProjectItem = {
  image: string;
  title: string;
  category: string;
};

type PortfolioItem = {
  type: "single" | "carousel";
  title: string;
  category: string;
  images: ProjectItem[];
};

const portfolioItems: PortfolioItem[] = [
  {
    type: "carousel",
    title: "Home office corporativo",
    category: "Design de interiores",
    images: [
      { image: project1, title: "Home office corporativo", category: "Design de interiores" },
      { image: project9, title: "Home office corporativo", category: "Design de interiores" },
    ],
  },
  {
    type: "carousel",
    title: "Cozinha planejada",
    category: "Design de interiores",
    images: [
      { image: project3, title: "Cozinha planejada", category: "Design de interiores" },
      { image: project4, title: "Cozinha planejada", category: "Design de interiores" },
      { image: project12, title: "Cozinha planejada", category: "Design de interiores" },
    ],
  },
  {
    type: "single",
    title: "Cozinha moderna integrada",
    category: "Design de interiores",
    images: [{ image: project5, title: "Cozinha moderna integrada", category: "Design de interiores" }],
  },
  {
    type: "single",
    title: "Lavabo contemporâneo",
    category: "Design de interiores",
    images: [{ image: project6, title: "Lavabo contemporâneo", category: "Design de interiores" }],
  },
  {
    type: "single",
    title: "Dormitório clean",
    category: "Design de interiores",
    images: [{ image: project7, title: "Dormitório clean", category: "Design de interiores" }],
  },
  {
    type: "single",
    title: "Cozinha integrada",
    category: "Design de interiores",
    images: [{ image: project8, title: "Cozinha integrada", category: "Design de interiores" }],
  },
  {
    type: "single",
    title: "Closet moderno iluminado",
    category: "Design de interiores",
    images: [{ image: closetModerno, title: "Closet moderno iluminado", category: "Design de interiores" }],
  },
  {
    type: "single",
    title: "Cozinha rústica moderna",
    category: "Design de interiores",
    images: [{ image: cozinhaRusticoVerde, title: "Cozinha rústica moderna", category: "Design de interiores" }],
  },
  {
    type: "single",
    title: "Cozinha madeirada com grafite",
    category: "Design de interiores",
    images: [{ image: cozinhaMadeiradaGrafite, title: "Cozinha madeirada com grafite", category: "Design de interiores" }],
  },
  {
    type: "carousel",
    title: "Cozinha madeirada integrada",
    category: "Design de interiores",
    images: [
      { image: cozinhaIntegrada1, title: "Cozinha madeirada integrada", category: "Design de interiores" },
      { image: cozinhaIntegrada2, title: "Cozinha madeirada integrada", category: "Design de interiores" },
    ],
  },
  {
    type: "single",
    title: "Lavabo madeirado",
    category: "Design de interiores",
    images: [{ image: lavaboMadeirado, title: "Lavabo madeirado", category: "Design de interiores" }],
  },
  {
    type: "carousel",
    title: "Cozinha branca elegante",
    category: "Design de interiores",
    images: [
      { image: cozinhaBranca1, title: "Cozinha branca elegante", category: "Design de interiores" },
      { image: cozinhaBranca2, title: "Cozinha branca elegante", category: "Design de interiores" },
      { image: cozinhaBranca3, title: "Cozinha branca elegante", category: "Design de interiores" },
    ],
  },
  {
    type: "single",
    title: "Sala de TV",
    category: "Design de interiores",
    images: [{ image: salaTv, title: "Sala de TV", category: "Design de interiores" }],
  },
  {
    type: "single",
    title: "Sala de TV moderna",
    category: "Design de interiores",
    images: [{ image: salaTv2, title: "Sala de TV moderna", category: "Design de interiores" }],
  },
];

const PortfolioCard = ({ 
  item, 
  onOpenLightbox 
}: { 
  item: PortfolioItem; 
  onOpenLightbox: (item: PortfolioItem) => void;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? item.images.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === item.images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      onClick={() => onOpenLightbox(item)}
      className="group relative overflow-hidden rounded-lg shadow-soft hover:shadow-elegant transition-smooth aspect-[4/5] cursor-pointer"
    >
      <img
        src={item.images[currentIndex].image}
        alt={item.title}
        className="w-full h-full object-cover transition-smooth group-hover:scale-110"
      />
      {item.type === "carousel" && (
        <div className="absolute top-3 right-3 z-20 bg-background/90 backdrop-blur-sm rounded-full px-2 py-1.5 flex items-center gap-1 text-sm text-foreground shadow-md">
          <button
            onClick={handlePrev}
            className="p-1 hover:bg-muted rounded-full transition-colors"
            aria-label="Foto anterior"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <span className="font-medium px-1">{currentIndex + 1}/{item.images.length}</span>
          <button
            onClick={handleNext}
            className="p-1 hover:bg-muted rounded-full transition-colors"
            aria-label="Próxima foto"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-smooth z-10 pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <p className="text-primary-foreground/80 text-sm mb-1">{item.category}</p>
          <h3 className="text-primary-foreground text-xl font-semibold">{item.title}</h3>
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  return (
    <>
      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="max-w-7xl w-[95vw] p-0 bg-background/95 backdrop-blur-sm border-none">
          <button
            onClick={() => setSelectedItem(null)}
            className="absolute right-4 top-4 z-50 rounded-full bg-background/80 p-2 hover:bg-background transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
          {selectedItem && (
            <div className="relative w-full h-[90vh] flex items-center justify-center p-4">
              {selectedItem.type === "carousel" ? (
                <Carousel className="w-full max-w-5xl">
                  <CarouselContent>
                    {selectedItem.images.map((img, idx) => (
                      <CarouselItem key={idx}>
                        <div className="flex items-center justify-center h-[80vh]">
                          <img
                            src={img.image}
                            alt={selectedItem.title}
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </Carousel>
              ) : (
                <img
                  src={selectedItem.images[0].image}
                  alt={selectedItem.title}
                  className="max-w-full max-h-full object-contain"
                />
              )}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-primary-foreground/80 text-sm mb-1">{selectedItem.category}</p>
                <h3 className="text-primary-foreground text-xl font-semibold">{selectedItem.title}</h3>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
      <section id="portfolio" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Portfólio</h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Conheça alguns dos nossos projetos que transformaram espaços em ambientes únicos e
              inspiradores.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
            {portfolioItems.map((item, index) => (
              <PortfolioCard
                key={index}
                item={item}
                onOpenLightbox={setSelectedItem}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
