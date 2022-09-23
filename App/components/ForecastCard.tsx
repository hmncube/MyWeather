import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import darkTheme from '../constants/darkTheme';
import ForecastCardRow from './ForecastCardRow';

const ForecastCard = ({forecastCardData}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.textDate]}>{forecastCardData[0]}</Text>
      <FlatList
        data={forecastCardData}
        renderItem={({item}) => (
          <ForecastCardRow
            image={item.image}
            title={item.title}
            value={item.value}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: darkTheme.surface,
    margin: 8,
    elevation: 10,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: darkTheme.surface,
    shadowColor: darkTheme.surface,
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: darkTheme.onSurface,
  },
  textDate: {
    textAlign: 'center',
  },
});

export default ForecastCard;
