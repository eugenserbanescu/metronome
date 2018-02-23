import { NOTES } from '../notes/utils';

export default function getInitialState() {
  const lanes = { 
    byId: {},
    list: [],
    visible: true
  };
  NOTES.forEach(noteValue => {
    lanes[noteValue] = {
      id: noteValue,
      notes: []
    };
    lanes.list.push(noteValue);
    let index = 1;
    while (noteValue >= index) {
      lanes[noteValue].notes.push(`${noteValue}${index}`);
    }
  });
  return lanes;
}
