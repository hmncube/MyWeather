import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import darkTheme from '../constants/darkTheme';
import lightTheme from '../constants/lightTheme';

const Button = ({onPress, title, isDarkMode}) => {
  return (
    <Pressable
      style={styles(isDarkMode).button}
      onPress={() => {
        onPress();
      }}>
      <Text style={styles(isDarkMode).text}>{title}</Text>
    </Pressable>
  );
};

const styles = isDarkMode =>
  StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 12,
      marginVertical: 6,
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: isDarkMode ? darkTheme.primary : lightTheme.primary,
      marginTop: 16,
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: isDarkMode ? darkTheme.onPrimary : lightTheme.onPrimary,
    },
  });

export default Button;
