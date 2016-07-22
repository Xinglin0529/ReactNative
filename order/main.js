import React, { Component , PropTypes } from 'react';
import {
    ScrollView,
    View,
    Text,
    StyleSheet,
} from 'react-native';
import OrderHeader from './headerComponent';

const SectionHeader = () => {
    return (
        <View style={{height: 10, backgroundColor: '#e9e9e9', borderColor: 'gray', borderTopWidth: 0.5, borderBottomWidth: 0.5}}/>
    )
}

const DescribelLabel = () => {
    return (
        <Text style={{marginTop: 20, lineHeight: 17,marginLeft: 14, marginRight: 14, fontSize: 13, color: 'gray'}}>
            本商品会通过快递寄送给您。若选择省、市时没有您所在的读取，说明快递无法配送。
        </Text>
    )
}

const TextInput1 = () => {
    return (
        <TextField
            style={{marginTop: 20, height: 50,marginLeft: 14, marginRight: 14, borderWidth: 0.5, borderRadius: 5}}
            placeholder='请输入收货人姓名'
        />
    )
}
class OrderPage extends Component {
    constructor(props) {
        super(props);
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
                <ScrollView>
                    <OrderHeader rowData={rowData}/>
                    <SectionHeader />
                    <DescribelLabel />
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
