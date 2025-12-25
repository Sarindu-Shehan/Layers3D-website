import React from 'react';
import { Lightbulb, PencilLine, Box, MessageSquare, FileText, Package } from 'lucide-react';
import { GalleryImage, ProcessStep } from './types';

export const COLORS = {
  primary: '#FFD000',
  background: '#000000',
  text: '#FFFFFF',
};

// Custom 3D Printing Icon (FDM Nozzle style)
export const NozzleIcon = ({ size = 32 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 3h12l-1 4H7z" />
    <path d="M7 7l10 0l-5 13l-5-13z" />
    <circle cx="12" cy="17" r="1" fill="currentColor" />
  </svg>
);

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: 1, url: 'https://images.unsplash.com/photo-1631284510003-8869c94025a1?auto=format&fit=crop&q=80&w=800', title: 'Carbon Fiber Part' },
  { id: 2, url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800', title: 'Gear Assembly' },
  { id: 3, url: 'https://images.unsplash.com/photo-1531259683007-016a7b628fc3?auto=format&fit=crop&q=80&w=800', title: 'Design Concept' },
  { id: 4, url: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=800', title: 'Precision Tool' },
  { id: 5, url: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80&w=800', title: 'Prototype' },
  { id: 6, url: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800', title: 'Mechanical Model' },
  { id: 7, url: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&q=80&w=800', title: 'Aesthetic Shell' },
];

export const PROCESS_STEPS: ProcessStep[] = [
  { title: 'Contact Us', icon: <MessageSquare size={32} /> },
  { title: 'Get Quotation', icon: <FileText size={32} /> },
  { title: '3D Print', icon: <NozzleIcon size={32} /> },
  { title: 'Get Delivered', icon: <Package size={32} /> },
];

export const HandDrawnArrow = () => (
  <div className="absolute top-[20%] left-[105%] w-[300px] h-[150px] hidden lg:block pointer-events-none">
    <svg width="300" height="150" viewBox="0 0 300 150" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Blue curved arrow matching the drawing logic */}
      <path 
        d="M20 30C80 20 180 30 220 100" 
        stroke="#3b82f6" 
        strokeWidth="4" 
        strokeLinecap="round" 
        strokeDasharray="8 8" 
        className="opacity-90"
      />
      {/* Arrowhead */}
      <path 
        d="M220 100L205 88M220 100L230 82" 
        stroke="#3b82f6" 
        strokeWidth="4" 
        strokeLinecap="round" 
      />
      
      {/* Handwritten text aligned with the arrow tip */}
      <foreignObject x="40" y="110" width="260" height="40">
        <div className="font-handwritten text-2xl text-white/90 whitespace-nowrap drop-shadow-lg">
          Click Here to Contact Us...
        </div>
      </foreignObject>
    </svg>
  </div>
);

export const StepArrowHandDrawn = () => (
  <svg width="60" height="30" viewBox="0 0 60 30" fill="none" className="opacity-60 mx-2">
    <path d="M5 15C15 12 35 12 55 15M55 15L45 8M55 15L45 22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);