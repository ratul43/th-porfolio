import React, { useEffect, useRef } from 'react';

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    // Particles representing fluid elements
    const particles = [];
    const particleCount = 150;
    const colors = [
      'rgba(0, 245, 255, 0.45)', // Vivid Cyan
      'rgba(0, 180, 216, 0.35)',  // Mid Cyan
      'rgba(148, 163, 184, 0.4)', // Silver
      'rgba(244, 246, 249, 0.3)'   // White-silver
    ];

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        speedX: Math.random() * 2 + 1,
        speedY: 0,
        size: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        amplitude: Math.random() * 15 + 5,
        frequency: Math.random() * 0.005 + 0.002,
        phase: Math.random() * Math.PI * 2
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    let time = 0;

    // Simulation loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw mathematical grid lines / vector arrows in background
      ctx.strokeStyle = 'rgba(0, 180, 216, 0.04)';
      ctx.lineWidth = 1;
      const gridSize = 40;
      
      // Draw velocity vector arrows behind particles
      for (let x = 0; x < width; x += gridSize * 2) {
        for (let y = 0; y < height; y += gridSize * 2) {
          // Calculate vector direction based on sine wave (pulsating stream)
          const angle = Math.sin(x * 0.003 + time * 0.02) * 0.2;
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x + Math.cos(angle) * 15, y + Math.sin(angle) * 15);
          ctx.stroke();
        }
      }

      time += 1;

      // Draw and update fluid particles
      particles.forEach((p) => {
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Pulsating stream CFD mathematics: flow moves horizontally, waves oscillate vertically
        p.x += p.speedX;
        
        // Vertical movement is governed by a pulsating sine function (modeling pulsating microchannel streams)
        const pulsation = Math.sin(time * 0.01) * 1.5; // time-based pulsation intensity
        p.y = p.y + Math.sin(p.x * p.frequency + p.phase + time * 0.015) * 0.6 * pulsation;

        // Bending around a virtual channel boundary / center core obstruction
        const centerDistance = Math.abs(p.y - height / 2);
        if (p.x > width * 0.4 && p.x < width * 0.6 && centerDistance < 60) {
          // Push particles outwards to mimic fluid flow bypassing a solid cylinder
          if (p.y < height / 2) {
            p.y -= 2;
          } else {
            p.y += 2;
          }
        }

        // Boundary checks: reset particles when they exit the right side of the channel
        if (p.x > width) {
          p.x = 0;
          p.y = Math.random() * height;
          p.speedX = Math.random() * 2 + 1;
        }

        // Wrap around top/bottom bounds
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleScrollToCareer = (e) => {
    e.preventDefault();
    const timelineSection = document.getElementById('evolution');
    if (timelineSection) {
      window.scrollTo({
        top: timelineSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const handleDownloadCV = () => {
    // Generates a dynamic print view or alerts the user
    window.print();
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-canvas-container">
        <canvas ref={canvasRef} className="cfd-canvas" />
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            <span>GOVERNMENT ASSISTANT ENGINEER • RHD BANGLADESH</span>
          </div>

          <h1 className="hero-title">
            Taufiq Hasan
            <span className="hero-subtitle">Engineering Infrastructure & System Operations</span>
          </h1>

          <p className="hero-desc">
            Assistant Engineer at the <span className="highlight">Roads and Highways Division of Bangladesh</span>. 
            BUET Mechanical Engineer with a specialized background in Gas Infrastructure regulation, 
            thermodynamics, and Computational Fluid Dynamics (CFD).
          </p>

          <div className="hero-actions">
            <a href="#evolution" onClick={handleScrollToCareer} className="btn btn-primary">
              <span>Explore My Career Journey</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <button onClick={handleDownloadCV} className="btn btn-secondary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              <span>Download CV / Print Resume</span>
            </button>
          </div>
        </div>

        {/* CAD Schematic Overlay on Hero side */}
        <div className="hero-schematic">
          <div className="schematic-border">
            <div className="schematic-grid"></div>
            <div className="schematic-crosshairs"></div>
            <div className="schematic-metrics">
              <div className="metric-line"><span className="metric-label">SYS.STATUS:</span> <span className="metric-val text-accent">NOMINAL</span></div>
              <div className="metric-line"><span className="metric-label">LOC:</span> <span className="metric-val">DHAKA, BD</span></div>
              <div className="metric-line"><span className="metric-label">FLOW_RATE:</span> <span className="metric-val">0.38 m/s</span></div>
              <div className="metric-line"><span className="metric-label">GRID_LOAD:</span> <span className="metric-val">100%</span></div>
            </div>
            
            {/* Draw a technical heat exchanger isometric line drawing inside the schematic card */}
            <svg className="schematic-vector" viewBox="0 0 120 120" fill="none" stroke="rgba(0, 180, 216, 0.4)" strokeWidth="0.8">
              <rect x="10" y="40" width="100" height="40" rx="3" strokeWidth="1" />
              <line x1="25" y1="40" x2="25" y2="80" strokeDasharray="2,2" />
              <line x1="45" y1="40" x2="45" y2="80" strokeDasharray="2,2" />
              <line x1="65" y1="40" x2="65" y2="80" strokeDasharray="2,2" />
              <line x1="85" y1="40" x2="85" y2="80" strokeDasharray="2,2" />
              <path d="M5,50 H10" />
              <path d="M110,70 H115" />
              <circle cx="5" cy="50" r="1.5" fill="rgba(0, 180, 216, 0.6)" />
              <circle cx="115" cy="70" r="1.5" fill="rgba(0, 180, 216, 0.6)" />
              {/* Pulsating mixing stream indicator inside the CAD box */}
              <path d="M10,60 Q35,50 60,60 T110,60" stroke="rgba(0, 245, 255, 0.6)" strokeWidth="1" strokeDasharray="3,3" />
            </svg>
            <div className="schematic-compass"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
