import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

export const DeckListView = ({decks = []}) => (
  <View>
    <Text>Deck List</Text>
    {decks.map(({title}) => <Text key={title}>{title}</Text>)}
  </View>
);

DeckListView.navigationOptions = {
  tabBarLabel: 'Deck List'
}

const mapStateToProps = (state) => ({
  decks: state
});

export default connect(mapStateToProps)(DeckListView);