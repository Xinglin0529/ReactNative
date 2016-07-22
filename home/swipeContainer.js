import React, { Component, PropTypes } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import Swiper from 'react-native-swiper';

class SwiperContainer extends Component {
    static propsTypes = {
        content: PropTypes.array,
        swipeSize: PropTypes.object,
    }
    constructor(props) {
        super(props);
    }

    render() {
        const { temp, swipeSize } = this.props;
        let auto = this.props.auto;
        let contentHeight = swipeSize.height;
        let contentWidth = swipeSize.width;

        if (temp.length == 0) {
            return (<View/>)
        }

        return (
            <View {...this.props}>
                <Swiper showButtons={false}
                        autoplay={auto}
                        height={contentHeight}
                        width={contentWidth}
                        paginationStyle={{bottom: 10}}
                >
                    {temp}
                </Swiper>
            </View>
        )
    }
}

export default SwiperContainer;
