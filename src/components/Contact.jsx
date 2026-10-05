import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, Globe } from 'lucide-react';
import { siteData } from '../data/siteData';
import confetti from 'canvas-confetti';

export default function Contact({ prefilledService = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: prefilledService || 'Smart Buildings & Digital Twin',
    region: 'United Arab Emirates',
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
        particleCount: 70,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#1a56db', '#78c043', '#ffffff']
      });
    }, 700);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5 text-brand-green" />
            <span>Connect with our Engineers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Request an Engineering Consultation
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Our technical directors and BMS architects across the Middle East are ready to evaluate your facility's energy and automation needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Middle East Regional Office Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-brand-dark to-slate-900 rounded-2xl p-8 sm:p-10 text-white shadow-xl border border-slate-800 space-y-8">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-brand-green/20 text-brand-green-light text-xs font-bold uppercase mb-3">
                Regional Headquarters
              </div>
              <h3 className="text-2xl font-extrabold text-white">
                {siteData.company.name}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mt-2">
                Providing turnkey design, controller supply, panel engineering, and 24/7 preventative maintenance across the Middle East.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-brand-green/20 text-brand-green shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase">Head Office Address</div>
                  <div className="text-sm font-semibold text-white">{siteData.company.address}</div>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-brand-blue/25 text-brand-blue-light shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase">Direct Phone Line</div>
                  <div className="text-sm font-semibold text-white">{siteData.company.phone}</div>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-brand-green/20 text-brand-green shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase">Inquiries & Tenders</div>
                  <div className="text-sm font-semibold text-white">{siteData.company.email}</div>
                  <div className="text-xs text-slate-400">{siteData.company.inquiriesEmail}</div>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-brand-blue/25 text-brand-blue-light shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase">Operational Support</div>
                  <div className="text-sm font-semibold text-white">Sunday – Thursday: 8:00 AM – 6:00 PM (24/7 AMC Emergency SLA)</div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300">
              <span className="font-bold text-brand-green-light">Middle East Fast-Track Response:</span> Project proposals and compliance drawings returned within 24 business hours.
            </div>
          </div>

          {/* Right Column: Interactive Proposal Request Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-8 sm:p-10 shadow-lg border border-slate-200">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-brand-green/20 text-brand-green flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900">
                  Consultation Request Dispatched!
                </h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out to <strong>SupraControl Middle East</strong>. A dedicated senior systems engineer will analyze your technical requirements and contact you shortly.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        service: 'Smart Buildings & Digital Twin',
                        region: 'United Arab Emirates',
                        message: ''
                      });
                    }}
                    className="px-6 py-2.5 rounded-lg border border-slate-200 text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-2xl font-extrabold text-slate-900 mb-1">
                    Send Project Specifications
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm">
                    Fill in your details to receive an engineer-reviewed technical proposal.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Eng. Tariq Al-Mansoor"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="e.g. name@company.ae"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+971 50 0000000"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                      Middle East Territory
                    </label>
                    <select
                      name="region"
                      value={formData.region}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue bg-white"
                    >
                      <option value="United Arab Emirates">United Arab Emirates (Dubai / Abu Dhabi)</option>
                      <option value="Saudi Arabia">Saudi Arabia (Riyadh / Jeddah / Neom)</option>
                      <option value="Middle East Regional">Middle East Regional Operations</option>
                      <option value="Oman & Bahrain">Oman & Bahrain Regional Hub</option>
                      <option value="Other Middle East Territories">Other Middle East Territories</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                    Primary Service of Interest
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue bg-white"
                  >
                    <option value="Smart City Solutions">Smart City Solutions & Urban Telemetry</option>
                    <option value="Smart Buildings & Digital Twin">Smart Buildings & Digital Twin Platform</option>
                    <option value="Physical Security Systems">Physical Security Systems & Access Control</option>
                    <option value="BMS & Chiller Plant Automation">BMS & Chiller Plant Automation</option>
                    <option value="Smart Metering & Energy Analytics">Smart Metering & BTU Tenant Sub-Billing</option>
                    <option value="DCIM & Facility Management">DCIM & Mission-Critical Data Center Monitoring</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                    Project Parameters / Scope of Work
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Provide details such as facility type, square meters, I/O point estimate, retrofitting requirements..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex justify-center items-center gap-2 px-6 py-3.5 rounded-lg text-sm font-bold text-white bg-brand-blue hover:bg-brand-blue-dark shadow-md hover:shadow-lg transition-all duration-200"
                >
                  {loading ? (
                    <span>Processing Submission...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-brand-green-light" />
                      <span>Submit Proposal Request</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
