import { NativeModules } from 'react-native';

const player = NativeModules.NotePlayer;

export const playNote = player.playNote;
export const stopNote = player.stopNote;
