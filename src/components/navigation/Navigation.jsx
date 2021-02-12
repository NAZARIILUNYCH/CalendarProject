import React from 'react';
import { days } from '../../utils/dateUtils.js';

const Navigation = ({ weekDates }) => {
  return (
    <header className="calendar__header">
      {weekDates.map(dayDate => (
        <div className="calendar__day-label day-label" key={Math.random()}>
          <span className="day-label__day-name" key={Math.random()}>
            {days[dayDate.getDay()]}
          </span>
          <span className="day-label__day-number" key={Math.random()}>
            {dayDate.getDate()}
          </span>
        </div>
      ))}
    </header>
  );
};

export default Navigation;
