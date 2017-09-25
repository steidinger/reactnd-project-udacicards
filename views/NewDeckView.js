import React from 'react';
import { View, Text } from 'react-native';

const NewDeckView = () => (
  <View>
    <Text>New Deck</Text>
  </View>
);

NewDeckView.navigationOptions = {
  tabBarLabel: 'New Deck'
}
export default NewDeckView;