import React from 'react';
import { Modal } from '../Modal/Modal';
import './BookingModal.css';

export const BookingModal = ({
  isOpen,
  onClose,
  lecturer,
  selectedTariff,
  setSelectedTariff,
  formData,
  setFormData,
  bookingSuccess,
  onSubmit
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={lecturer ? `Запись к преподавателю: ${lecturer.name}` : 'Запись на обучение'}
    >
      {bookingSuccess ? (
        <div className="booking-success-box">
          <div className="booking-success-icon">✅</div>
          <h3 className="booking-success-title">Заявка успешно отправлена!</h3>
          <p className="booking-success-text">
            Мы свяжемся с вами в ближайшее время для подтверждения расписания.
          </p>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="booking-form">
          <div className="booking-field-group">
            <label className="booking-label">Выберите тариф:</label>
            <select
              value={selectedTariff}
              onChange={(e) => setSelectedTariff(e.target.value)}
              required
              className="modal-input"
            >
              {lecturer?.tariffs?.map((t, idx) => (
                <option key={idx} value={t.title}>
                  {t.title} ({t.price})
                </option>
              ))}
            </select>
          </div>

          <div className="booking-field-group">
            <label className="booking-label">Ваше имя:</label>
            <input
              type="text"
              placeholder="Иван Иванов"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="modal-input"
            />
          </div>

          <div className="booking-field-group">
            <label className="booking-label">Номер телефона:</label>
            <input
              type="tel"
              placeholder="+7 (999) 000-00-00"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="modal-input"
            />
          </div>

          <div className="booking-field-group">
            <label className="booking-label">Комментарий или пожелания:</label>
            <textarea
              placeholder="Укажите удобное время или цель обучения..."
              rows="3"
              value={formData.note}
              onChange={(e) => setFormData({ ...formData, note: e.target.value })}
              className="modal-input modal-textarea"
            />
          </div>

          <button type="submit" className="primary-cta-btn booking-submit-btn">
            Подтвердить запись
          </button>
        </form>
      )}
    </Modal>
  );
};

export default BookingModal;
