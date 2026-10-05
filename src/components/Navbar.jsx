import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import SupraLogo from './SupraLogo';
import { Menu, X, ChevronRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Solutions', path: '/solutions' },
    { label: 'Projects', path: '/projects' },
    { label: 'Industries', path: '/industries' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Main Navigation Bar */}
      <nav className={`bg-white transition-all duration-300 ${
        isScrolled ? 'shadow-md py-2.5' : 'shadow-sm py-3.5 border-b border-slate-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center min-h-[58px]">
          
          {/* Brand Logo (SupraControl with exact colors) */}
          <Link to="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
            <SupraLogo size="default" />
          </Link>

          {/* Navigation Links with Page Redirection & Active State */}
          <div className="hidden md:flex items-center space-x-7 lg:space-x-9">
            {navLinks.map((link, idx) => (
              <NavLink
                key={idx}
                to={link.path}
                className={({ isActive }) =>
                  `text-base font-bold transition-all relative py-1 ${
                    isActive
                      ? 'text-brand-blue font-extrabold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-brand-green'
                      : 'text-slate-700 hover:text-brand-blue'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Right CTA Button: Contact Us > */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-base font-bold text-white bg-brand-blue hover:bg-brand-blue-dark shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <span>Contact Us</span>
              <ChevronRight className="w-4 h-4 text-brand-green" />
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-brand-blue hover:bg-slate-100"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Drawer Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 px-4 pt-4 pb-6 shadow-xl">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link, idx) => (
                <NavLink
                  key={idx}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-lg text-base font-bold transition-colors ${
                      isActive
                        ? 'text-brand-blue bg-blue-50 font-extrabold border-l-4 border-brand-green'
                        : 'text-slate-700 hover:text-brand-blue hover:bg-slate-50'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="pt-2">
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full inline-flex justify-center items-center gap-2 px-6 py-3 rounded-full text-base font-bold text-white bg-brand-blue hover:bg-brand-blue-dark shadow transition-all"
                >
                  <span>Contact Us</span>
                  <ChevronRight className="w-4 h-4 text-brand-green" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
