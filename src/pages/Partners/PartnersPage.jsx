import React from 'react';
import { PARTNERS } from '../../data/partners';
import { PartnerCard } from '../../components/PartnerCard/PartnerCard';
import './PartnersPage.css';

export const PartnersPage = () => {
  return (
    <div className="partners-page-container">
      <div className="partners-page-header">
        <h1 className="page-heading">Наши партнёры</h1>
        <p className="page-subheading">
          Мы сотрудничаем с ведущими промышленными и технологическими корпорациями России для создания практико-ориентированных учебных программ.
        </p>
      </div>

      <div className="grid-2 partners-grid">
        {PARTNERS.map((partner) => (
          <PartnerCard key={partner.id} partner={partner} />
        ))}
      </div>
    </div>
  );
};

export default PartnersPage;
