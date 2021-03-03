/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from 'react';
import Navigation from '../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';
import { eventsFetching, updateEvent, removeEvent } from '../../gateway/events';
import Modal from '../modal/Modal';
import './calendar.scss';

const Calendar = ({ weekDates, isModalShown, setIsModalShown }) => {
  const [events, setEvents] = useState([]);

  const eventsList = () => {
    eventsFetching()
      .then(event => setEvents(event))
      .catch(error => alert(error.message));
  };

  const changeStatusEvent = id => {
    const { status, ...event } = events.find(item => item.id === id);

    const newEvents = {
      status: !status,
      ...event,
    };

    updateEvent(id, newEvents).then(() => eventsList());
  };

  const removeEventHandler = id => {
    removeEvent(id).then(() => eventsList());
  };

  useEffect(() => {
    eventsList();
  }, []);

  return (
    <section className="calendar">
      <Navigation weekDates={weekDates} />
      <div className="calendar__body">
        <div className="calendar__week-container">
          <Sidebar />
          <Week
            weekDates={weekDates}
            events={events}
            changeStatusEvent={changeStatusEvent}
            removeEvent={removeEventHandler}
          />
        </div>
      </div>
      {isModalShown && (
        <Modal
          eventsList={eventsList}
          isModalShown={isModalShown}
          setIsModalShown={setIsModalShown}
        />
      )}
    </section>
  );
};

export default Calendar;
