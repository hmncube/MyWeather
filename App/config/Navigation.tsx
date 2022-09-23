import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Weather from '../screens/Weather';
import Forecast from '../screens/Forecast';
import darkTheme from '../constants/darkTheme';

const Stack = createNativeStackNavigator();
// const MainStackScreen = () => {
//   <Stack.Navigator>
//     <MainStack.Screen name="Weather" component={Weather} />
//     <MainStack.Screen name="Forecast" component={Forecast} />
//   </Stack.Navigator>;
// };

// export default () => {
//   <NavigationContainer>
//     <MainStackScreen />
//   </NavigationContainer>;
// };

const Navigation = () => {
  console.log('in Navigation');
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Weather"
          component={Weather}
          options={{headerShown: false}}
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
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
