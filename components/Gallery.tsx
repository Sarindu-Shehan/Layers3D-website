
import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../constants';
import { Plus } from 'lucide-react';

const Gallery: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="h-full flex flex-col items-center justify-center px-6 relative">
      {/* Light blur overlay for the page */}
      <div 
        className={`fixed inset-0 bg-black/10 backdrop-blur-[2px] z-40 pointer-events-none transition-opacity duration-300 ${
          hoveredIndex !== null ? 'opacity-100' : 'opacity-0'
        }`}
      />

      <div className="max-w-7xl mx-auto w-full relative z-50">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {GALLERY_IMAGES.slice(0, 7).map((image, idx) => (
            <div
              key={image.id}
              className={`relative aspect-square rounded-[32px] overflow-hidden bg-white/5 border border-white/10 transition-all duration-300 cursor-pointer ${
                hoveredIndex === idx ? 'scale-[1.15] z-[60] shadow-2xl' : ''
              }`}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                <p className="text-center font-bold text-white uppercase tracking-widest text-sm">{image.title}</p>
              </div>
            </div>
          ))}

          {/* 8th Box: See More Button */}
          <div
            className={`aspect-square rounded-[32px] border-2 border-dashed border-white/20 flex flex-col items-center justify-center group cursor-pointer hover:border-[#FFD000] transition-all bg-white/5 ${
              hoveredIndex !== null ? 'opacity-30' : ''
            }`}
          >
            <Plus size={48} className="text-white/40 group-hover:text-[#FFD000] mb-2 transition-colors" />
            <span className="text-sm font-bold uppercase tracking-widest text-white/40 group-hover:text-[#FFD000] transition-colors">See More...</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
