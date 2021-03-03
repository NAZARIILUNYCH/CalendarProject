import React from 'react';
import { months } from '../../utils/dateUtils';
import './header.scss';

const Header = ({ nextWeek, prevWeek, todayWeek, month, year, setIsModalShown }) => {
  return (
    <header className="header">
      <button className="button create-event-btn" onClick={() => setIsModalShown(true)}>
        <i className="fas fa-plus create-event-btn__icon"></i>Create
      </button>
      <div className="navigation">
        <button className="navigation__today-btn button" onClick={todayWeek}>
          Today
        </button>
        <button className="icon-button navigation__nav-icon" onClick={prevWeek}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="icon-button navigation__nav-icon">
          <i className="fas fa-chevron-right" onClick={nextWeek}></i>
        </button>
        <span className="navigation__displayed-month">
          {months[month]} <span className="navigation__displayed-year">{year}</span>
        </span>
      </div>
    </header>
  );
};

export default Header;
