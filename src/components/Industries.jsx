import React from 'react';
import { Building2, Hotel, Hospital, Server, CheckCircle2 } from 'lucide-react';

export default function Industries() {
  const industries = [
    {
      icon: Building2,
      name: "Commercial Towers & Office Complexes",
      desc: "Optimizing HVAC chillers, tenant BTU sub-metering, and physical security for high-density multi-tenant headquarters across the Middle East.",
      stats: "30%+ Energy Reduction"
    },
    {
      icon: Hotel,
      name: "Luxury Hotels & Hospitality",
      desc: "Turnkey GRMS guest room management, scene automation, and centralized energy setback controls integrated with hotel PMS.",
      stats: "320+ Rooms Deployed"
    },
    {
      icon: Hospital,
      name: "Hospitals & Healthcare Facilities",
      desc: "Precision cleanroom pressure cascading, medical gas telemetry, and critical alarm routing ensuring continuous patient safety.",
      stats: "100% Regulatory Uptime"
    },
    {
      icon: Server,
      name: "Data Centers & Mission-Critical Tech",
      desc: "DCIM thermal management, redundant power monitoring, and predictive failure alarms protecting digital infrastructure 24/7.",
      stats: "Zero Unplanned Outages"
    }
  ];

  return (
    <section id="industries" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/10 text-brand-green-dark text-xs font-bold uppercase tracking-wider mb-3">
            <span>Sectors We Serve</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Industries & Applications
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Engineered to meet the stringent technical, environmental, and compliance standards of mission-critical facilities across the Middle East.
          </p>
        </div>

        {/* Industries 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <div
                key={i}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 hover:border-brand-green/50 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="p-3 w-fit rounded-xl bg-brand-green/15 text-brand-green mb-5">
                    <Icon className="w-6 h-6 text-brand-green" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    {ind.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {ind.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-bold text-brand-blue">
                  <CheckCircle2 className="w-4 h-4 text-brand-green" />
                  <span>{ind.stats}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
