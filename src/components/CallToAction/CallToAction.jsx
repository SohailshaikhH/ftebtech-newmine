import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '../Icons/IconSystem';
import '../../styles/components/CallToAction/CallToAction.scss';

const CallToAction = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/contact-us');
  };

  const handleViewServices = () => {
    navigate('/servicess');
  };

  return (
    <section className="cta-section">
      <div className="cta-background">
        <div className="cta-pattern"></div>
        <div className="cta-gradient"></div>
      </div>
      
      <div className="container">
        <div className="cta-content">
          <div className="cta-main">
            <div className="cta-badge">
              <Icon name="Award" size={20} />
              <span>Ready to Transform?</span>
            </div>
            
            <h2 className="cta-title">
              Let's Build Your Digital Future
              <span className="highlight-text"> Together</span>
            </h2>
            
            <p className="cta-description">
              Join hundreds of successful businesses that have transformed their operations 
              with our cutting-edge technology solutions. Get started with a free consultation today.
            </p>

            <div className="cta-features">
              <div className="feature-item">
                <Icon name="Check" size={16} />
                <span>Free Initial Consultation</span>
              </div>
              <div className="feature-item">
                <Icon name="Check" size={16} />
                <span>Custom Solution Design</span>
              </div>
              <div className="feature-item">
                <Icon name="Check" size={16} />
                <span>24/7 Ongoing Support</span>
              </div>
            </div>

            <div className="cta-actions">
              <button className="btn primary large" onClick={handleGetStarted}>
                <Icon name="ArrowRight" size={18} />
                Get Free Consultation
              </button>
              <button className="btn secondary large" onClick={handleViewServices}>
                <Icon name="Services" size={18} />
                Explore Services
              </button>
            </div>

            <div className="cta-contact-info">
              <div className="contact-item">
                <Icon name="Phone" size={16} />
                <span>+971 58 848 1295</span>
              </div>
              <div className="contact-item">
                <Icon name="Email" size={16} />
                <span>Connect@ftebtech.com</span>
              </div>
            </div>
          </div>

          <div className="cta-visual">
            <div className="visual-card">
              <div className="card-header">
                <div className="status-indicator"></div>
                <span>Live Project Dashboard</span>
              </div>
              <div className="card-content">
                <div className="metric">
                  <span className="metric-label">Projects Active</span>
                  <span className="metric-value">47</span>
                </div>
                <div className="metric">
                  <span className="metric-label">Success Rate</span>
                  <span className="metric-value">98%</span>
                </div>
                <div className="metric">
                  <span className="metric-label">Avg. Response</span>
                  <span className="metric-value">4hrs</span>
                </div>
              </div>
              <div className="card-footer">
                <div className="progress-bar">
                  <div className="progress-fill"></div>
                </div>
                <span className="progress-text">Implementation Progress</span>
              </div>
            </div>

            <div className="floating-elements">
              <div className="floating-icon icon-1">
                <Icon name="Cloud" size={24} />
              </div>
              <div className="floating-icon icon-2">
                <Icon name="Shield" size={20} />
              </div>
              <div className="floating-icon icon-3">
                <Icon name="Settings" size={18} />
              </div>
            </div>
          </div>
        </div>

        <div className="cta-bottom">
          <div className="trust-indicators">
            <div className="trust-item">
              <Icon name="Shield" size={20} />
              <span>ISO 27001 Certified</span>
            </div>
            <div className="trust-item">
              <Icon name="Award" size={20} />
              <span>Microsoft Gold Partner</span>
            </div>
            <div className="trust-item">
              <Icon name="Check" size={20} />
              <span>99.9% SLA Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;