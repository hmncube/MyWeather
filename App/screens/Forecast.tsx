import React, {useContext} from 'react';
import {
  View,
  StatusBar,
  StyleSheet,
  ImageBackground,
  FlatList,
} from 'react-native';
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

const Forecast = () => {
  const {weatherData} = useContext(WeatherContext);
  const forecasts = createData(weatherData);
  return (
    <ErrorHandler>
      <View style={styles.container}>
        <StatusBar
          barStyle={'light-content'}
          backgroundColor={darkTheme.background}
        />
        <ImageBackground
          source={require('../assets/images/cloud.png')}
          resizeMode="cover"
          style={styles.imageBackground}>
          <FlatList
            data={forecasts}
            renderItem={({item}) => <ForecastCard forecastCardData={item} />}
          />
        </ImageBackground>
      </View>
    </ErrorHandler>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: darkTheme.background,
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
  },
});
export default Forecast;
