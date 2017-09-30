import { START_QUIZ, FLIP_CARD, ANSWER_CARD, SHOW_SCORE } from '../actions';

export function quiz(state = {}, action) {
  switch (action.type) {
    case START_QUIZ:
      return ({
        title: action.title,
        questionIndex: 0,
        showAnswer: false,
        correctAnswers: 0
      });
    case FLIP_CARD:
      return ({
        ...state,
        showAnswer: !state.showAnswer
      });
    case ANSWER_CARD:
      return ({
        ...state,
        correctAnswers: state.correctAnswers + (action.correct ? 1 : 0),
        questionIndex: state.questionIndex + 1
      });
    case SHOW_SCORE:
      return ({
        ...state,
        showScore: true
      });
    default:
      return state;
  }
}

export default quiz;