import React from 'react';
import { Quote, CheckCircle2, Shield, Handshake } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function TestimonialsPartners() {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Testimonials Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/10 text-brand-green-dark text-xs font-bold uppercase tracking-wider mb-3">
            <CheckCircle2 className="w-3.5 h-3.5 text-brand-green" />
            <span>Proven Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Client Endorsements & Global Alliances
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Trusted by prominent developers, facility operators, and commercial conglomerates across the Middle East.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {siteData.testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-2xl p-8 border border-slate-200/90 shadow-sm relative flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-xl bg-brand-blue/10 text-brand-blue">
                    <Quote className="w-6 h-6 text-brand-blue" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-white text-brand-blue text-xs font-bold border border-slate-200">
                    {t.location}
                  </span>
                </div>

                <p className="text-slate-700 italic text-sm sm:text-base leading-relaxed mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    {t.author}
                  </h4>
                  <p className="text-xs text-slate-500 font-medium">
                    {t.company}
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-brand-green text-xs font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Verified Client</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technology Alliances & Hardware Partners */}
        <div className="pt-10 border-t border-slate-100">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Authorized Technology Alliances & Protocols
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {siteData.partners.map((partner, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 text-center flex flex-col justify-center items-center hover:border-brand-blue/30 hover:bg-white hover:shadow-sm transition-all"
              >
                <div className="font-bold text-slate-800 text-xs sm:text-sm mb-1">
                  {partner.name}
                </div>
                <div className="text-[11px] text-slate-500 font-medium leading-tight">
                  {partner.role}
                </div>
              </div>
            ))}
          </div>

          {/* Protocols Badges */}
          <div className="mt-8 flex flex-wrap justify-center items-center gap-2">
            {["BACnet/IP", "BACnet MS/TP", "Modbus RTU/TCP", "Tridium Niagara 4", "MQTT IoT", "OPC-UA"].map((p, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full bg-brand-blue/5 border border-brand-blue/20 text-brand-blue text-xs font-semibold"
              >
                {p}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
