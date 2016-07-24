import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TextInput,
    Modal
} from 'react-native';
import CustomInput from './order/customTextInput';
import Touch from './Touch';

class TextFieldDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isRight: true,
            isOpen: false,
        }
    }

    _checkStatus(text) {
        if ([...text].length > 10) {
            this.setState({isRight: false});
        } else {
            this.setState({isRight: true});
        }
    }

    _errorButton() {
        if (this.state.isRight === false) {
            return (
                <Touch onPress={()=>{this._openModal()}}>
                    <Image style={{width: 12, height: 12, backgroundColor: 'red'}}/>
                </Touch>
            )
        }
        return (<View/>)
    }

    _openModal() {
        this.setState({isOpen: true});
    }

    _closeModal() {
        this.setState({isOpen: false});
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={{flex: 1, fontSize: 15}}
                        keyboardType='numeric'
                        clearButtonMode='while-editing'
                        placeholder='输入...'
                        onChangeText={(text) => this._checkStatus(text)}
                    />
                    {this._errorButton()}
                </View>
            </View>
        )

    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 64,
        justifyContent: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        paddingLeft: 5,
        paddingRight: 5,
        height: 44,
        borderWidth: 1,
        borderRadius: 5,
        marginLeft: 14,
        marginRight: 14,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
})

export default TextFieldDemo;
