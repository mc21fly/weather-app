import React from 'react';
import './Day.css';

const Day = ({ tomorrow }) => {
  return <div className="forecast-bar_day">{tomorrow ? 'Jutro' : ''}</div>;
};

export default Day;
