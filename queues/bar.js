import { connect } from 'react-redux';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Text, TouchableHighlight, View } from 'react-native';
import { notesList } from '../player/notes';
import Line from './line';
import RoundButton from '../common-components/round-button';

const Bar = props => (
  <View style={styles.barContainer}>
    <View style={styles.bar}>
      {notesList.map(note => <Line key={`line-${note}`} queue={props.queues[note]} note={note} />)}
    </View>
  </View>
);

function mapStateToProps(state, props) {
  return {
    isPlaying: state.audio.isPlaying,
    queues: state.queues,
  }
}

export default connect(mapStateToProps)(Bar);

const styles = StyleSheet.create({
  barContainer: {
    backgroundColor: '#ffffff',
    padding: 20,
  },
  bar: {
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'space-between',
  }
});
