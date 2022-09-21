import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {WeatherContext} from '../util/WeatherContext';

const Forecast = () => {
  const {weatherData, isLoading} = useContext(WeatherContext);
  console.log('in Forecast');
  console.log(weatherData);

  return (
    <View>
      <Text>Forecast</Text>
    </View>
  );
};

export default Forecast;
