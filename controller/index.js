import { View } from 'react-native';
import Bpm from './bpm.js';
import PlayToggle from './play-toggle.js';
import React from 'react';
import styles from './styles';

const Controller = props => (
  <View style={styles.controller}>
    <Bpm />
    <PlayToggle />
  </View>
)

export default Controller;
