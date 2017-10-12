/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './store/configure-store';
import Bar from './queues/bar';
import Controller from './controller/index';
import Player from './player/player';

const store = configureStore();

const App = props => (
  <Provider store={store}>
    <View style={styles.container}>
      <Controller />
      <Bar />
      <Player />
    </View>
  </Provider>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#dfe9f3',
    height: '100%'
  }
});

export default App;
