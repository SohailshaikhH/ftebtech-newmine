import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMapMarkerAlt, 
  faPhoneAlt, 
  faEnvelope,
  faClock,
  faGlobe,
  faCheckCircle,
  faExclamationTriangle,
  faPaperPlane,
  faDesktop
} from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedinIn,
  faTwitter,
  faFacebookF,
  faInstagram,
  faGoogle
} from '@fortawesome/free-brands-svg-icons';
import './Contact.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: '',
    agreeToTerms: false
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isFormValid, setIsFormValid] = useState(false);
  const [emailClientOption, setEmailClientOption] = useState('default'); // 'default' or 'gmail'

  const contactInfo = [
    {
      icon: faMapMarkerAlt,
      title: "Visit Our Office",
      content: "AG House, Sala Al Din, Dubai, UAE",
      subContent: "Business Bay District"
    },
    {
      icon: faPhoneAlt,
      title: "Call Us",
      content: "+971 58 848 1295",
      subContent: "Mon - Fri, 9:00 AM - 6:00 PM"
    },
    {
      icon: faEnvelope,
      title: "Email Us",
      content: "Connect@ftebtech.com",
      subContent: "We'll respond within 24 hours"
    },
    {
      icon: faClock,
      title: "Business Hours",
      content: "Mon - Fri: 9:00 AM - 6:00 PM",
      subContent: "Sat: 10:00 AM - 4:00 PM"
    }
  ];

  const services = [
    'Azure Cloud Services',
    'Microsoft 365 Solutions',
    'Dynamics 365 Implementation',
    'Custom Development',
    'IT Infrastructure',
    'Cybersecurity Solutions',
    'Other'
  ];

  const budgetRanges = [
    'Under $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000 - $100,000',
    'Over $100,000',
    'Prefer to discuss'
  ];

  const socialLinks = [
    { icon: faLinkedinIn, url: 'https://linkedin.com/company/ftebtech', label: 'LinkedIn' },
    { icon: faTwitter, url: 'https://twitter.com/ftebtech', label: 'Twitter' },
    { icon: faFacebookF, url: 'https://facebook.com/ftebtech', label: 'Facebook' },
    { icon: faInstagram, url: 'https://instagram.com/ftebtech', label: 'Instagram' }
  ];

  // Validation rules
  const validateField = (name, value) => {
    const errors = {};

    switch (name) {
      case 'firstName':
        if (!value.trim()) errors.firstName = 'First name is required';
        else if (value.length < 2) errors.firstName = 'First name must be at least 2 characters';
        break;
      
      case 'lastName':
        if (!value.trim()) errors.lastName = 'Last name is required';
        else if (value.length < 2) errors.lastName = 'Last name must be at least 2 characters';
        break;
      
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.trim()) errors.email = 'Email is required';
        else if (!emailRegex.test(value)) errors.email = 'Please enter a valid email address';
        break;
      
      case 'phone':
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        if (!value.trim()) errors.phone = 'Phone number is required';
        else if (!phoneRegex.test(value.replace(/[\s\-\(\)]/g, ''))) {
          errors.phone = 'Please enter a valid phone number';
        }
        break;
      
      case 'company':
        if (!value.trim()) errors.company = 'Company name is required';
        break;
      
      case 'service':
        if (!value) errors.service = 'Please select a service';
        break;
      
      case 'message':
        if (!value.trim()) errors.message = 'Message is required';
        else if (value.length < 10) errors.message = 'Message must be at least 10 characters';
        break;
      
      case 'agreeToTerms':
        if (!value) errors.agreeToTerms = 'You must agree to the terms and conditions';
        break;
      
      default:
        break;
    }

    return errors;
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;

    setFormData(prev => ({
      ...prev,
      [name]: fieldValue
    }));

    // Real-time validation
    const fieldErrors = validateField(name, fieldValue);
    setFormErrors(prev => ({
      ...prev,
      ...fieldErrors,
      [name]: fieldErrors[name] || undefined
    }));
  };

  // Validate entire form
  const validateForm = () => {
    const errors = {};
    Object.keys(formData).forEach(key => {
      const fieldErrors = validateField(key, formData[key]);
      Object.assign(errors, fieldErrors);
    });
    return errors;
  };

  // Check form validity
  useEffect(() => {
    const errors = validateForm();
    const hasErrors = Object.keys(errors).length > 0;
    const hasEmptyRequired = !formData.firstName || !formData.lastName || 
                           !formData.email || !formData.phone || 
                           !formData.company || !formData.service || 
                           !formData.message || !formData.agreeToTerms;
    
    setIsFormValid(!hasErrors && !hasEmptyRequired);
  }, [formData]);

  // Generate email content
  const generateEmailContent = () => {
    const subject = `New Contact Form Submission from ${formData.firstName} ${formData.lastName}`;
    
    const body = `Hello FTEB Team,

I am interested in your services and would like to get in touch. Here are my details:

CONTACT INFORMATION:
• Name: ${formData.firstName} ${formData.lastName}
• Email: ${formData.email}
• Phone: ${formData.phone}
• Company: ${formData.company}

PROJECT DETAILS:
• Service Interested In: ${formData.service}
• Project Budget: ${formData.budget || 'Not specified'}

MESSAGE:
${formData.message}

Please contact me at your earliest convenience to discuss how we can work together.

Best regards,
${formData.firstName} ${formData.lastName}
${formData.company}
${formData.email}
${formData.phone}`;

    return { subject, body };
  };

  // Open default email client
  const openDefaultEmailClient = () => {
    const { subject, body } = generateEmailContent();
    const mailtoLink = `mailto:Connect@ftebtech.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  // Open Gmail in browser
  const openGmailInBrowser = () => {
    const { subject, body } = generateEmailContent();
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=Connect@ftebtech.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, '_blank');
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Open email client based on user's choice
      if (emailClientOption === 'gmail') {
        openGmailInBrowser();
      } else {
        openDefaultEmailClient();
      }
      
      setSubmitStatus('success');
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          budget: '',
          message: '',
          agreeToTerms: false
        });
        setFormErrors({});
        setSubmitStatus(null);
      }, 3000);
      
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="flex justify-center text-center">
            <div className="max-w-4xl">
              <div className="hero-content">
                <span className="hero-subtitle">GET IN TOUCH</span>
                <h1 className="hero-title">
                  Let's Build Something 
                  <span className="highlight-text"> Amazing Together</span>
                </h1>
                <p className="hero-description">
                  Ready to transform your business with cutting-edge technology solutions? 
                  Our expert team is here to help you achieve your goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="contact-info-section">
        <div className="container">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="card contact-info-card h-full">
                <div className="card-body text-center">
                  <div className="info-icon">
                    <FontAwesomeIcon icon={info.icon} />
                  </div>
                  <h5 className="info-title">{info.title}</h5>
                  <p className="info-content">{info.content}</p>
                  <small className="info-subcontent">{info.subContent}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="main-contact-section">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="card contact-form-card">
                <div className="card-body">
                  <div className="form-header">
                    <h2>Send Us a Message</h2>
                    <p>Fill out the form below and we'll open your email client with the message pre-filled.</p>
                  </div>

                  {/* Email Client Selection */}
                  <div className="email-client-selection mb-6">
                    <h6 className="mb-3">Choose how to send your message:</h6>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        className={`btn flex-1 ${emailClientOption === 'default' ? 'btn-primary' : 'btn-outline'}`}
                        onClick={() => setEmailClientOption('default')}
                      >
                        <FontAwesomeIcon icon={faDesktop} className="mr-2" />
                        <div className="flex flex-col items-center">
                          <span>Default Email App</span>
                          <small className="text-xs opacity-75">(Outlook, Mail, etc.)</small>
                        </div>
                      </button>
                      <button
                        type="button"
                        className={`btn flex-1 ${emailClientOption === 'gmail' ? 'btn-primary' : 'btn-outline'}`}
                        onClick={() => setEmailClientOption('gmail')}
                      >
                        <FontAwesomeIcon icon={faGoogle} className="mr-2" />
                        <div className="flex flex-col items-center">
                          <span>Gmail in Browser</span>
                          <small className="text-xs opacity-75">(Opens in new tab)</small>
                        </div>
                      </button>
                    </div>
                  </div>

                  {submitStatus === 'success' && (
                    <div className="alert alert-success flex items-center mb-6">
                      <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
                      Your email client should have opened with the message pre-filled. If it didn't open automatically, please check your browser's popup settings.
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="alert alert-error flex items-center mb-6">
                      <FontAwesomeIcon icon={faExclamationTriangle} className="mr-2" />
                      Sorry, there was an error processing your request. Please try again or contact us directly.
                    </div>
                  )}

                  <form onSubmit={handleSubmit} noValidate>
                    <div className="grid md:grid-cols-2 gap-4">
                      {/* Name Fields */}
                      <div className="form-group">
                        <label className="form-label" htmlFor="firstName">First Name *</label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          className={`form-control ${formErrors.firstName ? 'border-error' : ''}`}
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="Enter your first name"
                        />
                        {formErrors.firstName && (
                          <div className="form-error">{formErrors.firstName}</div>
                        )}
                      </div>
                      
                      <div className="form-group">
                        <label className="form-label" htmlFor="lastName">Last Name *</label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          className={`form-control ${formErrors.lastName ? 'border-error' : ''}`}
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="Enter your last name"
                        />
                        {formErrors.lastName && (
                          <div className="form-error">{formErrors.lastName}</div>
                        )}
                      </div>

                      {/* Contact Fields */}
                      <div className="form-group">
                        <label className="form-label" htmlFor="email">Email Address *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className={`form-control ${formErrors.email ? 'border-error' : ''}`}
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email"
                        />
                        {formErrors.email && (
                          <div className="form-error">{formErrors.email}</div>
                        )}
                      </div>
                      
                      <div className="form-group">
                        <label className="form-label" htmlFor="phone">Phone Number *</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className={`form-control ${formErrors.phone ? 'border-error' : ''}`}
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Enter your phone number"
                        />
                        {formErrors.phone && (
                          <div className="form-error">{formErrors.phone}</div>
                        )}
                      </div>

                      {/* Company Field */}
                      <div className="form-group md:col-span-2">
                        <label className="form-label" htmlFor="company">Company Name *</label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          className={`form-control ${formErrors.company ? 'border-error' : ''}`}
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Enter your company name"
                        />
                        {formErrors.company && (
                          <div className="form-error">{formErrors.company}</div>
                        )}
                      </div>

                      {/* Service and Budget */}
                      <div className="form-group">
                        <label className="form-label" htmlFor="service">Service Interested In *</label>
                        <select
                          id="service"
                          name="service"
                          className={`form-control form-select ${formErrors.service ? 'border-error' : ''}`}
                          value={formData.service}
                          onChange={handleInputChange}
                        >
                          <option value="">Select a service</option>
                          {services.map((service, index) => (
                            <option key={index} value={service}>{service}</option>
                          ))}
                        </select>
                        {formErrors.service && (
                          <div className="form-error">{formErrors.service}</div>
                        )}
                      </div>
                      
                      <div className="form-group">
                        <label className="form-label" htmlFor="budget">Project Budget</label>
                        <select
                          id="budget"
                          name="budget"
                          className="form-control form-select"
                          value={formData.budget}
                          onChange={handleInputChange}
                        >
                          <option value="">Select budget range</option>
                          {budgetRanges.map((range, index) => (
                            <option key={index} value={range}>{range}</option>
                          ))}
                        </select>
                      </div>

                      {/* Message */}
                      <div className="form-group md:col-span-2">
                        <label className="form-label" htmlFor="message">Message *</label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          className={`form-control form-textarea ${formErrors.message ? 'border-error' : ''}`}
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell us about your project requirements..."
                        />
                        {formErrors.message && (
                          <div className="form-error">{formErrors.message}</div>
                        )}
                      </div>

                      {/* Terms Checkbox */}
                      <div className="form-group md:col-span-2">
                        <div className="flex items-start gap-3">
                          <input
                            type="checkbox"
                            id="agreeToTerms"
                            name="agreeToTerms"
                            className="form-checkbox mt-1"
                            checked={formData.agreeToTerms}
                            onChange={handleInputChange}
                          />
                          <label htmlFor="agreeToTerms" className="form-label text-sm">
                            I agree to the Terms of Service and Privacy Policy *
                          </label>
                        </div>
                        {formErrors.agreeToTerms && (
                          <div className="form-error">{formErrors.agreeToTerms}</div>
                        )}
                      </div>

                      {/* Submit Button */}
                      <div className="form-group md:col-span-2">
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg w-full"
                          disabled={!isFormValid || isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <div className="spinner mr-2" />
                              Opening Email Client...
                            </>
                          ) : (
                            <>
                              <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
                              Open {emailClientOption === 'gmail' ? 'Gmail' : 'Email Client'}
                            </>
                          )}
                        </button>
                        
                        <div className="mt-3">
                          <small className="text-muted text-center block">
                            {emailClientOption === 'gmail' 
                              ? 'This will open Gmail in a new browser tab with your message pre-filled.'
                              : 'This will open your default email application (like Outlook, Mail, etc.) with your message pre-filled.'
                            }
                          </small>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="contact-sidebar">
                {/* Quick Contact */}
                <div className="card quick-contact-card mb-6">
                  <div className="card-body">
                    <h4>Quick Contact</h4>
                    <p>Need immediate assistance? Reach out to us directly.</p>
                    
                    <div className="quick-contact-methods">
                      <a href="tel:+971588481295" className="contact-method-btn">
                        <FontAwesomeIcon icon={faPhoneAlt} />
                        <span>Call Now</span>
                      </a>
                      <a href="mailto:Connect@ftebtech.com" className="contact-method-btn">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <span>Email Us</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="card social-media-card mb-6">
                  <div className="card-body">
                    <h4>Follow Us</h4>
                    <p>Stay connected with us on social media for updates and insights.</p>
                    
                    <div className="social-links">
                      {socialLinks.map((social, index) => (
                        <a
                          key={index}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="social-link"
                          aria-label={social.label}
                        >
                          <FontAwesomeIcon icon={social.icon} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="card office-hours-card">
                  <div className="card-body">
                    <h4>Office Hours</h4>
                    <div className="hours-list">
                      <div className="hours-item">
                        <span>Monday - Friday</span>
                        <span>9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="hours-item">
                        <span>Saturday</span>
                        <span>10:00 AM - 4:00 PM</span>
                      </div>
                      <div className="hours-item">
                        <span>Sunday</span>
                        <span>Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container-fluid p-0">
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1234567890!2d55.2708!3d25.1972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDExJzUwLjAiTiA1NcKwMTYnMTUuMCJF!5e0!3m2!1sen!2sae!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="FTEB Technology Office Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;