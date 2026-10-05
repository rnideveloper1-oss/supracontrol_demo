import React from 'react';
import { ShieldCheck, Award, HeartHandshake, ArrowRight, CheckCircle } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function About() {
  const valueIcons = [Award, HeartHandshake, ShieldCheck];

  return (
    <section id="about" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Column: Mission & Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold uppercase tracking-wider">
              <span>About SupraControl Middle East</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {siteData.about.title}
            </h2>

            <div className="space-y-4 text-slate-600 text-base leading-relaxed">
              {siteData.about.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-bold text-white bg-brand-blue hover:bg-brand-blue-dark shadow-md transition-all duration-200"
              >
                <span>Partner with Us</span>
                <ArrowRight className="w-4 h-4 text-brand-green-light" />
              </a>
            </div>
          </div>

          {/* Right Column: Middle East Highlights Card */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-brand-blue-navy to-brand-dark rounded-2xl p-8 sm:p-10 text-white shadow-xl border border-slate-700/60 space-y-6">
              <div className="inline-block px-3 py-1 rounded-full bg-brand-green/20 text-brand-green-light text-xs font-bold uppercase tracking-wide">
                Established 2011 • Middle East
              </div>

              <h3 className="text-2xl font-bold text-white leading-snug">
                Delivering Turnkey Excellence in Every Discipline
              </h3>

              <div className="space-y-3.5 pt-2">
                {[
                  "Detailed technical design and control logic programming",
                  "Authorized supply of certified IoT controllers & sensors",
                  "Turnkey DDC panel fabrication and testing",
                  "24/7 dedicated AMC and remote diagnostic support",
                  "Full compliance with Middle East regional building standards"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                    <CheckCircle className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300">
                <span className="font-bold text-white">Open Protocol Architecture:</span> Zero vendor lock-in. Full native interoperability with BACnet, Modbus, MQTT, and Tridium Niagara frameworks.
              </div>
            </div>
          </div>

        </div>

        {/* 3 Core Value Pillars (Why Choose Us) */}
        <div>
          <div className="text-center mb-10">
            <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
              Why Enterprise Leaders Choose SupraControl
            </h3>
            <p className="text-slate-500 text-sm mt-1">
              Our core operating philosophy guiding every deployment across the Middle East.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {siteData.about.pillars.map((pillar, idx) => {
              const Icon = valueIcons[idx % valueIcons.length];
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center">
                      <Icon className="w-6 h-6 text-brand-blue" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900">
                      {pillar.title}
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-brand-green">
                    <span>Verified Commitment</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
