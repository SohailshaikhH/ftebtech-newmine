import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Icon } from '../Icons/IconSystem';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../styles/components/Testimonials/Testimonials.scss';

const Testimonials = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'CTO',
      company: 'TechCorp Solutions',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      rating: 5,
      text: 'FTEB Technology transformed our entire cloud infrastructure. Their Azure migration was seamless, and we saw immediate improvements in performance and cost savings. The team\'s expertise is unmatched.',
      project: 'Azure Cloud Migration',
      results: ['40% cost reduction', '99.9% uptime achieved', '3x faster deployment']
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'IT Director',
      company: 'Global Manufacturing Inc.',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      rating: 5,
      text: 'The Microsoft 365 implementation was flawless. FTEB handled everything from email migration to user training. Our productivity increased significantly, and the security features give us peace of mind.',
      project: 'Microsoft 365 Implementation',
      results: ['500+ users migrated', '50% productivity boost', 'Zero security incidents']
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      position: 'Operations Manager',
      company: 'Healthcare Plus',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      rating: 5,
      text: 'Their cybersecurity assessment revealed vulnerabilities we didn\'t know existed. The implemented security framework has protected us from multiple threats. Excellent proactive approach.',
      project: 'Cybersecurity Implementation',
      results: ['100% threat detection', '24/7 monitoring', 'Compliance achieved']
    },
    {
      id: 4,
      name: 'David Thompson',
      position: 'CEO',
      company: 'Retail Dynamics',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      rating: 5,
      text: 'The custom ERP solution they developed revolutionized our operations. Integration with existing systems was smooth, and the ROI was evident within months. Highly recommended!',
      project: 'Custom ERP Development',
      results: ['60% process efficiency', '30% cost reduction', '6 months ROI']
    },
    {
      id: 5,
      name: 'Lisa Wang',
      position: 'IT Manager',
      company: 'Financial Services Ltd.',
      avatar: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      rating: 5,
      text: 'FTEB\'s infrastructure management service is exceptional. They proactively monitor our systems and prevent issues before they impact our business. True partnership approach.',
      project: 'Infrastructure Management',
      results: ['99.8% uptime', 'Proactive monitoring', '24/7 support']
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <h6 className="section-subtitle">CLIENT SUCCESS STORIES</h6>
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-description">
            Real feedback from real clients who have transformed their businesses with our solutions
          </p>
        </div>

        <div className="testimonials-content">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            breakpoints={{
              768: {
                slidesPerView: 1.2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 1.5,
                spaceBetween: 50,
              }
            }}
            onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
            className="testimonials-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={testimonial.id} className="testimonial-slide">
                <div className="testimonial-card">
                  <div className="testimonial-header">
                    <div className="quote-icon">
                      <Icon name="Info" size={24} />
                    </div>
                    <div className="rating">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="star">★</span>
                      ))}
                    </div>
                  </div>

                  <div className="testimonial-content">
                    <p className="testimonial-text">"{testimonial.text}"</p>
                    
                    <div className="project-info">
                      <h4 className="project-title">{testimonial.project}</h4>
                      <div className="results-list">
                        {testimonial.results.map((result, idx) => (
                          <span key={idx} className="result-tag">
                            <Icon name="Check" size={12} />
                            {result}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="testimonial-footer">
                    <div className="client-avatar">
                      <img src={testimonial.avatar} alt={testimonial.name} />
                    </div>
                    <div className="client-info">
                      <h4 className="client-name">{testimonial.name}</h4>
                      <p className="client-position">{testimonial.position}</p>
                      <p className="client-company">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="testimonials-stats">
          <div className="stat-item">
            <div className="stat-number">500+</div>
            <div className="stat-label">Happy Clients</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">98%</div>
            <div className="stat-label">Satisfaction Rate</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">1000+</div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;