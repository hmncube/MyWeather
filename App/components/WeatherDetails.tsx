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

const WeatherDetails = ({data, isDarkMode, navigation}) => {
  const dayLength = TimeDifference(data.city.sunrise, data.city.sunset);
  const sunrise = GetHourTime(ConvertTime(data.city.sunrise));
  const sunset = GetHourTime(ConvertTime(data.city.sunset));
  let isDay = true;
  const hoursRemaining = () => {
    const now = GetHourTime(new Date().toLocaleString());
    const nowValues = getHourMinAndNotationFromDate(now);
    const notation = nowValues.notation;
    let hour = nowValues.hour;
    const min = nowValues.min;

    const sunsetValues = getHourMinAndNotationFromDate(sunset);
    let sunsetHour = sunsetValues.hour;
    let sunsetMin = sunsetValues.min;
    let sunsetNotation = sunsetValues.notation;

    const diff = TimeDiff(
      min,
      hour,
      notation,
      sunsetMin,
      sunsetHour,
      sunsetNotation,
    );
    return diff.leftHour + ' hrs ' + diff.leftMin + ' min';
  };

  const TimeDiff = (
    beforeMin: number,
    beforeHour: number,
    notationBefore: string,
    afterMin: number,
    afterHour: number,
    notaionAfter: string,
  ) => {
    if (notationBefore === 'PM') {
      beforeHour = beforeHour + 12;
    }
    if (notaionAfter === 'PM') {
      afterHour = afterHour + 12;
    }
    if (afterMin < beforeMin) {
      afterMin = afterMin + 60;
      beforeHour = beforeHour + 1;
    }
    const leftMin = afterMin - beforeMin;
    const leftHour = afterHour - beforeHour;
    return {leftHour, leftMin};
  };

  const getHourMinAndNotationFromDate = date => {
    const dateArray = date.split(' ')[1].split(':');
    const notation = date.split(' ')[2];
    let hour = Number(dateArray[0]);
    const min = Number(dateArray[1]);
    console.log(hour);

    return {notation, hour, min};
  };
  return (
    <>
      <View style={styles(isDarkMode).iconContainer}>
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
          pressure={data.list[0].main.pressure}
          humidity={data.list[0].main.humidity + '%'}
          isDarkMode={isDarkMode}
        />
        <Sunshine
          sunrise={sunrise}
          sunset={sunset}
          length={dayLength + ' Hours'}
          remaining={hoursRemaining()}
          isDay={isDay}
          isDarkMode={isDarkMode}
        />
      </View>

      <Button
        onPress={() => navigation.navigate('Forecast')}
        title={'3 HOUR FORECAST'}
        isDarkMode={isDarkMode}
      />
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
    iconContainer: {
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
  });

export default WeatherDetails;
