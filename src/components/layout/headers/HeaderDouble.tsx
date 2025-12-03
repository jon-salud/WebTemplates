import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react';
import Container from '../../ui/Container';
import Button from '../../ui/Button';
import type { IndustryConfig } from '@/config/industries';

interface HeaderProps {
  industry: IndustryConfig;
}

const HeaderDouble: React.FC<HeaderProps> = ({ industry }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="bg-neutral-900 text-white py-2 text-xs">
        <Container>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1"><Phone size={12} /> +1 (555) 123-4567</span>
              <span className="flex items-center gap-1"><Mail size={12} /> hello@{industry.id}.com</span>
            </div>
            <div className="hidden md:flex items-center gap-3">
              <Facebook size={12} className="hover:text-gray-300 cursor-pointer" />
              <Twitter size={12} className="hover:text-gray-300 cursor-pointer" />
              <Instagram size={12} className="hover:text-gray-300 cursor-pointer" />
            </div>
          </div>
        </Container>
      </div>

      {/* Main Bar */}
      <div className="bg-white shadow-sm">
        <Container>
          <div className="h-16 flex items-center justify-between">
            <a href="/" className="text-xl font-bold uppercase tracking-wider" style={{ color: industry.colors.primary, fontFamily: 'var(--font-heading)' }}>
              {industry.name}
            </a>

            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-sm font-semibold text-neutral-700 hover:text-primary">HOME</a>
              <a href="#" className="text-sm font-semibold text-neutral-700 hover:text-primary">SERVICES</a>
              <a href="#" className="text-sm font-semibold text-neutral-700 hover:text-primary">PROJECTS</a>
              <a href="#" className="text-sm font-semibold text-neutral-700 hover:text-primary">NEWS</a>
            </nav>

            <div className="hidden md:block">
              <Button variant="primary" size="sm" style={{ backgroundColor: industry.colors.primary }}>
                Get Quote
              </Button>
            </div>

            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </Container>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="flex flex-col p-4 gap-4">
              <a href="#" className="font-semibold">HOME</a>
              <a href="#" className="font-semibold">SERVICES</a>
              <a href="#" className="font-semibold">PROJECTS</a>
              <a href="#" className="font-semibold">NEWS</a>
              <Button variant="primary" fullWidth style={{ backgroundColor: industry.colors.primary }}>
                Get Quote
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default HeaderDouble;
