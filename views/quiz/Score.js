import React from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import { findDeckWithTitle } from '../../selectors';

const Score = ({ title, correctAnswers, numberOfCards}) => (
  <View>
    <Text>You finished the quiz</Text>
    <Text>{correctAnswers} of {numberOfCards} answers were correct</Text>
    <Text>Your score is {Math.round(correctAnswers / numberOfCards * 100)}</Text>
  </View>
);

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