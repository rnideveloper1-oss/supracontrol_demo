import React, { useState } from 'react';
import { siteData } from '../data/siteData';
import SpecializationModal from './SpecializationModal';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function SpecializationSection({ onSelectContact }) {
  const [selectedSpec, setSelectedSpec] = useState(null);
  const [showAll, setShowAll] = useState(false);

  // SVG Line Art Icons mirroring the user's reference screenshot and branding
  const renderIcon = (type) => {
    if (type === 'city') {
      return (
        <svg viewBox="0 0 64 64" width="56" height="56" fill="none" stroke="#78c043" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="22" y="18" width="20" height="40" rx="1" />
          <line x1="28" y1="26" x2="36" y2="26" />
          <line x1="28" y1="34" x2="36" y2="34" />
          <line x1="28" y1="42" x2="36" y2="42" />
          <line x1="28" y1="50" x2="36" y2="50" />
          <rect x="10" y="32" width="12" height="26" rx="1" />
          <line x1="14" y1="38" x2="18" y2="38" />
          <line x1="14" y1="46" x2="18" y2="46" />
          <rect x="42" y="28" width="12" height="30" rx="1" />
          <line x1="46" y1="36" x2="50" y2="36" />
          <line x1="46" y1="44" x2="50" y2="44" />
          <line x1="32" y1="12" x2="32" y2="18" />
          <circle cx="32" cy="11" r="1.5" fill="#78c043" />
          <path d="M 26 9 A 8 8 0 0 1 38 9" />
          <path d="M 23 5 A 13 13 0 0 1 41 5" />
        </svg>
      );
    }
    if (type === 'building') {
      return (
        <svg viewBox="0 0 64 64" width="56" height="56" fill="none" stroke="#78c043" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="12" y="24" width="22" height="34" rx="1" />
          <line x1="18" y1="32" x2="28" y2="32" />
          <line x1="18" y1="40" x2="28" y2="40" />
          <line x1="18" y1="48" x2="28" y2="48" />
          <path d="M 34 20 L 52 14 L 52 58 L 34 58 Z" />
          <line x1="40" y1="24" x2="46" y2="22" />
          <line x1="40" y1="32" x2="46" y2="30" />
          <line x1="40" y1="40" x2="46" y2="38" />
          <line x1="40" y1="48" x2="46" y2="46" />
          <path d="M 18 16 A 6 6 0 0 1 28 16" />
          <path d="M 15 12 A 11 11 0 0 1 31 12" />
          <circle cx="23" cy="19" r="1.2" fill="#78c043" />
        </svg>
      );
    }
    if (type === 'shield') {
      return (
        <svg viewBox="0 0 64 64" width="56" height="56" fill="none" stroke="#78c043" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="12" y="14" width="40" height="28" rx="2" />
          <line x1="26" y1="42" x2="22" y2="52" />
          <line x1="38" y1="42" x2="42" y2="52" />
          <line x1="18" y1="52" x2="46" y2="52" />
          <rect x="22" y="20" width="20" height="16" rx="1" />
          <line x1="26" y1="24" x2="38" y2="24" />
          <line x1="26" y1="28" x2="38" y2="28" />
          <line x1="26" y1="32" x2="34" y2="32" />
        </svg>
      );
    }
    if (type === 'ifm') {
      return (
        <svg viewBox="0 0 64 64" width="56" height="56" fill="none" stroke="#78c043" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="32" cy="32" r="18" />
          <path d="M 32 18 L 32 32 L 42 36" />
          <circle cx="32" cy="10" r="3" />
          <circle cx="54" cy="32" r="3" />
          <circle cx="32" cy="54" r="3" />
          <circle cx="10" cy="32" r="3" />
        </svg>
      );
    }
    if (type === 'dcim') {
      return (
        <svg viewBox="0 0 64 64" width="56" height="56" fill="none" stroke="#78c043" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="14" y="12" width="36" height="12" rx="2" />
          <rect x="14" y="26" width="36" height="12" rx="2" />
          <rect x="14" y="40" width="36" height="12" rx="2" />
          <circle cx="20" cy="18" r="1.5" fill="#78c043" />
          <circle cx="20" cy="32" r="1.5" fill="#78c043" />
          <circle cx="20" cy="46" r="1.5" fill="#78c043" />
          <line x1="28" y1="18" x2="44" y2="18" />
          <line x1="28" y1="32" x2="44" y2="32" />
          <line x1="28" y1="46" x2="44" y2="46" />
        </svg>
      );
    }
    if (type === 'home') {
      return (
        <svg viewBox="0 0 64 64" width="56" height="56" fill="none" stroke="#78c043" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M 14 30 L 32 14 L 50 30" />
          <rect x="18" y="28" width="28" height="24" rx="1" />
          <rect x="28" y="38" width="8" height="14" />
          <path d="M 28 22 A 6 6 0 0 1 36 22" />
        </svg>
      );
    }
    if (type === 'meter') {
      return (
        <svg viewBox="0 0 64 64" width="56" height="56" fill="none" stroke="#78c043" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="32" cy="32" r="20" />
          <path d="M 32 32 L 42 22" />
          <circle cx="32" cy="32" r="3" fill="#78c043" />
          <line x1="32" y1="16" x2="32" y2="20" />
          <line x1="44" y1="20" x2="41" y2="23" />
          <line x1="20" y1="20" x2="23" y2="23" />
        </svg>
      );
    }
    if (type === 'lighting') {
      return (
        <svg viewBox="0 0 64 64" width="56" height="56" fill="none" stroke="#78c043" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M 24 28 C 24 20 40 20 40 28 C 40 34 35 36 35 42 L 29 42 C 29 36 24 34 24 28 Z" />
          <line x1="28" y1="46" x2="36" y2="46" />
          <line x1="30" y1="50" x2="34" y2="50" />
          <line x1="32" y1="12" x2="32" y2="16" />
          <line x1="44" y1="16" x2="41" y2="20" />
          <line x1="20" y1="16" x2="23" y2="20" />
        </svg>
      );
    }
    if (type === 'energy') {
      return (
        <svg viewBox="0 0 64 64" width="56" height="56" fill="none" stroke="#78c043" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M 36 12 L 22 34 L 32 34 L 28 52 L 44 28 L 34 28 Z" />
        </svg>
      );
    }
    // workplace
    return (
      <svg viewBox="0 0 64 64" width="56" height="56" fill="none" stroke="#78c043" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="16" y="16" width="32" height="22" rx="2" />
        <line x1="12" y1="44" x2="52" y2="44" />
        <circle cx="32" cy="27" r="4" />
      </svg>
    );
  };

  const displayedSpecs = showAll ? siteData.specializations : siteData.specializations.slice(0, 3);

  return (
    <section id="specialization" className="py-5" style={{ backgroundColor: '#ffffff' }}>
      <div className="container py-4">
        {/* Section Header - Exact wording and corporate styling */}
        <div className="text-center mb-5">
          <div className="d-inline-flex align-items-center gap-2 mb-2">
            <span className="badge px-3 py-1 rounded-1 text-uppercase fw-bold" style={{ backgroundColor: 'rgba(0, 43, 73, 0.08)', color: '#002b49', letterSpacing: '0.08em' }}>
              Business Areas
            </span>
          </div>
          <h2 className="sc-section-title mb-3" style={{ color: '#002b49', fontWeight: 800 }}>
            Our Specialization
          </h2>
          <p className="sc-section-subtitle px-3" style={{ color: '#64748b', fontSize: '1.05rem', lineHeight: '1.65' }}>
            We are committed to our goal of supporting customers with reliable and cost-effective solutions/ services which provides premium experience to all end users, while ensuring that their Buildings remain Secure, Comfortable, Efficient & Sustainable at the same time.
          </p>
        </div>

        {/* 3 Featured Cards (Matching User Screenshot 2) */}
        <div className="row g-4 justify-content-center">
          {displayedSpecs.map((spec) => (
            <div key={spec.id} className="col-12 col-md-6 col-lg-4">
              <div className="sc-spec-card">
                <div className="sc-spec-icon-box">
                  {renderIcon(spec.iconType)}
                </div>
                <h3 className="sc-spec-title">{spec.title}</h3>
                <p className="sc-spec-desc">{spec.shortDesc}</p>
                <div>
                  <button
                    type="button"
                    className="btn btn-sc-green"
                    onClick={() => setSelectedSpec(spec)}
                  >
                    View More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Expand / Collapse Toggle for all 10 specializations */}
        <div className="text-center mt-5">
          <button
            type="button"
            className="btn btn-outline-dark rounded-pill px-4 py-2 fw-bold d-inline-flex align-items-center gap-2"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? (
              <>Show Featured (3 Core Cards) <ChevronUp size={18} /></>
            ) : (
              <>View All 10 Specializations (DCIM, Smart Homes, IFM & More) <ChevronDown size={18} /></>
            )}
          </button>
        </div>
      </div>

      {/* Deep-Dive Modal */}
      {selectedSpec && (
        <SpecializationModal
          item={selectedSpec}
          onClose={() => setSelectedSpec(null)}
          onSelectContact={onSelectContact}
        />
      )}
    </section>
  );
}
