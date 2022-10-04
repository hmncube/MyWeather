import React, {useState, useEffect} from 'react';
import {LogBox} from 'react-native';
import Navigation from './config/Navigation';
import {WeatherContextProvider} from './util/WeatherContext';
import {WithSplashScreen} from './screens/WithSplashScreen';

const App = () => {
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    initialize().then(() => {
      setIsAppReady(true);
    });
  }, []);
  LogBox.ignoreLogs(['new NativeEventEmitter']);
  return (
    <WithSplashScreen isAppReady={isAppReady}>
      <WeatherContextProvider>
        <Navigation />
      </WeatherContextProvider>
    </WithSplashScreen>
  );
};

const initialize = async () => {};
export default App;
