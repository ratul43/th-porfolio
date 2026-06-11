import React, { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Handle scroll events for sticky behavior and active section tracking
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Track active section
      const sections = ['hero', 'evolution', 'research', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 120; // offset for header height

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.getElementById(id);
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`nav-header ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="nav-container">
        {/* Engineering Seal / Stamp Logo */}
        <a href="#hero" className="nav-logo" onClick={(e) => handleNavClick(e, 'hero')}>
          <div className="logo-seal">
            <span className="logo-text">TH</span>
            <div className="logo-rings"></div>
          </div>
          <div className="logo-meta">
            <span className="logo-name">TAUFIQ HASAN</span>
            <span className="logo-title">RHD BANGLADESH</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            <li>
              <a 
                href="#hero" 
                className={`nav-item ${activeSection === 'hero' ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, 'hero')}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#evolution" 
                className={`nav-item ${activeSection === 'evolution' ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, 'evolution')}
              >
                Evolution
              </a>
            </li>
            <li>
              <a 
                href="#research" 
                className={`nav-item ${activeSection === 'research' ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, 'research')}
              >
                Research
              </a>
            </li>
            <li>
              <a 
                href="#projects" 
                className={`nav-item ${activeSection === 'projects' ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, 'projects')}
              >
                Projects
              </a>
            </li>
            <li>
              <a 
                href="#skills" 
                className={`nav-item ${activeSection === 'skills' ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, 'skills')}
              >
                Arsenal
              </a>
            </li>
          </ul>
        </nav>

        <div className="nav-cta">
          <a href="#contact" className="btn btn-secondary btn-header" onClick={(e) => handleNavClick(e, 'contact')}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
            </svg>
            <span>Contact</span>
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button 
          className={`mobile-menu-toggle ${mobileMenuOpen ? 'open' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <nav className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-list">
          <li>
            <a 
              href="#hero" 
              className={activeSection === 'hero' ? 'active' : ''}
              onClick={(e) => handleNavClick(e, 'hero')}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#evolution" 
              className={activeSection === 'evolution' ? 'active' : ''}
              onClick={(e) => handleNavClick(e, 'evolution')}
            >
              Evolution
            </a>
          </li>
          <li>
            <a 
              href="#research" 
              className={activeSection === 'research' ? 'active' : ''}
              onClick={(e) => handleNavClick(e, 'research')}
            >
              Research
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              className={activeSection === 'projects' ? 'active' : ''}
              onClick={(e) => handleNavClick(e, 'projects')}
            >
              Projects
            </a>
          </li>
          <li>
            <a 
              href="#skills" 
              className={activeSection === 'skills' ? 'active' : ''}
              onClick={(e) => handleNavClick(e, 'skills')}
            >
              Arsenal
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className={activeSection === 'contact' ? 'active' : ''}
              onClick={(e) => handleNavClick(e, 'contact')}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
