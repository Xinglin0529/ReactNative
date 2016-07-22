import React, {Component} from 'react';
import {
    Image,
    Text,
    View,
    StyleSheet,
    Alert
} from 'react-native';
import Touch from './Touch';
import ShoppingItem from './ShoppingItem';
import CustomButton from './CustomButton';

class ShoppingCell extends Component {
    constructor(props) {
        super(props);
    }

    _payAction() {
        Alert.alert(null, '支付成功!',[{text: '确定', onPress: ()=>{}}])
    }

    _cancelAction() {
        Alert.alert(
            '取消订单',
            '是否确定取消订单?',
            [{text: '确定', onPress: ()=> {}},
             {text: '取消', onPress: ()=> {}}
            ]
        )
    }

    _statusComponent(rowData) {
        if (rowData.status == 2) {
            return (
                <Text style={[styles.textColor2, {paddingLeft: 15}]}>
                订单已失效
                </Text>
            )
        } else if(rowData.status == 1){
            return (
                <View style={{paddingLeft: 15, flexDirection: 'row', alignItems:'flex-end'}}>
                    <Text style={[styles.textColor2, {fontSize: 16}]}> 已付: </Text>
                    <Text style={[styles.textColor2, {fontSize: 20, marginLeft: 5}]}> {'￥' + rowData.pay} </Text>
                </View>
            )
        } else {
            return (
                <View>
                    <View style={{paddingLeft: 15, flexDirection: 'row', alignItems: 'flex-end'}}>
                        <Text style={[styles.textColor2, {fontSize: 16}]}> 已付: </Text>
                        <Text style={[styles.textColor2, {fontSize: 20, marginLeft: 5}]}> {'￥' + rowData.pay} </Text>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 15}}>
                        <CustomButton
                            title='继续支付'
                            viewStyle={styles.payButtonViewStyle}
                            textStyle={styles.payButtonTextStyle}
                            onPress={()=>{alert('111')}}
                        />
                        <CustomButton
                            title='取消订单'
                            viewStyle={styles.cancelButtonViewStyle}
                            textStyle={styles.cancelButtonTextStyle}
                            onPress={()=>{alert('111')}}
                        />
                    </View>
                </View>
            )
        }
    }
    render() {
        var rowData = this.props.rowData;
        return (
            <View style={styles.container}>
                <ShoppingItem rowData={rowData}/>
                {this._statusComponent(rowData)}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        paddingBottom: 14,
    },
    textColor2: {
        color: '#5f5f5f',
    },
    payButtonViewStyle: {
        height: 30,
        width: 100,
        marginLeft: 14,
        backgroundColor: '#28b6ea',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15
    },
    payButtonTextStyle: {
        fontSize: 14,
        color: 'white',
    },
    cancelButtonViewStyle: {
        height: 30,
        width: 100,
        marginLeft: 14,
        backgroundColor: 'white',
        borderWidth: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        borderColor: '#28b6ea',
    },
    cancelButtonTextStyle: {
        fontSize: 14,
        color: '#28b6ea',
    },
})

export default ShoppingCell;
