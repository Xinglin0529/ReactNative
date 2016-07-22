'use strcit';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Touch from './Touch';

export default class CustomButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const width = this.props.width;
        const height = this.props.height;
        return (
            <Touch onPress={this.props.onPress}>
                <View style={[styles.container, {backgroundColor: this.props.backgroundColor, height: height, width: width}]}>
                    <Text style={{fontSize: 16, color: this.props.textColor}}>{this.props.title}</Text>
                </View>
            </Touch>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
});
