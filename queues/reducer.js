import { TOGGLE_NOTE } from './actions.js';

function reducer(state = {}, action) {
  const { payload } = action;
  if(action.type === TOGGLE_NOTE) {
    const queue = state[payload.note].slice();
    queue[payload.index] = !queue[payload.index]
    return {
      ...state,
      [payload.note]: queue
    }
  } else {
    return state;
  }
}

export default reducer;
