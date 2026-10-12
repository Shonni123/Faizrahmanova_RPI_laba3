import React from 'react';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p className="footer-copyright">
          © {new Date().getFullYear()} Учебная платформа. Все права защищены.
        </p>
        <div className="footer-contacts">
          <span>Контакты: info@lectures.ru</span>
          <span>Тел: +7 (800) 555-35-35</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
