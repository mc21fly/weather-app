import React, { useState } from 'react';
import './Pressure.css';

const Pressure = ({ pressure, minMax }) => {
  const [diff] = useState(minMax.max - minMax.min);
  const [place] = useState(minMax.max - pressure);

  return (
    <div className="forecast-bar_pressure">
      <div
        className="pressure"
        style={{ transform: `translateY(${place - diff / 2}px)` }}>
        <div>{`${pressure} hPa`}</div>
        <i
          style={{
            fontSize: '.8rem',
            zIndex: 99,
          }}
          className="fas fa-circle p"></i>
      </div>
    </div>
  );
};

export default Pressure;
