/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import { Provider } from 'react-redux';
import App from './app';
import configureStore from './store/configure-store';
import Bar from './queues/bar';
import Controller from './controller/index';
import Player from './player/player';

const store = configureStore();



export default class nativeTest extends Component {
  render() {
    return <App />;
  }
}

AppRegistry.registerComponent('nativeTest', () => nativeTest);
