import { connect } from 'react-redux';
import { decreaseBpm, increaseBpm, setBpm } from './actions';
import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import styles from './styles';


const BpmController = props => (
  <View style={styles.bpmWrapper}>
    <TouchableHighlight style={styles.button} onPress={props.decreaseBpm}>
      <Text style={styles.buttonText}>-</Text>
    </TouchableHighlight>
    <Text>{props.bpm}</Text>
    <TouchableHighlight style={styles.button} onPress={props.increaseBpm}>
      <Text style={styles.buttonText}>+</Text>
    </TouchableHighlight>
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


{/* <form onSubmit={e => {
  e.preventDefault();
  const value = parseInt(e.target.elements[0].value);
  if(typeof value === 'number' && !isNaN(value)) {
    props.setBpm(value);
  }
}}>
  <label htmlFor="bpm">BPM:</label>
  <input onChange={e => props.setBpm(e.target.value)} id="bpm" style={inputStyle} type="text" value={props.bpm}/>
</form> */}
