import React, { Component, PropsTypes } from 'react';
import {
    TextInput,
    View,
    Text,
    StyleSheet
} from 'react-native';

class CustomInput extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { style, ...other } = this.props;
        return (
            <View style={[styles.container, style]}>
                <TextInput
                    {...other}
                    style={styles.inputStyle}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        borderColor: 'gray',
        borderRadius: 5,
        borderWidth: 1,
        paddingLeft: 5,
        paddingRight: 5,
        justifyContent: 'center',
    },
    inputStyle: {
        flex: 1,
        fontSize: 14,
    },
})

export default CustomInput;
