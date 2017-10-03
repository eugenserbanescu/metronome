export const TOGGLE_NOTE = 'queue/TOGGLE_NOTE';
export const toggleNote = function(note, index) {
  return {
    type: TOGGLE_NOTE,
    payload: {
      index,
      note
    }
  }
}
