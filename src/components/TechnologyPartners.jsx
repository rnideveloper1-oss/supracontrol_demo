import React from 'react';
import { siteData } from '../data/siteData';

export default function TechnologyPartners() {
  const domains = [
    { title: "AI & Machine Learning", desc: "Predictive asset optimization & computer vision" },
    { title: "Enterprise Cloud Platforms", desc: "Scalable IoT telemetry & real-time analytics" },
    { title: "Robotics & Drones", desc: "Autonomous inspection & security surveillance" },
    { title: "Digital Twin & Smart BIM", desc: "High-precision 3D facility simulation & data modeling" },
    { title: "Physical Security & PSIM", desc: "Biometric access control & smart video analytics" },
    { title: "Virtual & Augmented Reality", desc: "Immersive facility operation & digital walkthroughs" }
  ];

  return (
    <section className="py-5" style={{ backgroundColor: '#f8fafc' }}>
      <div className="container py-3">
        <div className="text-center mb-4">
          <span className="badge px-3 py-1 rounded-pill fw-bold mb-2" style={{ backgroundColor: 'rgba(26, 86, 219, 0.1)', color: '#1a56db' }}>
            Technology Innovation
          </span>
          <h3 className="fw-bold text-dark mb-2">Disruptive Technology Spectrum</h3>
          <p className="text-secondary small max-w-600 mx-auto">
            Authorized partnerships with global IoT technology leaders, delivering innovation across the Middle East.
          </p>
        </div>

        {/* Domains Grid */}
        <div className="row g-3 justify-content-center mb-4">
          {domains.map((domain, index) => (
            <div key={index} className="col-12 col-sm-6 col-lg-4">
              <div
                className="card h-100 p-3 p-md-4 border-0 shadow-sm rounded-3"
                style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0' }}
              >
                <div className="fw-bold text-dark mb-1">{domain.title}</div>
                <div className="text-muted small">{domain.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Representation Banner */}
        <div className="p-3 rounded-4 text-center bg-white border">
          <div className="d-flex flex-wrap justify-content-center align-items-center gap-2">
            <span className="fw-bold small text-secondary me-2">Global Partnerships:</span>
            {siteData.technologies.map((tech, i) => (
              <span
                key={i}
                className="badge px-3 py-2 rounded-pill fw-semibold"
                style={{ backgroundColor: 'rgba(120, 192, 67, 0.12)', color: '#5ea031', border: '1px solid rgba(120, 192, 67, 0.25)' }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
