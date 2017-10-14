import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import { notesList } from '../player/notes';
import Line from './line';

class Bar extends Component {
  state = {
    isRotated: false
  }

  rotate = () => {
    this.setState({
      isRotated: !this.state.isRotated
    });
  }

  render() {
    const list = this.state.isRotated ? notesList.slice(0).reverse() : notesList;
    return (
      <View style={styles.barContainer}>
        <TouchableHighlight style={styles.rotateButton} onPress={this.rotate}>
          <Text style={styles.rotateButtonText}>Rotate queues!</Text>
        </TouchableHighlight>
        <View style={[styles.bar, this.state.isRotated && styles.barRotated]}>
          {list.map(note => <Line isRotated={this.state.isRotated} key={`line-${note}`} note={note} />)}
        </View>
      </View>
    )
  }
}

export default Bar;

const styles = StyleSheet.create({
  barContainer: {
    backgroundColor: '#ffffff',
    padding: 20,
  },
  bar: {
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },
  barRotated: {
    flexDirection: 'row',
    height: '90%',
  },
  rotateButton: {
    backgroundColor: '#cccccc',
    borderRadius: 5,
    width: 200
  },
  rotateButtonText: {
    color: '#ffffff',
    fontSize: 24,
    textAlign: 'center'
  },
});
