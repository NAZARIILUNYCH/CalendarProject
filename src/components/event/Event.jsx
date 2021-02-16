import React from 'react';
import './event.scss';

const Event = ({ height, marginTop, title, time }) => {
  const eventStyle = {
    height,
    marginTop,
  };

  // const deleteEventHandler = status => status;

  // const deleteBtn = <button className="delete-event-btn">+</button>;

  return (
    <>
      {/* {deleteEventHandler ? deleteBtn : ''} */}
      <div
        style={eventStyle}
        className="event" //onClick={() => deleteEventHandler(false)}
      >
        <div className="event__title">{title}</div>
        <div className="event__time">{time}</div>
      </div>
    </>
  );
};

export default Event;
