import Geolocation from '@react-native-community/geolocation';
import {Cood} from '../data/Cood';
import {ApiResponse} from '../data/ApiResponse';

export const Location = async onSuccess => {
  console.log('Location');
  await Geolocation.getCurrentPosition(
    pos => {
      console.log(pos);
      const cood = new Cood(pos.coords.latitude, pos.coords.longitude);
      console.log('position');
      console.log(cood);
      onSuccess(cood);
      return new ApiResponse(true, null, cood);
    },
    error => {
      return new ApiResponse(false, JSON.stringify(error), null);
    },
    {enableHighAccuracy: true},
  );
};
