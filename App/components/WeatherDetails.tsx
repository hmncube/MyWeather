import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import darkTheme from '../constants/darkTheme';
import lightTheme from '../constants/lightTheme';
import WeatherNow from '../components/WeatherNow';
import Sunshine from '../components/Sunshine';
import Button from '../components/Button';

const WeatherDetails = ({isDarkMode, navigation}) => {
  return (
    <>
      <View style={styles(isDarkMode).iconContainer}>
        <Image
          style={styles(isDarkMode).weatherIcon}
          source={require('../assets/images/hot.png')}
        />
        <View style={styles(isDarkMode).row}>
          <Text style={[styles(isDarkMode).text, styles(isDarkMode).nameText]}>
            Domboshava
          </Text>
          <Image
            style={styles(isDarkMode).locationIcon}
            source={require('../assets/images/location.png')}
          />
        </View>
        <Text
          style={[styles(isDarkMode).text, styles(isDarkMode).temparatueText]}>
          20°
        </Text>
        <WeatherNow
          time={'12:00 PM'}
          pressure={'100'}
          humidity={'32'}
          isDarkMode={isDarkMode}
        />
        <Sunshine
          sunrise={'6:30AM'}
          sunset={'6:30PM'}
          length={'16h'}
          remaining={'13h'}
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
