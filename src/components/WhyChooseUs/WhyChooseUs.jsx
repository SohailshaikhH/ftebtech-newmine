import React, { useState, useEffect, useRef } from 'react';
import { Icon } from '../Icons/IconSystem';
import '../../styles/components/WhyChooseUs/WhyChooseUs.scss';

const WhyChooseUs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const tabs = [
    {
      id: 'expertise',
      title: 'Deep Expertise',
      icon: 'Award',
      content: {
        title: '10+ Years of Technology Excellence',
        description: 'Our team brings over a decade of experience in enterprise technology solutions, with certified professionals across all major cloud platforms.',
        features: [
          'Microsoft Certified Professionals (Azure, M365, Dynamics)',
          'AWS Certified Solutions Architects and Engineers',
          'Google Cloud Professional Architects',
          'Industry-specific domain expertise',
          'Continuous learning and certification programs'
        ],
        stats: { number: '50+', label: 'Certified Professionals' }
      }
    },
    {
      id: 'approach',
      title: 'Proven Approach',
      icon: 'Settings',
      content: {
        title: 'Methodology That Delivers Results',
        description: 'We follow industry best practices and proven methodologies to ensure successful project delivery with minimal risk and maximum value.',
        features: [
          'Agile project management with regular checkpoints',
          'Risk assessment and mitigation strategies',
          'Comprehensive testing and quality assurance',
          'Change management and user adoption support',
          'Post-implementation optimization and support'
        ],
        stats: { number: '98%', label: 'Success Rate' }
      }
    },
    {
      id: 'support',
      title: '24/7 Support',
      icon: 'Shield',
      content: {
        title: 'Always There When You Need Us',
        description: 'Our commitment extends beyond implementation with round-the-clock monitoring, support, and proactive maintenance.',
        features: [
          '24/7 system monitoring and alerting',
          'Rapid response to critical issues',
          'Proactive maintenance and updates',
          'Dedicated support team for each client',
          'Comprehensive SLA guarantees'
        ],
        stats: { number: '4hrs', label: 'Response Time' }
      }
    },
    {
      id: 'innovation',
      title: 'Innovation Focus',
      icon: 'Network',
      content: {
        title: 'Cutting-Edge Technology Solutions',
        description: 'We stay ahead of technology trends to provide innovative solutions that give our clients competitive advantages.',
        features: [
          'AI and Machine Learning integration',
          'IoT and edge computing solutions',
          'Advanced analytics and business intelligence',
          'Automation and workflow optimization',
          'Emerging technology adoption strategies'
        ],
        stats: { number: '100+', label: 'Innovations Delivered' }
      }
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabs.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="why-choose-us-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h6 className="section-subtitle">WHY CHOOSE US</h6>
          <h2 className="section-title">What Sets Us Apart</h2>
          <p className="section-description">
            Discover why leading businesses trust us with their most critical technology initiatives
          </p>
        </div>

        <div className="why-choose-content">
          <div className="tabs-navigation">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                className={`tab-button ${activeTab === index ? 'active' : ''}`}
                onClick={() => setActiveTab(index)}
              >
                <div className="tab-icon">
                  <Icon name={tab.icon} size={24} />
                </div>
                <span className="tab-title">{tab.title}</span>
                <div className="tab-indicator"></div>
              </button>
            ))}
          </div>

          <div className="tab-content">
            {tabs.map((tab, index) => (
              <div
                key={tab.id}
                className={`tab-panel ${activeTab === index ? 'active' : ''}`}
              >
                <div className="content-grid">
                  <div className="content-text">
                    <h3>{tab.content.title}</h3>
                    <p>{tab.content.description}</p>
                    
                    <ul className="features-list">
                      {tab.content.features.map((feature, idx) => (
                        <li key={idx}>
                          <Icon name="Check" size={16} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="content-visual">
                    <div className="stat-highlight">
                      <div className="stat-number">{tab.content.stats.number}</div>
                      <div className="stat-label">{tab.content.stats.label}</div>
                    </div>
                    
                    <div className="visual-decoration">
                      <div className="decoration-circle"></div>
                      <div className="decoration-dots"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bottom-cta">
          <div className="cta-card">
            <h3>Ready to Experience the Difference?</h3>
            <p>Join 500+ satisfied clients who trust us with their technology needs</p>
            <button className="btn primary">
              <Icon name="ArrowRight" size={16} />
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;