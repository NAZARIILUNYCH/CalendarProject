/* eslint-disable import/no-unresolved */
import React from 'react';
import Hour from '../hour/Hour';
import './day.scss';

const Day = ({ day, dayEvents, changeStatusEvent, removeEvent }) => {
  const hours = Array(24)
    .fill()
    .map((val, index) => index);

  return (
    <div className="calendar__day" data-day={day}>
      {hours.map(hour => {
        const hourEvents = dayEvents.filter(event => event.dateFrom.getHours() === hour);

        return (
          <Hour
            key={day + hour}
            dataHour={hour}
            hourEvents={hourEvents}
            changeStatusEvent={changeStatusEvent}
            removeEvent={removeEvent}
            day={day}
          />
        );
      })}
    </div>
  );
};

export default Day;
