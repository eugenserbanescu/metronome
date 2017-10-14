import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { decreaseBpm, increaseBpm, setBpm } from './actions';
import { View, Text, TextInput, TouchableHighlight } from 'react-native';
import React from 'react';
import RoundButton from '../commonComponents/round-button';

class BpmController extends React.Component {

  render() {
    return (
      <View style={styles.bpmWrapper}>
        <RoundButton onPress={this.props.decreaseBpm} text='-'/>
        <TextInput keyboardType='numeric' style={styles.bpmText} value={this.props.bpm} underlineColorAndroid='transparent' onChangeText={this.props.setBpm}/>
        <RoundButton onPress={this.props.increaseBpm} text='+'/>
      </View>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    bpm: state.audio.bpm.toString(),
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
    color: '#3D3D3D',
    fontSize: 24,
    paddingTop: 0,
    textAlign: 'center',
    width: 100,
  },
});
