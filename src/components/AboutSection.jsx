import React from 'react';
import { siteData } from '../data/siteData';
import { Award, HeartHandshake, ShieldCheck, ChevronRight } from 'lucide-react';

export default function AboutSection() {
  const valueIcons = [Award, HeartHandshake, ShieldCheck];

  return (
    <section id="about" className="py-5" style={{ backgroundColor: '#f4f6f9' }}>
      <div className="container py-4">
        {/* Milaha Corporate Header Banner */}
        <div className="row g-5 align-items-center mb-4">
          <div className="col-12 col-lg-6">
            <div className="d-inline-flex align-items-center gap-2 mb-2">
              <span className="badge px-3 py-1 rounded-1 text-uppercase fw-bold" style={{ backgroundColor: 'rgba(0, 43, 73, 0.08)', color: '#002b49', letterSpacing: '0.08em' }}>
                Corporate Overview
              </span>
            </div>
            <h2 className="sc-section-title mb-4" style={{ color: '#002b49', fontSize: '2.4rem' }}>
              Our Enterprise Story
            </h2>
            <p className="text-secondary mb-3" style={{ lineHeight: '1.8', fontSize: '1.08rem' }}>
              <strong>Supracontrol Middle East</strong> is a fast-growing Internet of Things (IoT) company, enabling digital transformation for enterprise customers. We do this by leveraging a spectrum of disruptive technologies such as: <strong>AI/ML, Cloud, IoT, Robotics/drones, Virtual/Augmented Reality, etc.</strong>
            </p>
            <p className="text-secondary mb-4" style={{ lineHeight: '1.8', fontSize: '1.08rem' }}>
              Established in 2020 in Dubai, United Arab Emirates (Dtec, Dubai Silicon Oasis), the company specializes in developing Detailed Technical Designs, Supply of IoT devices & solutions, Design Engineering, and Professional Services across Smart Buildings, Smart Cities, and Intelligent Data Centers.
            </p>

            <a href="#contact" className="text-decoration-none fw-bold d-inline-flex align-items-center gap-2 fs-6 mb-4" style={{ color: '#1a56db' }}>
              <span>Inquire about enterprise partnerships</span>
              <span className="milaha-chevrons">
                <span className="milaha-chevron-arrow" style={{ borderTopWidth: '10px', borderBottomWidth: '10px', borderLeftWidth: '10px' }}></span>
                <span className="milaha-chevron-arrow secondary" style={{ borderTopWidth: '10px', borderBottomWidth: '10px', borderLeftWidth: '10px' }}></span>
              </span>
            </a>
          </div>

          <div className="col-12 col-lg-6">
            <div className="p-4 p-md-5 rounded-3 text-white position-relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #002b49 0%, #003366 100%)' }}>
              {/* Background Geometric Watermark */}
              <div className="position-absolute end-0 bottom-0 opacity-10 pe-4 pb-2" style={{ pointerEvents: 'none' }}>
                <span className="display-1 fw-bold">SC</span>
              </div>

              <div className="d-flex align-items-center gap-2 mb-3">
                <span className="badge bg-success px-3 py-1 fw-bold">Dtec, Dubai Silicon Oasis</span>
                <span className="small text-white-50">Est. 2020</span>
              </div>
              <h3 className="fw-bold text-white mb-3">Built on Trust, Delivery & Innovation</h3>
              <p className="text-white-50 mb-4" style={{ lineHeight: '1.7' }}>
                We are committed to supporting customers with reliable and cost-effective solutions which provide a premium experience to all end users, while ensuring their buildings remain Secure, Comfortable, Efficient, and Sustainable.
              </p>
              <a href="#contact" className="btn btn-sc-green px-4 py-2 text-white fw-bold">
                Get Quote Now
              </a>
            </div>
          </div>
        </div>

        {/* 3 Core Values (Milaha-style Corporate Grid) */}
        <div className="row g-4 mt-2">
          {siteData.values.map((val, idx) => {
            const Icon = valueIcons[idx % valueIcons.length];
            return (
              <div key={idx} className="col-12 col-md-4">
                <div className="card h-100 p-4 border-0 shadow-sm rounded-3 bg-white" style={{ borderTop: '4px solid #002b49' }}>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className="display-6 fw-bold" style={{ color: idx === 1 ? '#78c043' : '#002b49' }}>
                      {val.num}
                    </span>
                    <div className="p-2 rounded-circle" style={{ backgroundColor: 'rgba(0, 43, 73, 0.06)', color: '#002b49' }}>
                      <Icon size={22} />
                    </div>
                  </div>
                  <h5 className="fw-bold text-dark mb-2">{val.title}</h5>
                  <p className="text-secondary small mb-0" style={{ lineHeight: '1.65' }}>
                    {val.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
