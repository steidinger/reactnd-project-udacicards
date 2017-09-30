export const ADD_DECK = 'ADD_DECK';
export const ADD_CARD = 'ADD_CARD';
export const START_QUIZ = 'START_QUIZ';
export const FLIP_CARD = 'FLIP_CARD';
export const ANSWER_CARD = 'ANSWER_CARD';
export const SHOW_SCORE = 'SHOW_SCORE';

export const addDeck = (title) => ({ type: ADD_DECK, title });
export const addCard = (title, question) => ({ type: ADD_CARD, title, question });
export const startQuiz = (title) => ({ type: START_QUIZ, title });
export const flipCard = () => ({ type: FLIP_CARD });
export const answerCard = (correct) => ({ type: ANSWER_CARD, correct });
export const showScore = () => ({ type: SHOW_SCORE });