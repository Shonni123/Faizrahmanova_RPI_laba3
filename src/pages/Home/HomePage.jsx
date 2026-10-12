import React, { useState } from 'react';
import { PARTNERS } from '../../data/partners';
import './HomePage.css';

export const HomePage = ({ setActiveTab }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const scrollToPartners = () => {
    const el = document.getElementById('partners-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setActiveTab('lecturers');
    }
  };

  return (
    <div className="home-page-container">
      {/* Главный баннер */}
      <div className="card grid-2 hero-banner">
        <div className="hero-image-wrapper">
          <img
            src="/hero-lecture.png"
            alt="Лектор в аудитории"
            className="hero-image"
          />
          <div className="rating-badge">
            <span className="rating-star">★</span>
            <div>
              <strong>4.9 / 5.0</strong>
              <div className="rating-subtitle">1 200+ отзывов слушателей</div>
            </div>
          </div>
        </div>

        <div className="hero-info-wrapper">
          <div className="hero-tag">Учебная платформа нового поколения</div>

          <h1 className="hero-title">
            Наши лекторы — признанные специалисты в своих областях, готовые делиться опытом и знаниями.
          </h1>

          <p className="hero-description">
            Предоставляем онлайн и офлайн образовательные программы физическим и юридическим лицам: от фундаментальной науки до практических IT-дисциплин.
          </p>

          <div className="hero-badges-wrapper">
            <span className="pill-badge">✔ 10 экспертов с учёными степенями</span>
            <span className="pill-badge">✔ 30 детальных дисциплин</span>
            <span className="pill-badge">✔ Онлайн и офлайн форматы</span>
            <span className="pill-badge">✔ Корпоративное обучение</span>
          </div>

          <form onSubmit={handleSearch} className="quick-search-box">
            <input
              type="text"
              placeholder="Поиск лектора или предмета (например, Python, Биохимия)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="quick-search-input"
            />
            <button type="submit" className="quick-search-btn">
              Найти
            </button>
          </form>

          <div className="hero-cta-wrapper">
            <button
              onClick={() => setActiveTab('lecturers')}
              className="primary-cta-btn"
              title="Перейти к каталогу всех преподавателей"
            >
              НАЙТИ ЛЕКТОРА →
            </button>

            <button
              onClick={() => setActiveTab('courses')}
              className="secondary-cta-btn"
              title="Смотреть все 30 доступных дисциплин"
            >
              КАТАЛОГ ДИСЦИПЛИН
            </button>

            <button
              onClick={scrollToPartners}
              className="link-cta-btn"
              title="Перейти к партнёрам"
            >
              Партнёры ↓
            </button>
          </div>
        </div>
      </div>

      {/* О преподавателях: ключевые цифры */}
      <div className="card stats-section">
        <h2 className="section-title">О преподавателях и платформе</h2>
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number">10</div>
            <div className="stat-label">Ведущих экспертов</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">30</div>
            <div className="stat-label">Учебных дисциплин</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">300</div>
            <div className="stat-label">Тщательно проработанных тем</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">16 лет</div>
            <div className="stat-label">Максимальный стаж</div>
          </div>
        </div>
      </div>

      {/* Блок Партнеры (якорь) */}
      <div id="partners-section" className="card home-partners-section">
        <div className="section-header-flex">
          <div>
            <h2 className="section-title">Наши стратегические партнёры</h2>
            <p className="section-subtitle">
              Крупнейшие индустриальные лидеры, внедряющие совместные образовательные программы
            </p>
          </div>
          <button
            onClick={() => setActiveTab('partners')}
            className="secondary-cta-btn view-all-partners-btn"
          >
            Подробнее о партнёрах →
          </button>
        </div>

        <div className="home-partners-grid">
          {PARTNERS.map((partner) => (
            <a
              key={partner.id}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="partner-home-card"
            >
              <div className="home-partner-header">
                {partner.logoUrl ? (
                  <img
                    src={partner.logoUrl}
                    alt={partner.name}
                    className={`home-partner-logo home-logo-${partner.id}`}
                  />
                ) : (
                  <span className={`home-partner-text-logo home-text-${partner.id}`}>
                    {partner.logoText}
                  </span>
                )}
                <span className="home-partner-arrow">↗</span>
              </div>
              <p className="home-partner-description">
                {partner.description.slice(0, 160)}...
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
