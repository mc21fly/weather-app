import React from 'react';
import './Label.css';

const Label = () => {
  return (
    <div className="label">
      <Section height="3.3%">Dzień</Section>
      <Section height="6.1%">Godzina</Section>
      <Section height="7.2%">Prognoza</Section>
      <Section height="24%">Temperatura</Section>
      <Section height="12.9%">Opady</Section>
      <Section height="12.9%">Kierunek wiatru</Section>
      <Section height="10.6%">Prędkość wiatru</Section>
      <Section height="21.6%">Ciśnienie</Section>
    </div>
  );
};

const Section = (props) => {
  return (
    <div className="label-section" style={{ height: props.height }}>
      {props.children}
    </div>
  );
};

export default Label;
