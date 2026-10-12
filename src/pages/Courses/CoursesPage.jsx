import React from 'react';
import { useCoursesFilter } from '../../hooks/useCoursesFilter';
import './CoursesPage.css';

export const CoursesPage = ({ setActiveTab }) => {
  const { courseSearch, setCourseSearch, filteredLecturers } = useCoursesFilter();

  const handleLecturerClick = (lecturerId) => {
    if (setActiveTab) {
      setActiveTab('lecturers', lecturerId);
    }
  };

  return (
    <div className="courses-page-container">
      <div className="courses-toolbar-header">
        <div>
          <h1 className="page-heading">Каталог дисциплин</h1>
          <p className="page-subheading">
            30 подробных курсов по естественным, техническим и гуманитарным наукам
          </p>
        </div>

        <input
          type="text"
          placeholder="Поиск по теме или названию курса..."
          value={courseSearch}
          onChange={(e) => setCourseSearch(e.target.value)}
          className="search-input courses-search-input"
        />
      </div>

      <div className="courses-list">
        {filteredLecturers.map((lecturer) => (
          <div key={lecturer.id} className="card course-lecturer-card">
            {/* Заголовок с ФИО-гиперссылкой */}
            <div className="course-lecturer-header">
              <div className="course-author-info">
                <img
                  src={lecturer.photo}
                  alt={lecturer.name}
                  className="course-author-avatar"
                />
                <div>
                  <span className="course-author-label">
                    Преподаватель курса
                  </span>
                  <button
                    onClick={() => handleLecturerClick(lecturer.id)}
                    className="course-author-link"
                    title="Перейти в карточку преподавателя и записаться"
                  >
                    {lecturer.name} →
                  </button>
                </div>
              </div>

              <div className="course-author-meta">
                <span className="course-meta-tag">
                  Стаж: {lecturer.experience}
                </span>
                {lecturer.degree && lecturer.degree !== 'нет' && (
                  <span className="course-degree-tag">
                    {lecturer.degree}
                  </span>
                )}
              </div>
            </div>

            {/* Список дисциплин преподавателя */}
            <div className="course-disciplines-grid">
              {lecturer.disciplines.map((disc, idx) => (
                <div key={idx} className="course-discipline-card">
                  <div className="course-discipline-content">
                    <h3 className="course-discipline-title">
                      📖 {disc.name}
                    </h3>
                    <p className="course-discipline-desc">
                      {disc.description}
                    </p>

                    <div className="course-topics-header">
                      Программа тем ({disc.topics?.length || 0}):
                    </div>
                    <ol className="course-topics-list">
                      {disc.topics?.map((topic, tIdx) => (
                        <li key={tIdx} className="course-topic-item">
                          {topic}
                        </li>
                      ))}
                    </ol>
                  </div>

                  <button
                    onClick={() => handleLecturerClick(lecturer.id)}
                    className="course-enroll-btn"
                  >
                    Записаться на эту дисциплину →
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
