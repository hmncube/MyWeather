import React, {useContext} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import darkTheme from '../constants/darkTheme';
import lightTheme from '../constants/lightTheme';
import Loading from '../components/Loading';
import Error from '../components/Error';
import WeatherDetails from '../components/WeatherDetails';
import {WeatherContext} from '../util/WeatherContext';

const Weather = ({navigation}) => {
  const isDarkMode = true;
  const {weatherData, isLoading, apiError} = useContext(WeatherContext);
  return (
    <SafeAreaView style={styles(isDarkMode).backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={
          isDarkMode ? darkTheme.background : lightTheme.background
        }
      />
      {isLoading ? (
        <Loading isDarkMode={isDarkMode} />
      ) : apiError.isError ? (
        <Error msg={'error'} isDarkMode={isDarkMode} navigation={navigation} />
      ) : (
        <WeatherDetails
          data={weatherData}
          isDarkMode={isDarkMode}
          navigation={navigation}
        />
      )}
    </SafeAreaView>
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

export default Weather;
