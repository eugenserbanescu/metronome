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

export const TOGGLE_PLAY = 'audio/TOGGLE_PLAY';
export const togglePlay = function() {
  return {
    type: TOGGLE_PLAY,
  };
};

export const SET_BPM = 'audio/SET_BPM';
export const setBpm = function(bpm) {
  const sanitizedBpm = parseInt(bpm);
  return {
    type: SET_BPM,
    payload: bpm,
  };
};

export const TOGGLE_NOTE = 'queue/TOGGLE_NOTE';
export const toggleNote = function(note, index) {
  return {
    type: TOGGLE_NOTE,
    payload: {
      index,
      note,
    },
  };
};
