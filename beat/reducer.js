// TODO:
// currentBar: index: // bars.list[index]
// barStart: timestamp // Date.now()
// bars: {
//   byId: {
//     id: [{
//       start:
//       frequency:
//       index: relativeIndex,
//       originalIndex: index,
//     }]
//   },
//   playlist: []
// }
//
// BPM change => redo bars
//
// investigate if this is worth it -> might make the app slow altogether
// start by making the player.js loop do the beatStart + offset math in there instead of preparing the loop
// perhaps it's wiser to start by moving the current bar generator from player.js into redux and handle bpm changes and/or note changes there
import { playNote, stopNote } from '../player/note-player';
const DEFAULT_STATE = {
  barStart: null,
  currentNote: 0,
  notes: [],
};

export default function beatReducer(state, action) {
  switch (action.type) {
    case PLAY: {
      return {
        ...state,
        currentNote: 0,
        barStart: Date.now(),
      };
    }
    case STOP: {
      return {
        ...state,
        currentNote: 0,
        barStart: Date.now(),
      };
    }
    case SET_BPM: {
      const newNotesById = {};
      return {
        bpm: action.payload.bpm,
        queues: {
          byId: getQueues(state.queues, action.payload.bpm),
          items: state.queues.items,
        },
      };
    }
  }
}
