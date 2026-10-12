import React from 'react';
import './Header.css';

export const Header = ({ activeTab, setActiveTab, onOpenAuth }) => {
  const navItems = [
    { id: 'home', label: 'Главная' },
    { id: 'partners', label: 'Партнеры' },
    { id: 'about', label: 'О нас' },
    { id: 'lecturers', label: 'Лекторы' },
    { id: 'courses', label: 'Дисциплины' }
  ];

  return (
    <header className="header-container">
      {/* Верхняя панель: Логотип, контакты, кнопка входа */}
      <div className="header-topbar">
        <div
          className="header-logo"
          onClick={() => setActiveTab('home')}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && setActiveTab('home')}
        >
          <span className="logo-icon">🎓</span>
          <div>
            <span className="logo-title">EduLectures</span>
            <span className="logo-subtitle">Учебная платформа</span>
          </div>
        </div>

        <div className="header-actions">
          <div className="header-contact">
            <span className="contact-label">Горячая линия:</span>
            <a href="tel:+78005553535" className="contact-phone">
              +7 (800) 555-35-35
            </a>
          </div>

          <button
            className="login-btn"
            onClick={onOpenAuth}
            title="Войти в личный кабинет студента или преподавателя"
          >
            <span aria-hidden="true">👤</span> Войти
          </button>
        </div>
      </div>

      {/* Навигационная панель */}
      <nav className="nav-bar">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`nav-btn ${activeTab === item.id ? 'active' : ''}`}
            onClick={() => setActiveTab(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default Header;
