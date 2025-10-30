import { Armchair, Home, Trees, Paintbrush, Compass, Building } from "lucide-react";

const services = [
  {
    icon: Armchair,
    title: "Decorações",
    description: "Peças exclusivas e curadoria de elementos decorativos que trazem personalidade e elegância aos ambientes.",
  },
  {
    icon: Paintbrush,
    title: "Design de interiores",
    description: "Projetos completos que unem funcionalidade, estética e conforto, criando espaços únicos e acolhedores.",
  },
  {
    icon: Trees,
    title: "Paisagismo",
    description: "Planejamento de áreas verdes que integram natureza e arquitetura com harmonia e sofisticação.",
  },
  {
    icon: Home,
    title: "Áreas externas",
    description: "Criação de espaços ao ar livre que ampliam o conforto e a beleza da sua residência.",
  },
  {
    icon: Building,
    title: "Reformas e ampliações",
    description: "Transformação completa de ambientes existentes com planejamento técnico e criativo.",
  },
  {
    icon: Compass,
    title: "Consultorias",
    description: "Orientação especializada para suas decisões de design, decoração e arquitetura residencial.",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Serviços</h2>
          <p className="text-lg text-muted-foreground">
            Soluções completas em design de interiores, decoração e arquitetura para transformar
            seus espaços em ambientes únicos e funcionais.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-lg bg-card border border-border hover:shadow-elegant transition-smooth hover:-translate-y-1"
              >
                <div className="w-14 h-14 mb-4 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
