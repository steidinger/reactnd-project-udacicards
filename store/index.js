import { createStore as createReduxStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reducer from '../reducers';
import { saveDecks } from '../utils/db';

let previousDecks = "";

function updateDB(decks) {
  const newDecks = JSON.stringify(decks);
  if (newDecks !== previousDecks) {
    previousDecks = newDecks;
    saveDecks(decks);
  }
}

export function createStore() {
  const store = createReduxStore(reducer, applyMiddleware(logger));
  store.subscribe(() => {
    const state = store.getState();
    updateDB(state.decks);
  })
  return store;
}