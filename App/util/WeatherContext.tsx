import React, {createContext, useState, useEffect} from 'react';
import {Cood} from '../data/Cood';
import {WeatherData} from '../data/WeatherData';
import {Api} from '../util/Api';
import Geolocation from '@react-native-community/geolocation';

export const WeatherContext = createContext();

export const WeatherContextProvider = ({children}) => {
  const [weatherData, setWeatherData] = useState<WeatherData>({});
  const [cood, setCood] = useState<Cood>(null);
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
        console.log(pos);
        const coordinates = new Cood(pos.coords.latitude, pos.coords.longitude);
        setCood(coordinates);
        getWeather(coordinates);
      },
      error => Alert.alert('GetCurrentPosition Error', JSON.stringify(error)),
      {enableHighAccuracy: true},
    );
  };

  const getWeather = (coordinates: Cood) => {
    console.log('getWeather');
    Api(coordinates.lat, coordinates.long)
      .then(response => response.json())
      .then(data => setWeatherData(data))
      .catch(error => {
        console.log(error);
      })
      .then(() => {
        setIsLoading(false);
      });
  };

  return (
    <WeatherContext.Provider value={contextValue}>
      {children}
    </WeatherContext.Provider>
  );
};
