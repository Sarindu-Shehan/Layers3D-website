import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 mesh-gradient overflow-hidden bg-[#030303]">
      {/* Animated Glowing Orbs with translation movements */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#FFD000]/15 blur-[120px] rounded-full animate-float opacity-80" />
      <div className="absolute bottom-[-15%] right-[-10%] w-[60%] h-[60%] bg-[#4F46E5]/15 blur-[120px] rounded-full animate-float opacity-80" style={{ animationDelay: '-5s', animationDirection: 'reverse' }} />
      <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] bg-[#EC4899]/10 blur-[100px] rounded-full animate-float opacity-60" style={{ animationDelay: '-10s' }} />
      <div className="absolute bottom-[20%] left-[10%] w-[35%] h-[35%] bg-cyan-500/10 blur-[100px] rounded-full animate-float opacity-50" style={{ animationDelay: '-15s' }} />
      
      {/* Dynamic Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)', backgroundSize: '100px 100px' }} />

      {/* Frosted Glass Floating Text Logo in Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.08] select-none pointer-events-none">
        <div className="text-[40vw] font-black tracking-tighter text-white blur-[90px] leading-none select-none">
          L3D
        </div>
      </div>
    </div>
  );
};

export default Background;