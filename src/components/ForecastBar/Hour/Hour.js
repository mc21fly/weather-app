import React from 'react';
import './Hour.css';

const Hour = ({ hour }) => {
  const formatHour = () => {
    return hour < 10 ? `0${hour}:00` : `${hour}:00`;
  };
  return <div className="forecast-bar_hour">{formatHour()}</div>;
};

export default Hour;
