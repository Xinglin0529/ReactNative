import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    ListView,
    Text,
    Dimensions,
    RefreshControl
} from 'react-native';
import ShoppingCell from './ShoppingCell';

const win = Dimensions.get('window');
/**
 * status: 0：待付款， 1：已付款 ，2：失效
 * @type {Object}
 */
const rowDefault0 = {
    imageUrl: '',
    date: '2016-05-27',
    name: '订单编号',
    billNo: '32189H90HOIHio90u8huioh890y800',
    goods: '无线便携音箱',
    price: '399',
    count: 1,
    pay: 249,
    status: 0,
}

const rowDefault1 = {
    imageUrl: '',
    date: '2016-05-27',
    name: '订单编号',
    billNo: '32189H90HOIHio90u8huioh890y800',
    goods: '无线便携音箱',
    price: '399',
    count: 1,
    pay: 249,
    status: 1,
}
const rowDefault2 = {
    imageUrl: '',
    date: '2016-05-27',
    name: '订单编号',
    billNo: '32189H90HOIHio90u8huioh890y800',
    goods: '无线便携音箱',
    price: '399',
    count: 1,
    pay: 249,
    status: 2,
}

class ShoppingList extends Component {
    constructor(props) {
        super(props);
        this.state = {
          refreshing: false,
          dataSource: new ListView.DataSource({
              rowHasChanged: (r1, r2) => r1 !== r2
          }),
        }
    }

    _renderRow(rowData) {
        return (
            <ShoppingCell rowData={rowData}/>
        )
    }

    _reloadData() {
        const status = this.props.status;
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        var row = [rowDefault0, rowDefault0, rowDefault0, rowDefault0, rowDefault0];
        if (status == 1) {
            row = [rowDefault1, rowDefault1, rowDefault1, rowDefault1, rowDefault1];
        } else if (status == 2) {
            row = [rowDefault2, rowDefault2, rowDefault2, rowDefault2, rowDefault2];
        }
        this.setState({
            dataSource: ds.cloneWithRows(row),
        })
    }

    _changeRefreshStatus(status) {
        this.setState({refreshing: status})
    }

    _loadData() {
        this._changeRefreshStatus(true);
        this._reloadData();
    }

    _onRefresh() {
        setTimeout(()=>this._changeRefreshStatus(false), 1000);
    }

    componentWillMount() {
        console.log('willMount');
    }

    componentDidMount() {
        setTimeout(()=>this._loadData(), 300);
        setTimeout(()=>this._changeRefreshStatus(false), 1000);
    }

    render() {
        return (
            <View style={{height: win.height - 64 - 50}}>
                <ListView
                    refreshControl = {
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={()=>this._onRefresh()}
                        />
                    }
                    style={styles.listView}
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => this._renderRow(rowData)}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    listView: {
        backgroundColor: '#f4f5f6',
        flex: 1
    }
})

export default ShoppingList;
