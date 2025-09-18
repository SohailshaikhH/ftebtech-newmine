import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../../styles/components/Services/Services.scss';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Icon } from '../Icons/IconSystem';

// Import existing logos from your project
import azureLogo from '../../assets/images/ProductLogos/azure.png';
import m365Logo from '../../assets/images/ProductLogos/m365.png';
import dynamicsLogo from '../../assets/images/ProductLogos/Dynamics-365.png';
import developmentLogo from '../../assets/images/ProductLogos/Development.png';
import microsoftLogo from '../../assets/images/ProductLogos/Microsoft-Logo.png';
import awsLogo from "../../assets/images/ProductLogos/aws.png";
import erosourceLogo from "../../assets/images/ProductLogos/erosource.png";
import googlecloudLogo from "../../assets/images/ProductLogos/googlecloud.png";
import linuxLogo from "../../assets/images/ProductLogos/linux.png";
import mlLogo from "../../assets/images/ProductLogos/Machine_Learning_Logo.png";
import pythonLogo from "../../assets/images/ProductLogos/Python.png";
import reactLogo from "../../assets/images/ProductLogos/react-logo.png";
import terraformLogo from "../../assets/images/ProductLogos/terraform.png";
import turbo360Logo from "../../assets/images/ProductLogos/Turbo360.png";
import adevops from "../../assets/images/ProductLogos/a-devops.png";
import Cybersecurity from "../../assets/images/ProductLogos/cyber.png";
import ITinfrastructureLogo from "../../assets/images/ProductLogos/it-infrastructure.png";

const ServiceDescription = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      id: 'cloud-services',
      title: 'Cloud Services (Azure, AWS, GCP)',
      description: 'Complete multi-cloud infrastructure solutions. From migration to optimization, we handle your entire cloud journey across Azure, AWS, and Google Cloud with enterprise-grade security and scalability.',
      logos: [azureLogo, awsLogo, googlecloudLogo],
      features: ['Multi-Cloud Strategy', 'Cloud Migration', 'Infrastructure Setup', 'Cost Optimization'],
      path: '/services/cloud-services',
      category: 'cloud',
      icon: 'Cloud',
      popularity: 95,
      estimatedTime: '2-6 months'
    },
    {
      id: 'microsoft365',
      title: 'Microsoft 365 Solutions',
      description: 'Empower your workforce with comprehensive M365 implementation, security configuration, and ongoing support for maximum productivity.',
      logo: m365Logo,
      features: ['Email Migration', 'Teams Setup', 'Security Configuration', 'User Training'],
      path: '/services/microsoft365',
      category: 'productivity',
      icon: 'Settings',
      popularity: 88,
      estimatedTime: '1-3 months'
    },
    {
      id: 'dynamics365',
      title: 'Dynamics 365 Implementation',
      description: 'Transform your business operations with intelligent ERP and CRM solutions tailored to your specific industry needs and requirements.',
      logo: dynamicsLogo,
      features: ['Business Central', 'Sales & Marketing', 'Field Service', 'Custom Development'],
      path: '/services/dynamics365',
      category: 'business',
      icon: 'Analytics',
      popularity: 82,
      estimatedTime: '3-8 months'
    },
    {
      id: 'infrastructure',
      title: 'ICT',
      description: 'End-to-end infrastructure planning, implementation, and management for optimal performance, reliability, and business continuity.',
      logo: ITinfrastructureLogo,
      features: ['Network Setup', 'Server Management', 'Hardware Procurement', 'Monitoring'],
      path: '/services/infrastructure',
      category: 'infrastructure',
      icon: 'Server',
      popularity: 90,
      estimatedTime: '1-4 months'
    },
    {
      id: 'security',
      title: 'Cybersecurity Solutions',
      description: 'Protect your business with comprehensive security strategies, advanced threat protection, and compliance management solutions.',
      logo: Cybersecurity,
      features: ['Security Assessment', 'Threat Protection', 'Compliance', '24/7 Monitoring'],
      path: '/services/security',
      category: 'security',
      icon: 'Shield',
      popularity: 93,
      estimatedTime: '2-5 months'
    },
    {
      id: 'turbo360',
      title: 'Turbo360 Management',
      description: 'Comprehensive Azure and Office 365 management platform for monitoring, governance, and optimization of your cloud environment.',
      logo: turbo360Logo,
      features: ['Cloud Monitoring', 'Governance', 'Cost Management', 'Performance Analytics'],
      path: '/services/turbo360',
      category: 'management',
      icon: 'Analytics',
      popularity: 75,
      estimatedTime: '1-2 months'
    },
    {
      id: 'eresource',
      title: 'eresource Solutions',
      description: 'Advanced enterprise resource planning and business intelligence solutions to streamline operations and drive data-driven decisions.',
      logo: erosourceLogo,
      features: ['ERP Implementation', 'Business Intelligence', 'Data Analytics', 'Process Automation'],
      path: '/services/eresource',
      category: 'business',
      icon: 'Database',
      popularity: 78,
      estimatedTime: '3-6 months'
    },
    {
      id: 'development',
      title: 'Custom Development',
      description: 'Build powerful web applications and business tools with modern technologies, ensuring scalability, performance, and user experience.',
      logo: developmentLogo,
      features: ['Web Applications', 'Mobile Apps', 'API Development', 'System Integration'],
      path: '/services/development',
      category: 'development',
      icon: 'Code',
      popularity: 85,
      estimatedTime: '2-8 months'
    },
  ];

  const serviceCategories = [
    { id: 'all', name: 'All Services', icon: 'Services' },
    { id: 'cloud', name: 'Cloud Solutions', icon: 'Cloud' },
    { id: 'productivity', name: 'Productivity', icon: 'Settings' },
    { id: 'business', name: 'Business Apps', icon: 'Analytics' },
    { id: 'infrastructure', name: 'Infrastructure', icon: 'Server' },
    { id: 'security', name: 'Security', icon: 'Shield' },
    { id: 'management', name: 'Management', icon: 'Network' },
    { id: 'development', name: 'Development', icon: 'Code' }
  ];

  const filteredServices = activeFilter === 'all' 
    ? services 
    : services.filter(service => service.category === activeFilter);

 const productLogos = [
    { src: awsLogo, class: 'logo-aws', alt: 'AWS Logo' },
    { src: reactLogo, class: 'logo-react', alt: 'React Logo' },
    { src: azureLogo, class: 'logo-azure', alt: 'Azure Logo' },
    { src: developmentLogo, class: 'logo-development', alt: 'Development Logo' },
    { src: terraformLogo, class: 'logo-terraform', alt: 'Terraform Logo' },
    { src: googlecloudLogo, class: 'logo-googlecloud', alt: 'Google Cloud Logo' },
    { src: linuxLogo, class: 'logo-linux', alt: 'Linux Logo' },
    { src: m365Logo, class: 'logo-m365', alt: 'Microsoft 365 Logo' },
    { src: erosourceLogo, class: 'logo-erosource', alt: 'Erosource Logo' },
    { src: mlLogo, class: 'logo-ml', alt: 'Machine Learning Logo' },
    { src: dynamicsLogo, class: 'logo-dynamics', alt: 'Dynamics 365 Logo' },
    { src: pythonLogo, class: 'logo-python', alt: 'Python Logo' },
    { src: turbo360Logo, class: 'logo-turbo360', alt: 'Turbo360 Logo' },
    { src: adevops, class: 'logo-adevops', alt: 'adevops' },
    { src: microsoftLogo, class: 'logo-microsoft', alt: 'microsoftLogo' },
  ];

  const handleServiceClick = (path) => {
    navigate(path);
  };

  const handleGetStarted = () => {
    navigate('/contact-us');
  };

  return (
    <div className="service-description-wrapper">
      <div className="services-hero-section " >
        <div className="services-hero-content "  >
          <span className="services-subtitle "  >OUR EXPERTISE</span>
          <h1 className="services-main-title "  >
            Comprehensive IT Services for 
            <span className="highlight-text"> Modern Businesses</span>
          </h1>
          <p className="services-hero-description "  >
            From cloud infrastructure to custom development, we provide end-to-end technology solutions 
            that drive innovation, enhance security, and accelerate your digital transformation journey.
          </p>
          <div className="services-stats -container">
            <div className="stat-item "  >
              <span className="stat-number "  >500+</span>
              <span className="stat-label "  >Projects Delivered</span>
            </div>
            <div className="stat-item "  >
              <span className="stat-number "  >98%</span>
              <span className="stat-label "  >Client Satisfaction</span>
            </div>
            <div className="stat-item "  >
              <span className="stat-number "  >10+</span>
              <span className="stat-label "  >Years Experience</span>
            </div>
          </div>
        </div>
      </div>
      <section className="descriptions">
        <Swiper
          modules={[Autoplay, Navigation]}
          loop={true}
          speed={3000}
          spaceBetween={30}
          slidesPerGroup={1}
          allowTouchMove={true}
          watchSlidesProgress={true}
          centeredSlides={true}
          grabCursor={true}
          navigation={true}
          keyboard={{
            enabled: true,
            onlyInViewport: false,
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            reverseDirection: false
          }}
          className="product-logos-swiper"
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 15 },
            480: { slidesPerView: 3, spaceBetween: 20 },
            640: { slidesPerView: 4, spaceBetween: 25 },
            768: { slidesPerView: 5, spaceBetween: 30 },
            1024: { slidesPerView: 6, spaceBetween: 35 },
            1200: { slidesPerView: 7, spaceBetween: 40 },
          }}
        >
          {[...productLogos].map((logo, idx) => (
            <SwiperSlide key={idx} className="logo-slide">
              <img
                src={logo.src}
                alt={logo.alt}
                className={logo.class}
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Service Categories Filter */}
      <section className="service-categories-section">
        <div className="container">
          <div className="section-header">
            <h2>Explore Our Services by Category</h2>
            <p>Filter services to find exactly what you need for your business</p>
          </div>
          
          <div className="category-filters">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                className={`category-filter ${activeFilter === category.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(category.id)}
              >
                <div className="icon-container icon-container-sm">
                  <Icon name={category.icon} size={20} />
                </div>
                <span>{category.name}</span>
                {activeFilter === category.id && (
                  <div className="filter-indicator">
                    <Icon name="Check" size={14} />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Services Grid */}
      <div className="container services-grid-section container">
        <div className="services-grid-header">
          <div className="results-info">
            <span className="results-count">
              {filteredServices.length} {filteredServices.length === 1 ? 'Service' : 'Services'} 
              {activeFilter !== 'all' && ` in ${serviceCategories.find(cat => cat.id === activeFilter)?.name}`}
            </span>
          </div>
        </div>
        
        <div className="row">
          {filteredServices.map((service, index) => (
            <div key={service.id} className="col-md-6 col-sm-6 col-lg-4 mb-4 d-flex">
              <div 
                className={`service-card-modern d-flex flex-column ${hoveredService === service.id ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="service-card-header "  >
                  <div className="service-badge">
                    <Icon name={service.icon} size={16} />
                    <span>{service.category}</span>
                  </div>
                  
                  <div className="service-logo-wrapper " >
                    {Array.isArray(service.logos) ? (
                      <div className="cloud-logos-container">
                        {service.logos.map((logo, idx) => (
                          <img 
                            key={idx} 
                            src={logo} 
                            alt={`${service.title} Logo ${idx + 1}`} 
                            className={`cloud-service-logo logo-${idx + 1}`} 
                          />
                        ))}
                      </div>
                    ) : (
                      <img src={service.logo} alt={`${service.title} Logo`} className="service-logo" />
                    )}
                  </div>
                  
                  <h3 className="service-title-modern "  >{service.title}</h3>
                  
                  <div className="service-metrics">
                    <div className="metric-item">
                      <Icon name="Users" size={14} />
                      <span>{service.popularity}% satisfaction</span>
                    </div>
                    <div className="metric-item">
                      <Icon name="Clock" size={14} />
                      <span>{service.estimatedTime}</span>
                    </div>
                  </div>
                </div>
                
                <p className="service-description-modern " >{service.description}</p>

                {service.features && service.features.length > 0 && (
                  <div className="service-features "  >
                    {service.features.map((feature, idx) => (
                      <span key={idx} className="feature-tag "  >{feature}</span>
                    ))}
                  </div>
                )}
                
                <div className="service-card-footer "  >
                  <button 
                    className="service-btn"
                    onClick={() => handleServiceClick(service.path)}
                  >
                    <Icon name="ArrowRight" size={16} />
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Comparison Section */}
      <section className="service-comparison-section">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Our Services?</h2>
            <p>See how we compare and what makes us the right choice for your business</p>
          </div>
          
          <div className="comparison-grid">
            <div className="comparison-card">
              <div className="comparison-header">
                <div className="icon-container icon-container-lg icon-container-primary">
                  <Icon name="Award" size={32} />
                </div>
                <h3>Industry Expertise</h3>
              </div>
              <div className="comparison-content">
                <div className="comparison-stat">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <ul className="comparison-features">
                  <li><Icon name="Check" size={14} />Microsoft Certified Partners</li>
                  <li><Icon name="Check" size={14} />AWS Advanced Consulting Partner</li>
                  <li><Icon name="Check" size={14} />Google Cloud Partner</li>
                  <li><Icon name="Check" size={14} />500+ Successful Projects</li>
                </ul>
              </div>
            </div>
            
            <div className="comparison-card">
              <div className="comparison-header">
                <div className="icon-container icon-container-lg icon-container-primary">
                  <Icon name="Shield" size={32} />
                </div>
                <h3>Proven Methodology</h3>
              </div>
              <div className="comparison-content">
                <div className="comparison-stat">
                  <span className="stat-number">98%</span>
                  <span className="stat-label">Success Rate</span>
                </div>
                <ul className="comparison-features">
                  <li><Icon name="Check" size={14} />Agile Project Management</li>
                  <li><Icon name="Check" size={14} />Risk Mitigation Strategies</li>
                  <li><Icon name="Check" size={14} />Quality Assurance Testing</li>
                  <li><Icon name="Check" size={14} />Post-Implementation Support</li>
                </ul>
              </div>
            </div>
            
            <div className="comparison-card">
              <div className="comparison-header">
                <div className="icon-container icon-container-lg icon-container-primary">
                  <Icon name="Users" size={32} />
                </div>
                <h3>24/7 Support</h3>
              </div>
              <div className="comparison-content">
                <div className="comparison-stat">
                  <span className="stat-number">4hrs</span>
                  <span className="stat-label">Response Time</span>
                </div>
                <ul className="comparison-features">
                  <li><Icon name="Check" size={14} />Round-the-clock Monitoring</li>
                  <li><Icon name="Check" size={14} />Dedicated Support Team</li>
                  <li><Icon name="Check" size={14} />Proactive Maintenance</li>
                  <li><Icon name="Check" size={14} />SLA Guarantees</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Process Timeline */}
      <section className="service-process-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Proven Service Delivery Process</h2>
            <p>A systematic approach that ensures successful project outcomes</p>
          </div>
          
          <div className="process-timeline">
            <div className="timeline-item">
              <div className="timeline-marker">
                <Icon name="Analytics" size={24} />
              </div>
              <div className="timeline-content">
                <h3>Discovery & Assessment</h3>
                <p>Comprehensive analysis of your current environment, business requirements, and technical needs.</p>
                <div className="timeline-features">
                  <span>Infrastructure Audit</span>
                  <span>Requirements Gathering</span>
                  <span>Risk Assessment</span>
                </div>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-marker">
                <Icon name="Settings" size={24} />
              </div>
              <div className="timeline-content">
                <h3>Strategy & Planning</h3>
                <p>Develop a customized implementation strategy with detailed project roadmap and timelines.</p>
                <div className="timeline-features">
                  <span>Solution Architecture</span>
                  <span>Project Planning</span>
                  <span>Resource Allocation</span>
                </div>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-marker">
                <Icon name="Code" size={24} />
              </div>
              <div className="timeline-content">
                <h3>Implementation & Testing</h3>
                <p>Execute the implementation with rigorous testing and quality assurance processes.</p>
                <div className="timeline-features">
                  <span>Phased Deployment</span>
                  <span>Quality Testing</span>
                  <span>User Acceptance</span>
                </div>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-marker">
                <Icon name="Check" size={24} />
              </div>
              <div className="timeline-content">
                <h3>Go-Live & Support</h3>
                <p>Smooth transition to production with comprehensive training and ongoing support.</p>
                <div className="timeline-features">
                  <span>Go-Live Support</span>
                  <span>User Training</span>
                  <span>24/7 Monitoring</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Packages Section */}
      <section className="service-packages-section">
        <div className="container">
          <div className="section-header">
            <h2>Service Packages Tailored to Your Needs</h2>
            <p>Choose the right package for your business size and requirements</p>
          </div>
          
          <div className="packages-grid">
            <div className="package-card starter">
              <div className="package-header">
                <div className="package-icon">
                  <Icon name="Settings" size={32} />
                </div>
                <h3>Starter Package</h3>
                <p className="package-subtitle">Perfect for small businesses</p>
              </div>
              <div className="package-content">
                <div className="package-price">
                  <span className="price-label">Starting from</span>
                  <span className="price-value">$2,500</span>
                  <span className="price-period">/project</span>
                </div>
                <ul className="package-features">
                  <li><Icon name="Check" size={14} />Basic cloud setup</li>
                  <li><Icon name="Check" size={14} />Email migration</li>
                  <li><Icon name="Check" size={14} />Security configuration</li>
                  <li><Icon name="Check" size={14} />3 months support</li>
                </ul>
                <button className="package-btn" onClick={handleGetStarted}>
                  Get Started
                </button>
              </div>
            </div>
            
            <div className="package-card professional featured">
              <div className="package-badge">Most Popular</div>
              <div className="package-header">
                <div className="package-icon">
                  <Icon name="Award" size={32} />
                </div>
                <h3>Professional Package</h3>
                <p className="package-subtitle">Ideal for growing companies</p>
              </div>
              <div className="package-content">
                <div className="package-price">
                  <span className="price-label">Starting from</span>
                  <span className="price-value">$7,500</span>
                  <span className="price-period">/project</span>
                </div>
                <ul className="package-features">
                  <li><Icon name="Check" size={14} />Complete cloud migration</li>
                  <li><Icon name="Check" size={14} />Advanced security setup</li>
                  <li><Icon name="Check" size={14} />Custom integrations</li>
                  <li><Icon name="Check" size={14} />12 months support</li>
                  <li><Icon name="Check" size={14} />Training & documentation</li>
                </ul>
                <button className="package-btn primary" onClick={handleGetStarted}>
                  Get Started
                </button>
              </div>
            </div>
            
            <div className="package-card enterprise">
              <div className="package-header">
                <div className="package-icon">
                  <Icon name="Network" size={32} />
                </div>
                <h3>Enterprise Package</h3>
                <p className="package-subtitle">For large organizations</p>
              </div>
              <div className="package-content">
                <div className="package-price">
                  <span className="price-label">Starting from</span>
                  <span className="price-value">$25,000</span>
                  <span className="price-period">/project</span>
                </div>
                <ul className="package-features">
                  <li><Icon name="Check" size={14} />Multi-cloud architecture</li>
                  <li><Icon name="Check" size={14} />Enterprise security</li>
                  <li><Icon name="Check" size={14} />Custom development</li>
                  <li><Icon name="Check" size={14} />24/7 dedicated support</li>
                  <li><Icon name="Check" size={14} />SLA guarantees</li>
                  <li><Icon name="Check" size={14} />Ongoing optimization</li>
                </ul>
                <button className="package-btn" onClick={handleGetStarted}>
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="services-cta-section "  data-delay="2500">
        <div className="cta-content "  data-delay="2600">
          <h2>Ready to Transform Your Business?</h2>
          <p>Let's discuss how our IT services can help you achieve your goals and drive growth.</p>
          <div className="cta-buttons " data-animation="zoom-in" data-delay="2700">
            <button 
              className="service-btn primary-btn"
              onClick={handleGetStarted}
            >
              <Icon name="ArrowRight" size={16} />
              Get Started Today
            </button>
            <button 
              className="service-btn secondary-btn"
              onClick={() => navigate('/servicess')}
            >
              <Icon name="Services" size={16} />
              View All Services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDescription;
