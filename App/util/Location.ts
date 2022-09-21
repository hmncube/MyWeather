import Geolocation from '@react-native-community/geolocation';
import {Cood} from '../data/Cood';

export const Location = () => {
  console.log('Location');
  Geolocation.getCurrentPosition(
    pos => {
      console.log(pos);

      //const position = JSON.stringify(pos);
      const cood = new Cood(pos.coords.latitude, pos.coords.longitude);
      console.log('position');
      console.log(cood);
      return cood;
    },
    error => Alert.alert('GetCurrentPosition Error', JSON.stringify(error)),
    {enableHighAccuracy: true},
  );
};
