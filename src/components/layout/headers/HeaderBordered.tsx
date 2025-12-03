import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import type { IndustryConfig } from '@/config/industries';

interface HeaderProps {
  industry: IndustryConfig;
}

const HeaderBordered: React.FC<HeaderProps> = ({ industry }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-black">
      <div className="flex h-16 md:h-20">
        {/* Logo Section */}
        <div 
          className="flex-shrink-0 px-6 md:px-8 flex items-center border-r-2 border-black"
          style={{ backgroundColor: industry.colors.primary }}
        >
          <a href="/" className="text-xl md:text-2xl font-black uppercase tracking-tighter text-white" style={{ fontFamily: 'var(--font-heading)' }}>
            {industry.name}
          </a>
        </div>

        {/* Nav Section */}
        <div className="flex-1 flex items-center justify-end md:justify-between px-6 md:px-8 bg-white">
          <nav className="hidden md:flex items-center gap-8">
            <a href="#work" className="text-base font-bold uppercase tracking-wide text-black hover:underline decoration-2 underline-offset-4">Work</a>
            <a href="#studio" className="text-base font-bold uppercase tracking-wide text-black hover:underline decoration-2 underline-offset-4">Studio</a>
            <a href="#news" className="text-base font-bold uppercase tracking-wide text-black hover:underline decoration-2 underline-offset-4">News</a>
          </nav>

          <div className="hidden md:flex items-center gap-6">
            <a href="#contact" className="px-6 py-2 bg-black text-white font-bold uppercase text-sm hover:bg-neutral-800 transition-colors border-2 border-transparent hover:border-black hover:bg-white hover:text-black">
              Let's Talk
            </a>
          </div>

          <button className="md:hidden p-2 border-2 border-black hover:bg-black hover:text-white transition-colors" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b-2 border-black"
          >
            <div className="flex flex-col">
              <a href="#work" className="p-4 border-b-2 border-black font-bold uppercase hover:bg-yellow-400 transition-colors">Work</a>
              <a href="#studio" className="p-4 border-b-2 border-black font-bold uppercase hover:bg-yellow-400 transition-colors">Studio</a>
              <a href="#news" className="p-4 border-b-2 border-black font-bold uppercase hover:bg-yellow-400 transition-colors">News</a>
              <a href="#contact" className="p-4 font-bold uppercase bg-black text-white hover:bg-neutral-800 transition-colors">Let's Talk</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default HeaderBordered;
