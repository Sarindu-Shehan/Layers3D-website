
import React from 'react';
import { Lightbulb, PencilLine, Box } from 'lucide-react';
import { PROCESS_STEPS, StepArrowHandDrawn } from '../constants';

const Process: React.FC = () => {
  return (
    <section className="h-full py-10 px-6 flex flex-col items-center justify-center">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-center text-6xl md:text-8xl font-black mb-16 uppercase tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-[#FFD000] to-white">
          Our Process
        </h2>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-4">
          
          {/* Step 1: Idea, Sketch, Model - VERTICAL GROUPING */}
          <div className="flex flex-col items-center p-10 rounded-[50px] bg-white/5 border border-white/10 backdrop-blur-3xl shadow-2xl">
             <div className="flex flex-col gap-10 items-center">
                <div className="flex flex-col items-center group">
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-2 group-hover:text-[#FFD000] transition-colors shadow-lg">
                    <Lightbulb size={32} />
                  </div>
                  <p className="text-xs font-black text-gray-400 uppercase tracking-widest">Idea</p>
                </div>

                <div className="flex flex-col items-center group">
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-2 group-hover:text-[#FFD000] transition-colors shadow-lg">
                    <PencilLine size={32} />
                  </div>
                  <p className="text-xs font-black text-gray-400 uppercase tracking-widest">Sketch</p>
                </div>

                <div className="flex flex-col items-center group">
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-2 group-hover:text-[#FFD000] transition-colors shadow-lg">
                    <Box size={32} />
                  </div>
                  <p className="text-xs font-black text-gray-400 uppercase tracking-widest">Model</p>
                </div>
             </div>
             <p className="mt-8 text-[10px] font-black text-[#FFD000] uppercase tracking-[0.3em]">Foundation</p>
          </div>

          <div className="rotate-90 md:rotate-0 my-6 md:my-0 scale-150">
            <StepArrowHandDrawn />
          </div>

          {/* Subsequent steps */}
          {PROCESS_STEPS.map((step, idx) => (
            <React.Fragment key={idx}>
              <div className="flex flex-col items-center group">
                <div className="w-28 h-28 rounded-full bg-white/5 border border-white/10 backdrop-blur-2xl flex items-center justify-center mb-4 group-hover:border-[#FFD000] group-hover:bg-[#FFD000]/20 transition-all duration-500 shadow-2xl relative">
                  <div className="text-white group-hover:text-[#FFD000] transition-colors scale-125">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#FFD000] text-black flex items-center justify-center font-black text-xs">
                    {idx + 2}
                  </div>
                </div>
                <p className="text-center text-sm font-black text-white uppercase tracking-widest">
                  {step.title}
                </p>
              </div>
              {idx < PROCESS_STEPS.length - 1 && (
                <div className="rotate-90 md:rotate-0 my-6 md:my-0 scale-150">
                  <StepArrowHandDrawn />
                </div>
              )}
            </React.Fragment>
          ))}

        </div>
        
        <div className="mt-20 text-center">
          <p className="font-handwritten text-5xl text-[#FFD000] animate-pulse drop-shadow-md">
            Simple steps to perfection...
          </p>
        </div>
      </div>
    </section>
  );
};

export default Process;
