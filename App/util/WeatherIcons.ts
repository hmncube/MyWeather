const WeatherIcons = (description: string) => {
  switch (description) {
    case '01d':
      return require('../assets/images/icons/day_clear.png');
    case '02d':
      return require('../assets/images/icons/day_partial_cloud.png');
    case '03d':
      return require('../assets/images/icons/cloudy.png');
    case '04d':
      return require('../assets/images/icons/overcast.png');
    case '09d':
      return require('../assets/images/icons/rain.png');
    case '10d':
      return require('../assets/images/icons/day_rain.png');
    case '11d':
      return require('../assets/images/icons/day_rain_thunder.png');
    case '13d':
      return require('../assets/images/icons/day_snow.png');
    case '50d':
      return require('../assets/images/icons/mist.png');
    case '01n':
      return require('../assets/images/icons/night_full_moon_clear.png');
    case '02n':
      return require('../assets/images/icons/night_full_moon_partial_cloud.png');
    case '03n':
      return require('../assets/images/icons/cloudy.png');
    case '04n':
      return require('../assets/images/icons/overcast.png');
    case '09n':
      return require('../assets/images/icons/rain.png');
    case '10n':
      return require('../assets/images/icons/night_full_moon_rain.png');
    case '11n':
      return require('../assets/images/icons/night_full_moon_rain_thunder.png');
    case '13n':
      return require('../assets/images/icons/night_full_moon_snow.png');
    case '50n':
      return require('../assets/images/icons/mist.png');
    default:
      return require('../assets/images/icons/day_clear.png');
  }
};

export default WeatherIcons;
