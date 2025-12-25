
import React, { useState, useEffect } from 'react';

const About: React.FC = () => {
  const [step, setStep] = useState(0); // 0: Gear, 1: Car, 2: Shoe

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const renderPrinterAnimation = () => {
    return (
      <div className="relative w-full h-[300px] md:h-[500px] flex items-center justify-center overflow-visible perspective-[1200px]">
        {/* Printer Frame / Guide (Inspired by the hand-drawn lines in the screenshot) */}
        <div className="absolute inset-0 border-l-2 border-b-2 border-white/10 rounded-bl-3xl pointer-events-none" />
        
        {/* The Nozzle / Print Head */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center">
            <div className="w-[2px] h-10 bg-white/20" />
            <div className="w-8 h-8 rotate-45 border-r-2 border-b-2 border-[#FFD000] -mt-4 animate-bounce" />
        </div>

        {/* The Object being "Printed" and then moving away */}
        <div 
          key={step} 
          className="absolute inset-0 flex items-center justify-center animate-[float-away_5s_ease-in-out_infinite]"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {step === 0 && (
            <svg viewBox="0 0 24 24" className="w-48 h-48 md:w-80 md:h-80 text-[#FFD000] drop-shadow-[0_0_50px_rgba(255,208,0,0.4)]" fill="currentColor">
               <path d="M12 8c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm7 4c0-.7-.1-1.4-.3-2l2.1-1.6c.2-.2.2-.5 0-.7l-2-3.5c-.1-.2-.4-.3-.7-.2l-2.5 1c-.5-.4-1.1-.7-1.7-.9L13.5 1.5c-.1-.3-.3-.5-.6-.5h-4c-.3 0-.5.2-.6.5l-.4 2.6c-.6.2-1.2.5-1.7.9l-2.5-1c-.3-.1-.6 0-.7.2l-2 3.5c-.1.2-.1.5.1.7l2.1 1.6c-.2.6-.3 1.3-.3 2s.1 1.4.3 2l-2.1 1.6c-.2.2-.2.5 0 .7l2 3.5c.1.2.4.3.7.2l2.5-1c.5.4 1.1.7 1.7.9l.4 2.6c.1.3.3.5.6.5h4c.3 0 .5-.2.6-.5l.4-2.6c.6-.2 1.2-.5 1.7-.9l2.5 1c.3.1.6 0 .7-.2l2-3.5c.1-.2.1-.5-.1-.7l-2.1-1.6c.2-.6.3-1.3.3-2z"/>
            </svg>
          )}
          {step === 1 && (
            <svg viewBox="0 0 24 24" className="w-48 h-48 md:w-80 md:h-80 text-white drop-shadow-[0_0_50px_rgba(255,255,255,0.2)]" fill="currentColor">
               <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
            </svg>
          )}
          {step === 2 && (
            <svg viewBox="0 0 24 24" className="w-48 h-48 md:w-80 md:h-80 text-[#FFD000] drop-shadow-[0_0_50px_rgba(255,208,0,0.4)]" fill="currentColor">
               <path d="M21 9c0-1.1-.9-2-2-2h-3L14.5 4.5c-.39-.39-1.02-.39-1.41 0L11 6.58V4c0-1.1-.9-2-2-2s-2 .9-2 2v7.58L3.29 7.87c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L6.71 14H3c-1.1 0-2 .9-2 2s.9 2 2 2h18c1.1 0 2-.9 2-2s-.9-2-2-2h-3.71l4.42-4.41c.39-.39.39-1.02 0-1.41l-.71-.71z"/>
            </svg>
          )}

          {/* Layer effect lines across the object */}
          <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: 'linear-gradient(0deg, transparent 45%, #fff 50%, transparent 55%)', backgroundSize: '100% 20px' }} />
        </div>

        {/* Scan/Print Line effect */}
        <div className="absolute inset-x-0 h-1 bg-[#FFD000] shadow-[0_0_30px_#FFD000] z-20 animate-[print-line_5s_linear_infinite]" />
      </div>
    );
  };

  return (
    <section className="h-full flex flex-col items-center justify-center px-6 overflow-hidden">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
        
        {/* Description Side - Exactly matching screenshot layout */}
        <div className="flex-1 text-left space-y-0 flex flex-col justify-center">
          <div className="space-y-[-10px] md:space-y-[-20px]">
            <h2 className="text-6xl md:text-[8vw] font-black leading-none text-white tracking-tighter">
              Layers
            </h2>
            <h2 className="text-6xl md:text-[8vw] font-black leading-none text-[#FFD000] tracking-tighter">
              3D
            </h2>
          </div>
          
          <div className="mt-4 md:mt-8 space-y-1">
            <p className="text-2xl md:text-[3.5vw] font-light tracking-tight leading-tight text-white/90">
              is a 3D printing studio
            </p>
            <p className="text-2xl md:text-[3.5vw] font-light tracking-tight leading-tight text-white/90">
              based in
            </p>
            <p className="text-4xl md:text-[6vw] font-black italic text-[#FFD000] tracking-tighter leading-tight drop-shadow-lg">
              SRI LANKA
            </p>
          </div>

          <div className="mt-8 md:mt-12">
            <p className="text-lg md:text-2xl text-gray-400 font-light leading-snug max-w-xl">
              focused on custom design and
            </p>
          </div>
        </div>

        {/* Animation Side */}
        <div className="flex-1 w-full flex items-center justify-center relative mt-10 md:mt-0">
          {renderPrinterAnimation()}
        </div>
        
      </div>
    </section>
  );
};

export default About;
