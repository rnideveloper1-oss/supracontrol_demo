import React, { useRef, useState } from 'react';
import { siteData } from '../data/siteData';
import { ArrowRight, Play, Pause, ChevronRight, Sparkles, Building2, ShieldCheck, Zap } from 'lucide-react';
import Hero3D from './Hero3D';

export default function HeroSection() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section id="home" className="milaha-hero-wrapper position-relative text-white">
      {/* 1. Copyright-Free High-Definition Video Background (Smart City / Modern Architecture) */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="milaha-hero-video"
      >
        <source src="/videos/smart_city_bg.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      {/* 2. Milaha Signature Corporate Navy Blue Gradient Overlay */}
      <div className="milaha-hero-overlay"></div>

      {/* 3. Hero Content Container */}
      <div className="container py-5 my-3 milaha-hero-content">
        {/* Breadcrumbs (Milaha Style) */}
        <div className="milaha-breadcrumb d-flex align-items-center gap-2">
          <a href="#home">Home</a>
          <ChevronRight size={14} className="opacity-75" />
          <span className="text-white-50">Enterprise IoT & Digital Transformation</span>
        </div>

        <div className="row g-5 align-items-center">
          {/* Left Column: Milaha Corporate Typography & CTAs */}
          <div className="col-12 col-lg-7">
            {/* Tagline Badge */}
            <div className="d-inline-flex align-items-center gap-2 px-3 py-1 mb-3 rounded-1" style={{ backgroundColor: 'rgba(120, 192, 67, 0.2)', border: '1px solid rgba(120, 192, 67, 0.4)' }}>
              <Sparkles size={14} style={{ color: '#a3e635' }} />
              <span className="small fw-bold text-white letter-spacing-1 text-uppercase" style={{ fontSize: '0.78rem', letterSpacing: '0.08em' }}>
                Supracontrol Middle East • Dtec, Dubai Silicon Oasis
              </span>
            </div>

            {/* Authoritative Main Headline (Milaha Style) */}
            <h1 className="display-4 fw-bold text-white mb-3" style={{ fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.02em' }}>
              Enabling Digital Transformation for{' '}
              <span style={{ color: '#78c043' }}>Enterprise Customers</span>
            </h1>

            {/* Corporate Subtitle */}
            <p className="lead text-white-50 mb-4" style={{ fontSize: '1.15rem', lineHeight: 1.7, maxWidth: '620px' }}>
              {siteData.company.overview.split('\n\n')[0]}
            </p>

            {/* Milaha Chevron CTA Buttons & Directional Links */}
            <div className="d-flex flex-wrap align-items-center gap-3 mb-5">
              <a href="#specialization" className="btn btn-sc-green px-4 py-3 fw-bold d-inline-flex align-items-center gap-3 text-white text-decoration-none shadow">
                <span>Explore Specializations</span>
                {/* Milaha Signature 3-Chevron Directional Arrows (>>>) */}
                <span className="milaha-chevrons">
                  <span className="milaha-chevron-arrow"></span>
                  <span className="milaha-chevron-arrow secondary"></span>
                  <span className="milaha-chevron-arrow tertiary"></span>
                </span>
              </a>

              <a href="#contact" className="btn btn-milaha-outline px-4 py-3 fw-bold text-white text-decoration-none">
                Request Consultation
              </a>
            </div>

            {/* Corporate Metric Counters Bar */}
            <div className="row g-3 pt-3 border-top border-white border-opacity-10">
              {siteData.stats.map((st, i) => (
                <div key={i} className="col-6 col-sm-3">
                  <div className="fw-bold fs-3 text-white" style={{ lineHeight: 1 }}>
                    <span style={{ color: i === 1 ? '#78c043' : '#60a5fa' }}>{st.value}</span>
                  </div>
                  <div className="small fw-semibold text-white mt-1" style={{ fontSize: '0.82rem' }}>
                    {st.label}
                  </div>
                  <div className="text-white-50 small" style={{ fontSize: '0.72rem' }}>
                    {st.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive 3D Smart City Cluster with Milaha Chevron Accents */}
          <div className="col-12 col-lg-5">
            <div className="position-relative p-2 rounded-3" style={{ background: 'rgba(0, 43, 73, 0.4)', border: '1px solid rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(8px)' }}>
              {/* 3D Smart City Canvas */}
              <div style={{ height: '420px', borderRadius: '12px', overflow: 'hidden' }}>
                <Hero3D />
              </div>

              {/* Milaha Chevron Accents on Right Corner (as in screenshot) */}
              <div className="position-absolute top-50 end-0 translate-middle-y me-3 d-none d-md-flex flex-column gap-2" style={{ pointerEvents: 'none' }}>
                <div className="milaha-chevrons" style={{ transform: 'scale(1.4)' }}>
                  <div className="milaha-chevron-arrow"></div>
                  <div className="milaha-chevron-arrow secondary"></div>
                </div>
              </div>

              {/* High-Tech Badge Overlay */}
              <div className="position-absolute bottom-0 start-0 m-3 p-2 px-3 rounded-2 bg-dark bg-opacity-75 border border-secondary d-flex align-items-center gap-2 small">
                <Building2 size={16} style={{ color: '#78c043' }} />
                <span className="text-white fw-semibold" style={{ fontSize: '0.8rem' }}>
                  Smart Buildings • Cities • Intelligent Data Centers
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Video Play/Pause Control Badge */}
      <button
        type="button"
        className="milaha-video-control"
        onClick={toggleVideo}
        title={isPlaying ? "Pause Background Video" : "Play Background Video"}
      >
        {isPlaying ? <Pause size={14} /> : <Play size={14} />}
        <span>{isPlaying ? "Live Video BG" : "Paused"}</span>
      </button>
    </section>
  );
}
