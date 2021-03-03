/* eslint-disable import/no-unresolved */
import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Event from '../event/Event';
import { formatMins } from '../../utils/dateUtils.js';

const Hour = ({ day, dataHour, hourEvents, changeStatusEvent, removeEvent }) => {
  const [minutes, setMinutes] = useState(new Date().getMinutes());
  const [hour, setHour] = useState(new Date().getHours());

  useEffect(() => {
    if (minutes === 60) {
      setMinutes(0);
      setHour(hour + 1);
    }
    const interval = setInterval(() => {
      setMinutes(minutes + 1);
    }, 60000);

    return () => {
      clearInterval(interval);
    };
  });

  const momentLine =
    moment(day).format('MMMM DD YYYY') === moment(new Date()).format('MMMM DD YYYY');

  return (
    <div className="calendar__time-slot" data-time={dataHour + 1}>
      {momentLine && dataHour === hour ? (
        <div style={{ top: minutes }} className="red-line"></div>
      ) : null}

      {hourEvents.map(({ id, dateFrom, dateTo, title, status }) => {
        const eventStart = `${dateFrom.getHours()}:${formatMins(dateFrom.getMinutes())}`;
        const eventEnd = `${dateTo.getHours()}:${formatMins(dateTo.getMinutes())}`;

        return (
          <Event
            key={id}
            id={id}
            height={(dateTo.getTime() - dateFrom.getTime()) / (1000 * 60)}
            marginTop={dateFrom.getMinutes()}
            time={`${eventStart} - ${eventEnd}`}
            title={title}
            removeEvent={removeEvent}
            status={status}
            changeStatusEvent={changeStatusEvent}
          />
        );
      })}
    </div>
  );
};

export default Hour;
