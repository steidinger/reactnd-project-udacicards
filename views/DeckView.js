import React from 'react';
import { View, Text, FlatList, TouchableHighlight, StyleSheet } from 'react-native';

export const DeckView = ({navigation}) => (
  <Text>Deck View: {navigation.state.params.title}</Text>
);

export default DeckView;