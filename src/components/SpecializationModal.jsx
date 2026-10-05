import React from 'react';
import { X, CheckCircle, ArrowRight } from 'lucide-react';

export default function SpecializationModal({ item, onClose, onSelectContact }) {
  if (!item) return null;

  return (
    <div
      className="modal fade show d-block"
      tabIndex="-1"
      style={{ backgroundColor: 'rgba(10, 19, 41, 0.75)', backdropFilter: 'blur(6px)', zIndex: 1055 }}
      onClick={onClose}
    >
      <div className="modal-dialog modal-dialog-centered modal-lg" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content shadow-lg border-0 overflow-hidden" style={{ borderRadius: '20px' }}>
          {/* Header */}
          <div className="modal-header modal-header-sc text-white p-4 d-flex justify-content-between align-items-center">
            <div>
              <span className="badge bg-white text-primary fw-bold mb-2 px-3 py-1" style={{ fontSize: '0.8rem', color: '#1a56db !important' }}>
                Supracontrol Middle East
              </span>
              <h4 className="modal-title fw-bold text-white mb-1">{item.title}</h4>
              <p className="small text-white-50 mb-0">{item.subtitle}</p>
            </div>
            <button
              type="button"
              className="btn btn-sm btn-outline-light rounded-circle p-2 d-flex align-items-center justify-content-center"
              onClick={onClose}
              style={{ width: '38px', height: '38px' }}
            >
              <X size={20} />
            </button>
          </div>

          {/* Body */}
          <div className="modal-body p-4 p-md-5">
            <h6 className="fw-bold text-dark mb-3">Overview & Operational Scope</h6>
            <p className="text-secondary mb-4" style={{ lineHeight: '1.7', fontSize: '1.02rem' }}>
              {item.fullDesc}
            </p>

            <h6 className="fw-bold text-dark mb-3">Core Engineering Capabilities</h6>
            <div className="row g-3 mb-4">
              {item.highlights.map((h, i) => (
                <div key={i} className="col-12 col-md-6">
                  <div className="d-flex align-items-start p-3 rounded-3" style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                    <CheckCircle size={20} className="me-2 flex-shrink-0" style={{ color: '#78c043', marginTop: '2px' }} />
                    <span className="text-dark small fw-medium">{h}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3 rounded-3 mb-2" style={{ backgroundColor: '#ecfccb', border: '1px solid #d9f99d' }}>
              <div className="d-flex align-items-center">
                <div className="fw-bold text-success me-2">Enterprise Standard:</div>
                <div className="small text-dark">Engineered by Supracontrol Middle East - FZCO with open IoT protocols, AI analytics & sustainable green building criteria.</div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="modal-footer bg-light p-3 px-4 d-flex justify-content-between">
            <button type="button" className="btn btn-outline-secondary px-4 rounded-pill" onClick={onClose}>
              Close
            </button>
            <button
              type="button"
              className="btn btn-sc-primary d-inline-flex align-items-center gap-2"
              onClick={() => {
                onClose();
                onSelectContact(item.title);
              }}
            >
              Request Solution Proposal <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
