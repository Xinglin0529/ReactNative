import React, { Component, propsTypes } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

const TopComponent = ({name}) => {
    return (
        <View>
            <View style={styles.topComponentContainer}>
                <Text style={styles.nameStyle}> 拼到底价 </Text>
                <Text style={styles.nameStyle}> {'|  ' + name} </Text>
            </View>
        </View>
    )
}

const ContentView = ({rowData}) => {
    const {url, describe, originalPrice, currentPrice, count} = rowData;
    return (
        <View style={styles.contentContainer}>
            <Image style={styles.imageStyle}/>
            <View style={{paddingLeft: 5, flex: 1}}>
                <Text style={{fontSize: 14}}> {describe} </Text>
                <View style={styles.priceContainer}>
                    <View style={{flexDirection: 'row', alignItems: 'flex-end', flex: 1}}>
                        <Text style={{fontSize: 18}}> {'￥' + currentPrice} </Text>
                        <Text style={{fontSize: 12, textDecorationLine: 'line-through'}}> {'￥' + originalPrice} </Text>
                    </View>
                    <Text style={{fontSize: 14, textAlign: 'right'}}> {'x' + count} </Text>
                </View>
                <Text style={{fontSize: 14, textAlign: 'right'}}> {'总金额: ￥' + currentPrice * 2} </Text>
            </View>
        </View>
    )
}

class OrderHeader extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let rowData = this.props.rowData;
        return (
            <View style={styles.container}>
                <TopComponent name={rowData.name}/>
                <ContentView rowData={rowData}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 14,
        paddingRight: 14,
    },
    topComponentContainer: {
        flexDirection: 'row',
        borderBottomWidth: 3,
        paddingBottom: 5,
        paddingTop: 5,
    },
    contentContainer: {
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 10,
    },
    priceContainer: {
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'flex-end',
        flex: 1
    },
    imageStyle: {
        height: 50,
        width: 50,
        backgroundColor: 'yellow',
    },
    nameStyle: {
        fontSize: 15,
        color: 'black',
    },
})

export default OrderHeader;
