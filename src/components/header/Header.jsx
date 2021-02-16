import React from 'react';
import { months } from '../../utils/dateUtils.js';
import './header.scss';

const Header = ({ nextWeek, prevWeek, today, month, setIsModalShown }) => {
  return (
    <header className="header">
      <div className="navigation">
        <button className="button create-event-btn" onClick={() => setIsModalShown(true)}>
          <i className="fas fa-plus create-event-btn__icon"></i>Create
        </button>
        <button className="navigation__today-btn button" onClick={today}>
          Today
        </button>
        <button className="icon-button navigation__nav-icon">
          <i className="fas fa-chevron-left" onClick={prevWeek}></i>
        </button>
        <button className="icon-button navigation__nav-icon">
          <i className="fas fa-chevron-right" onClick={nextWeek}></i>
        </button>
        <span className="navigation__displayed-month">{months[month]}</span>
      </div>
    </header>
  );
};

export default Header;
