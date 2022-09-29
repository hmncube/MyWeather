import React from 'react';
import Navigation from './config/Navigation';
import {WeatherContextProvider} from './util/WeatherContext';
import {AppearanceProvider} from 'react-native-appearance';

const App = () => {
  return (
    <AppearanceProvider>
      <WeatherContextProvider>
        <Navigation />
      </WeatherContextProvider>
    </AppearanceProvider>
  );
};

export default App;
