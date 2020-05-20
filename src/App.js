import React from 'react';
import './App.css';

import { Label, Weather } from './components';

const App = () => {
  return (
    <div className="main">
      <Label />
      <Weather />
    </div>
  );
};

export default App;
