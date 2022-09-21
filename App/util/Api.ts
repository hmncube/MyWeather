import {API_KEY, BASE_URL} from '@env';

export const Api = (lat: string, long: string) => {
  const url =
    BASE_URL +
    'lat=' +
    lat +
    '&lon=' +
    long +
    '&appid=' +
    API_KEY +
    '&units=metric';
  return fetch(url, {
    method: 'GET',
  });
};
