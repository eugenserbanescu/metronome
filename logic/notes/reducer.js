import { TOGGLE_NOTE, UPDATE_QUEUE } from './actions';
import { SET_BPM } from '../player/actions';

export default function notesReducer(action, state={}) {
  switch(action.type) {
    case TOGGLE_NOTE: {
      const { notes } = state;
      const currentNote = notes.byId[action.payload.noteId];
      return {
        ...state,
        byId: {
          ...notes.byId
          [action.payload.noteId] = {
            ...currentNote,
            enabled: !currentNote.enabled 
          }
        }
      }
    }
    case SET_BPM: {
      const { notes } = state;
      const newById = {};
      notes.list.forEach(noteId => {
        note = notes.byId;
        newById[note.id] = {
          ...note,
          offset: getOffset(note.noteValue, note.index, action.payload.bpm),
        }
      });
      return {
        ...state,
        byId: newById
      }; 
    }
    case UPDATE_QUEUE: {
      return {
        ...state,
        queue: action.payload.queue
      }
    }
  }
}
