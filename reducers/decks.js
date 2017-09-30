import { ADD_CARD, ADD_DECK, DECKS_LOADED } from '../actions';

function decks(state = [], action) {
  switch (action.type) {
    case ADD_DECK:
      return state.concat([{ title: action.title, questions: [] }]);
    case ADD_CARD:
      return state.map(({ title, questions }) =>
        title == action.title
          ? ({ title, questions: questions.concat([action.question]) })
          : ({ title, questions }));
    case DECKS_LOADED: 
      return action.decks;
    default:
      return state;
  }
}

export default decks;