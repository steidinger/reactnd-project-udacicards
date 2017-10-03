import React from 'react';
import { View, Text, Button, TouchableHighlight, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { answerCard, flipCard } from '../../actions';
import { findDeckWithTitle } from '../../selectors';

const Card = ({ question, answer, showAnswer, position, maxPosition, onAnswerCard, onFlipCard }) => {
  const mainText = showAnswer ? answer : question;
  const linkText = showAnswer ? 'Show Question' : 'Show Answer';
  return (
    <View>
      <View style={styles.quizPosition}>
        <Text>{position}/{maxPosition}</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.mainText}>{mainText}</Text>
      </View>
      <View style={{ margin: 20 }}>
        <Button onPress={onFlipCard} title={linkText} />
      </View>
      <View style={{ margin: 20 }}>
        <Button onPress={() => onAnswerCard(true, position == maxPosition)} color="green" title="Correct" />
      </View>
      <View style={{ margin: 20 }}>
        <Button onPress={() => onAnswerCard(false, position == maxPosition)} color="red" title="Inorrect" />
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  quizPosition: {
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  container: {
    alignItems: 'center',
    marginBottom: 20
  },
  mainText: {
    fontSize: 18,
    paddingTop: 4,
    paddingBottom: 4
  },
  link: {
    color: 'red'
  },
});

const mapStateToProps = (state, { navigation }) => {
  const { quiz: { title, questionIndex, showAnswer } } = state;
  const { questions } = findDeckWithTitle(state, title);
  const { question, answer } = questionIndex < questions.length ? questions[questionIndex] : {};
  return ({
    title,
    question,
    answer,
    showAnswer,
    position: Math.min(questionIndex + 1, questions.length),
    maxPosition: questions.length
  });
};

const mapDispatchToProps = (dispatch, { navigation }) => ({
  onFlipCard: () => dispatch(flipCard()),
  onAnswerCard: (correct, finished) => dispatch(answerCard(correct, finished))
})

export default connect(mapStateToProps, mapDispatchToProps)(Card);