import React, { useEffect } from "react";
import "../../styles/pages/Servicess/Servicess.css";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import men from "../../assets/men.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import {
  faServer,
  faShieldAlt,
  faChartLine,
  faSitemap,
  faLock,
  faDesktop,
  faArrowRight,
  faPhoneVolume,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";

import ServiceDescription from "../../components/Services/ServiceDescription";
<<<<<<< HEAD
=======
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
>>>>>>> c63c4096249e1dabe04c2475552e2dc6a47175fe

import useServicessScroll from "../../hooks/useServicessScroll";

<<<<<<< HEAD


const services = [
  {
    icon: faServer,
    title: "End-to-End Implementation",
    desc: "From planning to deployment and optimization—we own every phase with precision and expertise.",
    link: "#implementation"
  },
  {
    icon: faShieldAlt,
    title: "Cloud Strategy & Security",
    desc: "Align workloads with business goals while ensuring robust security measures and cost optimization.",
    link: "#strategy"
=======
const services = [
  {
    icon: faServer,
    title: "End-to-End Implementation Excellence",
    desc: `From planning to deployment and optimization—we own every phase.`,
  },
  {
    icon: faShieldAlt,
    title: "Proven Cloud Strategy",
    desc: "We don't just move workloads to Azure—we align them with your business goals, cost models, and security posture.",
>>>>>>> c63c4096249e1dabe04c2475552e2dc6a47175fe
  },
  {
    icon: faChartLine,
    title: "Business Transformation",
    desc: "Strategic solutions and practical roadmaps for successful digital transformation initiatives.",
    link: "#transformation"
  },
  {
    icon: faSitemap,
    title: "Project Excellence",
    desc: "100% success rate with zero overruns—our proven track record speaks for itself.",
    link: "#excellence"
  },
  {
    icon: faLock,
    title: "Security First Design",
    desc: "Zero-trust architecture with comprehensive security features built into every solution.",
    link: "#security"
  },
  {
    icon: faDesktop,
    title: "Cost Optimization",
    desc: "Strategic resource allocation ensuring maximum value from your technology investments.",
    link: "#optimization"
  }
];

const ITServices = () => {
  const isVisible = useServicessScroll();

  useEffect(() => {
    // Add smooth scroll behavior
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const header = document.querySelector('.itservices-title');
      if (header) {
        header.style.transform = `translateY(${scrolled * 0.4}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

 
  return (
    <div className="it-services-page">
      <PageWrapper />
{/* 
      <div className="itservices-hero-bg">
        <div className="itservices-hero-content">
<<<<<<< HEAD
          <h1 className="itservices-title">Innovative IT Solutions</h1>
=======
          <h1 className="itservices-title">Our Services</h1>
>>>>>>> c63c4096249e1dabe04c2475552e2dc6a47175fe
        </div>
        <div className="itservices-hero-pattern"></div>
      </div> */}

<<<<<<< HEAD
        <ServiceDescription />
      
=======
      <section className="descriptions bg-light">
        {/* Logo Marquee Slider */}
        <Swiper
          modules={[Autoplay]}
          loop={true}
          speed={1500}
          spaceBetween={30}
          slidesPerGroup={1}
          allowTouchMove={true}
          watchSlidesProgress={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          className="product-logos-swiper"
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 15 },
            480: { slidesPerView: 3, spaceBetween: 20 },
            640: { slidesPerView: 3, spaceBetween: 25 },
            768: { slidesPerView: 4, spaceBetween: 30 },
            1024: { slidesPerView: 5, spaceBetween: 35 },
            1200: { slidesPerView: 6, spaceBetween: 40 },
          }}
        >
          {[...productLogos, ...productLogos, ...productLogos].map((logo, idx) => (
            <SwiperSlide key={idx} className="logo-slide">
              <img
                src={logo.src}
                alt={logo.alt}
                className={`logo-img ${logo.class}`}
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        
        {/* Service Description Component */}
        <ServiceDescription />
      </section>
>>>>>>> c63c4096249e1dabe04c2475552e2dc6a47175fe

      <div className="itservices-section">
        <div className="section-title">
          <span className="subtitle">OUR SERVICES</span>
          <h2>
            Transforming Businesses Through<br />
            Technology Innovation
          </h2>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          effect="coverflow"
          loop={true}
          navigation={true}
          pagination={{ clickable: true }}
          speed={500}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 40 },
          }}
          className="services-swiper"
        >
          {services.map((service, idx) => (
            <SwiperSlide
              key={idx}
              className={`service-slide${isVisible ? " visible" : ""}`}
              style={{
                transitionDelay: `${idx * 0.1}s`,
              }}
            >
              <div className="service-card">
                <div className="icon-container">
                  <FontAwesomeIcon
                    icon={service.icon}
                    className="service-icon"
                  />
                </div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <span className="service-arrow">
                  <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="contact-info-section">
        <div className="contact-info-container">
          <div className="contact-info-image">
            <img src={men} alt="IT Support Representative" loading="lazy" />
          </div>
          <div className="contact-info-content">
            <div className="rating-value">4.9/5.0</div>
            <div className="rating-stars">★★★★★</div>
            <div className="rating-text">
              Trusted by 700+ customers for 3200+ successful projects
            </div>
            
            <div className="contact-method">
              <div className="contact-icon">
                <FontAwesomeIcon icon={faPhoneVolume} />
              </div>
              <div className="contact-text">
                <div className="contact-label">Get Expert Advice</div>
                <a href="tel:+971588481295" className="contact-value">
                  +971 58 848 1295
                </a>
              </div>
            </div>

            <div className="contact-method">
              <div className="contact-icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className="contact-text">
                <div className="contact-label">Email Us</div>
                <a href="mailto:Connect@ftebtech.com" className="contact-value">
                  Connect@ftebtech.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ITServices;