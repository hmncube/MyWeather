import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import darkTheme from '../constants/darkTheme';
import lightTheme from '../constants/lightTheme';
import WeatherNow from '../components/WeatherNow';
import Sunshine from '../components/Sunshine';
import Button from '../components/Button';
import GetHourTime from '../util/GetHourTime';
import ConvertTime from '../util/ConvertTime';
import TimeDifference from '../util/TimeDifference';
import WeatherIcons from '../util/WeatherIcons';
import HoursRemaining from '../time/HoursRemaining';

const WeatherDetails = ({data, isDarkMode, navigation}) => {
  const dayLength = TimeDifference(data.city.sunrise, data.city.sunset);
  const sunrise = GetHourTime(ConvertTime(data.city.sunrise));
  const sunset = GetHourTime(ConvertTime(data.city.sunset));
  let isDay = true;
  const now = GetHourTime(new Date().toLocaleString());
  const remaining = HoursRemaining(now, sunset);
  return (
    <>
      <View style={styles(isDarkMode).container}>
        <Image
          style={styles(isDarkMode).weatherIcon}
          source={WeatherIcons(data.list[0].weather[0].icon)}
        />
        <View style={styles(isDarkMode).row}>
          <Text style={[styles(isDarkMode).text, styles(isDarkMode).nameText]}>
            {data.city.name}
          </Text>
          <Image
            style={styles(isDarkMode).locationIcon}
            source={require('../assets/images/location.png')}
          />
        </View>
        <Text
          style={[styles(isDarkMode).text, styles(isDarkMode).temparatueText]}>
          {Math.round(data.list[0].main.temp) + '°'}
        </Text>
        <WeatherNow
          description={data.list[0].weather[0].description.toUpperCase()}
          pressure={data.list[0].main.pressure + ' hPa'}
          humidity={data.list[0].main.humidity + '%'}
          isDarkMode={isDarkMode}
        />
        <Sunshine
          sunrise={sunrise}
          sunset={sunset}
          length={dayLength}
          remaining={remaining}
          isDay={isDay}
          isDarkMode={isDarkMode}
        />
      </View>

      <View style={styles(isDarkMode).buttonContainer}>
        <Button
          onPress={() => navigation.navigate('Forecast')}
          title={'3 HOUR FORECAST'}
          isDarkMode={isDarkMode}
        />
      </View>
    </>
  );
};

const styles = isDarkMode =>
  StyleSheet.create({
    backgroundStyle: {
      backgroundColor: isDarkMode
        ? darkTheme.background
        : lightTheme.background,
      flex: 1,
    },
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    locationIcon: {
      margin: 10,
      height: 21,
      width: 21,
    },
    weatherIcon: {
      marginTop: 16,
      height: 123,
      width: 123,
    },
    text: {
      color: isDarkMode ? darkTheme.onBackground : lightTheme.onBackground,
    },
    nameText: {
      fontSize: 30,
      fontWeight: 'bold',
    },
    temparatueText: {
      fontSize: 70,
      fontWeight: 'bold',
    },
    row: {
      flexDirection: 'row',
      margin: 8,
      alignSelf: 'stretch',
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonContainer: {
      flex: 1,
      justifyContent: 'flex-end',
    },
  });

export default WeatherDetails;
