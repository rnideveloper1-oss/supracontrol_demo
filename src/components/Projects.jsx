import React, { useState } from 'react';
import { CheckCircle2, Building, ArrowUpRight } from 'lucide-react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const projectList = [
    {
      title: "Lusail Marina Commercial Tower",
      sector: "Commercial Real Estate",
      location: "Middle East",
      desc: "Complete BMS integration featuring 4,200 I/O points, chiller plant optimization, and smart BTU tenant billing.",
      metrics: "32% HVAC energy savings",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "The Pearl Luxury Hotel & Suites",
      sector: "Hospitality",
      location: "Middle East",
      desc: "Turnkey GRMS (Guest Room Management System) across 320 rooms with PMS interface and centralized energy monitoring.",
      metrics: "100% automated occupancy setpoints",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Specialized Medical & Surgical Hub",
      sector: "Healthcare",
      location: "Middle East",
      desc: "Precision cleanroom pressure cascading, medical gas telemetry, and critical alarm routing with zero compliance deviation.",
      metrics: "Zero compliance deviation in 36 months",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Industrial Logistics & Cold Chain Complex",
      sector: "Industrial",
      location: "Middle East",
      desc: "Automated cold storage thermal monitoring, multi-zone refrigerant leak detection, and central physical access controls.",
      metrics: "24/7 cloud compliance reporting",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const categories = ['All', 'Commercial Real Estate', 'Hospitality', 'Healthcare', 'Industrial'];

  const filtered = activeFilter === 'All'
    ? projectList
    : projectList.filter(p => p.sector === activeFilter);

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold uppercase tracking-wider mb-3">
            <span>Portfolio & References</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Featured Reference Projects
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Landmark infrastructure installations executed to the highest international and Middle East regional standards.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  activeFilter === cat
                    ? 'bg-brand-blue text-white shadow-md'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-brand-blue/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((proj, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden flex flex-col justify-between group hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-brand-green text-xs font-bold">
                    {proj.sector}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full bg-brand-blue/90 backdrop-blur-md text-white text-xs font-bold">
                    {proj.location}
                  </span>
                </div>
              </div>

              <div className="p-7 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand-blue transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {proj.desc}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-brand-green/10 border border-brand-green/20 flex items-center gap-2 text-xs font-bold text-slate-900">
                  <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
                  <span>Verified Result: {proj.metrics}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
