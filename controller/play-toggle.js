import { connect } from 'react-redux';
import { togglePlay } from './actions.js';
import React from 'react';
import { Text, TouchableHighlight } from 'react-native';
import styles from './styles';

const PlayToggle = props => (
  <TouchableHighlight style={styles.button} onPress={props.togglePlay}>
    <Text style={styles.buttonText}>I/O</Text>
  </TouchableHighlight>
)

const mapStateToProps = function(state, props) {
  return {
    isPlaying: state.audio.isPlaying
  }
};

const mapDispatchToProps = {
  togglePlay
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayToggle);
