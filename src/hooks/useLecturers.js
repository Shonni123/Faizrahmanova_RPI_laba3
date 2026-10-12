import { useState, useEffect } from 'react';
import { LECTURERS } from '../data/lecturers';

export const useLecturers = (selectedLecturerId) => {
  const [openDisciplineMap, setOpenDisciplineMap] = useState({});
  const [filterGender, setFilterGender] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Booking modal state
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [activeLecturer, setActiveLecturer] = useState(null);
  const [selectedTariff, setSelectedTariff] = useState('');
  const [bookingFormData, setBookingFormData] = useState({ name: '', phone: '', note: '' });
  const [bookingSuccess, setBookingSuccess] = useState(false);

  useEffect(() => {
    if (selectedLecturerId) {
      const initialMap = {};
      const lecturer = LECTURERS.find((l) => l.id === selectedLecturerId);
      if (lecturer) {
        lecturer.disciplines.forEach((_, idx) => {
          initialMap[`${selectedLecturerId}-${idx}`] = true;
        });
        setOpenDisciplineMap(initialMap);
      }

      setTimeout(() => {
        const el = document.getElementById(`lecturer-${selectedLecturerId}`);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    }
  }, [selectedLecturerId]);

  const toggleDiscipline = (lecturerId, discIdx) => {
    const key = `${lecturerId}-${discIdx}`;
    setOpenDisciplineMap((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const openBooking = (lecturer) => {
    setActiveLecturer(lecturer);
    setSelectedTariff(lecturer.tariffs?.[0]?.title || '');
    setBookingSuccess(false);
    setIsBookingOpen(true);
  };

  const closeBooking = () => {
    setIsBookingOpen(false);
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setBookingSuccess(true);
    setTimeout(() => {
      setIsBookingOpen(false);
      setBookingSuccess(false);
      setBookingFormData({ name: '', phone: '', note: '' });
    }, 2000);
  };

  const filteredLecturers = LECTURERS.filter((lecturer) => {
    const matchesGender = filterGender === 'all' || lecturer.gender === filterGender;
    const matchesSearch =
      lecturer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lecturer.disciplines.some((d) => d.name.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesGender && matchesSearch;
  });

  return {
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
  };
};
