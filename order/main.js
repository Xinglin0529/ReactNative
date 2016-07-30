import React, { Component , PropTypes } from 'react';
import {
    ScrollView,
    View,
    Text,
    StyleSheet,
    Dimensions,
    DeviceEventEmitter,
    Keyboard,
    KeyboardAvoidingView
} from 'react-native';
import OrderHeader from './headerComponent';
import {
    SectionHeader,
    DescribelLabel,
    Input,
    AddressSelect,
    CommitButtom
} from './customBusinessComponent';

import AnimatedTextInput from './customTextInput';
const _window = Dimensions.get('window');

class OrderPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyboardSpace: 0,
        }
    }
    _scrollViewTo(name) {
        const keyboardHeight = 252;
        var scrollLength = 0;
        var moveHeight = keyboardHeight / 4;
        if (name === 'personName') {
            scrollLength += moveHeight;
        } else if (name === 'phoneNumber') {
            scrollLength += moveHeight * 2;
        } else if (name === 'present') {
            scrollLength += moveHeight * 3;
        }
        else if (name === 'address') {
            scrollLength += keyboardHeight;
        }

        this.refs.scroll.scrollTo({x: 0, y: scrollLength, animated: true});
    }

    _nextInputText(name) {
        if (name === 'personName') {
            this.refs.phoneNumber.textInput().focus();
        } else if (name === 'phoneNumber') {
            this.refs.address.textInput().focus();
        } else if (name === 'address') {
            this.refs.scroll.scrollTo({x: 0, y: 0, animated: true});
        }
    }
    _createTextInput(marginTop, placeholder, name) {
        var returnKey = '';
        if (name === 'personName') {
            returnKey = 'next';
        } else if (name === 'phoneNumber') {
            returnKey = 'next';
        } else if (name === 'address') {
            returnKey = 'done';
        }
        return (
            <AnimatedTextInput
                ref={name}
                style={{marginLeft: 14, marginRight: 14, height: 48, marginTop: marginTop}}
                placeholder={placeholder}
                fontSize={16}
                returnKeyType={returnKey}
                message='请输入手机号输入手机号输入号输入手机号输入手机号输入手机手机号'
                onChangeText={(text) => {
                    this.refs[name].updateTextInputStyle([...text].length <= 5);
                }}
                onFocus={(e)=>{
                    setTimeout(()=>{
                        this._scrollViewTo(name);
                    }, 500);
                    this.refs[name].closeErrorMessage(false);
                }}
                onEndEditing={()=>{
                }}
                onSubmitEditing={()=>{
                    this._nextInputText(name);
                }}
                clearButtonMode='while-editing'
            />
        )
    }

    _updateKeyboardSpace(frames) {
        const keyboardSpace =  frames.endCoordinates.height//获取键盘高度
　　     this.setState({keyboardSpace: keyboardSpace})
    }

    _resetKeyboardSpace() {
        this.setState({keyboardSpace: 0})
    }

    componentDidMount() {
        // this.refs.personName.startAnimation();
        // this.refs.phoneNumber.startAnimation();
        // this.refs.address.startAnimation();

    }

    componentWillMount() {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._updateKeyboardSpace.bind(this));
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._resetKeyboardSpace.bind(this));
    }

    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    render() {
        const rowData = {
            url: 'http',
            describe: '颜色：黑色，尺寸：L',
            currentPrice: 249,
            originalPrice: 399,
            count: 2,
            name: '产品名称',
        };
        return (
            <View style={styles.container}>
                <ScrollView
                    ref='scroll'
                    keyboardShouldPersistTaps={true}
                    contentInset={{bottom: this.state.keyboardSpace}}
                >
                    <OrderHeader rowData={rowData}/>
                    <SectionHeader />
                    <DescribelLabel />
                    {this._createTextInput(20, '收货人', 'personName')}
                    {this._createTextInput(20, '手机号', 'phoneNumber')}
                    <AddressSelect onClickAt={()=>{
                        this._scrollViewTo('present');
                    }}/>
                    {this._createTextInput(20, '详细地址', 'address')}
                    <CommitButtom />
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

export default OrderPage;
