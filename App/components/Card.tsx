import React from 'react';
import {Pressable, StyleSheet, Text, View, Image} from 'react-native';
import colors from '../constants/colors';

const Card: React.FC<Props> = ({
  name,
  imageUrl,
  value,
  isDarkMode,
  navigateTo,
}) => {
  return (
    <Pressable
      style={styles(isDarkMode).container}
      onPress={() => {
        console.log('clicked');
        navigateTo();
      }}>
      <View>
        <View style={styles(isDarkMode).topRow}>
          <Image style={styles(isDarkMode).smallImage} source={imageUrl} />
          <Text style={styles(isDarkMode).elementText}>{name}</Text>
        </View>
        <Text style={styles(isDarkMode).elementValue}>{value}</Text>
      </View>
    </Pressable>
  );
};

const styles = isDarkMode =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: isDarkMode ? colors.gray : colors.blue,
      margin: 16,
      elevation: 10,
      borderWidth: 1,
      borderRadius: 8,
      borderColor: isDarkMode ? colors.gray : colors.blue,
      shadowColor: isDarkMode ? colors.gray : colors.blue,
      shadowOpacity: 0.8,
      shadowRadius: 2,
      shadowOffset: {
        height: 1,
        width: 1,
      },
    },
    topRow: {
      flex: 1,
      flexDirection: 'row',
      margin: 8,
      alignContent: 'space-around',
      justifyContent: 'flex-start',
      alignSelf: 'stretch',
    },
    smallImage: {
      height: 20,
      width: 20,
      textAlign: 'left',
    },
    elementText: {
      marginLeft: 16,
    },
    elementValue: {
      fontSize: 64,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });

export default Card;
