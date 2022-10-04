import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeMode = async value => {
  try {
    await AsyncStorage.setItem('mode', value);
  } catch (e) {
    // saving error
  }
};

export const getMode = async () => {
  try {
    return await AsyncStorage.getItem('mode');
  } catch (e) {
    // error reading value
  }
};

export const storeWeatherData = async (cood, value) => {
  try {
    await AsyncStorage.setItem(cood, value);
  } catch (e) {
    console.log('Db error', e);
  }
};

export const getDbWeatherData = async cood => {
  try {
    return await AsyncStorage.getItem(cood);
  } catch (e) {
    // error reading value
  }
};
