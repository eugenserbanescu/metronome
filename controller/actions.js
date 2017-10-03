export const TOGGLE_PLAY = 'audio/TOGGLE_PLAY';
export const togglePlay = function() {
  return {
    type: TOGGLE_PLAY
  };
}

export const SET_BPM = 'audio/SET_BPM';
export const setBpm = function(bpm) {
  return {
    type: SET_BPM,
    payload: bpm
  }
}

export const DECREASE_BPM = 'audio/DECREASE_BPM';
export const decreaseBpm = function() {
  return {
    type: DECREASE_BPM
  }
};
export const INCREASE_BPM = 'audio/INCREASE_BPM';
export const increaseBpm = function() {
  return {
    type: INCREASE_BPM
  }
};
