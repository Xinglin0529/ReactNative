/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';
import ListViewDemo from './ListViewDemo';

export default class Test extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <NavigatorIOS
                initialRoute={{
                    component: ListViewDemo,
                    title: 'ListViewDemo'
                }}
                style={{flex: 1}}
            />
        );
    }
}

AppRegistry.registerComponent('Test', () => Test);
