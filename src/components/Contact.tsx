import { Mail, Phone, Clock, MapPin, Instagram, Linkedin, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contato" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Entre em contato</h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Vamos conversar sobre o seu projeto? Estou à disposição para transformar seus ambientes
            em espaços únicos e inspiradores.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 max-w-5xl mx-auto">
          <div className="space-y-6 sm:space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Telefone</h3>
                <a
                  href="https://wa.me/5547999711690"
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  (47) 99971-1690
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">E-mail</h3>
                <a
                  href="mailto:lilianinteriores23@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  lilianinteriores23@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Endereço</h3>
                <p className="text-muted-foreground">
                  Rua Coronel Feddersen, 1557 - Sala comercial
                  <br />
                  Centro
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Horário de atendimento</h3>
                <p className="text-muted-foreground">
                  Segunda a sexta: 8:30 às 12:00 e 13:30 às 18:00
                  <br />
                  Sábados e domingos: Fechados
                </p>
              </div>
            </div>
          </div>

          <div className="bg-muted/30 p-6 sm:p-8 rounded-lg">
            <h3 className="text-xl sm:text-2xl font-semibold mb-6">Redes sociais</h3>
            <div className="space-y-4">
              <a
                href="https://instagram.com/lilianinteriores23"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-lg bg-background hover:bg-primary/5 transition-smooth group"
              >
                <Instagram className="w-6 h-6 text-primary" />
                <div>
                  <p className="font-medium">Instagram</p>
                  <p className="text-sm text-muted-foreground">@lilianinteriores23</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/lilian-t-erkmann"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-lg bg-background hover:bg-primary/5 transition-smooth group"
              >
                <Linkedin className="w-6 h-6 text-primary" />
                <div>
                  <p className="font-medium">LinkedIn</p>
                  <p className="text-sm text-muted-foreground">Lilian T. Erkmann</p>
                </div>
              </a>

              <a
                href="https://www.facebook.com/LilianDesignDeInteriores"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-lg bg-background hover:bg-primary/5 transition-smooth group"
              >
                <Facebook className="w-6 h-6 text-primary" />
                <div>
                  <p className="font-medium">Facebook</p>
                  <p className="text-sm text-muted-foreground">Lilian Design de Interiores</p>
                </div>
              </a>
            </div>

            <Button
              asChild
              className="w-full mt-8 bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant"
              size="lg"
            >
              <a href="https://wa.me/5547999711690" target="_blank" rel="noopener noreferrer">
                Fale conosco no WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
