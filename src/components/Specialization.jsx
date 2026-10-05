import React, { useState } from 'react';
import { siteData } from '../data/siteData';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Specialization({ onSelectSolution }) {
  const [activeModalItem, setActiveModalItem] = useState(null);

  // The 3 featured specializations from user's reference screenshot
  const featuredSpecs = [
    {
      id: 'smart-city',
      title: 'Smart City Solutions',
      desc: 'Smart city solutions are designed keeping in mind the growing importance of information and communication technologies (ICTs)',
      type: 'city',
      details: [
        'Urban IoT sensor telemetry and municipal dashboards',
        'Intelligent adaptive street lighting and grid controls',
        'Smart parking management and environmental telemetry',
        'Automated civic infrastructure and waste monitoring'
      ]
    },
    {
      id: 'smart-buildings',
      title: 'Smart Buildings',
      desc: 'Open and single centralized platform for all systems in a Building With IOT, AI, Data Analytic, Cyber security, Big data, Machine learning, cloud services',
      type: 'building',
      details: [
        'Centralized BMS regulation for HVAC, power & lighting',
        'Predictive AI machine learning reducing chiller runtimes',
        'High-fidelity 3D Digital Twins with smart BIM integration',
        'Zero vendor lock-in with open BACnet/IP and Niagara 4'
      ]
    },
    {
      id: 'physical-security',
      title: 'Physical Security Systems',
      desc: 'We support the complete line of Physical Security products and services including, physical access control, integrated security',
      type: 'security',
      details: [
        'Biometric access control with anti-passback security',
        'Integrated intrusion detection and automated life-safety interlocks',
        'AI-driven IP CCTV analytics with perimeter breach alerts',
        'Unified command wall and PSIM software integration'
      ]
    }
  ];

  const renderIcon = (type) => {
    if (type === 'city') {
      return (
        <svg viewBox="0 0 64 64" className="w-14 h-14 stroke-brand-green fill-none stroke-[2.2] stroke-linecap-round stroke-linejoin-round">
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
    if (type === 'building') {
      return (
        <svg viewBox="0 0 64 64" className="w-14 h-14 stroke-brand-green fill-none stroke-[2.2] stroke-linecap-round stroke-linejoin-round">
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
    // security
    return (
      <svg viewBox="0 0 64 64" className="w-14 h-14 stroke-brand-green fill-none stroke-[2.2] stroke-linecap-round stroke-linejoin-round">
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
  };

  return (
    <section id="specialization" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Exact wording and color from user reference) */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-blue tracking-tight mb-4">
            Our Specialization
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            We are committed to our goal of supporting customers with reliable and cost-effective solutions/services which provides premium experience to all end users.
          </p>
        </div>

        {/* 3 Specialization Cards Grid (Exact Replica of Reference Screenshot) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredSpecs.map((spec) => (
            <div
              key={spec.id}
              className="bg-white rounded-2xl p-8 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-brand-green/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="mb-6 flex items-center justify-start">
                  {renderIcon(spec.type)}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {spec.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                  {spec.desc}
                </p>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => setActiveModalItem(spec)}
                  className="px-6 py-2.5 rounded-lg text-sm font-bold text-white bg-brand-green hover:bg-brand-green-dark shadow-sm hover:shadow transition-all duration-200"
                >
                  View More
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      {activeModalItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm"
          onClick={() => setActiveModalItem(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start pb-4 border-b border-slate-100">
              <h3 className="text-2xl font-extrabold text-brand-blue">
                {activeModalItem.title}
              </h3>
              <button
                type="button"
                onClick={() => setActiveModalItem(null)}
                className="p-1 rounded-full text-slate-400 hover:text-slate-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="py-6 space-y-4">
              <p className="text-slate-600 text-sm leading-relaxed">
                {activeModalItem.desc}
              </p>
              <div className="space-y-2.5 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Key Deliverables:
                </span>
                {activeModalItem.details.map((d, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setActiveModalItem(null)}
                className="px-5 py-2 rounded-lg border border-slate-200 text-sm font-semibold text-slate-600 hover:bg-slate-50"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  const title = activeModalItem.title;
                  setActiveModalItem(null);
                  if (onSelectSolution) onSelectSolution(title);
                }}
                className="inline-flex items-center gap-2 px-6 py-2 rounded-lg text-sm font-bold text-white bg-brand-blue hover:bg-brand-blue-dark shadow"
              >
                <span>Inquire Now</span>
                <ArrowRight className="w-4 h-4 text-brand-green-light" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
