import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import darkTheme from '../constants/darkTheme';

const Button = ({onPress, title}) => {
  return (
    <Pressable
      style={styles.button}
      onPress={() => {
        onPress();
      }}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 12,
    marginVertical: 6,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: darkTheme.surface,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: darkTheme.onSurface,
  },
});

export default Button;
