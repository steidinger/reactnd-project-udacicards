import React from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import { findDeckWithTitle } from '../../selectors';

const Score = ({ title, correctAnswers, numberOfCards}) => (
  <View style={styles.container}>
    <Text style={styles.title}>You finished the quiz</Text>
    <Text style={styles.summary}>{correctAnswers} of {numberOfCards} answers were correct</Text>
    <Text style={styles.score}>Your score is {Math.round(correctAnswers / numberOfCards * 100)}</Text>
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
  }
});

const mapStateToProps = (state, { navigation }) => {
  const { quiz: { correctAnswers, title } } = state;
  const { questions } = findDeckWithTitle(state, title);
  return ({
    title,
    correctAnswers,
    numberOfCards: questions.length
  });
};

export default connect(mapStateToProps)(Score);