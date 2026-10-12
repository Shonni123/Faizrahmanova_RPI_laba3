import React from 'react';
import './AboutPage.css';

const InnopolisStats = () => {
  const stats = [
    { number: '100%', label: 'Трудоустройство выпускников' },
    { number: '10+', label: 'Ведущих IT-лекторов' },
    { number: '2', label: 'Стратегических партнера (Татнефть, ICL)' },
    { number: '25+', label: 'Актуальных дисциплин' }
  ];

  return (
    <div className="about-stats-grid">
      {stats.map((stat, idx) => (
        <div key={idx} className="about-stat-item">
          <div className="about-stat-number">{stat.number}</div>
          <div className="about-stat-label">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

const PartnerHighlights = () => {
  return (
    <div className="grid-2 about-highlights-grid">
      <div className="about-highlight-card">
        <h4 className="about-highlight-title">
          🏭 Индустриальные кейсы
        </h4>
        <p className="about-highlight-desc">
          Совместно с компаниями Татнефть и ICL мы внедряем практические проекты прямо в учебные дисциплины.
        </p>
      </div>

      <div className="about-highlight-card">
        <h4 className="about-highlight-title">
          🎓 Практика и стажировки
        </h4>
        <p className="about-highlight-desc">
          Студенты получают возможность проходить стажировку у лучших экспертов отрасли с 1-го курса.
        </p>
      </div>
    </div>
  );
};

export const AboutPage = () => {
  const workflowSteps = [
    {
      num: '01. Заявка',
      desc: 'Определяете тему лекции, формат (онлайн/оффлайн) и целевую аудиторию.'
    },
    {
      num: '02. Подбор',
      desc: 'Мы подбираем оптимального лектора под ваши задачи и подготавливаем программу.'
    },
    {
      num: '03. Проведение',
      desc: 'Организуем мероприятие «под ключ» с гарантиями качества.'
    }
  ];

  return (
    <div className="about-page-container">
      {/* Основное описание из макета */}
      <div className="card about-mission-card">
        <p className="about-mission-text">
          Наша учебная платформа соединяет компании, образовательные учреждения и НКО с профессиональными лекторами, спикерами и тренерами. Мы упрощаем процесс подбора, бронирования и организации лекций, помогая находить экспертов, которые не просто делятся знаниями, но и вдохновляют аудиторию.
        </p>
      </div>

      {/* Ключевые показатели */}
      <div className="card">
        <h2 className="about-section-heading">Ключевые показатели</h2>
        <InnopolisStats />
      </div>

      {/* Сотрудничество с индустрией */}
      <div className="card">
        <h2 className="about-section-heading">Сотрудничество с индустрией</h2>
        <PartnerHighlights />
      </div>

      {/* Блок: Как мы работаем */}
      <div className="card">
        <h2 className="about-section-heading">Как мы работаем</h2>
        <div className="about-steps-grid">
          {workflowSteps.map((step, idx) => (
            <div key={idx} className="about-step-card">
              <div className="about-step-num">{step.num}</div>
              <div className="about-step-desc">{step.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
