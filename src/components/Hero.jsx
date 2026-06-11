import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeLeftVariants = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const profileVariants = {
  hidden: { opacity: 0, x: 40, scale: 0.92 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.35,
    },
  },
};

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const particles = [];
    const particleCount = 150;
    const colors = [
      'rgba(0, 245, 255, 0.45)',
      'rgba(0, 180, 216, 0.35)',
      'rgba(148, 163, 184, 0.4)',
      'rgba(244, 246, 249, 0.3)',
    ];

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
        phase: Math.random() * Math.PI * 2,
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    let time = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      ctx.strokeStyle = 'rgba(0, 180, 216, 0.04)';
      ctx.lineWidth = 1;
      const gridSize = 40;

      for (let x = 0; x < width; x += gridSize * 2) {
        for (let y = 0; y < height; y += gridSize * 2) {
          const angle = Math.sin(x * 0.003 + time * 0.02) * 0.2;
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x + Math.cos(angle) * 15, y + Math.sin(angle) * 15);
          ctx.stroke();
        }
      }

      time += 1;

      particles.forEach((p) => {
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        p.x += p.speedX;

        const pulsation = Math.sin(time * 0.01) * 1.5;
        p.y = p.y + Math.sin(p.x * p.frequency + p.phase + time * 0.015) * 0.6 * pulsation;

        const centerDistance = Math.abs(p.y - height / 2);
        if (p.x > width * 0.4 && p.x < width * 0.6 && centerDistance < 60) {
          if (p.y < height / 2) {
            p.y -= 2;
          } else {
            p.y += 2;
          }
        }

        if (p.x > width) {
          p.x = 0;
          p.y = Math.random() * height;
          p.speedX = Math.random() * 2 + 1;
        }

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
        behavior: 'smooth',
      });
    }
  };

  const handleDownloadCV = () => {
    window.print();
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-canvas-container">
        <canvas ref={canvasRef} className="cfd-canvas" />
      </div>

      <div className="container hero-container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-badge" variants={fadeLeftVariants}>
            <span className="badge-dot"></span>
            <span>GOVERNMENT ASSISTANT ENGINEER • RHD BANGLADESH</span>
          </motion.div>

          <motion.h1 className="hero-title" variants={fadeUpVariants}>
            Taufiq Hasan
            <motion.span
              className="hero-subtitle"
              variants={fadeUpVariants}
            >
              Engineering Infrastructure & System Operations
            </motion.span>
          </motion.h1>

          <motion.p className="hero-desc" variants={fadeUpVariants}>
            Assistant Engineer at the <span className="highlight">Roads and Highways Division of Bangladesh</span>.
            BUET Mechanical Engineer with a specialized background in Gas Infrastructure regulation,
            thermodynamics, and Computational Fluid Dynamics (CFD).
          </motion.p>

          <motion.div className="hero-actions" variants={fadeUpVariants}>
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
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-profile"
          variants={profileVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="hero-profile-frame"
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <div className="hero-profile-ring hero-profile-ring--outer" aria-hidden="true" />
            <div className="hero-profile-ring hero-profile-ring--inner" aria-hidden="true" />

            <div className="hero-profile-image-wrap">
              <img
                src="/profile.png"
                alt="Taufiq Hasan — Assistant Engineer"
                className="hero-profile-image"
                width={320}
                height={380}
              />
              <div className="hero-profile-overlay" aria-hidden="true" />
            </div>

            <div className="hero-profile-corners" aria-hidden="true">
              <span /><span /><span /><span />
            </div>

            <div className="hero-profile-badge">
              <span className="badge-dot"></span>
              <span>ACTIVE • BUET ME</span>
            </div>
          </motion.div>

          <motion.div
            className="hero-profile-meta"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="hero-profile-meta-line">
              <span className="metric-label">ROLE</span>
              <span className="metric-val text-accent">Asst. Engineer</span>
            </div>
            <div className="hero-profile-meta-line">
              <span className="metric-label">LOC</span>
              <span className="metric-val">Dhaka, BD</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
