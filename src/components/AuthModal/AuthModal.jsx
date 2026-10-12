import React from 'react';
import { Modal } from '../Modal/Modal';
import './AuthModal.css';

export const AuthModal = ({
  isOpen,
  onClose,
  role,
  setRole,
  email,
  setEmail,
  password,
  setPassword,
  isSuccess,
  onSubmit
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Вход в личный кабинет">
      {isSuccess ? (
        <div className="auth-success-box">
          <div className="auth-success-icon">👋</div>
          <h3 className="auth-success-title">Добро пожаловать!</h3>
          <p className="auth-success-text">Вход выполнен успешно.</p>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="auth-form">
          <div className="auth-field-group">
            <label className="auth-label">Войти как:</label>
            <div className="auth-role-tabs">
              <button
                type="button"
                onClick={() => setRole('student')}
                className={`auth-role-btn ${role === 'student' ? 'active' : ''}`}
              >
                Студент
              </button>
              <button
                type="button"
                onClick={() => setRole('lecturer')}
                className={`auth-role-btn ${role === 'lecturer' ? 'active' : ''}`}
              >
                Преподаватель
              </button>
            </div>
          </div>

          <div className="auth-field-group">
            <label className="auth-label">Электронная почта:</label>
            <input
              type="email"
              placeholder="example@mail.ru"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="modal-input"
            />
          </div>

          <div className="auth-field-group">
            <label className="auth-label">Пароль:</label>
            <input
              type="password"
              placeholder="••••••••"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="modal-input"
            />
          </div>

          <button type="submit" className="primary-cta-btn auth-submit-btn">
            Войти
          </button>
        </form>
      )}
    </Modal>
  );
};

export default AuthModal;
