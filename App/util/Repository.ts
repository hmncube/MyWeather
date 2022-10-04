import {
  getDbWeatherData,
  storeWeatherData,
  getMode,
  storeMode,
} from './DataBase';
import {Cood} from '../data/Cood';
import {Api} from './Api';

export const getAppearanceMode = async () => {
  const mode = await getMode();
  return mode != null ? JSON.parse(mode) : false;
};

export const storeAppearanceMode = async (mode: Boolean) => {
  await storeMode(JSON.stringify(mode));
};

export const getWeatherData = async (cood: Cood) => {
  const lat = getTwoDecimalPlaces(String(cood.lat));
  const long = getTwoDecimalPlaces(String(cood.long));
  const coodKey = String(lat).concat(String(long));
  try {
    const weatherdata = await getDbWeatherData(coodKey);
    const isValid = checkIfDataIsStillValid(weatherdata);
    if (weatherdata == null || !isValid) {
      const apiResp = await Api(lat, long);
      const data = await apiResp.json();
      await storeWeatherData(coodKey, JSON.stringify(data));
    }
  } catch (error) {
    console.log(error);
  }
  const res = await getDbWeatherData(coodKey);
  return res != null ? JSON.parse(res) : null;
};

const checkIfDataIsStillValid = jsonData => {
  if (jsonData == null) {
    return false;
  }
  const data = JSON.parse(jsonData);
  const hoursDiff = hoursTimeDiff(data.list[1].dt_txt);
  return hoursDiff > 0;
};

function hoursTimeDiff(forecast: string) {
  const forecastDate = new Date(forecast);
  const msInHour = 1000 * 60 * 60;
  return (forecastDate - new Date()) / msInHour;
}
const getTwoDecimalPlaces = (value: string) => {
  //OPTION convert to number and round down to 2 decimal places
  const decimalPlace = value.indexOf('.');
  const length = value.length;
  const afterDecimal = length - decimalPlace;
  if (afterDecimal < 3) {
    return value;
  } else {
    const end = decimalPlace + 3;
    return value.substr(0, end);
  }
};
