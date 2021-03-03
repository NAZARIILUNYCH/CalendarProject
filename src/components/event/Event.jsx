import React, { useState } from 'react';
import './event.scss';

const Event = ({ height, marginTop, title, time, id, removeEvent }) => {
  const [isShownDeleteEventBtn, setIsShownDeleteEventBtn] = useState(false);
  const eventStyle = {
    height,
    marginTop,
  };

  const deleteBtn = (
    <button className="delete-event-btn" onClick={() => removeEvent(id)}>
      +
    </button>
  );

  return (
    <>
      {isShownDeleteEventBtn ? deleteBtn : ''}
      <div
        style={eventStyle}
        className="event"
        onClick={() => setIsShownDeleteEventBtn(!isShownDeleteEventBtn)}
      >
        <div className="event__title">{title}</div>
        <div className="event__time">{time}</div>
      </div>
    </>
  );
};

export default Event;
