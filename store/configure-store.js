import { applyMiddleware, compose, createStore } from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer.js'

const INITIAL_STATE = {
  audio: {
    bpm: 80,
    isPlaying: false
  },
  queues: {
    '1': [true],
    '2': [false, false],
    '4': [true, true, true, true],
    '8': [false,false,false,false,false,false,false,false],
    '16': [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]
  }
};

export default function configureStore(initialState = INITIAL_STATE) {
  const middleware = [
    logger
  ];

  return createStore(rootReducer, initialState, compose (
    applyMiddleware(...middleware)
  ));
}
