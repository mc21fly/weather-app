import React from 'react';
import './WindDir.css';

import 'weather-icons/css/weather-icons.min.css';

const WindDir = ({ windDir }) => {
  const direction = () => {
    if (windDir === 0 || windDir === 23 || windDir === 336) {
      return 'Południowy';
    }
    if (windDir === 45 || windDir === 68) {
      return 'Pd. - Zach.';
    }
    if (windDir === 90) {
      return 'Zachodni';
    }
    if (windDir === 113 || windDir === 135) {
      return 'Pn. - Zach.';
    }
    if (windDir === 158 || windDir === 180 || windDir === 203) {
      return 'Północny';
    }
    if (windDir === 225 || windDir === 248) {
      return 'Pn. - Wsch.';
    }
    if (windDir === 270) {
      return 'Wschodni';
    }
    if (windDir === 293 || windDir === 313) {
      return 'Pd. - Wsch.';
    }
  };
  return (
    <div className="forecast-bar_wind-dir">
      <i
        style={{ transform: `rotate(${windDir}deg)` }}
        className="fas fa-long-arrow-alt-up"></i>
      <div className="direction">{direction()}</div>
    </div>
  );
};

export default WindDir;

/**
 * 0 - Południowy
 * 23 - Południowy
 * 45 - Pd. - Zach.
 * 68 - Pd. - Zach.
 * 90 - Zach.
 * 113 - Pn. Zach.
 * 135 - Pn. - Zach.
 * 158 - Północny
 * 180 - Północny
 * 203 - Północny
 * 225 - Pn. - Wsch.
 * 248 - Pn. - Wsch.
 * 270 - Wschodni
 * 293 - Pd. - Wsch.
 * 313 - Pd. - Wsch.
 * 336 - Południowy
 */
