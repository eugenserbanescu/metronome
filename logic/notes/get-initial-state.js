import { getOffset, getPitch, NOTES } from './utils';

export default function getInitialState() {
  const notes = {
    byId: {},
    list: [],
    queue: [],
  };
  NOTES.forEach(noteValue => {
    let index = 1;
    while (noteValue >= index) {
      const id = `${noteValue}${index}`;
      notes.byId[id] = {
        id,
        noteValue,
        index,
        enabled: true,
        pitch: getPitch(noteValue),
        offset: getOffset(noteValue, index, 120), //hardcoded BPM for initial state
      };
      notes.list.push(id);
    }
  });
  return notes;
}
