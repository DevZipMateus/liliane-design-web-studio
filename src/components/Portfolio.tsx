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
    title: "Sala de jantar integrada",
    category: "Design de interiores",
    images: [{ image: project5, title: "Sala de jantar integrada", category: "Design de interiores" }],
  },
  {
    type: "single",
    title: "Cozinha gourmet",
    category: "Design de interiores",
    images: [{ image: project6, title: "Cozinha gourmet", category: "Design de interiores" }],
  },
  {
    type: "single",
    title: "Lavabo contemporâneo",
    category: "Design de interiores",
    images: [{ image: project7, title: "Lavabo contemporâneo", category: "Design de interiores" }],
  },
  {
    type: "single",
    title: "Dormitório elegante",
    category: "Design de interiores",
    images: [{ image: project8, title: "Dormitório elegante", category: "Design de interiores" }],
  },
];

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
              <div
                key={index}
                onClick={() => setSelectedItem(item)}
                className="group relative overflow-hidden rounded-lg shadow-soft hover:shadow-elegant transition-smooth aspect-[4/5] cursor-pointer"
              >
                <img
                  src={item.images[0].image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                />
                {item.type === "carousel" && (
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-background/90 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-2 text-sm text-foreground shadow-md">
                    <ChevronLeft className="h-4 w-4" />
                    <span className="font-medium">{item.images.length} fotos</span>
                    <ChevronRight className="h-4 w-4" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-smooth">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-primary-foreground/80 text-sm mb-1">{item.category}</p>
                    <h3 className="text-primary-foreground text-xl font-semibold">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
