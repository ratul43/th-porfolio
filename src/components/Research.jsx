import React, { useState, useEffect, useRef } from 'react';

export default function Research() {
  const canvasRef = useRef(null);
  const [frequency, setFrequency] = useState(5); // Pulsating frequency 1-10
  const [velocity, setVelocity] = useState(3);   // Flow velocity 1-5
  const [monitorsActive, setMonitorsActive] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const particles = [];
    const maxParticles = 300;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    let time = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      time += 1;

      // Draw Channel Walls
      ctx.strokeStyle = 'rgba(0, 180, 216, 0.4)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      // Top Wall
      ctx.moveTo(10, 15);
      ctx.lineTo(width - 10, 15);
      // Bottom Wall
      ctx.moveTo(10, height - 15);
      ctx.lineTo(width - 10, height - 15);
      ctx.stroke();

      // Draw Inlets splitter line (left)
      ctx.strokeStyle = 'rgba(0, 180, 216, 0.2)';
      ctx.beginPath();
      ctx.moveTo(10, height / 2);
      ctx.lineTo(width * 0.15, height / 2);
      ctx.stroke();

      // Draw obstacle in channel center (to generate mixing eddies)
      const obstacleX = width * 0.45;
      const obstacleY = height / 2;
      const obstacleRadius = 15;
      
      ctx.fillStyle = 'rgba(13, 21, 37, 0.9)';
      ctx.strokeStyle = 'rgba(0, 245, 255, 0.5)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(obstacleX, obstacleY, obstacleRadius, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Draw virtual surface monitors grid if active (from ANSYS Fluent setup)
      if (monitorsActive) {
        ctx.fillStyle = 'rgba(0, 245, 255, 0.15)';
        for (let x = width * 0.2; x < width * 0.9; x += 35) {
          for (let y = 25; y < height - 25; y += 20) {
            // Only draw if not inside the obstacle
            const dist = Math.hypot(x - obstacleX, y - obstacleY);
            if (dist > obstacleRadius + 5) {
              ctx.fillRect(x - 1, y - 1, 2, 2);
            }
          }
        }
        ctx.font = '7px monospace';
        ctx.fillStyle = 'rgba(0, 245, 255, 0.4)';
        ctx.fillText('MONITOR GRID ACTIVE: 1000 NODES', 15, 25);
      }

      // Generate particles at inlets
      // Upper Inlet: Pulsating Stream (Cyan)
      // Pulsating magnitude depends on the frequency state
      const pulseFactor = Math.sin(time * 0.04 * frequency) > 0 ? 1 : 0.1;
      if (particles.length < maxParticles && Math.random() < 0.8 * pulseFactor) {
        particles.push({
          x: 10,
          y: Math.random() * (height / 2 - 25) + 20,
          color: '#00F5FF', // Pure cyan
          type: 'A',
          size: Math.random() * 2 + 1.5,
          history: []
        });
      }

      // Lower Inlet: Steady Stream (Silver/White)
      if (particles.length < maxParticles && Math.random() < 0.6) {
        particles.push({
          x: 10,
          y: Math.random() * (height / 2 - 25) + (height / 2 + 5),
          color: '#E2E8F0', // Muted metallic silver
          type: 'B',
          size: Math.random() * 2 + 1.5,
          history: []
        });
      }

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.history.push({ x: p.x, y: p.y });
        if (p.history.length > 8) p.history.shift();

        // Base velocity
        let vx = velocity * 1.2;
        let vy = 0;

        // Flow Physics around Obstacle
        const dx = p.x - obstacleX;
        const dy = p.y - obstacleY;
        const dist = Math.hypot(dx, dy);

        if (dist < obstacleRadius + 40) {
          // Calculate deflection vectors
          const angle = Math.atan2(dy, dx);
          const force = (obstacleRadius + 40 - dist) / 40;
          vy += Math.sin(angle) * force * 2.5;
          vx += Math.cos(angle) * force * 0.5;
        }

        // Add mixing wave curls (Kármán vortex street downstream of obstacle)
        if (p.x > obstacleX + obstacleRadius) {
          const downstreamDist = p.x - (obstacleX + obstacleRadius);
          // Vortex oscillations decrease as we move downstream, but frequency speeds them up
          const vortexFactor = Math.sin(downstreamDist * 0.05 - time * 0.1 * frequency);
          vy += vortexFactor * 1.8 * Math.exp(-downstreamDist * 0.005);
          
          // Mixing color transformation (cyan and silver blend together)
          if (p.color !== '#00B4D8' && Math.random() < 0.01 * frequency) {
            p.color = 'rgba(0, 180, 216, 0.7)'; // Mixed cyan-silver color
          }
        }

        // Apply velocities
        p.x += vx;
        p.y += vy;

        // Contain within walls
        if (p.y < 18) p.y = 18;
        if (p.y > height - 18) p.y = height - 18;

        // Draw particle tail for CFD flow visualization
        if (p.history.length > 1) {
          ctx.beginPath();
          ctx.moveTo(p.history[0].x, p.history[0].y);
          for (let h = 1; h < p.history.length; h++) {
            ctx.lineTo(p.history[h].x, p.history[h].y);
          }
          ctx.strokeStyle = p.color;
          ctx.lineWidth = p.size * 0.5;
          ctx.globalAlpha = 0.3;
          ctx.stroke();
          ctx.globalAlpha = 1.0;
        }

        // Draw particle node
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Remove particles that exit the channel
        if (p.x > width - 10) {
          particles.splice(i, 1);
        }
      }

      // Draw inlets labeling
      ctx.fillStyle = 'rgba(0, 180, 216, 0.7)';
      ctx.font = '8px monospace';
      ctx.fillText('INLET A (PULSATING)', 12, height * 0.25);
      ctx.fillText('INLET B (CONSTANT)', 12, height * 0.75);
      ctx.fillText('MIXING CHANNEL OUTLET', width - 110, height / 2);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [frequency, velocity, monitorsActive]);

  return (
    <section id="research" className="section research-section">
      <div className="container">
        <div className="section-header">
          <h2 data-num="02">Academic & Research Excellence</h2>
          <p className="section-intro">
            Presenting specialized fluid dynamics and numerical simulations research published in 
            international congresses, showcasing extensive technical mastery of modeling tools.
          </p>
        </div>

        <div className="research-grid">
          {/* Paper Info */}
          <div className="research-info">
            <div className="tech-card research-card">
              <div className="research-tag">ACADEMIC PUBLICATION</div>
              <h3 className="paper-title">
                "A Computational analysis of fluid mixing characteristics inside a microchannel by pulsating streams"
              </h3>
              
              <div className="paper-meta">
                <span className="meta-label">Presented At:</span>
                <span className="meta-val">16th Asian Congress of Fluid Mechanics (ACFM)</span>
              </div>

              <div className="paper-abstract">
                <span className="abstract-label">Abstract Outline:</span>
                <p>
                  This research conducts detailed numerical investigations on the enhancement of fluid mixing inside a 
                  microfluidic channel. By introducing a pulsating pressure boundary condition at one inlet while 
                  maintaining a constant stream at the other, velocity fluctuations create localized vortices 
                  around a center obstacle. This significantly increases interfacial contact area and mixing efficiency, 
                  offering key designs for micro-scale biochemical reactors and cooling solutions.
                </p>
              </div>

              <div className="numerical-tools">
                <div className="tool-box">
                  <span className="tool-metric">ANSYS FLUENT</span>
                  <span className="tool-desc">Used for solving Navier-Stokes equations under unsteady configurations.</span>
                </div>
                <div className="tool-box">
                  <span className="tool-metric">1,000+ Monitors</span>
                  <span className="tool-desc">Automated surface monitoring nodes tracking concentration variance.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Simulation Dashboard */}
          <div className="research-simulator">
            <div className="simulator-container">
              <div className="sim-header">
                <span className="sim-status-dot"></span>
                <span className="sim-title">CFD RESOLUTION STREAM: ACTIVE</span>
                <div className="sim-fps">60 FPS</div>
              </div>

              <div className="sim-canvas-box">
                <canvas ref={canvasRef} className="sim-canvas" />
              </div>

              <div className="sim-controls">
                <span className="controls-title">CFD BOUNDARY CONDITION PANEL</span>
                
                <div className="control-row">
                  <label htmlFor="freq-range">
                    Pulsation Frequency: <span className="highlight">{frequency} Hz</span>
                  </label>
                  <input 
                    id="freq-range"
                    type="range" 
                    min="1" 
                    max="10" 
                    value={frequency} 
                    onChange={(e) => setFrequency(Number(e.target.value))}
                  />
                </div>

                <div className="control-row">
                  <label htmlFor="vel-range">
                    Mean Flow Velocity: <span className="highlight">{velocity * 0.1} m/s</span>
                  </label>
                  <input 
                    id="vel-range"
                    type="range" 
                    min="1" 
                    max="5" 
                    value={velocity} 
                    onChange={(e) => setVelocity(Number(e.target.value))}
                  />
                </div>

                <div className="control-row checkbox-row">
                  <button 
                    onClick={() => setMonitorsActive(!monitorsActive)} 
                    className={`btn btn-secondary btn-sim ${monitorsActive ? 'active' : ''}`}
                  >
                    {monitorsActive ? 'Disable Surface Monitor Nodes' : 'Enable Surface Monitor Nodes'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
