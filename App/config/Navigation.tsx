import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Weather from '../screens/Weather';
import Forecast from '../screens/Forecast';
import darkTheme from '../constants/darkTheme';

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
const Navigation = () => {
  console.log('in Navigation');
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Weather"
          component={Weather}
          options={{
            headerShown: false,
            transitionSpec: {
              open: config,
              close: config,
            },
          }}
        />
        <Stack.Screen
          name="Forecast"
          component={Forecast}
          options={{
            title: 'Forecast',
            headerStyle: {
              backgroundColor: darkTheme.surface,
            },
            headerTintColor: darkTheme.onSurface,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            transitionSpec: {
              open: config,
              close: config,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
