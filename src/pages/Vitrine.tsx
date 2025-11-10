import { useEffect, useState } from "react";
import Header from "@/components/Header";

const Vitrine = () => {
  const [iframeHeight, setIframeHeight] = useState(window.innerHeight - 80);

  useEffect(() => {
    // Trava a rolagem do body quando entrar na página
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    
    // Força o carregamento do badge MonteSite
    const loadMonteSiteBadge = () => {
      const script = document.createElement('script');
      script.src = 'https://vaabpicspdbolvutnscp.supabase.co/functions/v1/get-footer-iframe';
      script.async = true;
      document.body.appendChild(script);
    };
    
    // Aguarda um pouco para garantir que o DOM está pronto
    const timer = setTimeout(loadMonteSiteBadge, 100);
    
    return () => {
      clearTimeout(timer);
      // Restaura a rolagem quando sair da página
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    const calculateHeight = () => {
      // 80px header
      const height = window.innerHeight - 80;
      setIframeHeight(height);
    };

    calculateHeight();
    window.addEventListener("resize", calculateHeight);
    
    return () => window.removeEventListener("resize", calculateHeight);
  }, []);


  return (
    <div className="h-screen overflow-hidden flex flex-col">
      <Header />
      
      {/* Spacer for fixed header - 80px */}
      <div className="h-20" />
      
      {/* Iframe with calculated height */}
      <div className="w-full flex-shrink-0" style={{ height: `${iframeHeight}px` }}>
        <iframe 
          src="https://lilianinteriores.egestor.com.br/vitrine/" 
          className="w-full h-full border-none"
          title="Demonstração de Vitrine"
        />
      </div>
    </div>
  );
};

export default Vitrine;
