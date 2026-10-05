import React from 'react';
import { siteData } from '../data/siteData';
import { Quote, Building2, CheckCircle2 } from 'lucide-react';

export default function ProjectsPortfolio() {
  const sectors = [
    {
      title: "Smart Buildings & Commercial Towers",
      desc: "Detailed ELV & IoT design, energy management, and single platform building integration breaking operational silos.",
      client: "Halton Towers",
      quote: siteData.testimonials[0].quote,
      author: siteData.testimonials[0].author
    },
    {
      title: "Complex Multi-System Enterprise Integration",
      desc: "Interrelated systems analysis, dependency risk mitigation, and IoT platform delivery with complete project success.",
      client: "Primary Systems Corporation",
      quote: siteData.testimonials[1].quote,
      author: siteData.testimonials[1].author
    }
  ];

  return (
    <section id="projects" className="py-5" style={{ backgroundColor: '#ffffff' }}>
      <div className="container py-4">
        <div className="text-center mb-5">
          <span className="badge px-3 py-2 rounded-pill fw-bold mb-2" style={{ backgroundColor: 'rgba(26, 86, 219, 0.1)', color: '#1a56db' }}>
            Client Success & Delivery
          </span>
          <h2 className="sc-section-title mb-3" style={{ color: '#1a56db' }}>
            What Our Clients Say
          </h2>
          <p className="sc-section-subtitle">
            Authentic feedback from enterprise clients who transformed their operations with Supracontrol Middle East.
          </p>
        </div>

        {/* Testimonials Grid from supracontrolme.com */}
        <div className="row g-4 justify-content-center">
          {sectors.map((item, idx) => (
            <div key={idx} className="col-12 col-lg-6">
              <div className="card h-100 border-0 shadow-sm rounded-4 p-4 p-md-5 d-flex flex-column justify-content-between" style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' }}>
                <div>
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <div className="p-3 rounded-circle" style={{ backgroundColor: 'rgba(120, 192, 67, 0.15)', color: '#5ea031' }}>
                      <Quote size={28} />
                    </div>
                    <span className="badge px-3 py-2 rounded-pill fw-semibold" style={{ backgroundColor: '#1a56db', color: '#ffffff' }}>
                      {item.client}
                    </span>
                  </div>

                  <h5 className="fw-bold text-dark mb-3">{item.title}</h5>
                  <p className="text-secondary fst-italic mb-4" style={{ lineHeight: '1.75', fontSize: '1.02rem' }}>
                    "{item.quote}"
                  </p>
                </div>

                <div className="pt-3 border-top d-flex align-items-center justify-content-between">
                  <div>
                    <div className="fw-bold text-dark">{item.author}</div>
                    <div className="small text-muted">{item.client}</div>
                  </div>
                  <div className="d-flex align-items-center gap-1" style={{ color: '#78c043' }}>
                    <CheckCircle2 size={18} />
                    <span className="small fw-bold">Verified Client Review</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
