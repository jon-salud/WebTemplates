import React, { useEffect, useRef, useState } from 'react';
import { m } from 'framer-motion';

interface AnimatedLogoProps {
  src: string; // url to svg under /public
  className?: string;
}

const AnimatedLogo: React.FC<AnimatedLogoProps> = ({ src, className }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [svg, setSvg] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    fetch(src)
      .then((r) => r.text())
      .then((text) => {
        if (mounted) setSvg(text);
      })
      .catch(() => setSvg(null));
    return () => { mounted = false; };
  }, [src]);

  useEffect(() => {
    if (!containerRef.current) return;
    const svgEl = containerRef.current.querySelector('svg');
    if (!svgEl) return;

    const paths = Array.from(svgEl.querySelectorAll('path, circle, line, rect, polyline, polygon')) as SVGElement[];

    // Initialize stroke drawing
    paths.forEach((p) => {
      const length = (p as any).getTotalLength ? (p as any).getTotalLength() : 0;
      p.style.strokeDasharray = `${length}`;
      p.style.strokeDashoffset = `${length}`;
      p.style.transition = 'stroke-dashoffset 800ms ease-in-out, fill-opacity 400ms linear 850ms';
      // Set fill to transparent initially
      p.style.fillOpacity = '0';
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Animate stroke
          paths.forEach((p, i) => {
            setTimeout(() => {
              p.style.strokeDashoffset = '0';
            }, i * 120);
          });
          // After a slight delay, fill the shapes
          setTimeout(() => {
            paths.forEach((p) => p.style.fillOpacity = '0.9');
          }, 120 * paths.length + 200);
        }
      });
    }, { rootMargin: '0px 0px -20% 0px' });

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [svg]);

  return (
    <div ref={containerRef} className={`animated-logo ${className || ''}`} aria-hidden>
      {svg ? <div dangerouslySetInnerHTML={{ __html: svg }} /> : <div className="w-20 h-20 bg-neutral-200 rounded" />}
    </div>
  );
};

export default AnimatedLogo;
