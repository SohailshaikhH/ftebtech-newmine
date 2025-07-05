import React, { lazy, Suspense } from 'react';

// Lazy load Swiper components
const Swiper = lazy(() => import('swiper/react').then(module => ({ default: module.Swiper })));
const SwiperSlide = lazy(() => import('swiper/react').then(module => ({ default: module.SwiperSlide })));

// Lazy load Swiper modules
const Navigation = lazy(() => import('swiper/modules').then(module => ({ default: module.Navigation })));
const Pagination = lazy(() => import('swiper/modules').then(module => ({ default: module.Pagination })));
const Autoplay = lazy(() => import('swiper/modules').then(module => ({ default: module.Autoplay })));
const EffectCoverflow = lazy(() => import('swiper/modules').then(module => ({ default: module.EffectCoverflow })));

// Import only the CSS you need
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const OptimizedSwiper = ({ 
  children, 
  modules = [], 
  loading = <div className="swiper-loading">Loading...</div>,
  ...props 
}) => {
  return (
    <Suspense fallback={loading}>
      <Swiper modules={modules} {...props}>
        {children}
      </Swiper>
    </Suspense>
  );
};

const OptimizedSwiperSlide = ({ children, ...props }) => {
  return (
    <Suspense fallback={<div>Loading slide...</div>}>
      <SwiperSlide {...props}>
        {children}
      </SwiperSlide>
    </Suspense>
  );
};

// Export modules for use
export { 
  OptimizedSwiper as Swiper, 
  OptimizedSwiperSlide as SwiperSlide,
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow
};

export default OptimizedSwiper;