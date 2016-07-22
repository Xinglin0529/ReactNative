'use strict';
import React, { Component } from 'react';
import { View, TouchableHighlight } from 'react-native';

export default class Touch extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let _onPress = this.props.onPress;
        let props = {};
        Object.assign(props,this.props);

        let parentProps = {};
        Object.assign(parentProps,this.props);
        parentProps.onPress = (e) => {
            _onPress && _onPress(e);
        };
        delete parentProps.style;
        return (
            <TouchableHighlight underlayColor='transparent' {...parentProps}>
                <View {...props}/>
            </TouchableHighlight>
        )
    }
}
