import React, { Component , PropTypes } from 'react';
import {
    ScrollView,
    View,
    Text,
    StyleSheet,
    Dimensions,
} from 'react-native';
import OrderHeader from './headerComponent';
import {
    SectionHeader,
    DescribelLabel,
    Input,
    AddressSelect,
    CommitButtom
} from './customBusinessComponent';

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
                <ScrollView keyboardDismissMode='on-drag'
                    keyboardShouldPersistTaps={true}
                >
                    <OrderHeader rowData={rowData}/>
                    <SectionHeader />
                    <DescribelLabel />
                    <Input placeholder='收货人'/>
                    <Input placeholder='手机号'/>
                    <AddressSelect />
                    <Input placeholder='详细地址'/>
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
