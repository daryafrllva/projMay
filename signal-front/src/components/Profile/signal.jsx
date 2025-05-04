import React from 'react';
import WeekendSignal from './weekendSignalage';

const App = () => {
  const today = new Date().getDay(); 
  const isWeekend = today === 0 || today === 6; 

  return (
    
  );
};

export default App;