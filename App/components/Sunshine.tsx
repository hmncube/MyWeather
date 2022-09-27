import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Card from '../components/Card';
import darkTheme from '../constants/darkTheme';
import lightTheme from '../constants/lightTheme';

const Sunshine = ({sunrise, sunset, length, remaining, isDarkMode}) => {
  const view = createView(sunrise, sunset, length, remaining, isDarkMode);
  return <Card view={view} isDarkMode={isDarkMode} />;
};

const createView = (sunrise, sunset, length, remaining, isDarkMode) => {
  return (
    <View>
      {createColumnView('SUNRISE', sunrise, isDarkMode)}
      {createColumnView('SUNSET', sunset, isDarkMode)}
      {createColumnView('LENGTH OF DAY', length, isDarkMode)}
      {createColumnView('REMAINING DAYLIGHT', remaining, isDarkMode)}
    </View>
  );
};
const createColumnView = (title, value, isDarkMode) => {
  return (
    <View style={styles(isDarkMode).columnItem}>
      <Text style={styles(isDarkMode).textTitle}>{title}</Text>
      <Text style={styles(isDarkMode).textValue}>{value}</Text>
    </View>
  );
};
const styles = isDarkMode =>
  StyleSheet.create({
    textTitle: {
      color: isDarkMode ? darkTheme.onBackground : lightTheme.gray77,
      fontSize: 12,
      textAlign: 'center',
      marginLeft: 16,
    },
    textValue: {
      flex: 1,
      color: isDarkMode ? darkTheme.onBackground : lightTheme.onSurface,
      fontSize: 15,
      textAlign: 'right',
      marginRight: 16,
    },
    row: {
      flexDirection: 'row',
      alignSelf: 'stretch',
      padding: 8,
      backgroundColor: isDarkMode ? darkTheme.surface : lightTheme.surface,
    },
    columnItem: {
      flexDirection: 'row',
      alignSelf: 'stretch',
      padding: 8,
    },
  });

export default Sunshine;
