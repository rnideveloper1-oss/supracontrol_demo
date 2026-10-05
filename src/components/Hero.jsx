import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[88vh] lg:min-h-[92vh] flex items-center justify-center text-white overflow-hidden bg-brand-dark">
      {/* 1. Background Building Image: Modern High-Rise Smart Glass Skyscraper */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 transform scale-105 transition-transform duration-1000"
        style={{
          backgroundImage: "url('/images/smart_building_hero.jpg')",
        }}
      />

      {/* 2. Looping Video Background Layer */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-70 mix-blend-screen pointer-events-none"
      >
        <source src="/videos/smart_city_bg.webm" type="video/webm" />
      </video>

      {/* 3. Deep Navy/Dark Gradient Overlay for Optimal Readability & Contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/90 via-slate-950/80 to-brand-dark/95 z-10" />

      {/* 4. Hero Content Container: Clean Centered Layout */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          
          {/* Top Subtitle with Lines (Exact match to reference site) */}
          <div className="flex items-center justify-center gap-3 text-xs sm:text-sm font-bold tracking-[0.25em] text-slate-300 uppercase">
            <span className="w-8 sm:w-12 h-px bg-slate-400" />
            <span>LEADING BMS PROVIDER</span>
            <span className="w-8 sm:w-12 h-px bg-slate-400" />
          </div>

          {/* Main Headline with brand-green accent */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
            BMS Middle East |{' '}
            <span className="text-brand-green">
              Building Management System
            </span>{' '}
            & Smart Building Solutions
          </h1>

          {/* Paragraph (Exact match to reference site content, Middle East scope) */}
          <p className="text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed max-w-3xl mx-auto font-normal">
            SupraControl International is Middle East's trusted BMS company since 2011, delivering expert building management system installation, HVAC automation, IoT smart building solutions, and energy management systems across Doha, Lusail, Al Wakrah, and Middle East. ICV certified and Ashghal approved — serving commercial buildings, hotels, hospitals, and industrial facilities.
          </p>

          {/* Center Button: EXPLORE SOLUTIONS (Redirects to /solutions) */}
          <div className="pt-4">
            <Link
              to="/solutions"
              className="inline-flex items-center justify-center px-10 py-3.5 rounded-full text-sm sm:text-base font-extrabold uppercase tracking-wider text-slate-900 bg-white hover:bg-brand-green hover:text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              EXPLORE SOLUTIONS
            </Link>
          </div>

        </div>
      </div>

      {/* Bottom Subtle Gradient Transition to page content */}
      <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-white to-transparent z-20" />
    </section>
  );
}
