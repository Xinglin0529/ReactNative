import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';
import Touch from '../Touch';

class SelectButton extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { defaultText, text, onPress, style } = this.props;
        return (
            <Touch onPress={() => onPress && onPress()}>
                <View style={[styles.container, style]}>
                    <Text style={styles.textStyle}>{text ? text : defaultText}</Text>
                    <Image style={styles.imageStyle}/>
                </View>
            </Touch>
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    imageStyle: {
        backgroundColor: 'red',
        height: 10,
        width: 10,
    },
    textStyle: {
        fontSize: 14,
    },
})

export default SelectButton;
