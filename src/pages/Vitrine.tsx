import { useEffect, useState } from "react";
import Header from "@/components/Header";

const Vitrine = () => {
  const [iframeHeight, setIframeHeight] = useState(0);

  useEffect(() => {
    const calculateHeight = () => {
      // 80px header + 63px badge = 143px
      const height = window.innerHeight - 143;
      setIframeHeight(height);
    };

    calculateHeight();
    window.addEventListener("resize", calculateHeight);
    
    return () => window.removeEventListener("resize", calculateHeight);
  }, []);

  useEffect(() => {
    // Load Montesite badge script (same as in index.html)
    const existingScript = document.querySelector('script[src="https://vaabpicspdbolvutnscp.supabase.co/functions/v1/get-footer-iframe"]');
    
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://vaabpicspdbolvutnscp.supabase.co/functions/v1/get-footer-iframe';
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="min-h-screen overflow-hidden flex flex-col">
      <Header />
      
      {/* Spacer for fixed header - 80px */}
      <div className="h-20" />
      
      {/* Iframe with calculated height */}
      <div className="w-full" style={{ height: `${iframeHeight}px` }}>
        <iframe 
          src="https://lilianinteriores.egestor.com.br/vitrine/" 
          className="w-full h-full border-none"
          title="Demonstração de Vitrine"
        />
      </div>
      
      {/* Montesite Badge - Fixed height container */}
      <div className="w-full h-[63px] flex items-center justify-center bg-background">
        <div id="montesite-footer-badge"></div>
      </div>
    </div>
  );
};

export default Vitrine;
