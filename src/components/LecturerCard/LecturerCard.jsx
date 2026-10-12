import React from 'react';
import './LecturerCard.css';

export const LecturerCard = ({
  lecturer,
  isSelected,
  openDisciplineMap = {},
  onToggleDiscipline,
  onBook
}) => {
  return (
    <div
      id={`lecturer-${lecturer.id}`}
      className={`card lecturer-card-grid ${isSelected ? 'lecturer-card-selected' : ''}`}
    >
      {isSelected && (
        <div className="selected-badge">
          ВЫБРАННЫЙ ПРЕПОДАВАТЕЛЬ
        </div>
      )}

      {/* Левая колонка: Фото преподавателя, мета-данные и кнопка записи */}
      <div className="lecturer-photo-col">
        <div className="lecturer-photo-wrapper">
          <img
            src={lecturer.photo}
            alt={lecturer.name}
            className="lecturer-photo"
          />
          <div className="lecturer-blue-bar"></div>
        </div>

        <div className="lecturer-meta">
          <span className="meta-tag">Стаж: {lecturer.experience}</span>
          {lecturer.degree && lecturer.degree !== 'нет' && (
            <span className="degree-tag">{lecturer.degree}</span>
          )}
        </div>

        {onBook && (
          <button
            onClick={() => onBook(lecturer)}
            className="book-btn"
            title="Записаться на занятие к этому лектору"
          >
            Записаться на курс
          </button>
        )}
      </div>

      {/* Правая колонка: ФИО, образование, дисциплины и тарифы */}
      <div className="lecturer-info-col">
        <div className="lecturer-header-info">
          <h2 className="lecturer-name">{lecturer.name}</h2>
          <p className="lecturer-education">
            <strong>Образование:</strong> {lecturer.education}
          </p>
        </div>

        <div className="lecturer-disciplines-section">
          <h3 className="disciplines-section-title">
            Преподаваемые дисциплины и программы:
          </h3>

          <div className="disciplines-accordion-list">
            {lecturer.disciplines.map((disc, idx) => {
              const isOpen = Boolean(openDisciplineMap[`${lecturer.id}-${idx}`]);

              return (
                <div key={idx} className="discipline-item">
                  <button
                    onClick={() => onToggleDiscipline && onToggleDiscipline(lecturer.id, idx)}
                    className={`discipline-toggle-btn ${isOpen ? 'active' : ''}`}
                  >
                    <span className="discipline-toggle-title">
                      📖 <strong>{disc.name}</strong> — {disc.description || 'изучение дисциплины'}
                    </span>
                    <span className="discipline-toggle-indicator">
                      {isOpen ? '▲ Скрыть темы' : `▼ Темы (${disc.topics?.length || 0})`}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="discipline-topics-panel">
                      <ol className="discipline-topics-list">
                        {disc.topics?.map((topic, tIdx) => (
                          <li key={tIdx} className="discipline-topic-item">
                            {topic}
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="lecturer-tariffs-section">
          <div className="tariffs-label">Тарифы преподавателя:</div>
          <div className="tariffs-list">
            {lecturer.tariffs?.map((t, tIdx) => (
              <div key={tIdx} className="tariff-chip">
                <span className="tariff-title">{t.title}:</span>
                <strong className="tariff-price">{t.price}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LecturerCard;
