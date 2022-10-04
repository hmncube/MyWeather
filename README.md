# MyWeather

A simple react native weather app I built while learning React Native
**Lessons learnt **
- TypeScript
- Navigation with `react-navigation/native`
- User GPS location using `react-native-community/geolocation` 
- Lottie Animation with `react-native-animated-loader`
- Splash Screen 
- Database(ish) with `react-native-async-storage/async-storage`
- Testing `jest`
- Error handling with `react-error-boundary` and `react-native-restart`
- Using Icons from `react-native-vector-icons`

The app will get the users location when it starts and check the DB if it contains valid weather data.
If it does it return the data from the DB but if not it makes a call to the openweathermap to get the data, saves it to the DB and returns it.

The weather data is from https://openweathermap.org/ 

To run the app 
- pull the code 
- Open an account from https://openweathermap.org/ and get YOUR_API_KEY
- create a `.env` file in the root directory and add the contents as below

`BASE_URL=https://api.openweathermap.org/data/2.5/forecast?`

`API_KEY=YOUR_API_KEY`


The awesome weather Icons from https://www.dovora.com/resources/weather-icons/
