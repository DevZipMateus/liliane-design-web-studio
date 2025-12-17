import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8">
          {/* Logo e descrição */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img src={logo} alt="Lilian Design de Interiores" className="h-10 sm:h-12 w-auto mb-4" />
            <p className="text-sm text-accent-foreground/80 leading-relaxed">
              Transformando ambientes em experiências únicas há mais de 20 anos.
            </p>
          </div>

          {/* Links rápidos */}
          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("hero")}
                  className="text-sm text-accent-foreground/80 hover:text-primary transition-smooth"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("sobre")}
                  className="text-sm text-accent-foreground/80 hover:text-primary transition-smooth"
                >
                  Sobre nós
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("servicos")}
                  className="text-sm text-accent-foreground/80 hover:text-primary transition-smooth"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("portfolio")}
                  className="text-sm text-accent-foreground/80 hover:text-primary transition-smooth"
                >
                  Portfólio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contato")}
                  className="text-sm text-accent-foreground/80 hover:text-primary transition-smooth"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <a
                  href="https://wa.me/5547999711690"
                  className="text-sm text-accent-foreground/80 hover:text-primary transition-smooth"
                >
                  (47) 99971-1690
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:lilianinteriores23@gmail.com"
                  className="text-sm text-accent-foreground/80 hover:text-primary transition-smooth break-all"
                >
                  lilianinteriores23@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <a
                  href="https://maps.app.goo.gl/GBprqLT9mk284Ms68"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-accent-foreground/80 hover:text-primary transition-smooth"
                >
                  Rua Coronel Feddersen, 1557
                  <br />
                  Centro - Rio do Sul
                </a>
              </li>
            </ul>
          </div>

          {/* Redes sociais */}
          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-4">Redes sociais</h3>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/lilianinteriores23"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-smooth"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/lilian-t-erkmann"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-smooth"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/LilianDesignDeInteriores"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-smooth"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm text-accent-foreground/80 mt-4 leading-relaxed">
              Segunda a sexta
              <br />
              8:30 - 12:00 | 13:30 - 18:00
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-accent-foreground/10 pt-6">
          <p className="text-center text-sm text-accent-foreground/60">
            © {new Date().getFullYear()} Lilian Design de Interiores e Decorações LTDA. Todos os
            direitos reservados.
          </p>
          <p className="text-center text-xs text-accent-foreground/40 mt-2">
            CNPJ: 55.363.506/0001-57
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
