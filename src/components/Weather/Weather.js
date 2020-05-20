import React, { useState, useRef, useEffect } from 'react';
import './Weather.css';

import { weather } from './weather.json';

import { ForecastBar } from '../';

const Weather = () => {
  const [isMovable, setIsMovable] = useState(false);
  const [coursorStartPosition, setCursorStartPosition] = useState(null);
  const [currentDisplayPosition, setCurrentDisplayPosition] = useState(null);
  const [temperaturePoints, setTempteraturePoints] = useState([]);
  const [pressurePoints, setPressurePoints] = useState([]);

  const weatherRef = useRef();
  const scrollBarRef = useRef();
  const barRef = useRef();

  const pressureArray = weather.map((forecast) => forecast.pressure);
  const tempArray = weather.map((forecast) => forecast.temperature);

  const pressure = {
    max: Math.max(...pressureArray),
    min: Math.min(...pressureArray),
  };

  const temperature = {
    max: Math.max(...tempArray),
    min: Math.min(...tempArray),
  };

  const drawGraph = (ctx, array, color) => {
    let offsetX = 134;
    let offsetY = 5;

    ctx.lineWidth = 2;
    ctx.strokeStyle = `${color}`;

    for (let i = 0; i < array.length; i++) {
      ctx.beginPath();
      if (i !== array.length - 1) {
        ctx.moveTo(
          array[i].getBoundingClientRect().x - offsetX,
          array[i].getBoundingClientRect().y + offsetY
        );
        ctx.lineTo(
          array[i + 1].getBoundingClientRect().x - offsetX,
          array[i + 1].getBoundingClientRect().y + offsetY
        );
      }
      ctx.stroke();
    }
  };

  const mouseDownHandler = (e) => {
    weatherRef.current.style.scrollBehavior = 'auto';
    setIsMovable(true);
    setCursorStartPosition(e.clientX);
    scrollBarRef.current.style.opacity = '1';
  };

  const mouseMoveHandler = (e) => {
    barRef.current.style.left = `${
      (100 * weatherRef.current.scrollLeft) / weatherRef.current.scrollWidth
    }%`;
    return isMovable
      ? (weatherRef.current.scrollLeft =
          currentDisplayPosition + (coursorStartPosition - e.clientX))
      : null;
  };

  const mouseUpHandler = () => {
    setIsMovable(false);
    setCursorStartPosition(null);
    setCurrentDisplayPosition(weatherRef.current.scrollLeft);
    setTimeout(() => (scrollBarRef.current.style.opacity = '0'), 500);
  };

  const arrowClickHandler = (e) => {
    weatherRef.current.style.scrollBehavior = 'smooth';
    barRef.current.style.left = `${
      (100 * weatherRef.current.scrollLeft) / weatherRef.current.scrollWidth
    }%`;

    if (e.currentTarget.className === 'left-arrow') {
      if (weatherRef.current.scrollLeft % 140 === 0) {
        weatherRef.current.scrollLeft -= 140;
        setCurrentDisplayPosition(weatherRef.current.scrollLeft);
      } else {
        weatherRef.current.scrollLeft -= weatherRef.current.scrollLeft % 140;
        setCurrentDisplayPosition(weatherRef.current.scrollLeft);
      }
    } else if (e.currentTarget.className === 'right-arrow') {
      if (weatherRef.current.scrollLeft % 140 === 0) {
        weatherRef.current.scrollLeft += 140;
        setCurrentDisplayPosition(weatherRef.current.scrollLeft);
      } else {
        weatherRef.current.scrollLeft +=
          140 - (weatherRef.current.scrollLeft % 140);
        setCurrentDisplayPosition(weatherRef.current.scrollLeft);
      }
    }
  };

  useEffect(() => {
    // SETTING POINTS FOR GRAPH & SCROLLBAR BAR WIDTH
    document
      .querySelectorAll('.t')
      .forEach((e) => setTempteraturePoints((prev) => [...prev, e]));
    document
      .querySelectorAll('.p')
      .forEach((e) => setPressurePoints((prev) => [...prev, e]));
    barRef.current.style.width = `${
      (83 * weatherRef.current.clientWidth) / weatherRef.current.scrollWidth
    }%`;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let canvas = document.getElementById('canv');
    canvas.width = weatherRef.current.scrollWidth;
    canvas.height = weatherRef.current.scrollHeight;
    let ctx = canvas.getContext('2d');

    drawGraph(ctx, temperaturePoints, '#f9d348');
    drawGraph(ctx, pressurePoints, '#000000');
  }, [temperaturePoints, pressurePoints]);

  return (
    <div className="weather" ref={weatherRef}>
      <canvas id="canv"></canvas>
      <div
        className="touchpad"
        onMouseDown={(e) => mouseDownHandler(e)}
        onMouseMove={(e) => mouseMoveHandler(e)}
        onMouseUp={() => mouseUpHandler()}>
        <div className="left-arrow" onClick={(e) => arrowClickHandler(e)}>
          <i className="fas fa-caret-down"></i>
        </div>
        <div className="right-arrow" onClick={(e) => arrowClickHandler(e)}>
          <i className="fas fa-caret-down"></i>
        </div>
        <div className="scroll-bar" ref={scrollBarRef}>
          <div className="bar" ref={barRef}></div>
        </div>
      </div>
      {weather.map((forecast, index) => {
        return (
          <ForecastBar
            key={index}
            tomorrow={forecast.hour === 0 ? true : false}
            forecast={forecast}
            temperature={temperature}
            pressure={pressure}
          />
        );
      })}
    </div>
  );
};

export default Weather;
