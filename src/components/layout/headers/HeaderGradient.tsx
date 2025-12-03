import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Container from '../../ui/Container';
import type { IndustryConfig } from '@/config/industries';

interface HeaderProps {
  industry: IndustryConfig;
}

const HeaderGradient: React.FC<HeaderProps> = ({ industry }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 text-white shadow-lg"
      style={{ background: `linear-gradient(to right, ${industry.colors.primary}, ${industry.colors.primaryLight}, ${industry.colors.accent})` }}
    >
      <Container>
        <div className="h-16 flex items-center justify-between">
          <a href="/" className="text-xl font-bold tracking-wide" style={{ fontFamily: 'var(--font-heading)' }}>
            {industry.name}
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-white/90 hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="text-sm font-medium text-white/90 hover:text-white transition-colors">Pricing</a>
            <a href="#blog" className="text-sm font-medium text-white/90 hover:text-white transition-colors">Blog</a>
            <a href="#contact" className="text-sm font-medium text-white/90 hover:text-white transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="#login" className="text-sm font-medium text-white/90 hover:text-white">Login</a>
            <a 
              href="#signup" 
              className="bg-white px-4 py-2 rounded-full text-sm font-bold hover:bg-white/90 transition-colors shadow-md"
              style={{ color: industry.colors.primary }}
            >
              Get Started
            </a>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/10"
            style={{ backgroundColor: industry.colors.primaryDark }}
          >
            <Container>
              <div className="py-4 space-y-4">
                <a href="#features" className="block text-white font-medium">Features</a>
                <a href="#pricing" className="block text-white font-medium">Pricing</a>
                <a href="#blog" className="block text-white font-medium">Blog</a>
                <a href="#contact" className="block text-white font-medium">Contact</a>
                <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                  <a href="#login" className="block text-center text-white font-medium">Login</a>
                  <a href="#signup" className="block text-center bg-white py-2 rounded-full font-bold" style={{ color: industry.colors.primary }}>Get Started</a>
                </div>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default HeaderGradient;
