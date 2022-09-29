import React, {useEffect, useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import darkTheme from '../constants/darkTheme';
import Lottie from 'lottie-react-native';

const Loading = () => {
  const animationRef = useRef<Lottie>(null);
  useEffect(() => {
    animationRef.current?.play();
  }, []);

  return (
    <View style={styles.container}>
      <Lottie
        ref={animationRef}
        source={require('../assets/animation/weather.json')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: darkTheme.secondary,
  },
});

export default Loading;
