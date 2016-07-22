import React, { Component, PropTypes } from 'react';
import {
    View,
    Text,
} from 'react-native';

class HeaderView extends Component {

    static propsTypes = {
        title: PropTypes.string,
        onPressMore: PropTypes.func,
    };

    constructor(props) {
        super(props);
    }

    render() {
        <View>

        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        
    },
})

export default HeaderView;
