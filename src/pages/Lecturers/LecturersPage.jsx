import React from 'react';
import { LecturerCard } from '../../components/LecturerCard/LecturerCard';
import { BookingModal } from '../../components/BookingModal/BookingModal';
import { useLecturers } from '../../hooks/useLecturers';
import './LecturersPage.css';

export const LecturersPage = ({ selectedLecturerId }) => {
  const {
    filterGender,
    setFilterGender,
    searchQuery,
    setSearchQuery,
    filteredLecturers,
    openDisciplineMap,
    toggleDiscipline,
    isBookingOpen,
    activeLecturer,
    selectedTariff,
    setSelectedTariff,
    bookingFormData,
    setBookingFormData,
    bookingSuccess,
    openBooking,
    closeBooking,
    handleBookingSubmit
  } = useLecturers(selectedLecturerId);

  return (
    <div className="lecturers-page-container">
      <div className="lecturers-toolbar-header">
        <div>
          <h1 className="page-heading">Наши лекторы</h1>
          <p className="page-subheading">
            Ведущие преподаватели, кандидаты и доктора наук с многолетним стажем
          </p>
        </div>

        {/* Панель фильтрации и поиска */}
        <div className="lecturers-filter-controls">
          <input
            type="text"
            placeholder="Поиск по имени или предмету..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />

          <select
            value={filterGender}
            onChange={(e) => setFilterGender(e.target.value)}
            className="filter-select"
          >
            <option value="all">Все преподаватели (10)</option>
            <option value="male">Мужчины (5)</option>
            <option value="female">Женщины (5)</option>
          </select>
        </div>
      </div>

      <div className="lecturers-list">
        {filteredLecturers.map((lecturer) => (
          <LecturerCard
            key={lecturer.id}
            lecturer={lecturer}
            isSelected={lecturer.id === selectedLecturerId}
            openDisciplineMap={openDisciplineMap}
            onToggleDiscipline={toggleDiscipline}
            onBook={openBooking}
          />
        ))}
      </div>

      <BookingModal
        isOpen={isBookingOpen}
        onClose={closeBooking}
        lecturer={activeLecturer}
        selectedTariff={selectedTariff}
        setSelectedTariff={setSelectedTariff}
        formData={bookingFormData}
        setFormData={setBookingFormData}
        bookingSuccess={bookingSuccess}
        onSubmit={handleBookingSubmit}
      />
    </div>
  );
};

export default LecturersPage;
