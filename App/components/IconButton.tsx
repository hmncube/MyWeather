import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import darkTheme from '../constants/darkTheme';
import lightTheme from '../constants/lightTheme';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Button = ({onPress, iconName, isDarkMode}) => {
  return (
    <Pressable
      style={styles.button}
      onPress={() => {
        onPress();
      }}>
      <Ionicons
        name={iconName}
        color={isDarkMode ? lightTheme.surface : darkTheme.surface}
        size={24}
      />
    </Pressable>
  );
};

const styles = () =>
  StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    weatherIcon: {
      height: 16,
      width: 16,
    },
  });

export default Button;
