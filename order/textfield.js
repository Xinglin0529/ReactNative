import React, { Component ,PropTypes } from 'react';
import {
    Text,
    TextInput,
    View,
    StyleSheet
} from 'react-native';

class TextField extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { placeholder,...other } = this.props;
        return (
            <TextInput {...other}>
                <Text style={{fontSize: 14}}> {placeholder} </Text>
            </TextInput>
        )
    }
}

export default TextField;
