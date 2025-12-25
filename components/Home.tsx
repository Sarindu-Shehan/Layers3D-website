
import React from 'react';
import { HandDrawnArrow } from '../constants';

interface HomeProps {
  onContactClick: () => void;
}

const Home: React.FC<HomeProps> = ({ onContactClick }) => {
  return (
    <section className="h-full flex flex-col items-center justify-center px-6 overflow-hidden">
      <div className="max-w-7xl w-full text-center relative flex flex-col items-center">
        {/* WE BUILD DREAMS - Subtle upper text */}
        <p className="text-sm md:text-lg font-bold uppercase tracking-[0.5em] text-white/30 mb-2">
          We Build Dreams
        </p>

        {/* LAYER BY LAYER - Focal point, size reduced and made fluid to fit comfortably on all viewports */}
        <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[10vw] font-black uppercase leading-[0.85] tracking-tighter mb-6 text-[#FFD000] drop-shadow-[0_10px_40px_rgba(255,208,0,0.3)] select-none">
          LAYER BY LAYER
        </h1>
        
        {/* Description Text - Balanced sizing */}
        <p className="text-base md:text-xl lg:text-2xl text-gray-400 font-light max-w-3xl mx-auto leading-tight mb-10 px-4">
          Layers is a custom 3D printing and design studio <br className="hidden md:block" />
          that transforms ideas into high-quality, functional products
        </p>

        {/* Action Button and Arrow container */}
        <div className="relative inline-block">
          <button
            onClick={onContactClick}
            className="bg-[#FFD000] text-black px-12 py-4 md:px-14 md:py-5 rounded-full text-lg md:text-xl font-black hover:scale-110 active:scale-95 transition-all shadow-[0_0_50px_rgba(255,208,0,0.4)] relative z-20 group"
          >
            Contact US
          </button>
          
          {/* Arrow pointing to text exactly like requested in the blue hand-drawn notes */}
          <HandDrawnArrow />
        </div>
      </div>
    </section>
  );
};

export default Home;
