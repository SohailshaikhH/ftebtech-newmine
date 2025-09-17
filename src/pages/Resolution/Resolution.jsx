import React from 'react';
import HeroSection from '../../components/Hero/HeroSection';
import About from '../../components/About/About';
import Features from '../../components/Features/Features';
import CaseStudies from '../../components/CaseStudies/CaseStudies';
import Counter from '../../components/Counter/Counter';
import Contact from '../../components/Contact/Contact';
import ServicesSection from '../../components/ServicesSection/ServicesSection';
import TrustedBy from '../../components/TrustedBy/TrustedBy';
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs';
import Testimonials from '../../components/Testimonials/Testimonials';
import CallToAction from '../../components/CallToAction/CallToAction';

const HomePage = () => {
  return (
    <div className="home-page">
      {/* 1. Hero Section - Primary attention grabber */}
      <HeroSection />
      
      {/* 2. Trusted By - Social proof early */}
      <TrustedBy />
      
      {/* 3. About - Company introduction */}
      <About />
      
      {/* 4. Services Overview - What we offer */}
      <CaseStudies />
      
      {/* 5. Why Choose Us - Competitive advantages */}
      <WhyChooseUs />
      
      {/* 6. Counter - Social proof with numbers */}
      <Counter />
      
      {/* 7. Features - Detailed benefits */}
      <Features />
      
      {/* 8. Detailed Services - Comprehensive offerings */}
      <ServicesSection />
      
      {/* 9. Testimonials - Customer validation */}
      <Testimonials />
      
      {/* 10. Call to Action - Conversion focused */}
      <CallToAction />
      
      {/* 11. Contact - Final conversion opportunity */}
      <Contact />
    </div>
  );
};

export default HomePage;