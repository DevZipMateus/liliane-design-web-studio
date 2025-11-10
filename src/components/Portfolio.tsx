import project1 from "@/assets/portfolio-1.jpg";
import project2 from "@/assets/portfolio-2.jpg";
import project3 from "@/assets/portfolio-3.jpg";
import project4 from "@/assets/portfolio-4.jpg";
import project5 from "@/assets/portfolio-5.jpg";
import project6 from "@/assets/portfolio-6.jpg";
import project7 from "@/assets/portfolio-7.jpg";
import project8 from "@/assets/portfolio-8.jpg";

const projects = [
  {
    image: project1,
    title: "Home office corporativo",
    category: "Design de interiores",
  },
  {
    image: project2,
    title: "Quarto moderno",
    category: "Design de interiores",
  },
  {
    image: project3,
    title: "Cozinha planejada",
    category: "Design de interiores",
  },
  {
    image: project4,
    title: "Sala de jantar integrada",
    category: "Design de interiores",
  },
  {
    image: project5,
    title: "Cozinha gourmet",
    category: "Design de interiores",
  },
  {
    image: project6,
    title: "Lavabo contemporâneo",
    category: "Design de interiores",
  },
  {
    image: project7,
    title: "Dormitório elegante",
    category: "Design de interiores",
  },
  {
    image: project8,
    title: "Cozinha clean madeirada",
    category: "Design de interiores",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Portfólio</h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Conheça alguns dos nossos projetos que transformaram espaços em ambientes únicos e
            inspiradores.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-soft hover:shadow-elegant transition-smooth aspect-[4/5]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-smooth group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-smooth">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-primary-foreground/80 text-sm mb-1">{project.category}</p>
                  <h3 className="text-primary-foreground text-xl font-semibold">{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
