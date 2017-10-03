import { DECREASE_BPM, INCREASE_BPM, SET_BPM, TOGGLE_PLAY } from './actions.js';

function reducer(state = {}, action) {
  switch (action.type) {
    case TOGGLE_PLAY: {
      return {
        ...state,
        isPlaying: !state.isPlaying
      }
      break;
    }
    case SET_BPM: {
      return {
        ...state,
        bpm: action.payload
      }
      break;
    }
    case INCREASE_BPM: {
      return {
        ...state,
        bpm: state.bpm + 1
      }
      break;
    }
    case DECREASE_BPM: {
      return {
        ...state,
        bpm: state.bpm - 1
      }
    }
    default: {
      return state;
    }
  }
}

export default reducer;
