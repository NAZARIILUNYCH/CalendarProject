import React from "react";
import Hour from "../hour/Hour";
import "./day.scss";

const Day = ({
  dataDay,
  dayEvents,
  changeStatusEvent,
  removeEvent,
  momentLine,
}) => {
  const hours = Array(24)
    .fill()
    .map((val, index) => index);

  return (
    <div className="calendar__day" data-day={dataDay}>
      {hours.map((hour) => {
        const hourEvents = dayEvents.filter(
          (event) => event.dateFrom.getHours() === hour
        );

        return (
          <Hour
            key={dataDay + hour}
            dataHour={hour}
            hourEvents={hourEvents}
            changeStatusEvent={changeStatusEvent}
            removeEvent={removeEvent}
            momentLine={momentLine}
          />
        );
      })}
    </div>
  );
};

export default Day;
