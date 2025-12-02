import React from 'react';
import { motion } from 'framer-motion';

interface LogoMarqueeProps {
  title?: string;
  logos?: Array<{
    name: string;
    url?: string;
  }>;
  speed?: 'slow' | 'normal' | 'fast';
  className?: string;
}

// Default placeholder logos for demonstration
const defaultLogos = [
  { name: 'Company 1' },
  { name: 'Company 2' },
  { name: 'Company 3' },
  { name: 'Company 4' },
  { name: 'Company 5' },
  { name: 'Company 6' },
  { name: 'Company 7' },
  { name: 'Company 8' },
];

const LogoMarquee: React.FC<LogoMarqueeProps> = ({
  title = 'Trusted by leading companies',
  logos = defaultLogos,
  speed = 'normal',
  className = '',
}) => {
  const speedDuration = {
    slow: 40,
    normal: 30,
    fast: 20,
  };

  // Double the logos for seamless infinite scroll
  const doubledLogos = [...logos, ...logos];

  return (
    <section className={`py-12 md:py-16 ${className}`}>
      <div className="text-center mb-8">
        <p className="text-body text-neutral-500 uppercase tracking-wider font-medium">
          {title}
        </p>
      </div>

      <div className="relative overflow-hidden">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Scrolling container */}
        <motion.div
          className="flex gap-12 items-center"
          animate={{
            x: ['0%', '-50%'],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: speedDuration[speed],
              ease: 'linear',
            },
          }}
        >
          {doubledLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex-shrink-0 w-32 h-12 flex items-center justify-center"
            >
              <div className="text-neutral-400 font-semibold text-lg whitespace-nowrap">
                {logo.name}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LogoMarquee;
