import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Hotel, Hospital, Server, Factory, RefreshCw, CheckCircle2, ChevronRight, ArrowRight } from 'lucide-react';
import ICVBadge from '../components/ICVBadge';
import AshghalBadge from '../components/AshghalBadge';

export default function IndustriesPage() {
  const industries = [
    {
      id: 'commercial',
      title: 'Commercial Towers & Corporate HQs',
      icon: Building2,
      img: '/images/commercial_tower.jpg',
      headline: 'Intelligent Workplace Automation & Energy Profiling',
      desc: 'High-rise office buildings and mixed-use towers require precision HVAC airflow, variable occupancy scheduling, and accurate tenant sub-metering to minimize utility overhead while ensuring tenant thermal comfort.',
      points: [
        'Variable Air Volume (VAV) pressure-independent zoning',
        'Automated tenant energy billing reports & sub-metering',
        'Smart lighting controls with daylight harvesting',
        'Integration with access control, turnstiles, and fire life safety'
      ]
    },
    {
      id: 'hospitality',
      title: 'Luxury Hospitality & Resorts',
      icon: Hotel,
      img: '/images/hospitality_hotel.jpg',
      headline: 'Uncompromising 5-Star Guest Experiences & Energy Efficiency',
      desc: 'Hotels face unique operational demands with constant guest turnover and 24/7 cooling loads. Our Guest Room Management Systems (GRMS) harmonize luxury aesthetics with intelligent energy conservation.',
      points: [
        'Seamless integration with Oracle Hospitality (Opera), Fidelio & Protel',
        'Custom glass touch keypads and master bedside control',
        'Smart occupancy-based temperature setback saving up to 35%',
        'Ballroom, dining, and spa environmental scene controls'
      ]
    },
    {
      id: 'healthcare',
      title: 'Hospitals & Healthcare Facilities',
      icon: Hospital,
      img: '/images/healthcare_hospital.jpg',
      headline: 'Critical Environmental Isolation & Patient Safety',
      desc: 'Healthcare spaces require flawless, zero-failure room differential pressure cascades, strict humidity tolerance, and continuous air exchange to prevent pathogen contamination.',
      points: [
        'Operating theater positive pressure isolation monitoring',
        'Infectious disease isolation room negative pressure controls',
        'Continuous cold chain telemetry for vaccines, blood banks, and pharmaceuticals',
        '100% redundant DDC controllers with hot standby failover'
      ]
    },
    {
      id: 'datacenters',
      title: 'Data Centers & Mission-Critical Facilities',
      icon: Server,
      img: '/images/datacenter.jpg',
      headline: 'Maximum Uptime, Redundancy & PUE Optimization',
      desc: 'Uptime is paramount. Our BMS and SCADA architecture tracks precision CRAC/CRAH units, chilled water loop thermal gradients, and electrical switchgear telemetry with millisecond alarming.',
      points: [
        'Continuous PUE (Power Usage Effectiveness) monitoring',
        'Ultrasonic BTU flow metering on chilled water primary headers',
        'Dual-bus ATS, UPS, and backup diesel generator telemetry',
        'High-density server row thermal mapping and hot/cold aisle management'
      ]
    },
    {
      id: 'retrofits',
      title: 'BMS Modernization & Retrofitting',
      icon: RefreshCw,
      img: '/images/about_strip.jpg',
      headline: 'Upgrading Legacy Infrastructure Without Tenant Disruption',
      desc: 'Older buildings operating on obsolete proprietary systems face soaring utility bills and unsupported hardware. We specialize in live migration to open-protocol Niagara 4 and BACnet frameworks.',
      points: [
        'Phase-by-phase migration keeping building systems running',
        'Zero vendor lock-in replacing proprietary controllers',
        'Immediate energy payback through modern scheduling logic',
        'Conversion of outdated graphics into modern HTML5 responsive web UI'
      ]
    }
  ];

  return (
    <div className="bg-white">
      {/* 1. Header Banner */}
      <section className="relative py-20 bg-brand-dark text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: "url('/images/hospitality_hotel.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/95 to-brand-blue/80" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold tracking-widest uppercase text-brand-green">
              <span>SPECIALIZED SECTOR EXPERTISE</span>
              <span>•</span>
              <span>MIDDLE EAST REGION</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              BMS Industries Middle East
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-light">
              Tailored building management and automation systems engineered for the specialized demands of commercial, hospitality, healthcare, mission-critical, and industrial assets in the Middle East.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Industries List */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {industries.map((ind, index) => {
            const Icon = ind.icon;
            const isEven = index % 2 === 1;

            return (
              <div
                key={ind.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 ${
                  isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Visual Image */}
                <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-lg h-80 sm:h-96 group">
                    <img
                      src={ind.img}
                      alt={ind.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-brand-dark/85 backdrop-blur-sm p-3 rounded-xl text-brand-green">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`lg:col-span-7 space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold uppercase tracking-wider">
                    <span>SECTOR FOCUS</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {ind.title}
                  </h2>

                  <h3 className="text-base sm:text-lg font-bold text-brand-blue">
                    {ind.headline}
                  </h3>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {ind.desc}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {ind.points.map((pt, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold text-white bg-brand-blue hover:bg-brand-blue-dark shadow transition-all duration-200"
                    >
                      <span>Inquire for this Sector</span>
                      <ArrowRight className="w-4 h-4 text-brand-green-light" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Standards & Accreditations Banner */}
      <section className="py-16 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="space-y-2 max-w-2xl">
            <h3 className="text-2xl font-bold text-white">
              Compliant with Middle East Municipal & International Standards
            </h3>
            <p className="text-slate-300 text-sm">
              Our engineering adheres to ASHRAE Guideline 36, ISO 50001 Energy Management, and local regional code regulations. ICV certified and Ashghal approved.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <ICVBadge className="w-36" />
            <AshghalBadge className="w-24 h-24" />
          </div>
        </div>
      </section>
    </div>
  );
}
