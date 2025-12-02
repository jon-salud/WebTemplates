import React from 'react';

interface SkeletonLoaderProps {
  variant?: 'text' | 'circular' | 'rectangular' | 'card';
  width?: string | number;
  height?: string | number;
  className?: string;
  count?: number;
}

/**
 * Skeleton Loader Component
 * Displays placeholder content while data is loading
 * Improves perceived performance and user experience
 */
const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
  variant = 'text',
  width = '100%',
  height,
  className = '',
  count = 1,
}) => {
  const baseClasses = 'animate-pulse bg-neutral-200 rounded';

  const variantClasses = {
    text: 'h-4 rounded',
    circular: 'rounded-full',
    rectangular: 'rounded-lg',
    card: 'rounded-2xl',
  };

  const defaultHeights = {
    text: '1rem',
    circular: '3rem',
    rectangular: '12rem',
    card: '20rem',
  };

  const getStyle = () => ({
    width: typeof width === 'number' ? `${width}px` : width,
    height: height || defaultHeights[variant],
  });

  if (variant === 'card') {
    return (
      <div className={`${baseClasses} ${variantClasses[variant]} ${className} space-y-4 p-6`} style={getStyle()}>
        <div className="h-32 bg-neutral-300 rounded-lg" />
        <div className="space-y-2">
          <div className="h-4 bg-neutral-300 rounded w-3/4" />
          <div className="h-4 bg-neutral-300 rounded w-1/2" />
        </div>
      </div>
    );
  }

  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className={`${baseClasses} ${variantClasses[variant]} ${className} ${
            variant === 'text' && index < count - 1 ? 'mb-2' : ''
          }`}
          style={getStyle()}
        />
      ))}
    </>
  );
};

export default SkeletonLoader;
