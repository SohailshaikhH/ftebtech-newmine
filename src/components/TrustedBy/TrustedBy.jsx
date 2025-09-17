import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import '../../styles/components/TrustedBy/TrustedBy.scss';

// Import logos
import microsoftLogo from '../../assets/images/ProductLogos/Microsoft-Logo.png';
import azureLogo from '../../assets/images/ProductLogos/azure.png';
import awsLogo from '../../assets/images/ProductLogos/aws.png';
import gcpLogo from '../../assets/images/ProductLogos/googlecloud.png';
import dynamicsLogo from '../../assets/images/ProductLogos/Dynamics-365.png';
import m365Logo from '../../assets/images/ProductLogos/m365.png';

const TrustedBy = () => {
  const partners = [
    { logo: microsoftLogo, name: 'Microsoft', className: 'logo-microsoft' },
    { logo: azureLogo, name: 'Microsoft Azure', className: 'logo-azure' },
    { logo: awsLogo, name: 'Amazon Web Services', className: 'logo-aws' },
    { logo: gcpLogo, name: 'Google Cloud', className: 'logo-gcp' },
    { logo: dynamicsLogo, name: 'Dynamics 365', className: 'logo-dynamics' },
    { logo: m365Logo, name: 'Microsoft 365', className: 'logo-m365' }
  ];

  return (
    <section className="trusted-by-section">
      <div className="container">
        <div className="trusted-by-content">
          <div className="section-header">
            <h6 className="section-subtitle">TRUSTED PARTNERSHIPS</h6>
            <h2 className="section-title">Certified Partners with Industry Leaders</h2>
            <p className="section-description">
              We maintain strategic partnerships and certifications with the world's leading technology companies
            </p>
          </div>

          <div className="partners-showcase">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={40}
              slidesPerView={2}
              loop={true}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              speed={3000}
              breakpoints={{
                320: { slidesPerView: 2, spaceBetween: 20 },
                576: { slidesPerView: 3, spaceBetween: 30 },
                768: { slidesPerView: 4, spaceBetween: 35 },
                992: { slidesPerView: 5, spaceBetween: 40 },
                1200: { slidesPerView: 6, spaceBetween: 50 }
              }}
              className="partners-swiper"
            >
              {[...partners, ...partners].map((partner, index) => (
                <SwiperSlide key={`${partner.name}-${index}`} className="partner-slide">
                  <div className="partner-logo-wrapper">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className={`partner-logo ${partner.className}`}
                      loading="lazy"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="partnership-highlights">
            <div className="highlight-item">
              <div className="highlight-icon">
                <span className="icon-badge">🏆</span>
              </div>
              <div className="highlight-content">
                <h4>Microsoft Gold Partner</h4>
                <p>Recognized expertise in cloud solutions</p>
              </div>
            </div>
            
            <div className="highlight-item">
              <div className="highlight-icon">
                <span className="icon-badge">🎯</span>
              </div>
              <div className="highlight-content">
                <h4>AWS Advanced Partner</h4>
                <p>Proven track record in AWS implementations</p>
              </div>
            </div>
            
            <div className="highlight-item">
              <div className="highlight-icon">
                <span className="icon-badge">⚡</span>
              </div>
              <div className="highlight-content">
                <h4>Google Cloud Partner</h4>
                <p>Certified in GCP architecture and deployment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;