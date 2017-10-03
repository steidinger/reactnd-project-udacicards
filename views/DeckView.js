import React from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { startQuiz } from '../actions';
import { findDeckWithTitle } from '../utils/selectors';
import styles from '../styles';

export const DeckView = ({ title, questions, onAddCard, onStartQuiz }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.cards}>{questions.length} {questions.length == 1 ? 'card' : 'cards'}</Text>
    <View style={styles.buttonArea}>
      <View style={styles.button}>
        <Button title="Add card" onPress={() => onAddCard(title)} />
      </View>
      <View style={styles.button}>
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