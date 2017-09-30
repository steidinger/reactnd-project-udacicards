import React from 'react';
import { View, Text, Button, TouchableHighlight, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { answerCard, flipCard } from '../../actions';
import { findDeckWithTitle } from '../../selectors';

const QuizContent = ({ content, linkText, onPress }) => (
  <View style={styles.container}>
    <Text style={styles.question}>{content}</Text>
    <TouchableHighlight onPress={onPress}>
      <Text style={styles.link}>{linkText}</Text>
    </TouchableHighlight>
  </View>
);

const Card = ({ question, answer, showAnswer, position, maxPosition, onAnswerCard, onFlipCard }) => (
  <View>
    <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
      <Text>{position}/{maxPosition}</Text>
    </View>
    {!showAnswer && <QuizContent content={question} linkText="Answer" onPress={onFlipCard} />}
    {showAnswer && <QuizContent content={answer} linkText="Question" onPress={onFlipCard} />}
    <Button onPress={() => onAnswerCard(true, position == maxPosition)} color="green" title="Correct" />
    <Button onPress={() => onAnswerCard(false, position == maxPosition)} color="red" title="Inorrect" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginBottom: 20
  },
  question: {
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