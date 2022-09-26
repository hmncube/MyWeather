import React, {useContext} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ImageBackground,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import Card from '../components/Card';
import {WeatherContext} from '../util/WeatherContext';
import Button from '../components/Button';
import darkTheme from '../constants/darkTheme';
import {ErrorHandler} from '../util/ErrorHandler';

const Weather = ({navigation}) => {
  const {weatherData, isLoading, apiError} = useContext(WeatherContext);
  const isDarkMode = true;
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={darkTheme.background}
      />
      {isLoading ? (
        <View style={styles.loading}>
          {<ActivityIndicator size="large" color="#00ff00" />}
          <Text> Loading </Text>
        </View>
      ) : apiError.isError ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{apiError.msg}</Text>
        </View>
      ) : (
        <ErrorHandler>
          <ImageBackground
            source={require('../assets/images/cloud.png')}
            resizeMode="cover"
            style={styles.imageBackground}>
            <Text style={styles.cityNameText}>{weatherData.city.name}</Text>
            <Text style={styles.descriptionText}>
              {weatherData.list[0].weather[0].description}
            </Text>
            <ScrollView>
              <View style={styles.cardRow}>
                <Card
                  name={'Tempererature'}
                  value={Math.round(weatherData.list[0].main.temp) + '°'}
                  imageUrl={require('../assets/images/temp.png')}
                  isDarkMode={isDarkMode}
                />
                <Card
                  name={'Sunrise'}
                  value={'5:30'}
                  imageUrl={require('../assets/images/sunrise.png')}
                  isDarkMode={isDarkMode}
                />
              </View>
              <View style={styles.cardRow}>
                <Card
                  name={'Pressure'}
                  value={weatherData.list[0].main.pressure}
                  imageUrl={require('../assets/images/pressure.png')}
                  isDarkMode={isDarkMode}
                />

                <Card
                  name={'Humidity'}
                  value={weatherData.list[0].main.humidity + '%'}
                  imageUrl={require('../assets/images/humidity.png')}
                  isDarkMode={isDarkMode}
                />
              </View>
              <View style={styles.cardRow}>
                <Card
                  name={'Wind Speed'}
                  value={weatherData.list[0].wind.speed}
                  imageUrl={require('../assets/images/speed.png')}
                  isDarkMode={isDarkMode}
                />
                <Card
                  name={'Wind Direction'}
                  value={weatherData.list[0].wind.deg}
                  imageUrl={require('../assets/images/direction.png')}
                  isDarkMode={isDarkMode}
                />
              </View>
            </ScrollView>
            <Button
              onPress={() => navigation.navigate('Forecast')}
              title="FORECAST"
            />
          </ImageBackground>
        </ErrorHandler>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  errorContainer: {
    backgroundColor: darkTheme.error,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  errorText: {
    backgroundColor: darkTheme.onError,
  },
  backgroundStyle: {
    flex: 1,
  },
  cardRow: {
    flex: 1,
    flexDirection: 'row',
  },
  cityNameText: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  descriptionText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  animation: {
    height: 100,
    width: 100,
  },
  loading: {
    backgroundColor: darkTheme.background,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 200,
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
});

export default Weather;
