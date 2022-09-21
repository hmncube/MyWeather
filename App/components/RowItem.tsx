import React from 'react';
import {View} from 'react-native';
import Card from './Card';
import Item from '../data/ItemData';

const RowItem = (items: Item[]) => {
  return (
    <View style={styles.cardRow}>
      <Card
        name={items[0].name}
        value={items[0].value}
        imageUrl={items[0].imageUrl}
        isDarkMode={items[0].isDarkMode}
      />
      <Card
        name={items[1].name}
        value={items[2].value}
        imageUrl={items[1].imageUrl}
        isDarkMode={items[1].isDarkMode}
      />
    </View>
  );
};

export default RowItem;
