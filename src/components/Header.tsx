import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const handleNavigation = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    
    if (location.pathname === "/") {
      // Se já estiver na página inicial, faz scroll
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    } else {
      // Se estiver em outra página, navega para home e depois faz scroll
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 100);
    }
  };
  return <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-soft" : "bg-transparent"}`}>
        <div className="container mx-auto px-4 py-3 sm:py-4">
          <nav className="flex items-center justify-between">
            <button onClick={() => handleNavigation("hero")} className="flex items-center transition-smooth hover:opacity-80">
              <img src={logo} alt="Lilian Design de Interiores" className="h-20 sm:h-12 w-auto" />
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              <button onClick={() => handleNavigation("sobre")} className="text-foreground/80 hover:text-primary transition-smooth font-medium">
                Sobre
              </button>
              <button onClick={() => handleNavigation("servicos")} className="text-foreground/80 hover:text-primary transition-smooth font-medium">
                Serviços
              </button>
              <button onClick={() => handleNavigation("portfolio")} className="text-foreground/80 hover:text-primary transition-smooth font-medium">
                Portfólio
              </button>
              <Link to="/vitrine" className="text-foreground/80 hover:text-primary transition-smooth font-medium">
                Vitrine
              </Link>
              <Button onClick={() => handleNavigation("contato")} className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant">
                Contato
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 text-foreground hover:text-primary transition-smooth" aria-label="Menu">
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-background/95 backdrop-blur-md" onClick={() => setIsMobileMenuOpen(false)} />
          <nav className="relative mt-[72px] bg-background/98 backdrop-blur-md border-b border-border shadow-elegant">
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              <button onClick={() => handleNavigation("sobre")} className="text-left py-3 px-4 text-foreground/80 hover:text-primary hover:bg-muted/50 rounded-lg transition-smooth font-medium">
                Sobre
              </button>
              <button onClick={() => handleNavigation("servicos")} className="text-left py-3 px-4 text-foreground/80 hover:text-primary hover:bg-muted/50 rounded-lg transition-smooth font-medium">
                Serviços
              </button>
              <button onClick={() => handleNavigation("portfolio")} className="text-left py-3 px-4 text-foreground/80 hover:text-primary hover:bg-muted/50 rounded-lg transition-smooth font-medium">
                Portfólio
              </button>
              <Link to="/vitrine" onClick={() => setIsMobileMenuOpen(false)} className="text-left py-3 px-4 text-foreground/80 hover:text-primary hover:bg-muted/50 rounded-lg transition-smooth font-medium">
                Vitrine
              </Link>
              <Button onClick={() => handleNavigation("contato")} className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant" size="lg">
                Contato
              </Button>
            </div>
          </nav>
        </div>}
    </>;
};
export default Header;