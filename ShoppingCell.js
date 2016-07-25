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

const PhoneItem = () => {
    return (
        <View style={styles.phoneItemContainer}>
            <Text style={{fontSize: 16, color: '#a9a9a9'}}> 客服电话：12345666 </Text>
            <Touch onPress={()=>{}}>
                <Image style={{width: 14, height: 14, backgroundColor: 'yellow'}}/>
            </Touch>
        </View>
    )
}

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
                <View style={styles.paddingContainer}>
                    <PhoneItem />
                    <Text style={{fontSize: 18, color: '#5f5f5f'}}> 订单已失效 </Text>
                </View>
            )
        } else if(rowData.status == 1){
            return (
                <View style={styles.paddingContainer}>
                    <Text style={{fontSize: 16, color: '#a9a9a9'}}> {'物流信息：' + '快递公司' + '单号12313131'} </Text>
                    <PhoneItem />
                    <View style={{flexDirection: 'row', alignItems:'flex-end'}}>
                        <Text style={[styles.payTextColor, {fontSize: 16}]}> 已付: </Text>
                        <Text style={[styles.payTextColor, {fontSize: 20, marginLeft: 5}]}> {'￥' + rowData.pay} </Text>
                    </View>
                </View>
            )
        } else {
            return (
                <View style={styles.paddingContainer}>
                    <PhoneItem />
                    <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                        <Text style={[styles.payTextColor, {fontSize: 16}]}> 待付: </Text>
                        <Text style={[styles.payTextColor, {fontSize: 20, marginLeft: 5}]}> {'￥' + rowData.pay} </Text>
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
        paddingBottom: 14,
    },
    payTextColor: {
        color: '#5f5f5f',
    },
    payButtonViewStyle: {
        height: 30,
        width: 100,
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
    paddingContainer: {
        paddingLeft: 14,
        paddingRight: 14,
    },
    phoneItemContainer: {
        flexDirection: 'row',
        paddingBottom: 10,
        alignItems: 'center',
    },
})

export default ShoppingCell;
