import React, { Component } from 'react';
import {
    Modal,
    StyleSheet,
    Switch,
    Text,
    TouchableHighlight,
    View,
} from 'react-native';

import CustomButton from './CustomButton';

class ModalDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: false,
        }
    }
    
    _showModal() {
        this.setState({isShow: true})
    }

    _closeModal() {
        this.setState({isShow: false})
    }
    render() {
        return (
            <View style={styles.container}>
                <CustomButton
                    viewStyle={styles.commitButtonViewStyle}
                    textStyle={styles.commitButtonTextStyle}
                    onPress={()=>this._showModal()}
                    title='提交'
                />
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.isShow}
                    onRequestClose={() => {this._closeModal()}}
                >
                    <View style={{flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', justifyContent: 'center', alignItems: 'center'}}>
                        <View style={{width: 200, height: 100, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
                            <Text> Hello World </Text>
                            <Text> Hello World</Text>
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 64,
        justifyContent: 'center',
    },
    commitButtonViewStyle: {
        marginLeft: 100,
        marginTop: 20,
        backgroundColor: 'black',
        height: 44,
        width: 200,
        borderRadius: 22,
    },
    commitButtonTextStyle: {
        fontSize: 18,
        color: 'white',
    },
})

export default ModalDemo;
