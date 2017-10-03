import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { answerCard, flipCard } from '../actions';
import { findDeckWithTitle } from '../utils/selectors';
import Score from './quiz/Score';
import Card from './quiz/Card';


const QuizView = ({ showScore, navigation }) => {
  return (
    <View style={{ padding: 10 }}>
      {showScore && <Score navigation={navigation} />}
      {!showScore && <Card />}
    </View>
  );
}

QuizView.navigationOptions = ({ navigation }) => ({
  title: `Quiz: ${navigation.state.params.title}`
});

const mapStateToProps = (state, { navigation }) => {
  const { quiz: { title, showScore } } = state;
  return ({
    title,
    showScore,
    navigation
  });
};

export default connect(mapStateToProps)(QuizView);