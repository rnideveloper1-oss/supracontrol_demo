import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Specialization from '../components/Specialization';
import Solutions from '../components/Solutions';
import Industries from '../components/Industries';
import Projects from '../components/Projects';
import About from '../components/About';
import TestimonialsPartners from '../components/TestimonialsPartners';
import Contact from '../components/Contact';
import { ArrowRight, ChevronRight, Award, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function HomePage() {
  return (
    <div>
      {/* 1. Hero Section (Exact Replica of Orion International Screenshot) */}
      <Hero />

      {/* 2. Our Specialization (Exact Replica of 3 Cards: Smart City, Smart Buildings, Security) */}
      <Specialization />

      {/* 3. Solutions Section with direct navigation */}
      <div className="relative">
        <Solutions />
        <div className="bg-slate-50 pb-16 text-center">
          <Link
            to="/solutions"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-white bg-brand-blue hover:bg-brand-blue-dark shadow-md hover:shadow-lg transition-all"
          >
            <span>Explore All 6 Detailed Solutions</span>
            <ChevronRight className="w-4 h-4 text-brand-green" />
          </Link>
        </div>
      </div>

      {/* 4. Industries Section with direct navigation */}
      <div className="relative">
        <Industries />
        <div className="bg-white pb-16 text-center">
          <Link
            to="/industries"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-slate-800 bg-slate-100 hover:bg-brand-blue hover:text-white transition-all shadow-sm"
          >
            <span>View All Industry Case Studies</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* 5. Featured Reference Projects */}
      <div className="relative">
        <Projects />
        <div className="bg-white pb-16 text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-white bg-brand-blue hover:bg-brand-blue-dark shadow-md hover:shadow-lg transition-all"
          >
            <span>Browse Full 100+ Project Portfolio</span>
            <ChevronRight className="w-4 h-4 text-brand-green" />
          </Link>
        </div>
      </div>

      {/* 6. About Us Strip (Exact Orion About Image & Content) */}
      <div className="relative">
        <About />
        <div className="bg-slate-50 pb-16 text-center">
          <Link
            to="/about"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-slate-800 bg-white border border-slate-200 hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all shadow-sm"
          >
            <span>Read More About Our 14-Year Journey</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* 7. Testimonials & Technology Alliances */}
      <TestimonialsPartners />

      {/* 8. Contact Consultation Section */}
      <Contact />
    </div>
  );
}
