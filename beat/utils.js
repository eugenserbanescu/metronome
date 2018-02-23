function getRelativeIndex(note, noteIndex) {
  const diff = 16 / note;
  return noteIndex * diff;
}

function getStartOffset(note, index) {
  note.duration * index;
}

function updateNote(bpm) {
  return function updateNoteThunk(note, index) {
    return {
      ...note,
      start: getStartOffset(note, getRelativeIndex(note, index)),
    };
  };
}

export function getQueues(queues, bpm) {
  let newQueues = {
    byId: {},
    items: [...queues.items],
    byRelativeIndex: [],
  };
  let newRelativeIndex = [];
  queues.items.forEach(queueId => {
    newQueues[queueId] = queues.byId[queueId].map(updateNote(bpm));
  });
  return newQueues;
}
