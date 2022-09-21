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

const Weather = ({navigation}) => {
  console.log('in weather');
  const {weatherData, isLoading} = useContext(WeatherContext);
  const isDarkMode = true;
  //const isLoading = true;

  const backgroundStyle = {
    backgroundColor: 'blue',
    flex: 1,
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      {/* <Text> Test </Text> */}
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      {isLoading ? (
        <View style={styles.loading}>
          {<ActivityIndicator size="large" color="#00ff00" />}
          <Text> Loading </Text>
        </View>
      ) : (
        <ImageBackground
          source={require('../assets/images/cloud.png')}
          resizeMode="cover"
          style={styles.imageBackground}>
          <Text style={styles.city}>{weatherData.city.name}</Text>
          <Text style={styles.temp}>
            {weatherData.list[0].weather[0].description}
          </Text>
          <ScrollView>
            <View style={styles.cardRow}>
              <Card
                name={'Tempererature'}
                value={Math.round(weatherData.list[0].main.temp) + '°'}
                imageUrl={require('../assets/images/temp.png')}
                isDarkMode={isDarkMode}
                navigateTo={() => navigation.navigate('Forecast')}
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
        </ImageBackground>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cardRow: {
    flex: 1,
    flexDirection: 'row',
  },
  city: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  temp: {
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
