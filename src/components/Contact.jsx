import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    submitting: false,
    success: null,
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic verification
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        submitting: false,
        success: false,
        message: 'Please complete all required fields (Name, Email, Message).'
      });
      return;
    }

    setStatus({ submitting: true, success: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({
          submitting: false,
          success: true,
          message: result.message || 'Thank you! Your message has been received.'
        });
        // Reset form fields
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({
          submitting: false,
          success: false,
          message: result.message || 'An error occurred. Please try again.'
        });
      }
    } catch (err) {
      console.error('Contact submit error:', err);
      setStatus({
        submitting: false,
        success: false,
        message: 'Connection failed. Please check your network or try again later.'
      });
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header">
          <h2 data-num="06">Contact Operations</h2>
          <p className="section-intro">
            Initiate communication for infrastructure projects, technical consultations, or research reviews.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Details & Links */}
          <div className="contact-info-panel">
            <div className="tech-card contact-meta-card">
              <span className="tech-heading-tag">STATION LOGS: OFFICE INFO</span>
              
              <div className="meta-info-rows">
                <div className="info-row">
                  <div className="info-icon-box">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="info-icon">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div className="info-details">
                    <span className="info-label">EMAIL ADDRESS:</span>
                    <a href="mailto:taufiqhasan138@gmail.com" className="info-val link-val">taufiqhasan138@gmail.com</a>
                  </div>
                </div>

                <div className="info-row">
                  <div className="info-icon-box">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="info-icon">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </div>
                  <div className="info-details">
                    <span className="info-label">LINKEDIN PROFILE:</span>
                    <a href="https://www.linkedin.com/in/taufiq-hasan-6479a611b" target="_blank" rel="noopener noreferrer" className="info-val link-val">
                      taufiq-hasan-6479a611b
                    </a>
                  </div>
                </div>

                <div className="info-row">
                  <div className="info-icon-box">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="info-icon">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div className="info-details">
                    <span className="info-label">GEOGRAPHIC LOCATION:</span>
                    <span className="info-val">Dhaka, Bangladesh</span>
                  </div>
                </div>
              </div>

              {/* Decorative mini grid showing location coords */}
              <div className="location-coordinates-badge">
                <div className="location-grid-lines"></div>
                <div className="coord-text">
                  <span className="coord-label">RHD HEADQUARTERS</span>
                  <span className="coord-val">LAT: 23.8103° N // LON: 90.4125° E</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Panel */}
          <div className="contact-form-panel">
            <form onSubmit={handleSubmit} className="tech-card contact-form">
              <span className="form-legend-tag">TRANSMISSION CHANNEL: INBOX</span>

              <div className="form-group">
                <label htmlFor="name-input">Sender Name <span className="req-star">*</span></label>
                <input 
                  id="name-input"
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                  placeholder="e.g. John Doe"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email-input">Sender Email Address <span className="req-star">*</span></label>
                <input 
                  id="email-input"
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                  placeholder="e.g. john@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject-input">Subject Topic</label>
                <input 
                  id="subject-input"
                  type="text" 
                  name="subject" 
                  value={formData.subject} 
                  onChange={handleChange} 
                  placeholder="e.g. Collaboration Request"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message-input">Message Transmission <span className="req-star">*</span></label>
                <textarea 
                  id="message-input"
                  name="message" 
                  rows="5"
                  value={formData.message} 
                  onChange={handleChange} 
                  required 
                  placeholder="Write your transmission details here..."
                ></textarea>
              </div>

              {status.message && (
                <div className={`form-status-alert ${status.success ? 'success' : 'error'}`}>
                  <span className="alert-symbol">{status.success ? '✓' : '⚠️'}</span>
                  <span className="alert-text">{status.message}</span>
                </div>
              )}

              <button 
                type="submit" 
                className="btn btn-primary btn-submit-form" 
                disabled={status.submitting}
              >
                {status.submitting ? (
                  <>
                    <span className="submitting-spinner"></span>
                    <span>Transmitting Message...</span>
                  </>
                ) : (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                    <span>Send Transmission</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
