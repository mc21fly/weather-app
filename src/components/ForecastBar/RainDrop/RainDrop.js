import React from 'react';
import './RainDrop.css';

const RainDrop = ({ rainDrop }) => {
  const rain = () => {
    return <div className="rain" style={{ height: rainDrop * 2 }}></div>;
  };
  return (
    <div className="forecast-bar_rain-drop">
      <div className="rain-height" style={{ bottom: rainDrop * 2 }}>
        {rainDrop === 0 ? '' : `${rainDrop},0 mm`}
      </div>
      {rain()}
    </div>
  );
};

export default RainDrop;
