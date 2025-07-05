import React, { useState } from 'react';
import LazyImage from '../LazyImage/LazyImage';

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '',
  sizes = '100vw',
  loading = 'lazy',
  ...props 
}) => {
  const [imageError, setImageError] = useState(false);

  // Generate WebP and fallback sources
  const getImageSources = (originalSrc) => {
    const baseName = originalSrc.split('/').pop().split('.')[0];
    const basePath = originalSrc.substring(0, originalSrc.lastIndexOf('/'));
    
    return {
      webp: `${basePath}/optimized/${baseName}.webp`,
      fallback: originalSrc
    };
  };

  const sources = getImageSources(src);

  const handleError = () => {
    setImageError(true);
  };

  return (
    <picture className={`optimized-image ${className}`}>
      {!imageError && (
        <source 
          srcSet={sources.webp} 
          type="image/webp" 
          sizes={sizes}
        />
      )}
      <LazyImage
        src={imageError ? sources.fallback : sources.webp}
        alt={alt}
        onError={handleError}
        loading={loading}
        className="responsive-image"
        {...props}
      />
    </picture>
  );
};

export default OptimizedImage;