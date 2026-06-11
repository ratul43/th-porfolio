import React, { useState } from 'react';

export default function Gallery() {
  const [selectedProject, setSelectedProject] = useState(0);

  const projects = [
    {
      id: 0,
      title: "Double Tube Heat Exchanger",
      tag: "THERMAL DESIGN / SOLIDWORKS",
      description: "Designed a high-temperature industrial double tube heat exchanger engineered to operate under severe thermal stress. Executed comprehensive finite element thermal analysis to verify structural integrity and sealing configurations under extreme conditions.",
      specs: [
        { label: "Material", val: "Stainless Steel 316L" },
        { label: "Thermal Threshold", val: "300°C Max Operating Temp" },
        { label: "Pressure Rating", val: "15 Bar Gauge" },
        { label: "Flow Arrangement", val: "Counter-Flow Configuration" },
        { label: "Validation Method", val: "SolidWorks Simulation / FEA" }
      ],
      blueprintLabel: "DWG_REF: DX-300-HEX // DOUBLE TUBE STRUCTURAL PLAN",
      drawing: (
        <svg viewBox="0 0 200 120" fill="none" stroke="rgba(0, 245, 255, 0.4)" strokeWidth="0.8">
          {/* Heat Exchanger Line Drawing */}
          {/* Main outer tube */}
          <rect x="25" y="45" width="150" height="30" rx="2" strokeWidth="1" fill="rgba(13,21,39,0.8)" />
          {/* Inner tube */}
          <line x1="10" y1="60" x2="190" y2="60" strokeWidth="1.5" strokeDasharray="3,1" />
          <line x1="10" y1="58" x2="190" y2="58" strokeWidth="0.5" />
          <line x1="10" y1="62" x2="190" y2="62" strokeWidth="0.5" />
          {/* Inlet Shell */}
          <rect x="40" y="25" width="16" height="20" strokeWidth="1" />
          <line x1="48" y1="20" x2="48" y2="25" />
          {/* Outlet Shell */}
          <rect x="144" y="75" width="16" height="20" strokeWidth="1" />
          <line x1="152" y1="95" x2="152" y2="80" />
          {/* Inner flow entry */}
          <path d="M10,60 H20 M180,60 H190" stroke="#00F5FF" strokeWidth="1" />
          {/* Dimension arrows */}
          <line x1="25" y1="105" x2="175" y2="105" stroke="rgba(148,163,184,0.6)" strokeWidth="0.5" />
          <polyline points="28,103 25,105 28,107" stroke="rgba(148,163,184,0.6)" strokeWidth="0.5" />
          <polyline points="172,103 175,105 172,107" stroke="rgba(148,163,184,0.6)" strokeWidth="0.5" />
          {/* Annotation text */}
          <text x="80" y="100" fill="rgba(148,163,184,0.6)" fontSize="6" fontFamily="monospace">L = 1200 mm</text>
          <text x="85" y="38" fill="rgba(148,163,184,0.6)" fontSize="5" fontFamily="monospace">SHELL FLUID OUT</text>
          <text x="35" y="20" fill="#00F5FF" fontSize="5" fontFamily="monospace">SHELL FLUID IN</text>
          <text x="5" y="54" fill="#00F5FF" fontSize="5" fontFamily="monospace">TUBE IN</text>
          <text x="175" y="54" fill="#00F5FF" fontSize="5" fontFamily="monospace">TUBE OUT</text>
          <text x="80" y="54" fill="rgba(148,163,184,0.4)" fontSize="5" fontFamily="monospace">INNER TUBE: OD 22mm</text>
        </svg>
      )
    },
    {
      id: 1,
      title: "3D Helicopter CAD Assembly",
      tag: "COMPLEX MODELING / SOLIDWORKS",
      description: "Conducted an intensive three-month mechanical modeling project replicating a helicopter assembly. Designed over 80 individual components with precise tolerances, gear-mating structures, and complex curved aerodynamic surfacing.",
      specs: [
        { label: "Assembly Parts", val: "84 Unique SolidWorks Parts" },
        { label: "Surfacing", val: "Curved Aerodynamic Loft Surfacing" },
        { label: "Mating", val: "Dynamic Swashplate and Rotor Mates" },
        { label: "Modeling Cycle", val: "3 Months Intensive Phase" },
        { label: "Analysis", val: "Mass Properties & Center of Gravity Alignment" }
      ],
      blueprintLabel: "DWG_REF: HC-3D-ASM // MAIN ROTOR ASSEMBLY & SHIELD",
      drawing: (
        <svg viewBox="0 0 200 120" fill="none" stroke="rgba(0, 245, 255, 0.4)" strokeWidth="0.8">
          {/* Helicopter Line Drawing */}
          {/* Main rotor blade outline */}
          <line x1="20" y1="35" x2="180" y2="35" strokeWidth="1" />
          <line x1="20" y1="37" x2="180" y2="37" strokeWidth="0.5" />
          {/* Rotor hub */}
          <rect x="95" y="37" width="10" height="25" fill="rgba(13,21,39,0.8)" />
          <circle cx="100" cy="37" r="4" fill="rgba(13,21,39,0.8)" />
          {/* Helicopter body profile sketch */}
          <path d="M70,80 Q90,55 130,62 Q155,68 165,85 Q155,100 110,95 Q85,92 70,80 Z" strokeWidth="1" fill="rgba(13,21,39,0.8)" />
          {/* Tail boom */}
          <path d="M70,75 L15,70 L15,62 L70,68" />
          <circle cx="15" cy="66" r="6" strokeWidth="0.8" />
          {/* Tail rotor blades */}
          <line x1="15" y1="55" x2="15" y2="77" />
          {/* Landing gear */}
          <line x1="85" y1="94" x2="75" y2="105" />
          <line x1="120" y1="94" x2="130" y2="105" />
          <line x1="60" y1="105" x2="140" y2="105" strokeWidth="1.2" />
          <text x="108" y="48" fill="rgba(148,163,184,0.6)" fontSize="5" fontFamily="monospace">ROTOR HEAD</text>
          <text x="105" y="77" fill="rgba(148,163,184,0.6)" fontSize="5" fontFamily="monospace">COCKPIT</text>
          <text x="25" y="82" fill="rgba(148,163,184,0.6)" fontSize="5" fontFamily="monospace">BOOM</text>
        </svg>
      )
    },
    {
      id: 2,
      title: "Automatic Petfeeder System",
      tag: "MECHATRONICS / 3D PRINTING",
      description: "Designed and prototyped an automated mechatronics machine that schedules and dispenses precise portions of pet food. Modeled all structural casings in SolidWorks, manufactured via 3D-printed PLA, and integrated a microcontroller-servo subsystem.",
      specs: [
        { label: "Prototyping", val: "FDM 3D Printed Casing (PLA)" },
        { label: "Actuator", val: "High-Torque Continuous Rotation Servo" },
        { label: "Controller", val: "Arduino / C++ Firmware" },
        { label: "Dispenser", val: "Archimedean Screw / Auger Design" },
        { label: "Integration", val: "Mechatronic Sensor-Feedback Loop" }
      ],
      blueprintLabel: "DWG_REF: APF-08-DISP // PORTION HOPPER & AUGER SECTION",
      drawing: (
        <svg viewBox="0 0 200 120" fill="none" stroke="rgba(0, 245, 255, 0.4)" strokeWidth="0.8">
          {/* Petfeeder Line Drawing */}
          {/* Hopper / Container */}
          <polygon points="50,20 150,20 120,70 80,70" strokeWidth="1" fill="rgba(13,21,39,0.8)" />
          {/* Feed Auger casing */}
          <rect x="70" y="70" width="60" height="20" strokeWidth="1" fill="rgba(13,21,39,0.8)" />
          {/* Auger Screw (Helix representation) */}
          <path d="M75,80 Q80,72 85,80 T95,80 T105,80 T115,80 T125,80" stroke="#00F5FF" strokeWidth="1" />
          {/* Dispense nozzle */}
          <path d="M120,90 L135,105 H155" strokeWidth="1" />
          {/* Drive Motor box */}
          <rect x="50" y="72" width="20" height="16" fill="rgba(13,21,39,0.8)" />
          {/* Labels */}
          <text x="90" y="45" fill="rgba(148,163,184,0.6)" fontSize="6" fontFamily="monospace">STORAGE HOPPER</text>
          <text x="80" y="98" fill="rgba(148,163,184,0.6)" fontSize="5" fontFamily="monospace">AUGER DISPENSER</text>
          <text x="52" y="89" fill="rgba(148,163,184,0.6)" fontSize="5" fontFamily="monospace">SERVO</text>
        </svg>
      )
    }
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-header">
          <h2 data-num="03">Engineering Projects</h2>
          <p className="section-intro">
            Interactive showcase of core engineering designs, hardware assemblies, and systems prototyping. 
            Select a project block to view complete blueprint specs.
          </p>
        </div>

        <div className="projects-grid">
          {/* Project Stepper Side Cards */}
          <div className="project-list">
            {projects.map((proj, idx) => (
              <div 
                key={proj.id}
                className={`project-selector-card ${selectedProject === idx ? 'active' : ''}`}
                onClick={() => setSelectedProject(idx)}
              >
                <span className="proj-tag">{proj.tag}</span>
                <h3 className="proj-title">{proj.title}</h3>
                <p className="proj-short-desc">
                  {proj.description.substring(0, 100)}...
                </p>
                <div className="proj-action-meta">
                  <span className="inspection-txt">INSPECT DRAWINGS</span>
                  <svg className="inspection-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {/* Detailed CAD Inspector Side */}
          <div className="project-inspector">
            <div className="tech-card inspector-card">
              <div className="inspector-header">
                <div className="header-status">
                  <span className="glow-cyan-dot"></span>
                  <span className="inspector-heading">CAD MODEL INSPECTOR: DETAILED VIEW</span>
                </div>
                <div className="header-dwg-ref">
                  {projects[selectedProject].blueprintLabel.split(' // ')[0]}
                </div>
              </div>

              {/* Schematic Viewport */}
              <div className="inspector-viewport">
                <div className="viewport-overlay-grid"></div>
                <div className="viewport-drawing">
                  {projects[selectedProject].drawing}
                </div>
                <div className="viewport-dwg-title">
                  {projects[selectedProject].blueprintLabel.split(' // ')[1]}
                </div>
              </div>

              {/* Technical Specifications */}
              <div className="inspector-details">
                <div className="details-header">
                  <h3 className="details-title">{projects[selectedProject].title}</h3>
                  <span className="details-tag">{projects[selectedProject].tag}</span>
                </div>

                <p className="details-desc">{projects[selectedProject].description}</p>

                <div className="details-specs-table">
                  <span className="table-heading">SYSTEM DESIGN PARAMETERS:</span>
                  <table className="specs-table">
                    <tbody>
                      {projects[selectedProject].specs.map((spec, sIdx) => (
                        <tr key={sIdx}>
                          <td className="spec-label">{spec.label}</td>
                          <td className="spec-value">{spec.val}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
