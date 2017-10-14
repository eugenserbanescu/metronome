import { connect } from 'react-redux';
import { Text, TouchableHighlight } from 'react-native';
import { togglePlay } from './actions.js';
import RoundButton from '../commonComponents/round-button';
import React from 'react';

const PlayToggle = props => (<RoundButton onPress={props.togglePlay} text='I/O'/>);

const mapStateToProps = function(state, props) {
  return {
    isPlaying: state.audio.isPlaying
  }
};

const mapDispatchToProps = {
  togglePlay
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayToggle);
