import React from 'react';
import { Cpu, Wind, Gauge, Hotel, Wrench, Network, ArrowRight } from 'lucide-react';

export default function Solutions({ onSelectSolution }) {
  const solutions = [
    {
      icon: Cpu,
      title: "Building Management Systems (BMS)",
      desc: "Turnkey DDC engineering, field installation, and commissioning using open BACnet, LonWorks, and Modbus protocols.",
      tag: "Core Engineering"
    },
    {
      icon: Wind,
      title: "HVAC & Chiller Plant Automation",
      desc: "High-COP variable speed pumping, chiller sequencing algorithms, and economizer controls reducing cooling power bills.",
      tag: "Energy Optimization"
    },
    {
      icon: Gauge,
      title: "Smart Metering & BTU Billing",
      desc: "Revenue-grade ultrasonic BTU and water meters with automated tenant sub-billing software and energy dashboards.",
      tag: "IoT & Telemetry"
    },
    {
      icon: Hotel,
      title: "Smart Hotel Guest Room Automation (GRMS)",
      desc: "Occupancy-based welcome scenes, climate control, and digital door locks providing 5-star guest luxury and conservation.",
      tag: "Hospitality"
    },
    {
      icon: Network,
      title: "Tridium Niagara 4 Integration",
      desc: "Unifying legacy controllers with modern IP web frameworks via Niagara 4, MQTT gateways, and REST cloud APIs.",
      tag: "System Integration"
    },
    {
      icon: Wrench,
      title: "Annual Maintenance Contracts (AMC)",
      desc: "24/7 emergency response SLA, preventative calibration, firmware maintenance, and remote facility health monitoring.",
      tag: "Lifecycle Support"
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold uppercase tracking-wider mb-3">
            <span>Enterprise Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Comprehensive BMS & Automation Solutions
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Delivering high-performance building infrastructure across commercial, hospitality, healthcare, and industrial sectors throughout the Middle East.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-brand-blue/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex justify-between items-start mb-5">
                    <div className="p-3 rounded-xl bg-brand-blue/10 text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-slate-100 text-slate-600">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand-blue transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => onSelectSolution && onSelectSolution(item.title)}
                    className="inline-flex items-center gap-2 text-sm font-bold text-brand-blue hover:text-brand-blue-dark transition-colors"
                  >
                    <span>Inquire About This Solution</span>
                    <ArrowRight className="w-4 h-4 text-brand-green" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
