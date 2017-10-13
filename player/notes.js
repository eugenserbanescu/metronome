const rootOf2 = Math.pow(2,1/12);

function getNoteFrequency(halfSteps) {
  const A = 440;
  return parseFloat((A * Math.pow(rootOf2,halfSteps)).toFixed(2));
}

const notes = {
  1: {
    frequency: getNoteFrequency(7),
    getDuration: bpm => 60000 / bpm * 4,
    symbol: '1D15D'
  },
  2: {
    frequency: getNoteFrequency(4),
    getDuration: bpm => 60000 / bpm * 2,
    symbol: '1D15E'
  },
  4: {
    frequency: getNoteFrequency(0),
    getDuration: bpm => 60000 / bpm,
    symbol: '1D15F'
  },
  8: {
    frequency: getNoteFrequency(-5),
    getDuration: bpm => 60000 / bpm / 2,
    symbol: '1D160'
  },
  12: {
    getDuration: bpm => 60000 / bpm / 3,
    frequency: getNoteFrequency(-5)
  },
  16: {
    frequency: getNoteFrequency(-8),
    getDuration: bpm => 60000 / bpm / 4,
    symbol: '1D161'
  }
}

export const notesList = [1,2,4,8,12,16];

export default notes;
