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
        const { style, textInputStyle, ...other } = this.props;
        return (
            <View style={[styles.container, style]}>
                <TextInput
                    {...other}
                    style={[styles.inputStyle, textInputStyle]}
                />
            </View>
        )
    }
}

// class AnimatedTextInput extends Component {
//     constructor(props) {
//         super(props);
//     }
//
//     render() {
//         const { style, textInputStyle } = this.props;
//         return (
//             <View style={style}>
//                 <CustomInput
//                     placeholder='请输入'
//                     clearButtonMode='while-editing'
//                     onChangeText={(text) => {
//                     }}
//                     style={styles.inputStyle}
//                     textInputStyle={{fontSize: 14}}
//                 />
//             </View>
//         )
//     }
// }

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
    },
})

export default CustomInput;
