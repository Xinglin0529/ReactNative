import React, { Component } from 'react';
import { View, Text, StyleSheet, ListView } from 'react-native';
import CustomButton from './CustomButton';
import ShoppingList from './ShoppingList';
import ScrollTabBar from './ScrollTabBar';
import HomePage from './HomePage';
import Touch from './Touch';
import OrderPage from './order/main';

class ListViewDemo extends Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        const row = [
            {component: HomePage, title: 'HomePage'},
            {component: ScrollTabBar, title: 'ScrollTabBar'},
            {component: OrderPage, title: 'OrderPage'},
        ];

        this.state = {
            dataSource: ds.cloneWithRows(row)
        }
    }

    _onPress(rowData) {
        const {component, title} = rowData;
        this.props.navigator.push({component: component, title: title});
    }

    _cell(rowData) {
        return (
            <Touch onPress={()=>this._onPress(rowData)}>
                <View style={{paddingLeft: 14, height: 44, borderBottomWidth: 0.5, justifyContent: 'center', flex: 1}}>
                    <Text style={{fontSize: 20}}>{rowData.title} </Text>
                </View>
            </Touch>
        )
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => this._cell(rowData)}
                />
            </View>
        )
    }
}

export default ListViewDemo;
