import * as React from 'react';
import {useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Weather from '../screens/Weather';
import Forecast from '../screens/Forecast';
import Settings from '../screens/Settings';
import darkTheme from '../constants/darkTheme';
import lightTheme from '../constants/lightTheme';
import IconButton from '../components/IconButton';

const Stack = createNativeStackNavigator();
const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};
const options = ({navigation, isDarkMode}) => ({
  headerStyle: {
    backgroundColor: isDarkMode ? darkTheme.surface : lightTheme.surface,
  },
  headerTintColor: isDarkMode ? lightTheme.surface : darkTheme.surface,
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerRight: () => (
    <IconButton
      onPress={() => navigation.navigate('Settings')}
      iconName="md-settings-sharp"
      isDarkMode={isDarkMode}
    />
  ),
  transitionSpec: {
    open: config,
    close: config,
  },
});

const Navigation = () => {
  let isDarkMode = useColorScheme() === 'dark';
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Weather"
          component={Weather}
          options={options((isDarkMode = {isDarkMode}))}
        />
        <Stack.Screen name="Forecast" component={Forecast} options={options} />
        <Stack.Screen name="Settings" component={Settings} options={options} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
