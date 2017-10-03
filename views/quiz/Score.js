import React from 'react';
import { connect } from 'react-redux';
import { View, Button, Text } from 'react-native';
import { findDeckWithTitle } from '../../utils/selectors';
import { startQuiz } from '../../actions';
import styles from '../../styles';

const Score = ({ title, correctAnswers, questions, numberOfCards, onBackToDeck, onStartQuiz }) => (
  <View style={styles.container}>
    <Text style={styles.quizTitle}>You finished the quiz {title}</Text>
    <Text style={styles.quizSummary}>{correctAnswers} of {numberOfCards} answers were correct</Text>
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