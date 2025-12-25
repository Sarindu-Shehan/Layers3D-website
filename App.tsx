
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Gallery from './components/Gallery';
import Process from './components/Process';
import Contact from './components/Contact';
import Background from './components/Background';

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState('main');

  const renderSection = () => {
    switch (currentSection) {
      case 'main':
        return <Home onContactClick={() => setCurrentSection('contact')} />;
      case 'about':
        return <About />;
      case 'gallery':
        return <Gallery />;
      case 'process':
        return <Process />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onContactClick={() => setCurrentSection('contact')} />;
    }
  };

  return (
    <div className="relative h-screen flex flex-col selection:bg-[#FFD000] selection:text-black">
      <Background />
      <Navbar onNavigate={(section) => setCurrentSection(section)} />
      
      {/* Scrollable Container for content only, page-to-page scroll disabled by body overflow:hidden */}
      <main className="flex-1 mt-20 relative z-10 section-container">
        {renderSection()}
      </main>

      {/* Mini Footer - kept fixed at bottom or within content */}
      <footer className="relative z-10 py-4 text-center text-gray-600 text-[10px] tracking-widest uppercase">
        <p>&copy; {new Date().getFullYear()} layers3D Studio | SRI LANKA</p>
      </footer>
    </div>
  );
};

export default App;
