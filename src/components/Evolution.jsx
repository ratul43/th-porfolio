import React, { useState } from 'react';

export default function Evolution() {
  const [activeStep, setActiveStep] = useState(2); // Start with RHD active

  const timelineSteps = [
    {
      id: 0,
      title: "Academic & Research Foundation",
      role: "Mechanical Engineer & Researcher",
      org: "BUET (Bangladesh University of Engineering and Technology)",
      period: "2014 - 2019",
      description: "Rigorous academic training and advanced research in thermofluids and Computational Fluid Dynamics (CFD). Developed core programming, analytical, and design capabilities.",
      highlights: [
        "B.Sc. in Mechanical Engineering with Dean's List Scholarship.",
        "Featured publication in fluid mixing characteristics inside microchannels at 16th ACFM.",
        "Mastery of numerical analysis and ANSYS Fluent with 1,000+ custom surface monitors.",
        "CGPA 3.43 / 4.00, specializing in heat transfer and fluid mechanics."
      ],
      cadLabel: "PLATE_01 // BUET THERMOFLUID LAB SCHEMATIC",
      cadDrawing: (
        <svg viewBox="0 0 160 100" fill="none" stroke="rgba(0, 245, 255, 0.4)" strokeWidth="0.8">
          {/* Microchannel CAD Schematic */}
          <rect x="10" y="35" width="140" height="30" rx="1" strokeWidth="1" />
          <path d="M10,42 H150 M10,58 H150" strokeDasharray="2,2" />
          {/* Inlets */}
          <path d="M5,42 H10 M5,58 H10" stroke="rgba(0, 180, 216, 0.6)" />
          {/* Pulsating Streams Graphic */}
          <path d="M10,42 Q30,52 50,42 T90,42 T130,42 T150,42" stroke="#00F5FF" strokeWidth="1" />
          <path d="M10,58 Q30,48 50,58 T90,58 T130,58 T150,58" stroke="rgba(148, 163, 184, 0.8)" strokeWidth="1" />
          {/* Flow vectors */}
          <polyline points="20,40 25,42 20,44" stroke="#00F5FF" />
          <polyline points="20,56 25,58 20,60" stroke="rgba(148, 163, 184, 0.8)" />
          <polyline points="140,49 145,50 140,51" stroke="#00F5FF" />
          <text x="30" y="25" fill="rgba(148,163,184,0.6)" fontSize="6" fontFamily="monospace">INLET_A (PULSATING)</text>
          <text x="30" y="80" fill="rgba(148,163,184,0.6)" fontSize="6" fontFamily="monospace">INLET_B (CONSTANT)</text>
        </svg>
      )
    },
    {
      id: 1,
      title: "Gas Infrastructure Operations",
      role: "Engineer-in-Charge (Bheramara RMS & Kushtia DRS)",
      org: "Sundarban Gas Company Limited (SGCL)",
      period: "2020 - 2023",
      description: "Managed high-pressure natural gas transmission, regulating, and metering stations (RMS) supplying critical national assets, including a 410MW combined cycle power plant.",
      highlights: [
        "Responsible for safe, steady gas transmission and metering operations at Bheramara RMS.",
        "Managed custody-transfer metering systems including Ultrasonic/Turbine gas meters and Orifice meters.",
        "Operated Water Bath Heaters, Knock-Out Drums (KOD), and active pressure regulating grids.",
        "Supervised team of field operators and technicians, ensuring zero unplanned downtimes."
      ],
      cadLabel: "PLATE_02 // REGULATING & METERING STATION (RMS) P&ID",
      cadDrawing: (
        <svg viewBox="0 0 160 100" fill="none" stroke="rgba(0, 245, 255, 0.4)" strokeWidth="0.8">
          {/* Gas RMS Station P&ID Schematic */}
          {/* Main pipe line */}
          <line x1="10" y1="50" x2="150" y2="50" strokeWidth="1.2" />
          {/* Knock-Out Drum (KOD) */}
          <rect x="25" y="30" width="20" height="40" rx="10" strokeWidth="1" fill="rgba(13,21,39,0.8)" />
          <line x1="35" y1="20" x2="35" y2="30" />
          <circle cx="35" cy="18" r="2" />
          {/* Water Bath Heater */}
          <rect x="65" y="35" width="30" height="30" strokeWidth="1" />
          <circle cx="80" cy="50" r="8" strokeDasharray="2,2" />
          <path d="M70,50 Q80,45 90,50" />
          {/* Regulating Valve / Orifice Meter */}
          <polygon points="120,40 120,60 135,50" strokeWidth="1" fill="rgba(13,21,39,0.8)" />
          <polygon points="135,40 135,60 120,50" strokeWidth="1" fill="rgba(13,21,39,0.8)" />
          {/* Indicator text */}
          <text x="25" y="80" fill="rgba(148,163,184,0.6)" fontSize="6" fontFamily="monospace">KOD-01</text>
          <text x="68" y="80" fill="rgba(148,163,184,0.6)" fontSize="6" fontFamily="monospace">HEATER-03</text>
          <text x="115" y="80" fill="rgba(148,163,184,0.6)" fontSize="6" fontFamily="monospace">REGULATOR-05</text>
          <text x="10" y="45" fill="#00F5FF" fontSize="5" fontFamily="monospace">GAS IN</text>
          <text x="135" y="45" fill="#00F5FF" fontSize="5" fontFamily="monospace">410MW CCPP</text>
        </svg>
      )
    },
    {
      id: 2,
      title: "National Infrastructure Leadership",
      role: "Assistant Engineer (RHD)",
      org: "Roads and Highways Division, Government of Bangladesh",
      period: "2023 - Present",
      description: "Serving as a government official leading national asset management, infrastructure project monitoring, and public sector engineering operations within the transport sector.",
      highlights: [
        "Managing large-scale road network development and regional asset maintenance grids.",
        "Spearheading public-sector engineering projects, coordinating between contractors and ministries.",
        "Ensuring structural integrity, financial compliance, and project timelines for public works.",
        "Directing system operations for national highway corridors."
      ],
      cadLabel: "PLATE_03 // BRIDGE STRUCTURAL CROSS SECTION ASSEMBLY",
      cadDrawing: (
        <svg viewBox="0 0 160 100" fill="none" stroke="rgba(0, 245, 255, 0.4)" strokeWidth="0.8">
          {/* Bridge / Roadway CAD Drawing */}
          {/* Road deck */}
          <rect x="10" y="25" width="140" height="8" rx="1" fill="rgba(13,21,39,0.8)" strokeWidth="1" />
          <line x1="10" y1="29" x2="150" y2="29" stroke="#00F5FF" strokeWidth="0.5" strokeDasharray="4,2" />
          {/* Abutments & Piers */}
          <rect x="30" y="33" width="15" height="40" fill="rgba(13,21,39,0.8)" />
          <rect x="115" y="33" width="15" height="40" fill="rgba(13,21,39,0.8)" />
          {/* Foundation Piles */}
          <line x1="37.5" y1="73" x2="37.5" y2="90" strokeWidth="1.5" />
          <line x1="122.5" y1="73" x2="122.5" y2="90" strokeWidth="1.5" />
          {/* Tension Cable Lines (Stay bridge style layout representation) */}
          <line x1="10" y1="25" x2="70" y2="10" strokeWidth="0.5" />
          <line x1="30" y1="25" x2="70" y2="10" strokeWidth="0.5" />
          <line x1="50" y1="25" x2="70" y2="10" strokeWidth="0.5" />
          <line x1="150" y1="25" x2="90" y2="10" strokeWidth="0.5" />
          <line x1="130" y1="25" x2="90" y2="10" strokeWidth="0.5" />
          <line x1="110" y1="25" x2="90" y2="10" strokeWidth="0.5" />
          {/* Pier tower */}
          <line x1="70" y1="10" x2="70" y2="25" strokeWidth="1.5" />
          <line x1="90" y1="10" x2="90" y2="25" strokeWidth="1.5" />
          <text x="32" y="85" fill="rgba(148,163,184,0.6)" fontSize="5" fontFamily="monospace">PILE GRIP</text>
          <text x="65" y="20" fill="rgba(148,163,184,0.6)" fontSize="5" fontFamily="monospace">SPAN-01</text>
          <text x="95" y="20" fill="rgba(148,163,184,0.6)" fontSize="5" fontFamily="monospace">SPAN-02</text>
        </svg>
      )
    }
  ];

  return (
    <section id="evolution" className="section evolution-section">
      <div className="container">
        <div className="section-header">
          <h2 data-num="01">Professional Evolution</h2>
          <p className="section-intro">
            From computational modeling and mechanical design, to managing large-scale state energy grids, 
            and leading national transportation infrastructure development as a government official.
          </p>
        </div>

        <div className="evolution-grid">
          {/* Left / Navigation Timeline */}
          <div className="timeline-stepper">
            <div className="timeline-line">
              <div 
                className="timeline-line-progress" 
                style={{ height: `${(activeStep / (timelineSteps.length - 1)) * 100}%` }}
              ></div>
            </div>
            
            {timelineSteps.map((step) => (
              <button
                key={step.id}
                className={`timeline-node-btn ${activeStep === step.id ? 'active' : ''}`}
                onClick={() => setActiveStep(step.id)}
              >
                <div className="node-marker">
                  <div className="node-inner"></div>
                </div>
                <div className="node-meta">
                  <span className="node-period">{step.period}</span>
                  <h3 className="node-title">{step.title}</h3>
                  <span className="node-org">{step.org}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Right / Display Card Detail */}
          <div className="timeline-detail-panel">
            <div className="tech-card timeline-card">
              <div className="card-header-meta">
                <span className="tech-heading-tag">SYSTEM STAGE: 0{activeStep + 1}</span>
                <span className="card-period-tag">{timelineSteps[activeStep].period}</span>
              </div>
              
              <h3 className="card-role-title">{timelineSteps[activeStep].role}</h3>
              <h4 className="card-org-subtitle">{timelineSteps[activeStep].org}</h4>
              
              <p className="card-desc">{timelineSteps[activeStep].description}</p>
              
              <div className="card-highlights-box">
                <span className="box-title">KEY RESPONSIBILITIES & SYSTEM IMPACT:</span>
                <ul className="card-highlights">
                  {timelineSteps[activeStep].highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
              </div>

              {/* Dynamic CAD Blueprint block rendering */}
              <div className="card-cad-attachment">
                <div className="cad-header">
                  <span className="cad-led"></span>
                  <span className="cad-label-text">{timelineSteps[activeStep].cadLabel}</span>
                </div>
                <div className="cad-drawing-body">
                  {timelineSteps[activeStep].cadDrawing}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
