import React from 'react';
import { View, Text } from 'react-native';

const DeckListView = () => (
  <View>
    <Text>Deck List</Text>
  </View>
);

DeckListView.navigationOptions = {
  tabBarLabel: 'Deck List'
}
export default DeckListView;