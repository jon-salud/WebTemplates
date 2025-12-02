import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import type { IndustryConfig } from '@/config/industries';

interface HeaderProps {
  industry: IndustryConfig;
}

const HeaderFloating: React.FC<HeaderProps> = ({ industry }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <div className="bg-white/80 backdrop-blur-md rounded-full shadow-lg border border-white/20 px-6 py-3 w-full max-w-3xl flex items-center justify-between">
        <a href="/" className="font-bold text-lg" style={{ color: industry.colors.primary }}>
          {industry.name}
        </a>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-sm font-medium text-neutral-600 hover:text-black">Features</a>
          <a href="#pricing" className="text-sm font-medium text-neutral-600 hover:text-black">Pricing</a>
          <a href="#about" className="text-sm font-medium text-neutral-600 hover:text-black">About</a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="#login" className="text-sm font-medium text-neutral-600">Log in</a>
          <a href="#signup" className="bg-black text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-neutral-800 transition-colors">
            Sign up
          </a>
        </div>

        <button className="md:hidden p-1" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            className="absolute top-20 left-4 right-4 bg-white rounded-2xl shadow-xl p-4 md:hidden"
          >
            <div className="flex flex-col gap-3">
              <a href="#features" className="p-2 hover:bg-neutral-50 rounded-lg">Features</a>
              <a href="#pricing" className="p-2 hover:bg-neutral-50 rounded-lg">Pricing</a>
              <a href="#about" className="p-2 hover:bg-neutral-50 rounded-lg">About</a>
              <div className="h-px bg-neutral-100 my-1" />
              <a href="#login" className="p-2 hover:bg-neutral-50 rounded-lg">Log in</a>
              <a href="#signup" className="p-2 bg-black text-white rounded-lg text-center">Sign up</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default HeaderFloating;
