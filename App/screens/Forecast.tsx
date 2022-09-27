import React, {useContext} from 'react';
import {View, StatusBar, StyleSheet, FlatList} from 'react-native';
import {WeatherContext} from '../util/WeatherContext';
import ForecastCard from '../components/ForecastCard';
import darkTheme from '../constants/darkTheme';
import {ForecastCardItem} from '../data/ForecastCardItem';
import ConvertTime from '../util/ConvertTime';
import {ErrorHandler} from '../util/ErrorHandler';

const createData = data => {
  let hourForecast = [];
  const allForecasts = [];
  const timezone = data.city.timezone;
  data.list.map(w => {
    hourForecast.push(
      ConvertTime(w.dt, timezone),
      new ForecastCardItem(
        require('../assets/images/temp.png'),
        'Temperature',
        Math.round(w.main.temp),
      ),
      new ForecastCardItem(
        require('../assets/images/pressure.png'),
        'Pressure',
        w.main.pressure,
      ),
      new ForecastCardItem(
        require('../assets/images/humidity.png'),
        'humidity',
        w.main.humidity,
      ),
    );
    allForecasts.push(hourForecast);
    hourForecast = [];
  });
  return allForecasts;
};

const Forecast = isDarkMode => {
  const {weatherData} = useContext(WeatherContext);
  const forecasts = createData(weatherData);
  return (
    <ErrorHandler>
      <View style={styles(isDarkMode).container}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={
            isDarkMode ? darkTheme.background : lightTheme.background
          }
        />
        <FlatList
          data={forecasts}
          renderItem={({item}) => <ForecastCard forecastCardData={item} />}
        />
      </View>
    </ErrorHandler>
  );
};

const styles = isDarkMode =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode
        ? darkTheme.background
        : lightTheme.background,
    },
    imageBackground: {
      flex: 1,
      justifyContent: 'center',
    },
  });
export default Forecast;
