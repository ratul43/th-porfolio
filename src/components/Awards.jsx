import React from 'react';

export default function Awards() {
  const leadershipData = [
    {
      title: "President of Administration",
      org: "BUET Nuclear Engineering Club (BNEC)",
      period: "Former Term",
      desc: "Directed administrative operations, managed inter-departmental logistics, and spearheaded seminars on atomic energy applications and power grid system design.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="award-icon">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="4" />
          <line x1="12" y1="2" x2="12" y2="4" />
          <line x1="12" y1="20" x2="12" y2="22" />
          <line x1="2" y1="12" x2="4" y2="12" />
          <line x1="20" y1="12" x2="22" y2="12" />
        </svg>
      )
    },
    {
      title: "8-Year Best Student Streak",
      org: "Academic Excellence Recognition",
      period: "Secondary & Higher Secondary",
      desc: "Consistently recognized as the top-ranking scholar throughout secondary and pre-university levels, culminating in admission to BUET and a Dean's List Scholarship.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="award-icon">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      )
    }
  ];

  return (
    <section id="awards" className="section awards-section">
      <div className="container">
        <div className="section-header">
          <h2 data-num="05">Awards & Leadership</h2>
          <p className="section-intro">
            Demonstrating administrative oversight, institutional leadership, and a proven history of high-level academic performance.
          </p>
        </div>

        <div className="awards-grid">
          {leadershipData.map((item, idx) => (
            <div key={idx} className="tech-card award-card">
              <div className="award-header-row">
                <div className="award-badge-box">
                  {item.icon}
                </div>
                <div className="award-meta">
                  <span className="award-period-txt">{item.period}</span>
                  <h3 className="award-card-title">{item.title}</h3>
                  <span className="award-org-txt">{item.org}</span>
                </div>
              </div>
              <p className="award-card-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
