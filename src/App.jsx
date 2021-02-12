import React, { useState } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';
import './common.scss';

const App = () => {
  const weekDates = generateWeekRange(getWeekStartDate(new Date()));

  return (
    <>
      <Header />
      <Calendar weekDates={weekDates} />
    </>
  );
};

export default App;
