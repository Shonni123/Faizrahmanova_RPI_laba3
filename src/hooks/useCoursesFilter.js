import { useState, useMemo } from 'react';
import { LECTURERS } from '../data/lecturers';

export const useCoursesFilter = () => {
  const [courseSearch, setCourseSearch] = useState('');

  const filteredLecturers = useMemo(() => {
    const query = courseSearch.trim().toLowerCase();
    if (!query) {
      return LECTURERS;
    }

    return LECTURERS.map((lecturer) => {
      const matchingDisciplines = lecturer.disciplines.filter(
        (disc) =>
          disc.name.toLowerCase().includes(query) ||
          disc.topics.some((t) => t.toLowerCase().includes(query))
      );
      return { ...lecturer, disciplines: matchingDisciplines };
    }).filter((lecturer) => lecturer.disciplines.length > 0);
  }, [courseSearch]);

  return {
    courseSearch,
    setCourseSearch,
    filteredLecturers
  };
};
