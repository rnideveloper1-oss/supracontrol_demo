import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Wind, Gauge, Hotel, Layers, ShieldCheck, CheckCircle, ArrowRight, ChevronRight } from 'lucide-react';
import ICVBadge from '../components/ICVBadge';
import AshghalBadge from '../components/AshghalBadge';

export default function SolutionsPage() {
  const solutions = [
    {
      id: 'bms',
      title: 'Building Management Systems (BMS)',
      icon: Cpu,
      img: '/images/commercial_tower.jpg',
      tag: 'Turnkey DDC & Automation',
      desc: 'Centralized supervision and automated control of mechanical, electrical, and plumbing (MEP) systems across commercial towers, educational complexes, and government headquarters in the Middle East.',
      features: [
        'Open native BACnet IP/MSTP and LonWorks compliance',
        'Custom 3D graphical supervisory user interface',
        'Automated scheduling, alarms, and trend logging',
        'Complete integration with fire alarm, elevators, and generators'
      ]
    },
    {
      id: 'hvac',
      title: 'HVAC & Chiller Plant Automation',
      icon: Wind,
      img: '/images/hvac_chiller.jpg',
      tag: 'Efficiency Optimization',
      desc: 'Smart chiller sequencing, variable frequency drive (VFD) speed modulation, primary-secondary pumping loops, and cooling tower optimization designed specifically for harsh Middle East climate conditions.',
      features: [
        'Delta-T optimization and plant staging algorithms',
        'Variable speed pumping and airflow modulation',
        'VAV box pressure-independent air volume control',
        'Proven 20% to 35% reduction in chiller plant energy costs'
      ]
    },
    {
      id: 'metering',
      title: 'Energy Management & Smart Metering',
      icon: Gauge,
      img: '/images/datacenter.jpg',
      tag: 'Sub-Metering & Billing',
      desc: 'High-precision ultrasonic BTU meters, dual-channel electricity sub-meters, and water telemetry delivering real-time energy profiling, tenant tenant billing, and ESG reporting across the Middle East.',
      features: [
        'M-Bus, Modbus RTU, and wireless LoRaWAN telemetry',
        'Automated tenant energy billing reports & tariff profiles',
        'Power quality analysis, harmonics, and peak demand alerts',
        'Real-time PUE calculation for enterprise data centers'
      ]
    },
    {
      id: 'grms',
      title: 'Guest Room Management Systems (GRMS)',
      icon: Hotel,
      img: '/images/hospitality_hotel.jpg',
      tag: 'Luxury Hospitality',
      desc: 'Architectural room automation for 5-star hotels and luxury hospitality suites across Doha, Dubai, and Riyadh, integrating intelligent lighting, motorized curtains, climate control, and hotel PMS software.',
      features: [
        'Smart glass touch keypads and custom designer switches',
        'Occupancy detection via PIR & door contact sensors',
        'Seamless integration with Opera, Fidelio, and Protel PMS',
        'Preset welcome, relax, night, and eco-conservation scenes'
      ]
    },
    {
      id: 'niagara',
      title: 'Tridium Niagara 4 Framework & IoT Integration',
      icon: Layers,
      img: '/images/about_strip.jpg',
      tag: 'Open Protocol Architecture',
      desc: 'Certified Tridium Niagara 4 engineering, integrating disparate legacy automation systems, proprietary sub-controllers, and cutting-edge IoT sensors into a unified, cyber-secure HTML5 dashboard.',
      features: [
        'Cross-vendor protocol translation (BACnet, Modbus, MQTT, OPC)',
        'Zero vendor lock-in with fully open workbench engineering',
        'Edge-to-cloud telemetry and automated data push',
        'Role-based multi-tenant user permissions and cybersecurity'
      ]
    },
    {
      id: 'amc',
      title: 'Annual Maintenance Contracts (AMC) & Retrofitting',
      icon: ShieldCheck,
      img: '/images/orion_hero_bg.jpeg',
      tag: '24/7 Middle East Support',
      desc: 'Comprehensive lifecycle maintenance, preventive sensor calibration, emergency callout response, and brownfield BMS retrofitting for facilities across the Middle East.',
      features: [
        'Guaranteed SLA response times with certified on-site engineers',
        'Periodic sensor calibration and control loop tuning',
        'Live system backups and cyber-resilience patching',
        'Seamless migration of obsolete legacy BMS to modern Niagara 4'
      ]
    }
  ];

  return (
    <div className="bg-white">
      {/* 1. Header Banner */}
      <section className="relative py-20 bg-brand-dark text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: "url('/images/orion_hero_bg.jpeg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/95 to-brand-blue/80" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold tracking-widest uppercase text-brand-green">
              <span>SOLUTIONS & CAPABILITIES</span>
              <span>•</span>
              <span>ICV CERTIFIED</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              Building Automation System Middle East
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-light">
              SupraControl International — Middle East's ICV-certified building automation system contractor. BMS, HVAC control, energy management & smart metering across the Middle East. Over 100 projects delivered.
            </p>
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-slate-900 bg-white hover:bg-brand-green hover:text-white transition-all shadow-md"
              >
                <span>Get a Free Consultation</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Solutions Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              End-to-End Building Intelligence
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
              We design, supply, engineer, and commission open-standard automation systems that maximize operational efficiency and asset value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((sol) => {
              const Icon = sol.icon;
              return (
                <div
                  key={sol.id}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-brand-green/50 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Card Image */}
                    <div className="relative h-48 overflow-hidden bg-slate-100">
                      <img
                        src={sol.img}
                        alt={sol.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 bg-brand-dark/85 backdrop-blur-sm text-brand-green-light px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                        {sol.tag}
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-4">
                        <Icon className="w-5 h-5 text-brand-blue" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">
                        {sol.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed mb-6">
                        {sol.desc}
                      </p>

                      <div className="space-y-2 border-t border-slate-100 pt-4">
                        {sol.features.map((feat, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                            <CheckCircle className="w-3.5 h-3.5 text-brand-green shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <Link
                      to="/contact"
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold text-brand-blue bg-blue-50 hover:bg-brand-blue hover:text-white transition-all duration-200"
                    >
                      <span>Request Proposal</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Credentials & Alliances Banner */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-brand-dark to-brand-blue-navy rounded-2xl p-8 sm:p-12 text-white flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl text-center lg:text-left">
              <div className="text-brand-green font-bold text-xs uppercase tracking-wider">
                CERTIFIED VENDOR COMPLIANCE
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                ICV Certified & Ashghal Approved
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Our solutions are vetted and approved for government, healthcare, infrastructure, and commercial mega-projects throughout the Middle East. Authorized integrators for Honeywell (Alerton/Trend), Tridium Niagara, and Bacsys.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6">
              <ICVBadge className="w-36" />
              <AshghalBadge className="w-24 h-24" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
