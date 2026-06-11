import React from 'react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Analysis & Design",
      desc: "CAD modeling, mechanical assemblies, and numerical analysis.",
      skills: [
        {
          name: "SolidWorks",
          level: "95%",
          metric: "9.5 / 10",
          desc: "Expert modeling, 3D parts assembly, surfacing, and motion studies.",
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="skill-icon-svg">
              <box x="2" y="2" width="20" height="20" rx="2" />
              <path d="M4 12h16M12 4v16" strokeDasharray="2,2" />
              <path d="M12 12l6-6M12 12l-6 6M12 12l6 6M12 12L6 6" />
            </svg>
          )
        },
        {
          name: "ANSYS Fluent",
          level: "90%",
          metric: "9.0 / 10",
          desc: "CFD simulation, mesh generation, heat transfer, and boundary setup.",
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="skill-icon-svg">
              <path d="M2 12c4-8 8-8 12 0s8 8 12 0" />
              <path d="M2 16c4-8 8-8 12 0s8 8 12 0" strokeDasharray="2,2" />
              <path d="M2 8c4-8 8-8 12 0s8 8 12 0" opacity="0.5" />
            </svg>
          )
        },
        {
          name: "AutoCAD",
          level: "85%",
          metric: "8.5 / 10",
          desc: "2D drafting, P&ID schematics, pipeline layouts, and civil layouts.",
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="skill-icon-svg">
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="6" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <line x1="12" y1="2" x2="12" y2="22" />
            </svg>
          )
        }
      ]
    },
    {
      title: "Programming & Computation",
      desc: "Scientific programming, numerical analysis, and automation scripting.",
      skills: [
        {
          name: "Python",
          level: "88%",
          metric: "8.8 / 10",
          desc: "Automating ANSYS workflows, data visualization, and numerical modeling.",
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="skill-icon-svg">
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
              <line x1="10" y1="20" x2="14" y2="4" />
            </svg>
          )
        },
        {
          name: "MATLAB",
          level: "85%",
          metric: "8.5 / 10",
          desc: "Matrix algorithms, thermal dynamics solvers, and curve fitting.",
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="skill-icon-svg">
              <path d="M3 3v18h18" />
              <path d="M18.7 8l-5.1 5.2-2.8-2.7-4.8 4.8" />
              <circle cx="18.7" cy="8" r="1.5" fill="currentColor" />
            </svg>
          )
        },
        {
          name: "C / C++",
          level: "80%",
          metric: "8.0 / 10",
          desc: "Microcontroller logic, mechatronic firmware, and hardware triggers.",
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="skill-icon-svg">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M7 9a3 3 0 0 1 6 0" />
              <path d="M7 15a3 3 0 0 0 6 0" />
              <line x1="15" y1="12" x2="19" y2="12" />
              <line x1="17" y1="10" x2="17" y2="14" />
            </svg>
          )
        }
      ]
    },
    {
      title: "Infrastructure & Grid Operations",
      desc: "Large-scale pipeline networks, regulation grids, and public transport systems.",
      skills: [
        {
          name: "Gas Regulating & Metering",
          level: "92%",
          metric: "9.2 / 10",
          desc: "RMS/DRS operations, Orifice meters, and Ultrasonic custody metering.",
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="skill-icon-svg">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 12L16 8" />
              <circle cx="12" cy="12" r="1.5" fill="currentColor" />
              <path d="M6 12h2 M16 12h2 M12 6v2 M12 16v2" />
            </svg>
          )
        },
        {
          name: "Thermal Equipment Ops",
          level: "90%",
          metric: "9.0 / 10",
          desc: "Supervising Water Bath Heaters, Knock-Out Drums, and filtration grids.",
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="skill-icon-svg">
              <path d="M12 2v20M17 5H7M17 19H7M12 9c2.5 0 2.5 3 0 3s-2.5 3 0 3" />
            </svg>
          )
        },
        {
          name: "Infrastructure Leadership",
          level: "88%",
          metric: "8.8 / 10",
          desc: "Road networks management, asset mapping, and public sector engineering projects.",
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="skill-icon-svg">
              <path d="M3 22V2h18v20" />
              <path d="M8 6h3M8 10h3M8 14h3M13 6h3M13 10h3M13 14h3" strokeDasharray="1,1" />
              <path d="M10 22v-4h4v4" />
            </svg>
          )
        }
      ]
    }
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-header">
          <h2 data-num="04">Technical Arsenal</h2>
          <p className="section-intro">
            Evaluating specialized core engineering skills, software programming proficiency, and field operational expertise.
          </p>
        </div>

        <div className="skills-categories-grid">
          {skillCategories.map((cat, cIdx) => (
            <div key={cIdx} className="skills-category-column">
              <div className="category-header">
                <span className="category-num">0{cIdx + 1}//</span>
                <h3 className="category-title">{cat.title}</h3>
                <p className="category-desc">{cat.desc}</p>
              </div>

              <div className="category-skills-list">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="tech-card skill-gauge-card">
                    <div className="skill-card-top">
                      <div className="skill-icon-box">
                        {skill.icon}
                      </div>
                      <div className="skill-meta">
                        <h4 className="skill-name">{skill.name}</h4>
                        <span className="skill-metric-text">{skill.metric}</span>
                      </div>
                    </div>

                    <p className="skill-card-desc">{skill.desc}</p>

                    {/* Industrial styled level bar */}
                    <div className="skill-bar-container">
                      <div className="skill-bar-track">
                        <div 
                          className="skill-bar-fill" 
                          style={{ width: skill.level }}
                        >
                          <div className="fill-glow"></div>
                        </div>
                      </div>
                      <span className="skill-bar-percentage">{skill.level}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Dashboard Analytics footer */}
        <div className="skills-dashboard-footer">
          <div className="dashboard-grid-pattern"></div>
          <div className="dashboard-metric-widget">
            <span className="widget-label">FLUID RESOLUTION MATRIX:</span>
            <span className="widget-value">1,000x1,000 CFD GRID</span>
          </div>
          <div className="dashboard-metric-widget">
            <span className="widget-label">ENGINEERING TOLERANCES:</span>
            <span className="widget-value">±0.005 mm</span>
          </div>
          <div className="dashboard-metric-widget">
            <span className="widget-label">STATION MAX RATE:</span>
            <span className="widget-value">410 MW POWER BASE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
