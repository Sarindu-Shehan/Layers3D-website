
import React from 'react';
import { Lightbulb, PencilLine, Box, MessageCircle, FileText, Package } from 'lucide-react';

const NozzleIcon = ({ size = 32 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 3h12l-1 4H7z" />
    <path d="M7 7l10 0l-5 13l-5-13z" />
    <circle cx="12" cy="17" r="1" fill="currentColor" />
  </svg>
);

const Process: React.FC = () => {
  return (
    <section className="h-full py-10 px-6 flex flex-col items-center justify-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative">
          
          {/* Left Side: Idea, Sketch, Model */}
          <div className="flex flex-col gap-12 relative">
            <div className="flex flex-col items-center group">
              <div className="w-20 h-20 rounded-full border-2 border-white/20 flex items-center justify-center mb-2 group-hover:border-[#FFD000] transition-colors">
                <Lightbulb size={40} />
              </div>
              <p className="text-sm font-bold uppercase">Your Idea</p>
              {/* Arrow to middle */}
              <div className="hidden md:block absolute left-[110%] top-1/2 -translate-y-1/2 w-20">
                 <svg width="80" height="150" viewBox="0 0 80 150" fill="none">
                    <path d="M0 10 Q 50 10, 70 70" stroke="white" strokeWidth="2" strokeDasharray="4 4" />
                    <path d="M0 140 Q 50 140, 70 80" stroke="white" strokeWidth="2" strokeDasharray="4 4" />
                    <path d="M0 75 L 70 75" stroke="white" strokeWidth="2" strokeDasharray="4 4" />
                    <path d="M70 75 L 60 70 M 70 75 L 60 80" stroke="white" strokeWidth="2" />
                 </svg>
              </div>
            </div>

            <div className="flex flex-col items-center group">
              <div className="w-20 h-20 rounded-full border-2 border-white/20 flex items-center justify-center mb-2 group-hover:border-[#FFD000] transition-colors">
                <PencilLine size={40} />
              </div>
              <p className="text-sm font-bold uppercase">Your Sketch</p>
            </div>

            <div className="flex flex-col items-center group">
              <div className="w-20 h-20 rounded-full border-2 border-white/20 flex items-center justify-center mb-2 group-hover:border-[#FFD000] transition-colors">
                <Box size={40} />
              </div>
              <p className="text-sm font-bold uppercase">Your 3D Model</p>
            </div>
          </div>

          {/* Linear Sequence */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="flex flex-col items-center group">
              <div className="w-24 h-24 rounded-full border-2 border-white/20 flex items-center justify-center mb-3 group-hover:border-[#FFD000] transition-colors">
                <MessageCircle size={48} />
              </div>
              <p className="text-sm font-bold uppercase">Contact Us</p>
              <div className="rotate-90 md:rotate-0 my-4 md:my-0 md:absolute md:left-[110%] md:top-1/2">
                <svg width="40" height="20" viewBox="0 0 40 20" fill="none" className="opacity-40">
                  <path d="M0 10 L 40 10 M 30 5 L 40 10 L 30 15" stroke="white" strokeWidth="2" />
                </svg>
              </div>
            </div>

            <div className="flex flex-col items-center group">
              <div className="w-24 h-24 rounded-full border-2 border-white/20 flex items-center justify-center mb-3 group-hover:border-[#FFD000] transition-colors">
                <FileText size={48} />
              </div>
              <p className="text-sm font-bold uppercase">Get Quotation</p>
            </div>

            <div className="flex flex-col items-center group">
              <div className="w-24 h-24 rounded-full border-2 border-white/20 flex items-center justify-center mb-3 group-hover:border-[#FFD000] transition-colors">
                <NozzleIcon size={48} />
              </div>
              <p className="text-sm font-bold uppercase"><span className="text-[#FFD000]">3D</span> Print</p>
            </div>

            <div className="flex flex-col items-center group">
              <div className="w-24 h-24 rounded-full border-2 border-white/20 flex items-center justify-center mb-3 group-hover:border-[#FFD000] transition-colors">
                <Package size={48} />
              </div>
              <p className="text-sm font-bold uppercase">Get Delivered</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Process;
