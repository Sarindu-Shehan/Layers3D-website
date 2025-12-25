
// Import React to fix the 'Cannot find namespace React' error for React.ReactNode
import React from 'react';

export interface GalleryImage {
  id: number;
  url: string;
  title: string;
}

export interface ProcessStep {
  title: string;
  icon: React.ReactNode;
}