import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Container from '../../ui/Container';
import type { IndustryConfig } from '@/config/industries';

interface HeaderProps {
  industry: IndustryConfig;
}

const HeaderCentered: React.FC<HeaderProps> = ({ industry }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-neutral-100">
      <Container>
        <div className="h-20 flex items-center justify-between md:justify-center relative">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 absolute left-4"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>

          {/* Left Nav */}
          <nav className="hidden md:flex items-center gap-8 absolute left-4 lg:left-8">
            <a href="#services" className="text-sm font-medium text-neutral-600 hover:text-neutral-900">Services</a>
            <a href="#work" className="text-sm font-medium text-neutral-600 hover:text-neutral-900">Work</a>
          </nav>

          {/* Logo */}
          <a href="/" className="text-2xl font-serif font-bold" style={{ color: industry.colors.primary }}>
            {industry.name}
          </a>

          {/* Right Nav */}
          <nav className="hidden md:flex items-center gap-8 absolute right-4 lg:right-8">
            <a href="#about" className="text-sm font-medium text-neutral-600 hover:text-neutral-900">About</a>
            <a href="#contact" className="text-sm font-medium text-neutral-600 hover:text-neutral-900">Contact</a>
          </nav>
        </div>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="flex flex-col items-center py-6 gap-4">
              <a href="#services" className="text-lg font-medium">Services</a>
              <a href="#work" className="text-lg font-medium">Work</a>
              <a href="#about" className="text-lg font-medium">About</a>
              <a href="#contact" className="text-lg font-medium">Contact</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default HeaderCentered;
