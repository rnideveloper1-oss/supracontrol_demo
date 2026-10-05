import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, ChevronDown, ChevronUp, ShieldCheck } from 'lucide-react';
import ICVBadge from '../components/ICVBadge';
import AshghalBadge from '../components/AshghalBadge';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    facilityType: 'Commercial Tower',
    service: 'BMS Consultation & Proposal',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const faqs = [
    {
      q: "Do you provide BMS consultation in Middle East?",
      a: "Yes. SupraControl International provides BMS consultation, site surveys, engineering audits, and smart building solutions across Doha, Lusail, Dubai, Riyadh, and the entire Middle East."
    },
    {
      q: "What types of buildings and facilities do you service?",
      a: "We support commercial high-rise towers, 5-star hotels & luxury resorts, specialized healthcare hospitals, mission-critical Tier-III data centers, educational universities, and industrial cold-chain facilities."
    },
    {
      q: "Are your engineers certified and which protocols do you support?",
      a: "Our in-house engineers are Tridium Niagara 4 Certified and authorized integrators for Honeywell (Alerton & Trend), Bacsys IoT, and BACnet International standards. We support native BACnet IP/MSTP, Modbus RTU/TCP, LonWorks, and MQTT."
    },
    {
      q: "Are your systems ICV certified and Ashghal approved?",
      a: "Yes. SupraControl International is officially ICV (In-Country Value) certified and Ashghal approved for government, public works, infrastructure, and private commercial contracts throughout the Middle East."
    },
    {
      q: "Do you offer Annual Maintenance Contracts (AMC) for existing BMS?",
      a: "Yes. We deliver turnkey AMC contracts with guaranteed emergency SLA response times, scheduled quarterly sensor calibrations, preventive chiller sequence tuning, and remote software backups."
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
              <span>GET IN TOUCH</span>
              <span>•</span>
              <span>MIDDLE EAST REGIONAL HQ</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              Contact SupraControl International
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-light">
              Contact SupraControl International for BMS, HVAC automation and smart building solutions across Doha, Lusail, and the Middle East. ICV certified and Ashghal approved.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Main Section: Orion Reference Consultation Content + Form */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Exact Orion Headline & Paragraph */}
          <div className="max-w-3xl mb-14 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              BMS Consultation & Smart Building Services in Middle East
            </h2>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              Our team supports commercial buildings, hotels, hospitals and industrial facilities with advanced building management systems in Middle East. We help businesses improve energy efficiency, HVAC monitoring and smart automation through scalable BMS solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-xl">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-brand-green/20 text-brand-green-dark rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10 text-brand-green" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Thank You for Your Consultation Request
                  </h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto">
                    Your inquiry has been routed to our Middle East BMS engineering department. A certified solutions engineer will review your requirements and reach out within 24 business hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        facilityType: 'Commercial Tower',
                        service: 'BMS Consultation & Proposal',
                        message: ''
                      });
                    }}
                    className="inline-flex items-center px-6 py-2.5 rounded-lg text-sm font-bold text-brand-blue bg-blue-50 hover:bg-blue-100"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="border-b border-slate-100 pb-4">
                    <h3 className="text-xl font-bold text-slate-900">
                      Request Engineering Consultation & Site Survey
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-sm mt-1">
                      Fill out the form below and an engineer will connect with you.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Tariq Al-Mansoor"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue text-sm text-slate-800"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="tariq@enterprise.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue text-sm text-slate-800"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Contact Number / Mobile *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+974 5500 0000"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue text-sm text-slate-800"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Facility / Building Type
                      </label>
                      <select
                        value={formData.facilityType}
                        onChange={(e) => setFormData({ ...formData, facilityType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue text-sm text-slate-800 bg-white"
                      >
                        <option value="Commercial Tower">Commercial Tower / High-Rise</option>
                        <option value="Luxury Hotel / Resort">Luxury Hotel / Resort</option>
                        <option value="Hospital / Healthcare">Hospital / Healthcare Facility</option>
                        <option value="Data Center / IT Facility">Data Center / Mission Critical</option>
                        <option value="Industrial / Warehouse">Industrial / Logistics Warehouse</option>
                        <option value="Government / Infrastructure">Government / Public Infrastructure</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Required Solution / Service
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue text-sm text-slate-800 bg-white"
                    >
                      <option value="Turnkey BMS Installation">Turnkey BMS Installation (BACnet / LonWorks)</option>
                      <option value="HVAC Chiller Plant Automation">HVAC Chiller Plant Automation</option>
                      <option value="Energy Metering & BTU Systems">Energy Management & BTU Smart Metering</option>
                      <option value="Guest Room Management (GRMS)">Guest Room Management System (GRMS)</option>
                      <option value="Niagara 4 Integration">Tridium Niagara 4 Integration</option>
                      <option value="BMS Modernization & Retrofit">BMS Modernization & Retrofit</option>
                      <option value="Annual Maintenance Contract (AMC)">Annual Maintenance Contract (AMC)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Project Details / Scope Message
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your building size, location in Middle East, number of I/O points, or upcoming tender timelines..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue text-sm text-slate-800"
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-base font-bold text-white bg-brand-blue hover:bg-brand-blue-dark shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
                    >
                      <span>Send Consultation Request</span>
                      <Send className="w-4 h-4 text-brand-green" />
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Right Column: Contact Details & Badges */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Contact Card */}
              <div className="bg-brand-dark rounded-3xl p-8 sm:p-10 text-white shadow-xl space-y-6">
                <div className="inline-block px-3 py-1 rounded-full bg-brand-green/20 text-brand-green-light text-xs font-bold uppercase tracking-wide">
                  MIDDLE EAST REGIONAL HEADQUARTERS
                </div>

                <h3 className="text-2xl font-bold text-white">
                  SupraControl International
                </h3>

                <div className="space-y-5 text-sm text-slate-200">
                  <div className="flex items-start gap-3.5">
                    <MapPin className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-white">Office Location</div>
                      <div className="text-slate-300">Office 504, 5th Floor, Building 56, Zone 22, Street 342, Middle East</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <Phone className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-white">Direct Phone / Hotline</div>
                      <div className="text-slate-300">+974 4400 1234 / +974 5500 5678</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <Mail className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-white">Email Addresses</div>
                      <div className="text-slate-300">info@supracontrolme.com</div>
                      <div className="text-slate-300">support@supracontrolme.com</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <Clock className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-white">Working Hours</div>
                      <div className="text-slate-300">Sunday - Thursday: 8:00 AM – 5:30 PM</div>
                      <div className="text-brand-green text-xs font-semibold mt-0.5">24/7 Emergency AMC Response Active</div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-700/80">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                    Accredited Credentials
                  </div>
                  <div className="flex flex-wrap items-center gap-4">
                    <ICVBadge className="w-32" />
                    <AshghalBadge className="w-20 h-20" />
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 3. Frequently Asked Questions (Exact FAQ) */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              Common questions about our Middle East BMS engineering and consulting services.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50/50 transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 hover:bg-slate-100/60 transition-colors"
                  >
                    <span className="font-bold text-slate-900 text-base sm:text-lg">
                      {faq.q}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-brand-blue shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed bg-white border-t border-slate-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
