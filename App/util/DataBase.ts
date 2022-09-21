import AsyncStorage from '@react-native-async-storage/async-storage';

// export const storeDate = async value => {
//   try {
//     await AsyncStorage.setItem('lastCood', value);
//   } catch (e) {
//     // saving error
//   }
// };

// export const getDate = async () => {
//   try {
//     return await AsyncStorage.getItem('lastCood');
//   } catch (e) {
//     // error reading value
//   }
// };

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
