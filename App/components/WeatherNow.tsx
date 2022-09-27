import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import Card from '../components/Card';
import darkTheme from '../constants/darkTheme';
import lightTheme from '../constants/lightTheme';

const WeatherNow = ({time, pressure, humidity, isDarkMode}) => {
  const view = createView(time, pressure, humidity, isDarkMode);
  return <Card view={view} isDarkMode={isDarkMode} />;
};

const createView = (time, pressure, humidity, isDarkMode) => {
  return (
    <View style={styles(isDarkMode).row}>
      {createRowView('TIME', time, isDarkMode)}
      {createRowView('PRESSURE', pressure, isDarkMode)}
      {createRowView('HUMIDITY', humidity, isDarkMode)}
    </View>
  );
};

const createRowView = (title, value, isDarkMode) => {
  return (
    <View style={styles(isDarkMode).rowItem}>
      <View>
        <Text style={styles(isDarkMode).textTitle}>{title}</Text>
        <Text style={styles(isDarkMode).textValue}>{value}</Text>
      </View>
    </View>
  );
};

const styles = isDarkMode =>
  StyleSheet.create({
    textTitle: {
      color: isDarkMode ? darkTheme.onBackground : lightTheme.gray77,
      fontSize: 12,
      textAlign: 'center',
    },
    textValue: {
      color: isDarkMode ? darkTheme.onBackground : lightTheme.darkGray,
      fontSize: 15,
      textAlign: 'center',
    },
    row: {
      flexDirection: 'row',
      alignSelf: 'stretch',
      padding: 8,
      backgroundColor: isDarkMode ? darkTheme.surface : lightTheme.surface,
    },
    rowItem: {
      flex: 1,
    },
  });

export default WeatherNow;
