export const NOTES = [1, 2, 4, 8, 12, 16];

function getNoteDuration(noteValue, bpm) {
  switch(noteValue) {
    case 1: return 60000 / bpm * 4;
    case 2: return 60000 / bpm * 2;
    case 4: return 60000 / bpm;
    case 8: return 60000 / bpm / 2;
    case 12: return 60000 / bpm / 3;
    case 16: return 60000 / bpm / 4;
  }
}

export function getOffset(noteValue, index, bpm) {
  return getNoteDuration(noteValue, bpm) * index;
}

const rootOf2 = Math.pow(2, 1 / 12);
const A = 440;

function getNoteFrequency(halfSteps) {
  return parseFloat((A * Math.pow(rootOf2, halfSteps)).toFixed(2));
}

export function getPitch(noteValue) {
  switch (noteValue) {
    case 1: return getNoteFrequency(7);
    case 2: return getNoteFrequency(4);
    case 4: return getNoteFrequency(0);
    case 8: return getNoteFrequency(-5);
    case 12: return getNoteFrequency(-5);
    case 16: return getNoteFrequency(-8);
  }
}

function getRelativeIndex(note, noteIndex) {
  const diff = 16 / note;
  return noteIndex * diff;
}

export function createQueue(notes, lanes) {
  const queue = [];
  lanes.list.reverse().forEach(laneId => {
    const lane = lanes.byId[laneId];
    lane.forEach((noteId, noteIndex) => {
      const note = notes.byId[noteId];
      if (note.enabled) {
        queue[getRelativeIndex(note.noteValue, noteIndex)] = note;
      }
    })
  });
  return queue;
}
