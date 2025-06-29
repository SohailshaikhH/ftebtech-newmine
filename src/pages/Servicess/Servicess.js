import React from "react";
import "../../styles/pages/Servicess/Servicess.css";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import men from "../../assets/men.png";
import {
  faServer,
  faShieldAlt,
  faChartLine,
  faSitemap,
  faLock,
  faDesktop,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

import ServiceDescription from "../../components/Services/ServiceDescription";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import awsLogo from "../../assets/images/ProductLogos/aws.jpg";
import azureLogo from "../../assets/images/ProductLogos/azure.jpg";
import developmentLogo from "../../assets/images/ProductLogos/Development.png";
import dynamicsLogo from "../../assets/images/ProductLogos/Dynamics-365.png";
import erosourceLogo from "../../assets/images/ProductLogos/erosource.png";
import googlecloudLogo from "../../assets/images/ProductLogos/googlecloud.jpg";
import linuxLogo from "../../assets/images/ProductLogos/linux.png";
import m365Logo from "../../assets/images/ProductLogos/m365.png";
import mlLogo from "../../assets/images/ProductLogos/Machine_Learning_Logo.png";
import microsoftLogo from "../../assets/images/ProductLogos/Microsoft-Logo.png";
import pythonLogo from "../../assets/images/ProductLogos/Python.png";
import reactLogo from "../../assets/images/ProductLogos/react-logo.png";
import terraformLogo from "../../assets/images/ProductLogos/terraform.png";
import turbo360Logo from "../../assets/images/ProductLogos/Turbo360.png";
import adevops from "../../assets/images/ProductLogos/a-devops.png";
import useServicessScroll from "../../hooks/useServicessScroll";

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
  },
  {
    icon: faChartLine,
    title: "Business Reform",
    desc: "We propose feasible & practical plans for successfully transform businesses based on their needs.",
  },
  {
    icon: faSitemap,
    title: "100% Project Success Rate",
    desc: "Our track record? Every Azure engagement delivered with zero overruns and zero surprises.",
  },
  {
    icon: faLock,
    title: "Secure-by-Design",
    desc: "Every build includes zero-trust principles, role-based access, policy enforcement, encryption, and monitoring.",
  },
  {
    icon: faDesktop,
    title: "Cost Optimization Experts",
    desc: "We right-size your Azure spend—pay only for what drives value.",
  },
];

const ITServices = () => {
  const isVisible = useServicessScroll();

  const technologyPartners = [
    { src: microsoftLogo, alt: 'Microsoft', name: 'Microsoft' },
    { src: azureLogo, alt: 'Microsoft Azure', name: 'Azure' },
    { src: m365Logo, alt: 'Microsoft 365', name: 'Microsoft 365' },
    { src: dynamicsLogo, alt: 'Dynamics 365', name: 'Dynamics 365' },
    { src: awsLogo, alt: 'Amazon Web Services', name: 'AWS' },
    { src: googlecloudLogo, alt: 'Google Cloud', name: 'Google Cloud' },
    { src: reactLogo, alt: 'React', name: 'React' },
    { src: pythonLogo, alt: 'Python', name: 'Python' },
    { src: linuxLogo, alt: 'Linux', name: 'Linux' },
    { src: terraformLogo, alt: 'Terraform', name: 'Terraform' },
    { src: adevops, alt: 'Azure DevOps', name: 'DevOps' },
    { src: developmentLogo, alt: 'Development', name: 'Development' }
  ];

  return (
    <div>
      <PageWrapper />

      <div className="itservices-hero-bg">
        <div className="itservices-hero-content">
          <h1 className="itservices-title">Our Services</h1>
        </div>
        <div className="itservices-hero-pattern"></div>
      </div>

      <section className="descriptions bg-light">
        {/* Professional Technology Partners Section */}
        <div className="technology-partners-section">
          <div className="technology-partners-content">
            <h2 className="partners-title">Technology Partners & Expertise</h2>
            <p className="partners-subtitle">
              We work with industry-leading technologies and platforms to deliver exceptional results for our clients
            </p>
            
            <div className="technology-logos-grid">
              {technologyPartners.map((partner, index) => (
                <div key={index} className="logo-item">
                  <img
                    src={partner.src}
                    alt={partner.alt}
                    title={partner.name}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Service Description Component */}
        <ServiceDescription />
      </section>

      <div className="itservices-section">
        <div className="section-title">
          <span className="subtitle">WHAT WE OFFER</span>
          <h2>
            Transforming Businesses with <br />
            Advanced IT Solutions
          </h2>
        </div>
        {/* Services Slider */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          loop={true}
          navigation={true}
          pagination={{ clickable: true }}
          speed={350}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
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
            <img src={men} alt="Support Representative" />
          </div>
          <div className="contact-info-content">
            <div className="rating-value">4.9/5.0</div>
            <div className="rating-stars">★★★★★</div>
            <div className="rating-text">
              by 700+ customers for 3200+ clients
            </div>
            <div className="contact-method">
              <div className="contact-icon">
                <i className="fas fa-phone-volume"></i>
              </div>
              <div className="contact-text">
                <div className="contact-label">Call for advice now!</div>
                <a href="tel:+971588481295" className="contact-value">
                  +971588481295
                </a>
              </div>
            </div>

            <div className="contact-method">
              <div className="contact-icon">
                <i className="far fa-envelope"></i>
              </div>
              <div className="contact-text">
                <div className="contact-label">Say hello</div>
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