import { useEffect, useState } from "react";
import Header from "@/components/Header";

const Vitrine = () => {
  const [iframeHeight, setIframeHeight] = useState(0);

  useEffect(() => {
    const calculateHeight = () => {
      // 80px header + 48px badge
      const height = window.innerHeight - 128;
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
      
      {/* Montesite Badge */}
      <div className="w-full h-12 flex-shrink-0 bg-gray-100 flex items-center justify-center border-t border-gray-200">
        <p className="text-sm">
          Desenvolvido por <a href="https://montesite.com.br" target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline"><span className="text-[#007bff]">Monte</span><span className="text-black">Site</span></a>
        </p>
      </div>
    </div>
  );
};

export default Vitrine;
