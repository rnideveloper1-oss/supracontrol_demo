import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, X, Sparkles } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function Services({ onSelectService }) {
  const [selectedService, setSelectedService] = useState(null);
  const [activeTab, setActiveTab] = useState('All');

  const categories = ['All', 'Urban Intelligence', 'Facility Intelligence', 'Defense & Surveillance', 'Energy Engineering'];

  const filteredServices = activeTab === 'All'
    ? siteData.services
    : siteData.services.filter(s => s.category === activeTab || (activeTab === 'Energy Engineering' && (s.category === 'Energy Engineering' || s.category === 'Resource Optimization')));

  // Custom SVG line-art icons mirroring the user's reference screenshot
  const renderServiceIcon = (id) => {
    if (id === 'smart-city') {
      return (
        <svg viewBox="0 0 64 64" className="w-12 h-12 stroke-brand-green fill-none stroke-[2.2] stroke-linecap-round stroke-linejoin-round">
          <rect x="22" y="18" width="20" height="40" rx="1" />
          <line x1="28" y1="26" x2="36" y2="26" />
          <line x1="28" y1="34" x2="36" y2="34" />
          <line x1="28" y1="42" x2="36" y2="42" />
          <line x1="28" y1="50" x2="36" y2="50" />
          <rect x="10" y="32" width="12" height="26" rx="1" />
          <line x1="14" y1="38" x2="18" y2="38" />
          <line x1="14" y1="46" x2="18" y2="46" />
          <rect x="42" y="28" width="12" height="30" rx="1" />
          <line x1="46" y1="36" x2="50" y2="36" />
          <line x1="46" y1="44" x2="50" y2="44" />
          <line x1="32" y1="12" x2="32" y2="18" />
          <circle cx="32" cy="11" r="1.5" className="fill-brand-green" />
          <path d="M 26 9 A 8 8 0 0 1 38 9" />
          <path d="M 23 5 A 13 13 0 0 1 41 5" />
        </svg>
      );
    }
    if (id === 'smart-buildings') {
      return (
        <svg viewBox="0 0 64 64" className="w-12 h-12 stroke-brand-green fill-none stroke-[2.2] stroke-linecap-round stroke-linejoin-round">
          <rect x="12" y="24" width="22" height="34" rx="1" />
          <line x1="18" y1="32" x2="28" y2="32" />
          <line x1="18" y1="40" x2="28" y2="40" />
          <line x1="18" y1="48" x2="28" y2="48" />
          <path d="M 34 20 L 52 14 L 52 58 L 34 58 Z" />
          <line x1="40" y1="24" x2="46" y2="22" />
          <line x1="40" y1="32" x2="46" y2="30" />
          <line x1="40" y1="40" x2="46" y2="38" />
          <line x1="40" y1="48" x2="46" y2="46" />
          <path d="M 18 16 A 6 6 0 0 1 28 16" />
          <path d="M 15 12 A 11 11 0 0 1 31 12" />
          <circle cx="23" cy="19" r="1.2" className="fill-brand-green" />
        </svg>
      );
    }
    if (id === 'physical-security') {
      return (
        <svg viewBox="0 0 64 64" className="w-12 h-12 stroke-brand-green fill-none stroke-[2.2] stroke-linecap-round stroke-linejoin-round">
          <rect x="12" y="14" width="40" height="28" rx="2" />
          <line x1="26" y1="42" x2="22" y2="52" />
          <line x1="38" y1="42" x2="42" y2="52" />
          <line x1="18" y1="52" x2="46" y2="52" />
          <rect x="22" y="20" width="20" height="16" rx="1" />
          <line x1="26" y1="24" x2="38" y2="24" />
          <line x1="26" y1="28" x2="38" y2="28" />
          <line x1="26" y1="32" x2="34" y2="32" />
        </svg>
      );
    }
    // general chiller / metering / DCIM
    return (
      <svg viewBox="0 0 64 64" className="w-12 h-12 stroke-brand-green fill-none stroke-[2.2] stroke-linecap-round stroke-linejoin-round">
        <circle cx="32" cy="32" r="20" />
        <path d="M 32 16 L 32 32 L 42 36" />
        <circle cx="32" cy="32" r="3" className="fill-brand-green" />
        <line x1="32" y1="6" x2="32" y2="12" />
        <line x1="48" y1="16" x2="44" y2="20" />
      </svg>
    );
  };

  return (
    <section id="services" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-brand-green" />
            <span>Core Services & Specialization</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Our Expertise across the{' '}
            <span className="text-brand-blue">Middle East</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            We are committed to our goal of supporting customers with reliable and cost-effective solutions which provide a premium experience to all end users, while ensuring facilities remain Secure, Comfortable, Efficient, and Sustainable.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeTab === cat
                    ? 'bg-brand-blue text-white shadow-md'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-brand-blue/40 hover:text-brand-blue'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-brand-green/50 transition-all duration-300 flex flex-col justify-between group transform hover:-translate-y-1"
            >
              <div>
                {/* Icon & Category Tag */}
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-xl bg-brand-green/10 text-brand-green group-hover:bg-brand-green/20 transition-colors">
                    {renderServiceIcon(service.id)}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold tracking-wide">
                    {service.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-blue transition-colors">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {service.shortDesc}
                </p>

                {/* Bullet Highlights */}
                <ul className="space-y-2 mb-6">
                  {service.highlights.slice(0, 3).map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* View More Button (Vibrant Green matching user screenshot) */}
              <div className="pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setSelectedService(service)}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold text-white bg-brand-green hover:bg-brand-green-dark shadow-sm hover:shadow transition-all duration-200"
                >
                  <span>View More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Detail Modal Dialog */}
      {selectedService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex justify-between items-start pb-4 border-b border-slate-100">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold uppercase mb-2">
                  {selectedService.category}
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900">
                  {selectedService.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="py-6 space-y-6">
              <div>
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">
                  Operational Overview
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {selectedService.fullDesc}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                  Technical Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedService.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80 text-xs text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                      <span className="font-medium">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-brand-green-subtle border border-brand-green/30 text-xs text-slate-800">
                <span className="font-bold text-brand-green-dark">Middle East Compliance:</span> Engineered to withstand extreme ambient temperatures and fully certified with open BACnet/IP, Modbus, and Tridium Niagara standards.
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="px-5 py-2.5 rounded-lg border border-slate-200 text-sm font-bold text-slate-600 hover:bg-slate-50"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  const serviceName = selectedService.title;
                  setSelectedService(null);
                  if (onSelectService) onSelectService(serviceName);
                }}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold text-white bg-brand-blue hover:bg-brand-blue-dark shadow"
              >
                <span>Request Proposal</span>
                <ArrowRight className="w-4 h-4 text-brand-green-light" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
