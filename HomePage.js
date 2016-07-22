import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, ListView ,ScrollView, Dimensions} from 'react-native';
import ShoppingList from './ShoppingList';
import ScrollTabBar from './ScrollTabBar';
import Touch from './Touch';
import SwiperContainer from './home/swipeContainer';

const _window = Dimensions.get('window');
class HomePage extends Component {

    constructor(props) {
        super(props);
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
                <ScrollView >
                    {this._swipesContainer()}
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})
export default HomePage;
