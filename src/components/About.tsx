import { Heart, Target, Sparkles } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 sm:mb-6">Sobre nós</h2>
          <p className="text-base sm:text-lg text-muted-foreground text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
            Acredito que cada espaço carrega uma história — e que o design tem o poder de
            transformá-la em emoção, conforto e identidade.
          </p>

          <div className="prose prose-lg max-w-none mb-16">
            <p className="text-muted-foreground leading-relaxed">
              Minha missão é projetar ambientes que traduzam quem você é, valorizando sua rotina,
              seu estilo e o que realmente importa para você. Com olhar atento aos detalhes,
              equilíbrio estético e funcionalidade inteligente, desenvolvo projetos que unem
              sensibilidade, técnica e propósito. A luz, a textura, as formas, os materiais e
              decorações — tudo conversa para criar a atmosfera perfeita.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-6">
              Há mais de duas décadas, o design faz parte da minha essência. Em 2013, me formei em
              Design de Interiores pela UNIDAVI, em Rio do Sul - SC. Com 6 anos de escritório, construí
              uma trajetória baseada em sensibilidade, dedicação e respeito ao estilo e à
              personalidade de cada cliente.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Missão</h3>
              <p className="text-muted-foreground">
                Criar ambientes exclusivos e cheios de significado, que promovam bem-estar,
                funcionalidade e beleza.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Visão</h3>
              <p className="text-muted-foreground">
                Ser referência em design de interiores que combina estética sofisticada,
                acolhimento e experiência sensorial.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Valores</h3>
              <p className="text-muted-foreground">
                Escuta, empatia, autenticidade, excelência, inovação e sustentabilidade em cada
                projeto.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
