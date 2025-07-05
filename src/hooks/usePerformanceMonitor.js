import { useEffect } from 'react';

const usePerformanceMonitor = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        switch (entry.entryType) {
          case 'largest-contentful-paint':
            console.log('LCP:', entry.startTime);
            break;
          case 'first-input':
            console.log('FID:', entry.processingStart - entry.startTime);
            break;
          case 'layout-shift':
            if (!entry.hadRecentInput) {
              console.log('CLS:', entry.value);
            }
            break;
          default:
            break;
        }
      });
    });

    // Observe different entry types
    try {
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
      observer.observe({ entryTypes: ['first-input'] });
      observer.observe({ entryTypes: ['layout-shift'] });
    } catch (e) {
      // Fallback for browsers that don't support these metrics
      console.warn('Performance monitoring not fully supported');
    }

    // Monitor navigation timing
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0];
      if (navigation) {
        console.log('Page Load Time:', navigation.loadEventEnd - navigation.fetchStart);
        console.log('DOM Content Loaded:', navigation.domContentLoadedEventEnd - navigation.fetchStart);
        console.log('First Paint:', performance.getEntriesByName('first-paint')[0]?.startTime);
        console.log('First Contentful Paint:', performance.getEntriesByName('first-contentful-paint')[0]?.startTime);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);
};

export default usePerformanceMonitor;