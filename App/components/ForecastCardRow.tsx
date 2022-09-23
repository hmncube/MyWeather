import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import darkTheme from '../constants/darkTheme';
const ForecastCardRow = ({image, title, value}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imagesContainer}>
        <Image style={styles.smallImage} source={image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={[styles.text, styles.textName]}>{title}</Text>
        <Text style={[styles.text, styles.texValue]}>{value}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imagesContainer: {
    flex: 1,
    margin: 4,
  },
  textContainer: {
    flex: 10,
    margin: 4,
    flexDirection: 'row',
  },
  container: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: darkTheme.onSurface,
  },
  textName: {
    textAlign: 'left',
    flex: 1,
  },
  texValue: {
    marginEnd: 16,
  },
  smallImage: {
    height: 20,
    width: 20,
    textAlign: 'left',
  },
});

export default ForecastCardRow;
