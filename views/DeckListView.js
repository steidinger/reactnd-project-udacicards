import React from 'react';
import { View, Text, FlatList, TouchableHighlight, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

export const DeckListView = ({ decks = [], onDeckSelected }) => {
  const data = decks.map(({ title }) => ({ key: title, title, cards: [] }));
  return (
    <View>
      <FlatList data={data} renderItem={({ item }) => (
        <TouchableHighlight
          style={styles.listItem}
          onPress={() => onDeckSelected(item.title)}>
          <View style={styles.container}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.cards}>{item.cards.length} cards</Text>
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

const mapStateToProps = (state) => ({
  decks: state
});

const mapDispatchToProps = (dispatch, { navigation }) => ({
  onDeckSelected: (title) => console.log(`Navigate to ${title}`)
});

export default connect(mapStateToProps, mapDispatchToProps)(DeckListView);