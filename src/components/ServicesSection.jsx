import React from 'react';
import { siteData } from '../data/siteData';
import { Package, Compass, Briefcase, CheckCircle, ArrowRight } from 'lucide-react';

export default function ServicesSection({ onSelectContact }) {
  const icons = [Package, Compass, Briefcase];

  return (
    <section id="services" className="py-5" style={{ backgroundColor: '#ffffff' }}>
      <div className="container py-4">
        <div className="text-center mb-5">
          <div className="d-inline-flex align-items-center gap-2 mb-2">
            <span className="badge px-3 py-1 rounded-1 text-uppercase fw-bold" style={{ backgroundColor: 'rgba(0, 43, 73, 0.08)', color: '#002b49', letterSpacing: '0.08em' }}>
              Core Operations
            </span>
          </div>
          <h2 className="sc-section-title mb-3" style={{ color: '#002b49' }}>
            Our Services
          </h2>
          <p className="sc-section-subtitle">
            Delivering detailed technical designs, authorized IoT device supply, design engineering, and professional field services across the Middle East.
          </p>
        </div>

        <div className="row g-4">
          {siteData.services.map((service, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div key={index} className="col-12 col-lg-4">
                <div className="sc-service-card h-100 d-flex flex-column justify-content-between p-4 rounded-3 border" style={{ borderTop: '4px solid #1a56db' }}>
                  <div>
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <div
                        className="rounded-2 p-3 d-flex align-items-center justify-content-center"
                        style={{ backgroundColor: 'rgba(0, 43, 73, 0.08)', color: '#002b49' }}
                      >
                        <Icon size={26} />
                      </div>
                      <span className="sc-service-tag">{service.tag}</span>
                    </div>

                    <h4 className="fw-bold text-dark mb-3" style={{ color: '#002b49' }}>{service.title}</h4>
                    <p className="text-secondary small mb-4" style={{ lineHeight: '1.7', fontSize: '0.93rem' }}>
                      {service.desc}
                    </p>

                    {/* Bullet Highlights */}
                    <div className="d-flex flex-column gap-2 mb-4">
                      {service.bulletPoints.map((bp, i) => (
                        <div key={i} className="d-flex align-items-start gap-2 small text-dark">
                          <CheckCircle size={16} className="flex-shrink-0 mt-1" style={{ color: '#78c043' }} />
                          <span>{bp}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-top">
                    <button
                      type="button"
                      className="btn btn-sc-green w-100 d-flex align-items-center justify-content-center gap-2 fw-bold text-white"
                      onClick={() => onSelectContact(service.title)}
                    >
                      Inquire About {service.title} <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
