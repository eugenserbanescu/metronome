import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { decreaseBpm, increaseBpm, setBpm } from './actions';
import { View, Text, TouchableHighlight } from 'react-native';
import React from 'react';
import RoundButton from '../commonComponents/round-button';

const BpmController = props => (
  <View style={styles.bpmWrapper}>
    <RoundButton onPress={props.decreaseBpm} text='-'/>
    <Text style={styles.bpmText}>{props.bpm}</Text>
    <RoundButton onPress={props.increaseBpm} text='+'/>
  </View>
)

function mapStateToProps(state, props) {
  return {
    bpm: state.audio.bpm,
  }
}

const mapDispatchToProps = {
  decreaseBpm,
  increaseBpm,
  setBpm
}

export default connect(mapStateToProps,mapDispatchToProps)(BpmController);

const styles = StyleSheet.create({
  bpmWrapper: {
    flexDirection: 'row'
  },
  bpmText: {
    fontSize: 24,
    paddingLeft: 10,
    paddingRight: 10
  },
});
