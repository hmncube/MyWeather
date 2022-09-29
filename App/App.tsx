import React from 'react';
import Navigation from './config/Navigation';
import {WeatherContextProvider} from './util/WeatherContext';
const App = () => {
  return (
    <WeatherContextProvider>
      <Navigation />
    </WeatherContextProvider>
  );
};

export default App;
