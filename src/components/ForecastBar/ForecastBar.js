import React from 'react';
import './ForecastBar.css';

import {
  Day,
  Hour,
  Forecast,
  Temperature,
  RainDrop,
  WindDir,
  WindSpeed,
  Pressure,
} from './';

const ForecastBar = ({ tomorrow, forecast, pressure, temperature }) => {
  return (
    <div className="forecast-bar">
      <Day tomorrow={tomorrow} />
      <Hour hour={forecast.hour} />
      <Forecast forecast={forecast.forecast} />
      <Temperature temperature={forecast.temperature} minMax={temperature} />
      <RainDrop rainDrop={forecast.rainDrop} />
      <WindDir windDir={forecast.windDir} />
      <WindSpeed windSpeed={forecast.windSpeed} />
      <Pressure pressure={forecast.pressure} minMax={pressure} />
    </div>
  );
};

export default ForecastBar;
