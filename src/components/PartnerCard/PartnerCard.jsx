import React from 'react';
import './PartnerCard.css';

export const PartnerCard = ({ partner }) => {
  return (
    <div className="card partner-card">
      <div className="partner-card-content">
        <div className="partner-card-header">
          {partner.logoUrl ? (
            <img
              src={partner.logoUrl}
              alt={partner.name}
              className={`partner-card-logo partner-logo-${partner.id}`}
            />
          ) : (
            <span className={`partner-card-logo-text partner-text-${partner.id}`}>
              {partner.logoText}
            </span>
          )}
          <a
            href={partner.link}
            target="_blank"
            rel="noreferrer"
            className="partner-card-link-icon"
            title="Перейти на сайт партнёра"
          >
            <svg className="partner-arrow-svg" viewBox="0 0 24 24">
              <line x1="6" y1="18" x2="18" y2="6"></line>
              <polyline points="8 6 18 6 18 16"></polyline>
            </svg>
          </a>
        </div>
        <p className="partner-card-desc">
          {partner.description}
        </p>
      </div>
    </div>
  );
};

export default PartnerCard;
