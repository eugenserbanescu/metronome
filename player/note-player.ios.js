import { NativeModules } from 'react-native';
import { notes, notesList } from './notes';

const player = NativeModules.NotePlayer;

export const playNote = player.playNote;
export const stopNote = player.stopNote;
