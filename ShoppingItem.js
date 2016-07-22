import React, {Component} from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';

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
                    <View style={styles.contentContainer}>
                        <Text style={styles.textColor1}> {rowData.date} </Text>
                        <Text style={styles.textColor1}> {rowData.name} </Text>
                        <Text style={styles.textColor1}> {rowData.billNo} </Text>
                    </View>
                </View>
                <Text style={[styles.textColor1, {marginTop: 5,marginLeft: 14}]}> {'商品: ' + rowData.goods} </Text>
                <Text style={[styles.textColor1, {marginLeft: 14}]}> {'价格: ' + rowData.price} </Text>
                <Text style={[styles.textColor1, {marginLeft: 14, marginBottom: 14}]}> {'数量: ' + rowData.count} </Text>
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
        width: 64,
        marginLeft: 14,
        backgroundColor: 'red',
    },
    rowHeader: {
        height: 15,
        backgroundColor: '#e9e9e9',
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        borderColor: 'gray',
    },
    contentContainer: {
        flexDirection: 'column',
        paddingLeft: 5,
        paddingRight: 14,
        flex: 1,
    },
    textColor1: {
        color: '#a9a9a9',
        fontSize: 14,
    },
})

export default ShoppingItem;
