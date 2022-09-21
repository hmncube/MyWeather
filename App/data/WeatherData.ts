export class WeatherData {
  city: cityDetails;
  cod: string;
  cnt: number;
  list: forecast[];
}
export class forecast {
  dt: number;
  main: hourlyForecastDetails;
  weather: weatherDesc[];
  clouds: cloud;
  wind: windDetails;
  visibility: number;
  pop: number;
  sys: sysDetails;
  dt_txt: string;
}
export class sysDetails {
  pod: string;
}
export class windDetails {
  speed: number;
  deg: number;
  gust: number;
}
export class cloud {
  all: number;
}
export class weatherDesc {
  id: number;
  main: string;
  description: string;
  icon: string;
}
export class hourlyForecastDetails {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}
export class cityDetails {
  cood: coordinates;
  country: string;
  id: number;
  name: string;
  population: number;
  sunrise: number;
  sunset: number;
  timezone: number;
}
export class coordinates {
  lat: number;
  lon: number;
}
