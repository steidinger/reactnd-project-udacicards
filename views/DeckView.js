import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

export const DeckView = ({ title, questions, onAddCard, onStartQuiz }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.cards}>{questions.length} {questions.length == 1 ? 'card' : 'cards'}</Text>
    <View style={styles.buttonArea}>
      <View style={{margin: 20, flex: 1}}>
        <Button title="Add card" onPress={() => onAddCard(title)} />
      </View>
      <View style={{margin: 20, flex: 1}}>
        <Button title="Start quiz" color="darkorchid" onPress={() => onStartQuiz(title)} />
      </View>
    </View>
  </View>
);

DeckView.navigationOptions = ({ navigation }) => ({
  title: navigation.state.params.title
});

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    paddingTop: 10,
    fontSize: 24
  },
  cards: {
    fontSize: 18,
    paddingTop: 4,
    paddingBottom: 4
  },
  buttonArea: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
});


const mapStateToProps = (decks, { navigation }) => {
  const { title, questions } = decks.find(deck => deck.title == navigation.state.params.title);
  return { title, questions };
}

const mapDispatchToProps = (dispatch, { navigation }) => ({
  onAddCard: (title) => navigation.navigate('AddQuestion', { title }),
  onStartQuiz: (title) => console.log(`start quiz for ${title}`),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeckView);