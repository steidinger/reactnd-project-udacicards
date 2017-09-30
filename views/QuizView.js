import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { answerCard, flipCard } from '../actions';
import { findDeckWithTitle } from '../selectors';
import Score from './quiz/Score';
import Card from './quiz/Card';


const QuizView = ({ showScore }) => {
  return (
    <View style={{ padding: 10 }}>
      {showScore && <Score />}
      {!showScore && <Card />}
    </View>
  );
}

const mapStateToProps = (state, { navigation }) => {
  const { quiz: { title, showScore } } = state;
  return ({
    title,
    showScore
  });
};

export default connect(mapStateToProps)(QuizView);