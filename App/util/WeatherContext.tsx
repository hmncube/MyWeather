import React, {createContext, useState, useEffect} from 'react';
import {useColorScheme} from 'react-native';
import {Cood} from '../data/Cood';
import {WeatherData} from '../data/WeatherData';
import {
  getWeatherData,
  storeAppearanceMode,
  getAppearanceMode,
} from '../util/Repository';
import Geolocation from '@react-native-community/geolocation';
import {Error} from '../data/Error';

export const WeatherContext = createContext();

export const WeatherContextProvider = ({children}) => {
  const [weatherData, setWeatherData] = useState<WeatherData>({});
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [apiError, setApiError] = useState<Error>(new Error(false, ''));
  const [isDarkMode, setMode] = useState<Boolean>(useColorScheme() === 'dark');
  useEffect(() => {
    getMode();
    getCood();
  }, []);

  const getMode = async () => {
    const mode = await getAppearanceMode();
    console.log(typeof mode);
    console.log(mode);
    setMode(mode);
  };

  const setAppearanceMode = async mode => {
    setMode(mode);
    await storeAppearanceMode(mode);
  };

  const contextValue = {
    weatherData,
    isLoading,
    apiError,
    isDarkMode,
    setAppearanceMode,
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
