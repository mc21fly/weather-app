import React, { useState } from 'react';
import './Temperature.css';

const Temperature = ({ temperature, minMax }) => {
  const [diff] = useState(minMax.max - minMax.min);
  const [place] = useState(minMax.max - temperature);

  return (
    <div className="forecast-bar_temperature">
      <div
        className="temperature"
        style={{ transform: `translateY(${place * 10 - diff / 2}px)` }}>
        <div>{`${temperature}°`}</div>
        <i
          style={{
            position: 'absolute',
            top: '50px',
            fontSize: '.8rem',
            zIndex: 99,
          }}
          className="fas fa-circle t"></i>
      </div>
    </div>
  );
};

export default Temperature;
