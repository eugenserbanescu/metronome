import React from 'react';
import {
  Text,
  View
} from 'react-native';
import { notesList } from '../player/notes';
import Line from './line';
import styles from './styles';

const Bar = props => (
  <View style={styles.bar}>
    {notesList.map(note => <Line key={`line-${note}`}note={note} />)}
  </View>
);

export default Bar;
