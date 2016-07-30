import React, { Component, PropTypes } from 'react';
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

import Touch from '../Touch';

const TextInputLeftMargin = 10;
const BecomeFirstResponder = 'firstResponder';
const NormalBorderColor = 'gray';
const ErrorBorderColor = 'red';
const FocusBorderColor = '#4e92df';
const DefaultFontSize = 16;

/**
 * <AnimatedTextInput
     ref={name}
     style={{marginLeft: 14, marginRight: 14, height: 48, marginTop: marginTop}}
     placeholder={placeholder}
     fontSize={16}
     message='请输入手机号输入手机号输入号输入手机号输入手机号输入手机手机号'
     onChangeText={(text) => {
         this.refs[name].updateTextInputStyle([...text].length <= 5);
     }}
     onFocus={()=>{
         this.refs[name].closeErrorMessage(false);
     }}
     clearButtonMode='while-editing'
 />
 */

class AnimatedTextInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isShow: false,
            isFocus: false,
            isValid: true,
            translateValue: new Animated.ValueXY({x: 0, y: 0}),
            scaleValue: new Animated.Value(1),
            text: props.defaultValue ? props.defaultValue : '',
        }
    }

    componentDidMount() {
        let
        beginAnimatedMove,
        beginAnimatedScale,

        endAnimatedMove,
        endAnimatedScale;
        const props = this.props;
        const { height } = props.style;
        const { placeholder, fontSize } = props;
        const text = placeholder ? placeholder : '';
        const customFontSize = fontSize ? fontSize : DefaultFontSize;
        const originX = [...text].length * customFontSize * 0.1;
        beginAnimatedMove = Animated.timing(
            this.state.translateValue, {
                toValue:{x: -originX, y: -(height / 2 + 5)},
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
        this.beginAnimatedParallel = Animated.parallel(
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
        this.endAnimatedParallel = Animated.parallel(
            [
                endAnimatedMove,
                endAnimatedScale
            ],{stopTogether: true},
        );
    }

    updateTextInputStyle(isValid) {
        this.setState({isValid: isValid});
    }

    startAnimation() {
        this._animate(true);
    }

    closeErrorMessage() {
        this._changeErrorMessageState(false);
    }

    textInput() {
        return this.refs[BecomeFirstResponder];
    }

    _recordCurrentContentInTextInput(text) {
        if (text && [...text].length > 0) {
            this._animate(true);
        }
        this.setState({text: text});
    }

    _showErrorButton() {
        if (this.state.isValid === false) {
            return (
                <Touch onPress={()=>{
                    this._changeErrorMessageState(true);
                }}>
                    <Image style={styles.errorButton}/>
                </Touch>
            )
        }
        return (<View/>)
    }

    _showErrorMessage() {
        const message = this.props.message;
        const isShow = this.state.isShow;
        const { height } = this.props.style;
        if (!message) {
            return;
        }
        if (isShow === true) {
            return (
                <ErrorItem
                    style={styles.itemContainer}
                    message={message}
                    superHeight={height}
                />
            )
        }
        return (<View/>)
    }

    _changeErrorMessageState(isShow) {
        this.setState({isShow: isShow});
    }

    _getFocusByTapText() {
        this.refs[BecomeFirstResponder].focus();
    }

    _getFocus() {
        this.setState({isFocus: true});
    }

    _lostFocus() {
        this.setState({isFocus: false});
    }

    _animate(isStart) {
        if (isStart) {
            this.beginAnimatedParallel.start();
        } else {
            this.endAnimatedParallel.start();
        }
    }

    _placeholderColor() {
        const isValid = this.state.isValid;
        return isValid ? 'gray' : 'red';
    }

    _inputContainerBorderColor() {
        const isValid = this.state.isValid;
        const isFocus = this.state.isFocus;
        if (isValid) {
            return isFocus ? FocusBorderColor : NormalBorderColor;
        } else {
            return ErrorBorderColor;
        }
    }

    _inputContainerPaddingRight() {
        const isValid = this.state.isValid;
        return isValid ? 0 : TextInputLeftMargin;
    }

    render() {
        const {
            style,
            fontSize,
            placeholder,
            onChangeText,
            onFocus,
            ...otherTextInputMethod
        } = this.props;

        const customHeight = style.height;
        const customFontSize = fontSize ? fontSize: DefaultFontSize;
        const customPlaceholder = placeholder ? placeholder : '';
        const {
            borderWidth,
            borderColor,
            borderRadius,
            backgroundColor,
            ...otherContainerStyle
        } = style;

        return (
            <View style={otherContainerStyle}>
                {this._showErrorMessage()}
                <View style={[styles.inputContainer,
                            {height: customHeight,
                        borderColor: this._inputContainerBorderColor(),
                        paddingRight: this._inputContainerPaddingRight()
                }]}>
                    <TextInput
                        ref={BecomeFirstResponder}
                        style={[{flex: 1},
                            {fontSize: customFontSize,
                               height: customHeight
                        }]}
                        onChangeText={(text) => {
                            onChangeText && onChangeText(text);
                            this._recordCurrentContentInTextInput(text);
                        }}
                        onFocus={(e)=>{
                            onFocus && onFocus(e);
                            this._animate(true);
                            this._getFocus();
                            this._changeErrorMessageState(false);
                        }}
                        onBlur={()=>{
                            this._lostFocus();
                            if ([...this.state.text].length > 0) {
                                return;
                            };
                            this._animate(false);
                        }}
                        {...otherTextInputMethod}/>
                    {this._showErrorButton()}
                </View>
                <Animated.View
                    style={[styles.animateContainer,
                           {transform: [{scale:this.state.scaleValue},
                                        {translateX:this.state.translateValue.x},
                                        {translateY:this.state.translateValue.y}]
                          },{height: customHeight}]}>
                    <Text
                        style={{
                            fontSize: customFontSize,
                            color: this._placeholderColor()
                        }}
                        onPress={()=>{this._getFocusByTapText()}}>
                        {customPlaceholder}
                    </Text>
                </Animated.View>
            </View>
        )
    }
}

class ErrorItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { style, message, superHeight } = this.props;
        return (
            <View style={style}>
                <Text numberOfLines={1} style={styles.itemText}> {message} </Text>
                <Image style={styles.triangleStyle}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        paddingLeft: TextInputLeftMargin,
        justifyContent: 'space-around',
        borderWidth: 1,
        borderRadius: 5,
        alignItems: 'center',
    },
    animateContainer: {
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        left: TextInputLeftMargin,
    },
    errorButton: {
        width: 14,
        height: 14,
        marginTop: 2,
        borderRadius: 7,
        backgroundColor: 'red',
    },
    triangleStyle: {
        position: 'absolute',
        width: 7,
        height: 7,
        right: 15,
        backgroundColor: 'black',
        opacity: 0.7,
    },
    itemText: {
        fontSize: 14,
        color: 'white',
        backgroundColor: 'black',
        opacity: 0.7,
        padding: 5,
        borderRadius: 5,
    },
    itemContainer: {
        position: 'absolute',
        height: 40,
        right: 0,
        top: -35,
    },
})

export default AnimatedTextInput;
