import React, { useState } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import { getWeekStartDate, generateWeekRange } from './utils/dateUtils.js';
import './common.scss';

const App = () => {
  const [isModalShown, setIsModalShown] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());

  const handleNextWeek = () => {
    setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() + 7)));
  };

  const handlePrevWeek = () => {
    setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() - 7)));
  };

  const handleTodayWeek = () => {
    setCurrentDate(new Date());
  };

  const weekDates = generateWeekRange(getWeekStartDate(currentDate));

  return (
    <div className="calendar__container">
      <Header
        nextWeek={handleNextWeek}
        prevWeek={handlePrevWeek}
        todayWeek={handleTodayWeek}
        weekDates={weekDates}
        month={currentDate.getMonth()}
        year={currentDate.getFullYear()}
        setIsModalShown={setIsModalShown}
      />
      <Calendar
        weekDates={weekDates}
        setIsModalShown={setIsModalShown}
        isModalShown={isModalShown}
      />
    </div>
  );
};
export default App;
