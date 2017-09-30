import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { startQuiz } from '../actions';
import { findDeckWithTitle } from '../selectors';

export const DeckView = ({ title, questions, onAddCard, onStartQuiz }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.cards}>{questions.length} {questions.length == 1 ? 'card' : 'cards'}</Text>
    <View style={styles.buttonArea}>
      <View style={{ margin: 20, flex: 1 }}>
        <Button title="Add card" onPress={() => onAddCard(title)} />
      </View>
      <View style={{ margin: 20, flex: 1 }}>
        <Button
          title="Start quiz"
          color="darkorchid"
          disabled={questions.length === 0}
          onPress={() => onStartQuiz(title, questions)} />
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


const mapStateToProps = (state, { navigation }) => {
  const { title, questions } = findDeckWithTitle(state, navigation.state.params.title)
  return { title, questions };
}

const mapDispatchToProps = (dispatch, { navigation }) => ({
  onAddCard: (title) => navigation.navigate('AddQuestion', { title }),
  onStartQuiz: (title, questions) => {
    dispatch(startQuiz(title, questions));
    navigation.navigate('Quiz', { title });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(DeckView);