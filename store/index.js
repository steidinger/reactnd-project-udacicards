import { createStore as createReduxStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reducer from '../reducers';

const initialState = [
  { 
    title: 'React',
    questions: [
      {
        question: 'Question 1',
        answer: 'Answer 1'
      }
    ]
  }, 
  { title: 'React Native', questions: [] }
];

export function createStore() {
  return createReduxStore(reducer, initialState, applyMiddleware(logger));
}