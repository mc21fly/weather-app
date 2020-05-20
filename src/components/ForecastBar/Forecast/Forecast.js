import React from 'react';
import './Forecast.css';

import 'weather-icons/css/weather-icons.min.css';

const Forecast = ({ forecast }) => {
  const showForecast = () => {
    switch (forecast) {
      case 1:
        return <i className="wi wi-day-sunny"></i>;
      case 2:
        return <i className="wi wi-cloud"></i>;
      case 3:
        return <i className="wi wi-rain"></i>;
      case 4:
        return <i className="wi wi-night-clear"></i>;
      case 5:
        return <i className="wi wi-night-alt-cloudy"></i>;
      case 6:
        return <i className="wi wi-night-alt-hail"></i>;
      default:
        return <i className="wi wi-day-sunny"></i>;
    }
  };
  return <div className="forecast-bar_forecast">{showForecast()}</div>;
};

export default Forecast;
