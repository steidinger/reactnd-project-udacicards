import React from 'react';
import { View, Text, FlatList, TouchableHighlight, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

export const DeckListView = ({ decks = [], onDeckSelected }) => {
  const data = decks.map(({ title, questions }) => ({ key: title, title, cards: questions }));
  return (
    <View>
      <FlatList data={data} renderItem={({ item }) => (
        <TouchableHighlight
          style={styles.listItem}
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

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#aaa'
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24
  },
  cards: {
    fontSize: 18,
    paddingTop: 4,
    paddingBottom: 4
  }
});

const mapStateToProps = ({decks}) => ({
  decks
});

const mapDispatchToProps = (dispatch, { navigation }) => ({
  onDeckSelected: (title) => navigation.navigate('Deck', { title })
});

export default connect(mapStateToProps, mapDispatchToProps)(DeckListView);