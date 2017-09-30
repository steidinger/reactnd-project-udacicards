import { createStore as createReduxStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reducer from '../reducers';
import { saveDecks } from '../db';

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
    console.log(`update DB with ${JSON.stringify(state.decks)}`);
    updateDB(state.decks);
  })
  return store;
}