import React from 'react';
import { View, Text, FlatList, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import styles from '../styles';

export const DeckListView = ({ decks = [], onDeckSelected }) => {
  const data = decks.map(({ title, questions }) => ({ key: title, title, cards: questions }));
  return (
    <View>
      <FlatList data={data} renderItem={({ item }) => (
        <TouchableHighlight
          style={styles.listItem}
          underlayColor="#00bfffaa"
          onPress={() => onDeckSelected(item.title)}>
          <View style={styles.container}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.cards}>{item.cards.length} {item.cards.length == 1 ? 'card' : 'cards'}</Text>
          </View>
        </TouchableHighlight>
      )} />
    </View>
  );
}

DeckListView.navigationOptions = {
  tabBarLabel: 'Deck List'
}

const mapStateToProps = ({decks}) => ({
  decks
});

const mapDispatchToProps = (dispatch, { navigation }) => ({
  onDeckSelected: (title) => navigation.navigate('Deck', { title })
});

export default connect(mapStateToProps, mapDispatchToProps)(DeckListView);