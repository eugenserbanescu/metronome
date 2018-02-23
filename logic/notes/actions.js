import { createQueue } from './utils';

export const TOGGLE_NOTE = 'notes/TOGGLE_NOTE';
export function toggleNote(noteId) {
  return {
    type: TOGGLE_NOTE,
    payload: {noteId}
  }
}

export const UPDATE_QUEUE = 'notes/UPDATE_QUEUE';
export function updateQueue(getState, dispatch) {
  return function updateQueueThunk() {
    const { lanes, notes } = getState();
    dispatch({
      type: UPDATE_QUEUE,
      payload: {
        queue: createQueue(lanes, notes)
      }
    })
  }
}
