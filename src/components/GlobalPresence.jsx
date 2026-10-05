import React, { useState } from 'react';
import { Globe, MapPin, Building, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function GlobalPresence() {
  const [selectedRegion, setSelectedRegion] = useState(0);

  return (
    <section id="global-presence" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold uppercase tracking-wider mb-3">
            <Globe className="w-3.5 h-3.5 text-brand-green" />
            <span>Regional Footprint</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Operations & Reach Across the{' '}
            <span className="text-brand-blue">Middle East</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {siteData.globalPresence.subtitle}
          </p>
        </div>

        {/* Regional Hubs & Presence Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Region Selector */}
          <div className="lg:col-span-5 space-y-3">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Middle East Operational Territories
              </span>
            </div>

            {siteData.globalPresence.regions.map((reg, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setSelectedRegion(index)}
                className={`w-full text-left p-5 rounded-xl border transition-all duration-200 flex items-center justify-between group ${
                  selectedRegion === index
                    ? 'bg-brand-blue text-white border-brand-blue shadow-lg shadow-brand-blue/20'
                    : 'bg-white text-slate-800 border-slate-200 hover:border-brand-blue/40 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2.5 rounded-lg ${
                    selectedRegion === index ? 'bg-white/10 text-brand-green-light' : 'bg-slate-100 text-brand-blue group-hover:text-brand-blue'
                  }`}>
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base leading-snug">
                      {reg.country}
                    </h4>
                    <p className={`text-xs ${
                      selectedRegion === index ? 'text-blue-100' : 'text-slate-500'
                    }`}>
                      {reg.projectsCount}
                    </p>
                  </div>
                </div>

                <ArrowRight className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${
                  selectedRegion === index ? 'text-brand-green-light' : 'text-slate-400'
                }`} />
              </button>
            ))}
          </div>

          {/* Right Column: Detailed Territory Overview Card */}
          <div className="lg:col-span-7">
            {(() => {
              const current = siteData.globalPresence.regions[selectedRegion];
              return (
                <div className="bg-gradient-to-br from-brand-dark to-slate-900 rounded-2xl p-8 sm:p-10 text-white shadow-xl border border-slate-800 relative overflow-hidden">
                  
                  {/* Subtle Background Globe Watermark */}
                  <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-brand-blue/15 rounded-full blur-2xl pointer-events-none" />

                  <div className="relative z-10 space-y-6">
                    <div className="flex justify-between items-start flex-wrap gap-2">
                      <div>
                        <span className="px-3 py-1 rounded-full bg-brand-green/20 text-brand-green-light text-xs font-bold uppercase tracking-wider">
                          Middle East Regional Cluster
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                          {current.country}
                        </h3>
                      </div>
                      <div className="px-3.5 py-1.5 rounded-lg bg-white/10 border border-white/10 text-xs font-semibold text-slate-300">
                        {current.projectsCount}
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                      <div className="text-xs text-brand-green-light font-bold uppercase tracking-wide">
                        Regional Center & Engineering Office:
                      </div>
                      <div className="text-sm font-semibold text-white flex items-center gap-2">
                        <Building className="w-4 h-4 text-brand-blue-light shrink-0" />
                        <span>{current.hub}</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="text-xs text-slate-400 font-bold uppercase tracking-wide">
                        Territory Scope & Core Deliverables:
                      </div>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        {current.scope}
                      </p>
                    </div>

                    <div className="pt-6 border-t border-white/10 grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-brand-green" />
                        <span>24/7 AMC Emergency SLA</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-brand-green" />
                        <span>Certified Engineers on Ground</span>
                      </div>
                    </div>

                    <div className="pt-2">
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-xs font-bold text-white bg-brand-blue hover:bg-brand-blue-dark shadow transition-all"
                      >
                        <span>Initiate Project Consultation in {current.country}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-brand-green-light" />
                      </a>
                    </div>
                  </div>

                </div>
              );
            })()}
          </div>

        </div>

      </div>
    </section>
  );
}
