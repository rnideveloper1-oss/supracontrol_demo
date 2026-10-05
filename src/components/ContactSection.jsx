import React, { useState, useEffect } from 'react';
import { siteData } from '../data/siteData';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, ChevronRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactSection({ prefilledService = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: prefilledService || 'Smart Buildings',
    facilityType: 'Smart Building & Commercial',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (prefilledService) {
      setFormData(prev => ({ ...prev, service: prefilledService }));
    }
  }, [prefilledService]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#002b49', '#78c043', '#ffffff']
      });
    }, 700);
  };

  return (
    <section id="contact" className="py-5" style={{ backgroundColor: '#ffffff' }}>
      <div className="container py-4">
        <div className="text-center mb-5">
          <div className="d-inline-flex align-items-center gap-2 mb-2">
            <span className="badge px-3 py-1 rounded-1 text-uppercase fw-bold" style={{ backgroundColor: 'rgba(0, 43, 73, 0.08)', color: '#002b49', letterSpacing: '0.08em' }}>
              Connect With Us
            </span>
          </div>
          <h2 className="sc-section-title mb-3" style={{ color: '#002b49' }}>
            Contact & Get A Quote
          </h2>
          <p className="sc-section-subtitle">
            Speak directly with our technical leadership in Dubai Silicon Oasis to evaluate your facility's IoT and digital transformation roadmap.
          </p>
        </div>

        <div className="row g-5">
          {/* Office Address & Regional Presence (Milaha Corporate Card) */}
          <div className="col-12 col-lg-5">
            <div className="p-4 p-md-5 rounded-3 text-white h-100 d-flex flex-column justify-content-between" style={{ background: 'linear-gradient(145deg, #001f35 0%, #002b49 100%)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <div>
                <div className="d-flex align-items-center gap-2 mb-3">
                  <span className="badge bg-success px-3 py-1 fw-bold">Regional Headquarters</span>
                  <span className="small text-white-50">Dubai, UAE</span>
                </div>
                <h4 className="fw-bold mb-3 text-white">Supracontrol Middle East</h4>
                <p className="text-white-50 small mb-4" style={{ lineHeight: '1.7' }}>
                  Headquartered at Dtec, Dubai Silicon Oasis, we engineer and deliver turnkey smart building platforms, DCIM systems, and physical security infrastructures.
                </p>

                <div className="d-flex flex-column gap-3 mb-4">
                  <div className="d-flex align-items-start gap-3">
                    <div className="p-2 rounded-2" style={{ backgroundColor: 'rgba(120, 192, 67, 0.2)', color: '#78c043' }}>
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div className="fw-bold small text-white">Office Address</div>
                      <div className="text-white-50 small">{siteData.company.address}</div>
                    </div>
                  </div>

                  <div className="d-flex align-items-start gap-3">
                    <div className="p-2 rounded-2" style={{ backgroundColor: 'rgba(26, 86, 219, 0.25)', color: '#60a5fa' }}>
                      <Phone size={20} />
                    </div>
                    <div>
                      <div className="fw-bold small text-white">Telephone</div>
                      <div className="text-white-50 small">{siteData.company.phone}</div>
                    </div>
                  </div>

                  <div className="d-flex align-items-start gap-3">
                    <div className="p-2 rounded-2" style={{ backgroundColor: 'rgba(120, 192, 67, 0.2)', color: '#78c043' }}>
                      <Mail size={20} />
                    </div>
                    <div>
                      <div className="fw-bold small text-white">Direct Emails</div>
                      <div className="text-white-50 small">{siteData.company.email}</div>
                      <div className="text-white-50 small">{siteData.company.altEmail}</div>
                    </div>
                  </div>

                  <div className="d-flex align-items-start gap-3">
                    <div className="p-2 rounded-2" style={{ backgroundColor: 'rgba(26, 86, 219, 0.25)', color: '#60a5fa' }}>
                      <Clock size={20} />
                    </div>
                    <div>
                      <div className="fw-bold small text-white">Business Hours</div>
                      <div className="text-white-50 small">Monday – Friday: 9:00 AM – 6:00 PM (GST)</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-2" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <div className="small fw-bold text-success mb-1">Dubai Silicon Oasis (Dtec)</div>
                <div className="small text-white-50" style={{ fontSize: '0.78rem' }}>
                  Registered Freezone Company (FZCO) in Dubai, United Arab Emirates.
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Form */}
          <div className="col-12 col-lg-7">
            <div className="card border-0 shadow-sm p-4 p-md-5 rounded-3" style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0' }}>
              {submitted ? (
                <div className="text-center py-5">
                  <div
                    className="rounded-circle d-inline-flex p-3 mb-3 align-items-center justify-content-center"
                    style={{ backgroundColor: 'rgba(120, 192, 67, 0.15)', color: '#5ea031' }}
                  >
                    <CheckCircle2 size={48} />
                  </div>
                  <h4 className="fw-bold text-dark mb-2">Quote Request Received!</h4>
                  <p className="text-secondary small mb-4 mx-auto" style={{ maxWidth: '420px' }}>
                    Thank you for contacting <strong>Supracontrol Middle East</strong>. Our technical engineering team will review your specifications and get back to you promptly.
                  </p>
                  <button
                    type="button"
                    className="btn btn-outline-dark rounded-pill px-4"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        service: 'Smart Buildings',
                        facilityType: 'Smart Building & Commercial',
                        message: ''
                      });
                    }}
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h4 className="fw-bold text-dark mb-4" style={{ color: '#002b49' }}>Request Technical Proposal</h4>

                  <div className="row g-3 mb-3">
                    <div className="col-12 col-md-6">
                      <label className="form-label small fw-bold text-dark">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control rounded-2"
                        placeholder="Your Full Name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <label className="form-label small fw-bold text-dark">Corporate Email *</label>
                      <input
                        type="email"
                        name="email"
                        className="form-control rounded-2"
                        placeholder="yourname@domain.com"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="row g-3 mb-3">
                    <div className="col-12 col-md-6">
                      <label className="form-label small fw-bold text-dark">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        className="form-control rounded-2"
                        placeholder="+971 50 0000000"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <label className="form-label small fw-bold text-dark">Specialization of Interest</label>
                      <select
                        name="service"
                        className="form-select rounded-2"
                        value={formData.service}
                        onChange={handleChange}
                      >
                        <option value="Smart City Solutions">Smart City Solutions</option>
                        <option value="Smart Buildings">Smart Buildings Platform</option>
                        <option value="Physical Security Systems">Physical Security Systems</option>
                        <option value="Integrated Facility Management (IFM)">Integrated Facility Management</option>
                        <option value="Data Center Infrastructure Monitoring (DCIM)">Data Center Infrastructure Monitoring (DCIM)</option>
                        <option value="Smart Homes">Smart Homes</option>
                        <option value="Intelligent Lighting controls">Intelligent Lighting controls</option>
                        <option value="Smart metering">Smart metering</option>
                        <option value="Energy Management & Optimization">Energy Management & Optimization</option>
                        <option value="Digital Workplace solutions">Digital Workplace solutions</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label small fw-bold text-dark">Sector / Facility Type</label>
                    <select
                      name="facilityType"
                      className="form-select rounded-2"
                      value={formData.facilityType}
                      onChange={handleChange}
                    >
                      <option value="Smart Building & Commercial">Smart Buildings & Commercial Towers</option>
                      <option value="Intelligent Data Center">Intelligent Data Centers (DCIM)</option>
                      <option value="Smart City Infrastructure">Smart Cities & Municipal Tech</option>
                      <option value="Tech Parks & Corporate Hubs">Tech Parks & Corporate Campuses</option>
                      <option value="Luxury Residential / Smart Home">Luxury Residential / Smart Homes</option>
                      <option value="Industrial & Utilities">Industrial & Utilities</option>
                    </select>
                  </div>

                  <div className="mb-4">
                    <label className="form-label small fw-bold text-dark">Project Details / Requirements</label>
                    <textarea
                      name="message"
                      rows="4"
                      className="form-control rounded-2"
                      placeholder="Outline your scope, building systems or IoT requirements..."
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-milaha-primary w-100 py-3 rounded-2 d-flex align-items-center justify-content-center gap-2 fw-bold text-white shadow-sm"
                    disabled={loading}
                    style={{ backgroundColor: '#002b49' }}
                  >
                    {loading ? (
                      <span>Submitting...</span>
                    ) : (
                      <>
                        <Send size={18} /> Submit Now
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
