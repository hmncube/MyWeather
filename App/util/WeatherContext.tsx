import React, {createContext, useState, useEffect} from 'react';
import {useColorScheme} from 'react-native';
import {Cood} from '../data/Cood';
import {WeatherData} from '../data/WeatherData';
import {getWeatherData} from '../util/Repository';
import Geolocation from '@react-native-community/geolocation';
import {Error} from '../data/Error';

export const WeatherContext = createContext();

export const WeatherContextProvider = ({children}) => {
  const [weatherData, setWeatherData] = useState<WeatherData>({});
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [apiError, setApiError] = useState<Error>(new Error(false, ''));
  let isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    getCood();
  }, []);

  const contextValue = {
    weatherData,
    isLoading,
    apiError,
    isDarkMode,
  };
  const toggleMode = () => {
    isDarkMode = !isDarkMode;
  };

  const getCood = async () => {
    Geolocation.getCurrentPosition(
      pos => {
        const coordinates = new Cood(pos.coords.latitude, pos.coords.longitude);
        getWeather(coordinates);
      },
      error => {
        const locError = new Error(
          true,
          'Failed to get current position. \n' +
            JSON.stringify(error) +
            '\nIs your location turned on?',
        );
        setApiError(locError);
        setIsLoading(false);
        //Console.log('GetCurrentPosition Error', JSON.stringify(error));
      },
      {enableHighAccuracy: true},
    );
  };

  const getWeather = async (coordinates: Cood) => {
    const res = await getWeatherData(coordinates);
    console.log('in getWeather');
    if (res == null) {
      const locError = new Error(
        true,
        'Failed to get weather forecast. \n' + '\nIs your data turned on?',
      );
      setApiError(locError);
    } else {
      setWeatherData(res);
    }
    setIsLoading(false);
  };

  return (
    <WeatherContext.Provider value={contextValue}>
      {children}
    </WeatherContext.Provider>
  );
};
