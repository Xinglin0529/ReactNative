'use strcit';
import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Touch from './Touch';

export default class CustomButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { viewStyle, textStyle, onPress, title } = this.props;
        return (
            <Touch onPress={() => onPress && onPress()}>
                <View style={[styles.container, viewStyle]}>
                    <Text style={textStyle}>{title}</Text>
                </View>
            </Touch>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});
