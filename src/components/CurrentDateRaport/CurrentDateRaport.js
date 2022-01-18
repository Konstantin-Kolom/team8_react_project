import { useEffect, useState } from 'react';
import CurrentDate from '../CurrentDate';
import s from './CurrentDateRaport.module.css';

const currentData = new Date();
const currentYear = currentData.getFullYear();
const currentMonth = currentData.getUTCMonth();

const CurrentDateRaport = ({ handleDate }) => {
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  const [selectedYear, setSelectedYear] = useState(currentYear);

  useEffect(() => {
    const monthNumber = selectedMonth + 1;
    const normalizedMonth =
      monthNumber > 9 ? `${selectedYear}${monthNumber}` : `${selectedYear}0${monthNumber}`;
   return handleDate(normalizedMonth);
  }, [selectedMonth, selectedYear, handleDate]);
  
  const handleNext = e => {
    e.preventDefault();
    if (selectedMonth === 11) {
      setSelectedMonth(0);
      const year = selectedYear + 1;
      setSelectedYear(year);
      return;
    }
    const month = selectedMonth + 1;
    setSelectedMonth(month);
    return;
  };

  const handlePrevious = e => {
    e.preventDefault();
    if (selectedMonth === 0) {
      setSelectedMonth(11);
      const year = selectedYear - 1;
      setSelectedYear(year);
      return;
    }
    const month = selectedMonth - 1;
    setSelectedMonth(month);
  };

  return (
    <>
      <div className={s.section}>
        <CurrentDate
        month={selectedMonth}
        year={selectedYear}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
      />
      </div>
    </>
  );
};

export default CurrentDateRaport;