import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TextInput,
    Modal,
    Animated,
    Easing
} from 'react-native';
import Touch from './Touch';

var beginAnimatedMove;
var beginAnimatedScale;
var beginAnimatedParallel;

var endAnimatedMove;
var endAnimatedScale;
var endAnimatedParallel;

const TextInputLeftMargin = 10;
const FirstResponder = 'firstResponder';

class TextFieldDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isValid: true,
            translateValue: new Animated.ValueXY({x: 0, y: 0}),
            scaleValue: new Animated.Value(1),
            text: '',
        }
        const text = '输入输入输入输入...';
        const originX = [...text].length * 15 * 0.1;
        beginAnimatedMove = Animated.timing(
            this.state.translateValue, {
                toValue:{x: -originX, y: -27},
                duration: 200,
                easing: Easing.linear,
            }
        );

        beginAnimatedScale = Animated.timing(
            this.state.scaleValue,{
                toValue: 0.8,
                duration: 200,
                easing: Easing.linear,
            }
        );
        beginAnimatedParallel = Animated.parallel(
            [
                beginAnimatedMove,
                beginAnimatedScale
            ],{stopTogether: true},
        );

        endAnimatedMove = Animated.timing(
            this.state.translateValue, {
                toValue:{x: 0, y: 0},
                duration: 200,
                easing: Easing.linear,
            }
        );

        endAnimatedScale = Animated.timing(
            this.state.scaleValue,{
                toValue: 1,
                duration: 200,
                easing: Easing.linear,
            }
        );
        endAnimatedParallel = Animated.parallel(
            [
                endAnimatedMove,
                endAnimatedScale
            ],{stopTogether: true},
        );
    }

    _checkTextIsValid(text) {
        this.setState({text: text});
        if ([...text].length > 10) {
            this.setState({isValid: false});
        } else {
            this.setState({isValid: true});
        }
    }

    _showErrorButton() {
        if (this.state.isValid === false) {
            return (
                <Touch onPress={()=>{this._openModal()}}>
                    <Image style={{width: 12, height: 12, backgroundColor: 'red'}}/>
                </Touch>
            )
        }
        return (<View/>)
    }

    _autoFocus() {
        this.refs.firstResponder.focus();
    }

    _animate(isStart) {
        if (isStart) {
            beginAnimatedParallel.start();
        } else {
            endAnimatedParallel.start();
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View
                    style={{height: 44,
                            marginLeft: 14,
                            marginRight: 14,
                    }}
                >
                    <View style={styles.inputContainer}>
                        <TextInput
                            ref={FirstResponder}
                            style={[{flex: 1}, {fontSize: 15, height: 44}]}
                            keyboardType='default'
                            clearButtonMode='while-editing'
                            onChangeText={(text) => this._checkTextIsValid(text)}
                            onFocus={()=>this._animate(true)}
                            onBlur={()=>{
                                if ([...this.state.text].length > 0) {
                                    return;
                                }
                                this._animate(false)
                            }}
                        />
                        {this._showErrorButton()}
                    </View>
                    <Animated.View
                        style={[styles.animateContainer,
                               {transform: [{scale:this.state.scaleValue},
                                            {translateX:this.state.translateValue.x},
                                            {translateY:this.state.translateValue.y}]
                              }]}
                    >
                        <Text
                            style={[styles.placeholderStyle, {fontSize: 15}]}
                            onPress={()=>this._autoFocus()}
                        >
                            输入输入输入输入...
                        </Text>
                    </Animated.View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        paddingLeft: TextInputLeftMargin,
        paddingRight: TextInputLeftMargin,
        height: 44,
        justifyContent: 'space-around',
        borderWidth: 1,
        borderRadius: 5,
        alignItems: 'center',
    },
    animateContainer: {
        justifyContent: 'center',
        position: 'absolute',
        height: 44,
        top: 0,
        left: TextInputLeftMargin,
    },
    placeholderStyle: {
        color: 'gray',
    },
})

export default TextFieldDemo;
