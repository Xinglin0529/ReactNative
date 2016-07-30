import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, ListView ,ScrollView, Dimensions} from 'react-native';
import ShoppingList from './ShoppingList';
import ScrollTabBar from './ScrollTabBar';
import Touch from './Touch';
import SwiperContainer from './home/swipeContainer';
import AnimatedTextInput from './order/customTextInput';

const _window = Dimensions.get('window');
class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isValid: true,
        }
    }

    _ads() {
        let s = [];
        let c = ['red', 'yellow', 'blue', 'purple'];
        for (var i = 0; i < 4; i++) {
            s.push((
                <Touch key={`Touch${i}`}>
                    <Image style={{backgroundColor: c[i], height: 150, width: _window.width}}>
                    </Image>
                </Touch>
            ))
        }
        return s;
    }

    _swipesContainer() {
        return (
            <SwiperContainer
                temp={this._ads()}
                auto={true}
                swipeSize={{height: 150, width: _window.width}}
            />
        )
    }

    render() {
        return (
            <View style={styles.container}>
            <AnimatedTextInput
                ref='userNameInput'
                style={{marginLeft: 14, marginRight: 14, height: 44}}
                placeholder='用户名'
                fontSize={16}
                onChangeText={(text) => {
                    if ([...text].length > 5) {
                        this.refs.userNameInput.updateTextInputStyle(false);
                    } else {
                        this.refs.userNameInput.updateTextInputStyle(true);
                    }
                    console.log(text);
                }}
                clearButtonMode='while-editing'
            />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 100,
    }
})
export default HomePage;
