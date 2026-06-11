import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Evolution from './components/Evolution';
import Research from './components/Research';
import Gallery from './components/Gallery';
import Skills from './components/Skills';
import Awards from './components/Awards';
import Contact from './components/Contact';

export default function App() {
  return (
    <>
      {/* Background Engineering Line Art Overlays */}
      <div className="blueprint-overlay">
        <div className="blueprint-grid"></div>
        <div className="blueprint-circle-left"></div>
        <div className="blueprint-circle-right"></div>
      </div>

      {/* Navigation Header */}
      <Header />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <Evolution />
        <Research />
        <Gallery />
        <Skills />
        <Awards />
        <Contact />
      </main>

      {/* Footer metadata details */}
      <footer className="portfolio-footer">
        <div className="footer-meta">
          <span>TAUFIQ HASAN // MECHANICAL SYSTEMS & SITE OPERATIONS</span>
          <span style={{ margin: '0 1rem', opacity: 0.3 }}>|</span>
          <span>SYSTEM VER: v1.1.2026</span>
        </div>
        <div className="footer-copy">
          © {new Date().getFullYear()} Taufiq Hasan. Roads and Highways Division, Bangladesh. All rights reserved.
        </div>
      </footer>
    </>
  );
}
