import React, {createContext, useState, useEffect} from 'react';
import {Cood} from '../data/Cood';
import {WeatherData} from '../data/WeatherData';
import {getWeatherData} from '../util/Repository';
import Geolocation from '@react-native-community/geolocation';

export const WeatherContext = createContext();

export const WeatherContextProvider = ({children}) => {
  const [weatherData, setWeatherData] = useState<WeatherData>({});
  const [isLoading, setIsLoading] = useState<Boolean>(true);

  useEffect(() => {
    getCood();
  }, []);

  const contextValue = {
    weatherData,
    isLoading,
  };
  const getCood = async () => {
    Geolocation.getCurrentPosition(
      pos => {
        const coordinates = new Cood(pos.coords.latitude, pos.coords.longitude);
        getWeather(coordinates);
      },
      error => Alert.alert('GetCurrentPosition Error', JSON.stringify(error)),
      {enableHighAccuracy: true},
    );
  };

  const getWeather = async (coordinates: Cood) => {
    const res = await getWeatherData(coordinates);
    setWeatherData(res);
    setIsLoading(false);
  };

  return (
    <WeatherContext.Provider value={contextValue}>
      {children}
    </WeatherContext.Provider>
  );
};
