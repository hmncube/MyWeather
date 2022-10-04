import React from 'react';
import {View, StyleSheet} from 'react-native';
import darkTheme from '../constants/darkTheme';
import lightTheme from '../constants/lightTheme';

const Card = ({view, isDarkMode}) => {
  return <View style={styles(isDarkMode).container}>{view}</View>;
};

const styles = isDarkMode =>
  StyleSheet.create({
    container: {
      backgroundColor: isDarkMode ? darkTheme.surface : lightTheme.surface,
      margin: 8,
      borderWidth: 1,
      borderRadius: 11,
      borderColor: isDarkMode ? darkTheme.surface : lightTheme.surface,
      alignSelf: 'stretch',
    },
  });

export default Card;
