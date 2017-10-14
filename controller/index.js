import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import Bpm from './bpm.js';
import PlayToggle from './play-toggle.js';
import React from 'react';

const Controller = props => (
  <View style={styles.controller}>
    <Bpm />
    <PlayToggle />
  </View>
)

export default Controller;

const styles = StyleSheet.create({
  controller: {
    backgroundColor: '#ffffff',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: 40
  }
});
