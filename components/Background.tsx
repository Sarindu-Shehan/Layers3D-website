import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-[#030303] overflow-hidden">
      {/* Primary Gradient Waves (Blobs) */}
      <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-[#FFD000]/10 blur-[140px] rounded-full animate-drift" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-[#FFD000]/5 blur-[120px] rounded-full animate-drift-slow" />
      
      {/* Complementary Accent Blobs */}
      <div className="absolute top-[30%] right-[10%] w-[40%] h-[40%] bg-white/5 blur-[150px] rounded-full animate-drift" style={{ animationDelay: '-5s' }} />
      <div className="absolute bottom-[20%] left-[5%] w-[30%] h-[30%] bg-[#FFD000]/8 blur-[100px] rounded-full animate-drift-slow" style={{ animationDelay: '-12s' }} />

      {/* SVG Flowing Waves */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg className="wave-svg" viewBox="0 0 1000 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 50 Q 250 20 500 50 T 1000 50 V 100 H 0 Z" fill="url(#wave-grad)" />
          <defs>
            <linearGradient id="wave-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#FFD000', stopOpacity: 0.1 }} />
              <stop offset="50%" style={{ stopColor: '#FFD000', stopOpacity: 0.05 }} />
              <stop offset="100%" style={{ stopColor: '#FFD000', stopOpacity: 0.1 }} />
            </linearGradient>
          </defs>
        </svg>
        
        <svg className="wave-svg" viewBox="0 0 1000 100" preserveAspectRatio="none" style={{ animationDirection: 'reverse', animationDuration: '30s', bottom: '-20px' }} xmlns="http://www.w3.org/2000/svg">
          <path d="M0 50 Q 250 80 500 50 T 1000 50 V 100 H 0 Z" fill="url(#wave-grad-rev)" />
          <defs>
            <linearGradient id="wave-grad-rev" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#FFFFFF', stopOpacity: 0.05 }} />
              <stop offset="100%" style={{ stopColor: '#FFFFFF', stopOpacity: 0 }} />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Frosted Glass Logo in Background - Kept as requested previously */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.05] select-none pointer-events-none">
        <div className="text-[40vw] font-black tracking-tighter text-white blur-[80px] leading-none select-none">
          L3D
        </div>
      </div>
      
      {/* Subtle Noise Texture */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />
    </div>
  );
};

export default Background;