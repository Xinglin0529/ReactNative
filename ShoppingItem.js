import React, {Component} from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';

const TopTextContent = ({rowData}) => {
    return (
        <View style={styles.topTextContentContainer}>
            <Text style={styles.topTextStyle}> {rowData.date} </Text>
            <Text style={styles.topTextStyle}> {rowData.name} </Text>
            <Text style={styles.topTextStyle}> {rowData.billNo} </Text>
        </View>
    )
}

const MiddleTextContent = ({rowData}) => {
    return (
        <View style={styles.middleTextContentContainer}>
            <Text style={styles.middleTextStyle}> {'商品: ' + rowData.goods} </Text>
            <Text style={styles.middleTextStyle}> {'价格: ' + rowData.price} </Text>
            <Text style={styles.middleTextStyle}> {'数量: ' + rowData.count} </Text>
        </View>
    )
}

class ShoppingItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var rowData = this.props.rowData;
        return (
            <View style={{flex: 1}}>
                <View style={styles.rowHeader}/>
                <View style={styles.topContainer}>
                    <View style={styles.imageContainer}>
                        <Image/>
                    </View>
                    <TopTextContent rowData={rowData}/>
                </View>
                <MiddleTextContent rowData={rowData}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    topContainer: {
        flexDirection: 'row',
        paddingTop: 14,
    },
    imageContainer: {
        height: 50,
        width: 50,
        marginLeft: 14,
        backgroundColor: 'red',
    },
    rowHeader: {
        height: 15,
        backgroundColor: '#e9e9e9',
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        borderColor: '#c1c1c1',
    },
    topTextContentContainer: {
        flexDirection: 'column',
        paddingLeft: 5,
        paddingRight: 14,
        flex: 1,
    },
    middleTextContentContainer: {
        flexDirection: 'column',
        paddingTop: 10,
        paddingLeft: 14,
        paddingRight: 14,
        flex: 1,
    },
    topTextStyle: {
        color: '#a9a9a9',
        fontSize: 14,
    },
    middleTextStyle: {
        color: '#a9a9a9',
        fontSize: 16,
    },
})

export default ShoppingItem;
