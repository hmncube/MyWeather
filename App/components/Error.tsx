import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import darkTheme from '../constants/darkTheme';
import lightTheme from '../constants/lightTheme';
import Button from './Button';
import RNRestart from 'react-native-restart';

const Error = ({msg, isDarkMode}) => {
  return (
    <View style={styles(isDarkMode).container}>
      <View style={styles(isDarkMode).errorContainer}>
        <Text style={[styles(isDarkMode).text, styles(isDarkMode).textTitle]}>
          Sorry something went wrong
        </Text>
        <Text style={[styles(isDarkMode).text, styles(isDarkMode).textTech]}>
          Technical Error message
        </Text>
        <Text style={[styles(isDarkMode).text, styles(isDarkMode).textTechMsg]}>
          "{msg}"
        </Text>
        <Button
          onPress={() => RNRestart.Restart()}
          title={"Let's start over"}
          isDarkMode={isDarkMode}
        />
      </View>
    </View>
  );
};

const styles = isDarkMode =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: isDarkMode
        ? darkTheme.background
        : lightTheme.background,
    },
    errorContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: isDarkMode ? darkTheme.error : lightTheme.error,
      padding: 60,
      borderWidth: 1,
      borderRadius: 11,
      borderColor: isDarkMode ? darkTheme.surface : lightTheme.surface,
    },
    text: {
      color: isDarkMode ? darkTheme.onError : lightTheme.onError,
      textAlign: 'center',
    },
    textTitle: {
      fontWeight: 'bold',
      fontSize: 22,
    },
    textTech: {
      marginTop: 4,
      fontSize: 18,
    },
    textTechMsg: {
      marginTop: 4,
      fontSize: 16,
      fontStyle: 'italic',
    },
  });

export default Error;
