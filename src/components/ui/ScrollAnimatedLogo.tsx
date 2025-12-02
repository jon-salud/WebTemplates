import React, { useEffect, useRef, useState } from 'react';

interface ScrollAnimatedLogoProps {
  src: string;
}

// Helper to darken a hex color
function darkenColor(color: string, amount: number): string {
  // Handle hex colors
  let hex = color.replace('#', '');
  
  // Handle shorthand hex
  if (hex.length === 3) {
    hex = hex.split('').map(c => c + c).join('');
  }
  
  // Parse RGB
  let r = parseInt(hex.substring(0, 2), 16);
  let g = parseInt(hex.substring(2, 4), 16);
  let b = parseInt(hex.substring(4, 6), 16);
  
  // Darken
  r = Math.max(0, Math.floor(r * (1 - amount)));
  g = Math.max(0, Math.floor(g * (1 - amount)));
  b = Math.max(0, Math.floor(b * (1 - amount)));
  
  // Convert back to hex
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}

const ScrollAnimatedLogo: React.FC<ScrollAnimatedLogoProps> = ({ src }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLElement | null>(null);
  const [svg, setSvg] = useState<string | null>(null);
  const strokePathsRef = useRef<SVGElement[]>([]);
  const fillPathsRef = useRef<SVGElement[]>([]);
  const pathLengthsRef = useRef<number[]>([]);

  // Fetch the SVG
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

  // Setup paths and scroll listener
  useEffect(() => {
    if (!containerRef.current || !svg) return;

    // Find the scroll-logo-wrapper ancestor
    const wrapper = containerRef.current.closest('.scroll-logo-wrapper') as HTMLElement;
    if (!wrapper) return;
    wrapperRef.current = wrapper;

    const svgEl = containerRef.current.querySelector('svg');
    if (!svgEl) return;

    // Make SVG responsive
    svgEl.style.width = '100%';
    svgEl.style.height = '100%';
    svgEl.setAttribute('preserveAspectRatio', 'xMidYMid meet');

    const allPaths = Array.from(
      svgEl.querySelectorAll('path, circle, line, rect, polyline, polygon')
    ) as SVGElement[];

    // Separate stroke paths (for drawing animation) from fill paths
    const strokePaths: SVGElement[] = [];
    const fillPaths: SVGElement[] = [];
    const lengths: number[] = [];
    let primaryFillColor: string | null = null;

    allPaths.forEach((p) => {
      const computedStyle = window.getComputedStyle(p);
      const hasStroke = p.getAttribute('stroke') || computedStyle.stroke !== 'none';
      const hasFill = p.getAttribute('fill') && p.getAttribute('fill') !== 'none';
      const fillValue = p.getAttribute('fill') || computedStyle.fill;
      const isFillPath = hasFill && fillValue !== 'none';

      if (hasStroke && p.getAttribute('fill') === 'none') {
        // This is a stroke-only path (for drawing)
        strokePaths.push(p);
        const length = (p as any).getTotalLength ? (p as any).getTotalLength() : 0;
        lengths.push(length);
        
        // Initialize stroke animation
        p.style.strokeDasharray = `${length}`;
        p.style.strokeDashoffset = `${length}`;
        p.style.transition = 'none';
      } else if (isFillPath) {
        // This is a fill path - store the fill color for stroke derivation
        fillPaths.push(p);
        if (!primaryFillColor && fillValue && fillValue !== 'none') {
          primaryFillColor = fillValue;
        }
        p.style.fillOpacity = '0';
        p.style.transition = 'none';

        // If the shape has no stroke, clone it to create an outline path
        if (!hasStroke) {
          const clone = p.cloneNode(true) as SVGElement;
          clone.setAttribute('fill', 'none');
          const strokeColor = fillValue && fillValue !== 'none'
            ? darkenColor(fillValue, 0.4)
            : '#1f2937';
          clone.setAttribute('stroke', strokeColor);
          const length = (clone as any).getTotalLength ? (clone as any).getTotalLength() : 0;
          strokePaths.push(clone);
          lengths.push(length);
          clone.style.strokeDasharray = `${length}`;
          clone.style.strokeDashoffset = `${length}`;
          clone.style.transition = 'none';
          p.parentNode?.insertBefore(clone, p);
        }
      }
    });

    // Apply a darker version of the fill color to stroke paths
    if (primaryFillColor) {
      const darkerColor = darkenColor(primaryFillColor, 0.4); // 40% darker
      strokePaths.forEach((p) => {
        p.setAttribute('stroke', darkerColor);
      });
    }

    strokePathsRef.current = strokePaths;
    fillPathsRef.current = fillPaths;
    pathLengthsRef.current = lengths;

    // Scroll handler
    const handleScroll = () => {
      if (!wrapperRef.current) return;

      const wrapperRect = wrapperRef.current.getBoundingClientRect();
      const wrapperHeight = wrapperRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;

      // Calculate scroll progress through the wrapper (0 to 1)
      const scrollableDistance = wrapperHeight - viewportHeight;
      const scrolled = -wrapperRect.top;
      const progress = Math.min(Math.max(scrolled / scrollableDistance, 0), 1);

      // Animation phases:
      // 0% - 60%: Stroke animation (draw the outline)
      // 60% - 100%: Fill animation
      const strokeEndProgress = 0.6;
      const fillStartProgress = 0.6;

      // Animate stroke paths (draw the outline)
      strokePathsRef.current.forEach((p, i) => {
        const length = pathLengthsRef.current[i];
        const strokeProgress = Math.min(progress / strokeEndProgress, 1);
        const dashOffset = length * (1 - strokeProgress);
        p.style.strokeDashoffset = `${dashOffset}`;
      });

      // Animate fill paths
      fillPathsRef.current.forEach((p) => {
        if (progress >= fillStartProgress) {
          const fillProgress = (progress - fillStartProgress) / (1 - fillStartProgress);
          // Use the original fill-opacity or default to 0.9
          const originalOpacity = parseFloat(p.getAttribute('fill-opacity') || '1');
          p.style.fillOpacity = `${fillProgress * originalOpacity}`;
        } else {
          p.style.fillOpacity = '0';
        }
      });
    };

    // Initial call
    handleScroll();

    // Use requestAnimationFrame for smooth updates
    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', scrollListener, { passive: true });
    return () => window.removeEventListener('scroll', scrollListener);
  }, [svg]);

  return (
    <div 
      ref={containerRef} 
      className="scroll-animated-logo w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto"
      aria-hidden
    >
      {svg ? (
        <div className="w-full h-full" dangerouslySetInnerHTML={{ __html: svg }} />
      ) : (
        <div className="w-full h-full bg-neutral-800 rounded-full animate-pulse" />
      )}
    </div>
  );
};

export default ScrollAnimatedLogo;
