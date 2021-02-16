import React, { useState } from 'react';
import './modal.scss';
import { getDateTime } from '../../utils/dateUtils';
import events from '../../gateway/events';

const Modal = ({ setIsModalShown }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const createEvent = e => {
    e.preventDefault();

    const event = {
      id: events.length + 1,
      title,
      description,
      dateFrom: getDateTime(date, startTime),
      dateTo: getDateTime(date, endTime),
    };

    events.push(event);
  };

  return (
    <div className="modal overlay">
      <div className="modal__content">
        <div className="create-event">
          <button className="create-event__close-btn" onClick={() => setIsModalShown()}>
            +
          </button>
          <form className="event-form" onSubmit={createEvent}>
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="event-form__field"
              onChange={e => setTitle(e.target.value)}
            />
            <div className="event-form__time">
              <input
                type="date"
                name="date"
                className="event-form__field"
                onChange={e => setDate(e.target.value)}
              />
              <input
                type="time"
                name="startTime"
                className="event-form__field"
                onChange={e => setStartTime(e.target.value)}
              />
              <span>-</span>
              <input
                type="time"
                name="endTime"
                className="event-form__field"
                onChange={e => setEndTime(e.target.value)}
              />
            </div>
            <textarea
              name="description"
              placeholder="Description"
              className="event-form__field"
              onChange={e => setDescription(e.target.value)}
            ></textarea>
            <button type="submit" className="event-form__submit-btn" onSubmit={createEvent}>
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
