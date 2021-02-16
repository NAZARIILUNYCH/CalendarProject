import React, { useState } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';
import './common.scss';

const App = () => {
  let weekDates;
  const [currentDate, setCurrentDate] = useState(new Date());

  const handleNextWeek = () =>
    setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() + 7)));

  const handlePrevWeek = () =>
    setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() - 7)));

  const handleToday = () => setCurrentDate(new Date());

  weekDates = generateWeekRange(getWeekStartDate(currentDate));

  return (
    <>
      <Header
        nextWeek={handleNextWeek}
        prevWeek={handlePrevWeek}
        today={handleToday}
        month={currentDate.getMonth()}
      />
      <Calendar weekDates={weekDates} />
    </>
  );
};

export default App;
