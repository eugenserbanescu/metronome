export const TOGGLE_PLAY = 'audio/TOGGLE_PLAY';
export const togglePlay = function() {
  return {
    type: TOGGLE_PLAY
  };
}

export const SET_BPM = 'audio/SET_BPM';
export const setBpm = function(bpm) {
  // TODO: maybe sanitize this
  return {
    type: SET_BPM,
    payload: parseInt(bpm)
  }
}
