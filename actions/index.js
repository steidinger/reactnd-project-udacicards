export const ADD_DECK = 'ADD_DECK';
export const ADD_CARD = 'ADD_CARD';

export const addDeck = (title) => ({ type: ADD_DECK, title });
export const addCard = (title, question) => ({ type: ADD_CARD, title, question });