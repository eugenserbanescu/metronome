import { NativeModules } from 'react-native';
import { notes, notesList } from './notes';

// TODO: implement a handler in xcode that makes all the needed notes and can then start/stop them from here
const player = NativeModules.NotePlayer;

export const playNote = player.playNote;
export const stopNote = player.stopNote;
