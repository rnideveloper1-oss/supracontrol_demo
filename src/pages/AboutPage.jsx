import React from 'react';
import { Link } from 'react-router-dom';
import { Award, HeartHandshake, ShieldCheck, CheckCircle2, ChevronRight, Building, Users, Clock, Globe } from 'lucide-react';
import ICVBadge from '../components/ICVBadge';
import AshghalBadge from '../components/AshghalBadge';

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* 1. Page Header Banner */}
      <section className="relative py-20 bg-brand-dark text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: "url('/images/about_strip.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/95 to-brand-blue/80" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold tracking-widest uppercase text-brand-green">
              <span>COMPANY OVERVIEW</span>
              <span>•</span>
              <span>SINCE 2011</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              About SupraControl International
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-light">
              Middle East's trusted Building Management System (BMS) engineering partner, delivering smart building automation, IoT integration, and energy efficiency solutions.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Main "Why Choose SupraControl International?" Section (Exact Reference Content) */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Reference Site Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold uppercase tracking-wider">
                <span>OUR HISTORY & MISSION</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Why Choose <span className="text-brand-blue">SupraControl International</span>?
              </h2>

              <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
                <p>
                  Since 2011, SupraControl International has been helping organizations across the Middle East implement intelligent building management systems, smart automation technologies, and energy-efficient infrastructure solutions.
                </p>
                <p>
                  With over 100 completed projects and 50+ satisfied clients, SupraControl International has built a strong reputation for delivering reliable BMS integration, HVAC automation, smart metering, environmental monitoring, and IoT-enabled building solutions.
                </p>
                <p>
                  Our commitment to innovation, quality, and long-term client support makes SupraControl International a trusted partner for commercial, hospitality, industrial, and infrastructure projects across the Middle East.
                </p>
              </div>

              {/* Badges / Accreditations */}
              <div className="pt-6 border-t border-slate-200">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                  Official Certifications & Accreditations
                </div>
                <div className="flex flex-wrap items-center gap-6">
                  <ICVBadge className="w-36" />
                  <AshghalBadge className="w-24 h-24" />
                </div>
              </div>

            </div>

            {/* Right Column: Exact Reference Image from Orion's About Page */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white group">
                <img
                  src="/images/about_strip.jpg"
                  alt="SupraControl International BMS Architecture"
                  className="w-full h-[460px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <div className="text-brand-green font-bold text-sm uppercase tracking-wider">
                    Middle East Operations
                  </div>
                  <div className="text-xl font-bold">
                    Turnkey Engineering Excellence
                  </div>
                  <p className="text-xs text-slate-200 mt-1">
                    Delivering open BACnet, Niagara 4, and enterprise HVAC automation since 2011.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Key Metrics & Milestones */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                <Building className="w-6 h-6" />
              </div>
              <div className="text-3xl sm:text-4xl font-black text-brand-blue">100+</div>
              <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-600 mt-1">Completed Projects</div>
            </div>

            <div className="text-center p-6 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-brand-green/20 flex items-center justify-center text-brand-green-dark">
                <Users className="w-6 h-6" />
              </div>
              <div className="text-3xl sm:text-4xl font-black text-brand-green-dark">50+</div>
              <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-600 mt-1">Satisfied Clients</div>
            </div>

            <div className="text-center p-6 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                <Clock className="w-6 h-6" />
              </div>
              <div className="text-3xl sm:text-4xl font-black text-brand-blue">14+</div>
              <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-600 mt-1">Years of Experience</div>
            </div>

            <div className="text-center p-6 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-brand-green/20 flex items-center justify-center text-brand-green-dark">
                <Globe className="w-6 h-6" />
              </div>
              <div className="text-3xl sm:text-4xl font-black text-brand-green-dark">100%</div>
              <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-600 mt-1">Middle East Coverage</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Values & Principles */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Our Guiding Principles
            </h2>
            <p className="text-slate-600 text-base mt-2">
              The foundational pillars that guide our engineering design, installation, and client support across the region.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-slate-200/90 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 text-brand-blue flex items-center justify-center mb-6">
                <Award className="w-7 h-7 text-brand-blue" />
              </div>
              <div className="text-xs font-bold text-brand-blue uppercase tracking-wider mb-2">01. Quality</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Premium Experience</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We provide our customers with high quality products and support that adhere strictly to international ASHRAE, ISO, and regional Middle East engineering standards.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-slate-200/90 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-2xl bg-brand-green/20 text-brand-green flex items-center justify-center mb-6">
                <HeartHandshake className="w-7 h-7 text-brand-green-dark" />
              </div>
              <div className="text-xs font-bold text-brand-green-dark uppercase tracking-wider mb-2">02. Partnership</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Customer Centric</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We believe in providing the best solutions to our customers with a long-term vision, ensuring sustainable energy savings, seamless maintenance, and rapid 24/7 service.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-slate-200/90 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 text-brand-blue flex items-center justify-center mb-6">
                <ShieldCheck className="w-7 h-7 text-brand-blue" />
              </div>
              <div className="text-xs font-bold text-brand-blue uppercase tracking-wider mb-2">03. Integrity</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Trusted Relationships</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We are proud to have maintained great relationships with our clients since 2011, who continue to trust us for ongoing upgrades, AMC support, and expansion phases.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Call To Action */}
      <section className="py-16 bg-brand-dark text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl font-extrabold text-white">
            Ready to upgrade your building infrastructure?
          </h2>
          <p className="text-slate-300 text-base max-w-2xl mx-auto">
            Contact our engineering team today for an on-site audit, consultation, or turnkey BMS proposal across the Middle East.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-base font-bold text-slate-950 bg-white hover:bg-brand-green hover:text-white transition-all shadow-xl"
            >
              <span>Get a Free Consultation</span>
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
