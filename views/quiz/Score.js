import React from 'react';
import { connect } from 'react-redux';
import { View, Button, Text, StyleSheet } from 'react-native';
import { findDeckWithTitle } from '../../selectors';
import { startQuiz } from '../../actions';

const Score = ({ title, correctAnswers, questions, numberOfCards, onBackToDeck, onStartQuiz }) => (
  <View style={styles.container}>
    <Text style={styles.title}>You finished the quiz {title}</Text>
    <Text style={styles.summary}>{correctAnswers} of {numberOfCards} answers were correct</Text>
    <Text style={styles.score}>Your score is {Math.round(correctAnswers / numberOfCards * 100)}</Text>
    <View style={styles.buttonArea}>
      <View style={styles.button}>
        <Button title="Back to Deck" onPress={() => onBackToDeck(title)} />
      </View>
      <View style={styles.button}>
        <Button
          title="Restart quiz"
          color="darkorchid"
          onPress={() => onStartQuiz(title, questions)} />
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    marginTop: 20,
    marginBottom: 10,
  },
  summary: {
    fontSize: 18,
    marginBottom: 10
  },
  score: {
    fontSize: 18,
  },
  buttonArea: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    margin: 20,
    flex: 1
  }
});

const mapStateToProps = (state) => {
  const { quiz: { correctAnswers, title } } = state;
  const { questions } = findDeckWithTitle(state, title);
  return ({
    title,
    correctAnswers,
    questions,
    numberOfCards: questions.length
  });
};

const mapDispatchToProps = (dispatch, { navigation }) => ({
  onBackToDeck: () => {
    navigation.goBack();
  },
  onStartQuiz: (title, questions) => {
    dispatch(startQuiz(title, questions));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Score);