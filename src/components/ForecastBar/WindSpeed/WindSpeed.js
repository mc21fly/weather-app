import React from 'react';
import './WindSpeed.css';

const WindSpeed = ({ windSpeed }) => {
  const strength = () => {
    if (windSpeed <= 15) {
      return 'Słaby';
    } else if (windSpeed > 15 && windSpeed <= 25) {
      return 'Umiar.';
    } else if (windSpeed > 25) {
      return 'Silny';
    }
  };
  return (
    <div className="forecast-bar_wind-speed">
      <div className="wind-strength">{strength()}</div>
      {`${windSpeed} km/h`}
    </div>
  );
};

export default WindSpeed;
