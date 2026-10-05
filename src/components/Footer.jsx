import React from 'react';
import { Link } from 'react-router-dom';
import SupraLogo from './SupraLogo';
import { siteData } from '../data/siteData';
import { Mail, Phone, MapPin, ArrowUp, ShieldCheck, Globe } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-dark text-slate-400 border-t-4 border-brand-green pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Overview Column */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/">
              <SupraLogo size="large" lightTheme={true} />
            </Link>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              Empowering Middle East commercial infrastructure with intelligent Building Management Systems (BMS), high-precision energy telemetry, and unified physical security since 2011.
            </p>
            <div className="inline-flex items-center gap-2 p-2 px-3 rounded-lg bg-white/5 border border-white/10 text-xs text-white">
              <ShieldCheck className="w-4 h-4 text-brand-green shrink-0" />
              <span>ICV Certified & Ashghal Approved • Middle East</span>
            </div>
          </div>

          {/* Quick Links Column with Real Page Redirection */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link to="/solutions" className="hover:text-white transition-colors">Solutions</Link></li>
              <li><Link to="/projects" className="hover:text-white transition-colors">Projects</Link></li>
              <li><Link to="/industries" className="hover:text-white transition-colors">Industries</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Core Services Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Core Disciplines
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/solutions" className="hover:text-brand-green transition-colors">Building Management Systems (BMS)</Link></li>
              <li><Link to="/solutions" className="hover:text-brand-green transition-colors">HVAC & Chiller Plant Automation</Link></li>
              <li><Link to="/solutions" className="hover:text-brand-green transition-colors">Smart Metering & BTU Systems</Link></li>
              <li><Link to="/solutions" className="hover:text-brand-green transition-colors">Guest Room Management (GRMS)</Link></li>
              <li><Link to="/solutions" className="hover:text-brand-green transition-colors">Tridium Niagara 4 Framework</Link></li>
              <li><Link to="/solutions" className="hover:text-brand-green transition-colors">Annual Maintenance Contracts (AMC)</Link></li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Middle East Hub
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                <span>Office 504, 5th Floor, Building 56, Zone 22, Street 342, Middle East</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-blue-light shrink-0" />
                <span>+974 4400 1234 / +974 5500 5678</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-green shrink-0" />
                <span>info@supracontrolme.com</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-brand-blue-light shrink-0" />
                <span>Serving Doha, Lusail, Dubai, Riyadh & Middle East</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-300">
          <div>
            &copy; {new Date().getFullYear()} SupraControl International. All Rights Reserved. Enabling Digital Evolution across the Middle East.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">Open BACnet | Tridium Niagara | Modbus</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-800 text-white hover:bg-brand-blue transition-colors"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
