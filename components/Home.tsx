
import React from 'react';

interface HomeProps {
  onContactClick: () => void;
}

const Home: React.FC<HomeProps> = ({ onContactClick }) => {
  return (
    <section className="h-full flex flex-col items-center justify-center px-6 text-center">
      <div className="max-w-4xl">
        <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-1">
          WE BUILD DREAMS
        </h1>
        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-8">
          LAYER BY LAYER
        </h2>
        
        <p className="text-lg md:text-xl text-gray-300 font-normal max-w-2xl mx-auto leading-relaxed mb-12">
          Layers is a custom 3D printing and design studio<br />
          that transforms ideas into high-quality, functional products
        </p>

        <div className="relative inline-block">
          <button
            onClick={onContactClick}
            className="bg-[#FFD000] text-black px-12 py-4 rounded-full text-lg font-black hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(255,208,0,0.3)] z-20 relative"
          >
            Contact US
          </button>

          {/* White hand-drawn style arrow */}
          <div className="absolute top-1/2 left-[110%] -translate-y-1/2 w-64 h-32 hidden md:block">
            <svg viewBox="0 0 200 100" fill="none" className="w-full h-full">
              <path d="M10 20 C 50 10, 150 10, 180 80" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M180 80 L 165 75 M 180 80 L 185 65" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
              <text x="80" y="100" fill="white" className="font-handwritten text-xl">Click here to contact us...</text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
