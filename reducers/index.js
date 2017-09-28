import { ADD_DECK } from '../actions';

function decks(state = [], action) {
  switch (action.type) {
    case ADD_DECK:
      return state.concat([{ title: action.title }]);
    default:
      return state;
  }
}

export default decks;