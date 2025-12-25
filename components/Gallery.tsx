
import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../constants';
import { Plus } from 'lucide-react';

const Gallery: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="h-full flex flex-col items-center justify-center px-6">
      <div className="max-w-7xl mx-auto w-full">
        {/* Backdrop Blur Overlay */}
        <div 
          className={`fixed inset-0 bg-black/40 backdrop-blur-md z-40 transition-opacity duration-500 pointer-events-none ${
            hoveredIndex !== null ? 'opacity-100' : 'opacity-0'
          }`}
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 relative z-50">
          {GALLERY_IMAGES.slice(0, 7).map((image, idx) => (
            <div
              key={image.id}
              className={`relative aspect-square rounded-[24px] overflow-hidden bg-white/5 border border-white/10 transition-all duration-300 cursor-pointer ${
                hoveredIndex === idx ? 'scale-115 z-[60] shadow-2xl' : hoveredIndex !== null ? 'opacity-30 blur-[1px]' : ''
              }`}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
                <p className="text-[10px] font-bold text-[#FFD000] uppercase tracking-widest">{image.title}</p>
              </div>
            </div>
          ))}

          {/* 8th Box: See More Button */}
          <div
            className={`aspect-square rounded-[24px] border-2 border-dashed border-white/20 flex flex-col items-center justify-center group cursor-pointer hover:border-[#FFD000] transition-all bg-white/5 ${
              hoveredIndex !== null ? 'opacity-30 blur-[1px]' : ''
            }`}
          >
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-3 group-hover:bg-[#FFD000] group-hover:text-black transition-colors">
              <Plus size={24} />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest group-hover:text-[#FFD000]">See All Images</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
