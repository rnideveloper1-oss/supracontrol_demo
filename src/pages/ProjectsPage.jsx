import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Building2, Hotel, Hospital, Server, CheckCircle2, ChevronRight, MapPin, Layers } from 'lucide-react';

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Doha Commercial Center & Trade Tower',
      category: 'commercial',
      location: 'Doha, Middle East',
      image: '/images/commercial_tower.jpg',
      points: '12,500 I/O Points',
      protocol: 'BACnet IP / Tridium Niagara 4',
      desc: 'Complete BMS engineering including centralized chiller plant automation, 48 AHU variable airflow units, and automated sub-metering for 42 floors of premium commercial offices.',
      results: '28% reduction in overall HVAC consumption and automated tenant energy billing.'
    },
    {
      id: 2,
      title: 'Lusail Marina Hotel & Luxury Resort',
      category: 'hospitality',
      location: 'Lusail, Middle East',
      image: '/images/hospitality_hotel.jpg',
      points: '8,200 I/O Points',
      protocol: 'GRMS / Modbus / BACnet',
      desc: '320 guest rooms outfitted with intelligent touch glass panels, motorized drapery integration, occupancy-based thermostat set-back, and full Fidelio PMS integration.',
      results: '34% guestroom energy reduction during vacant cycles and 5-star guest reviews.'
    },
    {
      id: 3,
      title: 'Hamad Medical Specialized Care Complex',
      category: 'healthcare',
      location: 'Middle East',
      image: '/images/healthcare_hospital.jpg',
      points: '15,000 I/O Points',
      protocol: 'Critical BACnet MSTP / Niagara',
      desc: 'Ultra-precision negative/positive air pressure cascade regulation for 24 surgical suites, laboratory cleanrooms, pharmacy cold chain monitoring, and 100% redundant DDC controllers.',
      results: '100% compliance with strict hospital infection control standards and zero downtime.'
    },
    {
      id: 4,
      title: 'Regional Telecommunications Tier-III Data Center',
      category: 'infrastructure',
      location: 'Middle East',
      image: '/images/datacenter.jpg',
      points: '9,400 I/O Points',
      protocol: 'SNMP / Modbus RTU / Niagara 4',
      desc: 'Mission-critical environmental monitoring, CRAH unit modulation, ultrasonic BTU chilled water monitoring, and automated dual-bus ATS electrical switchgear supervision.',
      results: 'Delivered an audited PUE of 1.28 with 24/7 continuous SCADA telemetry.'
    },
    {
      id: 5,
      title: 'Al Wakrah Logistics & Cold Chain Hub',
      category: 'infrastructure',
      location: 'Al Wakrah, Middle East',
      image: '/images/hvac_chiller.jpg',
      points: '6,800 I/O Points',
      protocol: 'BACnet IP / IoT LoRaWAN',
      desc: 'Temperature and humidity telemetry across 45,000 sqm of refrigerated warehousing, multi-stage ammonia chiller management, and automated regulatory compliance logging.',
      results: 'Real-time thermal mapping and 24/7 automated SMS/email deviation alerts.'
    },
    {
      id: 6,
      title: 'West Bay Diplomatic Office Tower',
      category: 'commercial',
      location: 'West Bay, Middle East',
      image: '/images/orion_hero_bg.jpeg',
      points: '10,100 I/O Points',
      protocol: 'Honeywell Alerton BACnet',
      desc: 'Full lifecycle BMS modernization and retrofit replacing obsolete proprietary controllers with open BACnet DDC panels without disrupting daily tenant operations.',
      results: 'Modernized 38 floors with zero tenant downtime and modern 3D UI dashboard.'
    }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'commercial', label: 'Commercial Towers' },
    { key: 'hospitality', label: 'Luxury Hospitality' },
    { key: 'healthcare', label: 'Healthcare & Hospitals' },
    { key: 'infrastructure', label: 'Mission-Critical & Industrial' }
  ];

  return (
    <div className="bg-white">
      {/* 1. Header Banner */}
      <section className="relative py-20 bg-brand-dark text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: "url('/images/commercial_tower.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/95 to-brand-blue/80" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold tracking-widest uppercase text-brand-green">
              <span>PROVEN PORTFOLIO</span>
              <span>•</span>
              <span>100+ PROJECTS DELIVERED</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              BMS Projects in Middle East
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-light">
              Explore completed BMS projects in Middle East by SupraControl International for hotels, towers, healthcare facilities, and smart buildings across Doha, Lusail, Dubai, and Riyadh.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Interactive Filter Tabs & Projects Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14">
            {filters.map(f => (
              <button
                key={f.key}
                type="button"
                onClick={() => setActiveFilter(f.key)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
                  activeFilter === f.key
                    ? 'bg-brand-blue text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(proj => (
              <div
                key={proj.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-56 overflow-hidden bg-slate-100">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-brand-dark/85 backdrop-blur-sm text-brand-green-light px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-brand-green" />
                      <span>{proj.location}</span>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-wider">
                      <span>{proj.points}</span>
                      <span className="text-brand-blue">{proj.protocol}</span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-blue transition-colors">
                      {proj.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {proj.desc}
                    </p>

                    <div className="p-3.5 rounded-xl bg-brand-green/10 border border-brand-green/20 text-xs text-brand-dark space-y-1">
                      <span className="font-bold text-brand-green-dark block">Delivered Impact:</span>
                      <p className="text-slate-700">{proj.results}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    to="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold text-slate-700 bg-slate-100 hover:bg-brand-blue hover:text-white transition-all duration-200"
                  >
                    <span>Request Case Study Details</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Call to Action Banner */}
      <section className="py-16 bg-white border-t border-slate-200 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Have a project tender or MEP retrofit requirement in the Middle East?
          </h2>
          <p className="text-slate-600 text-base max-w-2xl mx-auto">
            Our certified engineering team is ready to assist with point schedules, BOQ reviews, architecture drawings, and value engineering proposals.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-base font-bold text-white bg-brand-blue hover:bg-brand-blue-dark transition-all shadow-md"
            >
              <span>Connect with an Engineer</span>
              <ChevronRight className="w-5 h-5 text-brand-green-light" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
