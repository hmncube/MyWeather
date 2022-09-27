import React, {useEffect, useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import darkTheme from '../constants/darkTheme';
import lightTheme from '../constants/lightTheme';
import Lottie from 'lottie-react-native';

const Loading = ({isDarkMode}) => {
  const animationRef = useRef<Lottie>(null);
  useEffect(() => {
    animationRef.current?.play();
  }, []);

  return (
    <View style={styles(isDarkMode).container}>
      <Lottie
        ref={animationRef}
        source={require('../assets/animation/weather.json')}
      />
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
  });

export default Loading;
