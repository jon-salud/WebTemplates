import React from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
  sizes?: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
}

/**
 * Optimized Image Component
 * Implements modern image loading best practices:
 * - Lazy loading for below-the-fold images
 * - Multiple format support (AVIF, WebP, fallback)
 * - Responsive sizing with srcset
 * - Proper alt text for accessibility
 */
const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  loading = 'lazy',
  priority = false,
  sizes = '100vw',
  objectFit = 'cover',
}) => {
  // Extract filename without extension
  const getFileNameWithoutExt = (path: string) => {
    const lastSlash = path.lastIndexOf('/');
    const fileName = path.slice(lastSlash + 1);
    const lastDot = fileName.lastIndexOf('.');
    return lastDot > 0 ? fileName.slice(0, lastDot) : fileName;
  };

  const basePath = src.substring(0, src.lastIndexOf('/') + 1);
  const fileNameWithoutExt = getFileNameWithoutExt(src);
  const extension = src.split('.').pop() || 'jpg';

  // Generate srcset for responsive images
  const generateSrcSet = (format: string) => {
    const widths = [400, 800, 1200, 1920];
    return widths
      .map((w) => `${basePath}${fileNameWithoutExt}-${w}w.${format} ${w}w`)
      .join(', ');
  };

  const objectFitClass = {
    cover: 'object-cover',
    contain: 'object-contain',
    fill: 'object-fill',
    none: 'object-none',
    'scale-down': 'object-scale-down',
  }[objectFit];

  return (
    <picture className={className}>
      {/* AVIF format - best compression */}
      <source
        type="image/avif"
        srcSet={src.endsWith('.avif') ? src : generateSrcSet('avif')}
        sizes={sizes}
      />
      
      {/* WebP format - good compression, wide support */}
      <source
        type="image/webp"
        srcSet={generateSrcSet('webp')}
        sizes={sizes}
      />
      
      {/* Fallback image */}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : loading}
        decoding={priority ? 'sync' : 'async'}
        className={`${objectFitClass} ${className}`}
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    </picture>
  );
};

export default OptimizedImage;
