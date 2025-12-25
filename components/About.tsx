import React, { useState, useEffect } from 'react';
import { Cog, Car, Footprints } from 'lucide-react';

const About: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0); // 0: Gear, 1: Car, 2: Shoe

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const renderPrintObject = () => {
    const commonClasses = "w-48 h-48 md:w-64 md:h-64 text-[#FFD000] animate-[move-away_4s_ease-in-out_infinite]";
    
    switch (activeStep) {
      case 0:
        return <Cog key="gear" className={commonClasses} strokeWidth={1} />;
      case 1:
        return <Car key="car" className={commonClasses} strokeWidth={1} />;
      case 2:
        return <Footprints key="shoe" className={commonClasses} strokeWidth={1} />;
      default:
        return null;
    }
  };

  return (
    <section className="h-full flex flex-col items-center justify-center px-6 overflow-hidden">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Text Section (PDF Page 2 inspired) */}
        <div className="flex-1 text-center lg:text-left z-10">
          <h2 className="text-4xl md:text-7xl font-black tracking-tight mb-8 leading-none">
            Layers<span className="text-[#FFD000]">3D</span> <br />
            <span className="text-2xl md:text-4xl font-light">is a 3D printing studio</span>
          </h2>
          
          <div className="text-2xl md:text-4xl font-light tracking-tight leading-snug space-y-6">
            <p>based in <span className="text-[#FFD000] font-black italic">SRI LANKA</span></p>
            <p className="text-white/40 text-lg md:text-2xl">focused on custom design and <br /> precision manufacturing.</p>
            <p className="font-medium">We turn ideas into real-world objects</p>
            <p className="text-xl md:text-3xl text-[#FFD000] font-bold">— layer by layer.</p>
          </div>
        </div>

        {/* 3D Printing Animation Section */}
        <div className="flex-1 w-full h-[400px] md:h-[600px] relative flex items-center justify-center perspective-[1000px]">
          {/* Virtual Print Bed */}
          <div className="absolute w-[300px] h-[300px] border-b-2 border-white/10 rotate-x-60 -translate-y-12">
             <div className="absolute inset-0 bg-white/5 opacity-10" />
             <div className="absolute inset-0 grid grid-cols-6 grid-rows-6">
                {[...Array(36)].map((_, i) => (
                  <div key={i} className="border-[0.5px] border-white/5" />
                ))}
             </div>
          </div>

          {/* Printer Nozzle */}
          <div className="absolute top-1/4 z-30 flex flex-col items-center animate-[nozzle-move_2s_ease-in-out_infinite]">
             <div className="w-[2px] h-20 bg-white/20" />
             <div className="w-6 h-6 rotate-45 border-r-2 border-b-2 border-[#FFD000] -mt-3 shadow-[0_0_15px_#FFD000]" />
          </div>

          {/* Animated Object */}
          <div className="relative z-20" style={{ transformStyle: 'preserve-3d' }}>
            {renderPrintObject()}
            
            {/* Scan Line Effect */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
               <div className="absolute w-full h-[2px] bg-[#FFD000] shadow-[0_0_20px_#FFD000] animate-[print-line_4s_linear_infinite]" />
            </div>
          </div>

          {/* Glow Effect under the object */}
          <div className="absolute bottom-1/4 w-32 h-8 bg-[#FFD000]/20 blur-2xl rounded-full" />
        </div>
        
      </div>
    </section>
  );
};

export default About;