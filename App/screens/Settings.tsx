import React, {useContext} from 'react';
import {View, Switch, StyleSheet, Text} from 'react-native';
import darkTheme from '../constants/darkTheme';
import lightTheme from '../constants/lightTheme';
import {WeatherContext} from '../util/WeatherContext';

const Settings = () => {
  const {isDarkMode, setAppearanceMode} = useContext(WeatherContext);
  const toggleSwitch = () => {
    setAppearanceMode(!isDarkMode);
  };
  let mode = isDarkMode ? 'ON' : 'OFF';
  return (
    <>
      <View style={styles(isDarkMode).container}>
        <Text style={styles(isDarkMode).text}>Dark Mode {mode}</Text>
        <Switch
          trackColor={{false: lightTheme.secondary, true: darkTheme.secondary}}
          thumbColor={isDarkMode ? darkTheme.primary : lightTheme.primary}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isDarkMode}
        />
      </View>
    </>
  );
};

const styles = isDarkMode =>
  StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: isDarkMode
        ? darkTheme.background
        : lightTheme.background,
    },
    text: {
      color: isDarkMode ? darkTheme.onBackground : lightTheme.onBackground,
      fontSize: 12,
      textAlign: 'center',
      marginHorizontal: 16,
    },
  });

export default Settings;
