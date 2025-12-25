
import React from 'react';
import { Facebook, Instagram, Music2, Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavigate: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = ['Main', 'About', 'Gallery', 'Process', 'Contact'];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="text-3xl font-black cursor-pointer tracking-tighter group"
          onClick={() => onNavigate('main')}
        >
          layers<span style={{ color: '#FFD000' }} className="group-hover:text-white transition-colors">3D</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => onNavigate(item.toLowerCase())}
              className="text-xs font-bold uppercase tracking-[0.2em] text-white/60 hover:text-[#FFD000] hover:translate-y-[-2px] transition-all"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Social Icons (Desktop) */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-white/40 hover:text-[#FFD000] transition-colors"><Facebook size={18} /></a>
          <a href="#" className="text-white/40 hover:text-[#FFD000] transition-colors"><Instagram size={18} /></a>
          <a href="#" className="text-white/40 hover:text-[#FFD000] transition-colors"><Music2 size={18} /></a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-white/80"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-20 bg-black/95 backdrop-blur-2xl z-50 px-8 py-12 space-y-10">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => {
                onNavigate(item.toLowerCase());
                setIsMenuOpen(false);
              }}
              className="block w-full text-left text-4xl font-black hover:text-[#FFD000] transition-colors"
            >
              {item}
            </button>
          ))}
          <div className="flex space-x-8 pt-10 border-t border-white/10">
            <Facebook size={32} className="text-[#FFD000]" />
            <Instagram size={32} className="text-[#FFD000]" />
            <Music2 size={32} className="text-[#FFD000]" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
