import { ADD_CARD, ADD_DECK } from '../actions';

function decks(state = [], action) {
  switch (action.type) {
    case ADD_DECK:
      return state.concat([{ title: action.title, questions: [] }]);
    case ADD_CARD:
      return state.map(({ title, questions }) =>
        title == action.title
          ? ({ title, questions: questions.concat([action.question]) })
          : ({ title, questions }));
    default:
      return state;
  }
}

export default decks;