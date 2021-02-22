import React from "react";
import { days } from "../../utils/dateUtils.js";
import className from "classnames";
import moment from "moment";

const Navigation = ({ weekDates }) => {
  return (
    <header className="calendar__header">
      {weekDates.map((dayDate) => {
        const todayStyles =
          moment(dayDate).format("MMMM DD YYYY") ==
          moment(new Date()).format("MMMM DD YYYY");

        return (
          <div className="calendar__day-label day-label" key={dayDate}>
            <span
              className={className("day-label__day-name", {
                "day-label__today": todayStyles,
              })}
            >
              {days[dayDate.getDay()]}
            </span>
            <span
              className={className("day-label__day-number", {
                "day-label__today": todayStyles,
              })}
            >
              {dayDate.getDate()}
            </span>
          </div>
        );
      })}
    </header>
  );
};

export default Navigation;
