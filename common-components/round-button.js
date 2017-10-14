import { StyleSheet } from 'react-native';
import { Text, TouchableHighlight } from 'react-native';
import React from 'react';

export default function Button(props) {
  return(
    <TouchableHighlight style={[styles.button, props.style && props.style]} onPress={props.onPress}>
      <Text style={styles.buttonText}>{props.text}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#4390bc',
    borderRadius: 15,
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
    overflow: 'hidden',
    padding: 0,
    height: 30,
    width: 30
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 20,
    textAlign: 'center'
  },
});
