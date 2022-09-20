/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React, {useState, useEffect} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ImageBackground,
} from 'react-native';
import Card from './components/Card';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Geolocation from '@react-native-community/geolocation';
import AnimatedLoader from 'react-native-animated-loader';
import {API_KEY, BASE_URL} from '@env';

const App = () => {
  const [weather, setWeather] = useState<resultProps>({});
  const [isLoading, setloading] = useState<Boolean>(true);
  const [position, setPosition] = useState<string | null>(null);

  useEffect(() => {
    getCurrentPosition();
  }, []);

  const getCurrentPosition = () => {
    Geolocation.getCurrentPosition(
      pos => {
        setPosition(JSON.stringify(pos));
        console.log('position');
        console.log(pos.coords.latitude);
        const url =
          BASE_URL +
          'lat=' +
          pos.coords.latitude +
          '&lon=' +
          pos.coords.longitude +
          '&appid=' +
          API_KEY +
          '&units=metric';
        console.log(url);
        api(url);
      },
      error => Alert.alert('GetCurrentPosition Error', JSON.stringify(error)),
      {enableHighAccuracy: true},
    );
  };
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  type resultProps = {
    city: cityDetails;
    cod: string;
    cnt: number;
    list: forecast[];
  };
  type forecast = {
    dt: number;
    main: hourlyForecastDetails;
    weather: weatherDesc[];
    clouds: cloud;
    wind: windDetails;
    visibility: number;
    pop: number;
    sys: sysDetails;
    dt_txt: string;
  };
  type sysDetails = {
    pod: string;
  };
  type windDetails = {
    speed: number;
    deg: number;
    gust: number;
  };
  type cloud = {
    all: number;
  };
  type weatherDesc = {
    id: number;
    main: string;
    description: string;
    icon: string;
  };
  type hourlyForecastDetails = {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  };
  type cityDetails = {
    cood: coordinates;
    country: string;
    id: number;
    name: string;
    population: number;
    sunrise: number;
    sunset: number;
    timezone: number;
  };
  type coordinates = {
    lat: number;
    lon: number;
  };

  const api = async (url: string) => {
    try {
      const data = await fetch(url, {
        method: 'GET',
      });
      const jsonData = await data.json();
      console.log('weather');
      console.log(jsonData);
      setWeather(jsonData);
      return jsonData;
    } catch (error) {
      console.error(error);
    } finally {
      setloading(false);
    }
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      {isLoading ? (
        <View style={styles.loading}>
          <AnimatedLoader
            visible={true}
            source={require('./assets/animation/weather.json')}
            overlayColor="rgba(255,255,255,0.75)"
            animationStyle={styles.animation}
            speed={1}
          />
        </View>
      ) : (
        <ImageBackground
          source={require('./assets/images/cloud.png')}
          resizeMode="cover"
          style={styles.imageBackground}>
          <Text style={styles.city}>{weather.city.name}</Text>
          <Text style={styles.temp}>
            {weather.list[0].weather[0].description}
          </Text>
          <ScrollView>
            <View style={styles.cardRow}>
              <Card
                name={'Tempererature'}
                value={Math.round(weather.list[0].main.temp) + '°'}
                imageUrl={require('./assets/images/temp.png')}
                isDarkMode={isDarkMode}
              />
              <Card
                name={'Sunrise'}
                value={'5:30'}
                imageUrl={require('./assets/images/sunrise.png')}
                isDarkMode={isDarkMode}
              />
            </View>
            <View style={styles.cardRow}>
              <Card
                name={'Pressure'}
                value={weather.list[0].main.pressure}
                imageUrl={require('./assets/images/pressure.png')}
                isDarkMode={isDarkMode}
              />

              <Card
                name={'Humidity'}
                value={weather.list[0].main.humidity + '%'}
                imageUrl={require('./assets/images/humidity.png')}
                isDarkMode={isDarkMode}
              />
            </View>
            <View style={styles.cardRow}>
              <Card
                name={'Wind Speed'}
                value={weather.list[0].wind.speed}
                imageUrl={require('./assets/images/speed.png')}
                isDarkMode={isDarkMode}
              />
              <Card
                name={'Wind Direction'}
                value={weather.list[0].wind.deg}
                imageUrl={require('./assets/images/direction.png')}
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

export default App;
