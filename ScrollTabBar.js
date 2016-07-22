'use strict';
import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import ScrollTableView, {DefaultTabBar} from 'react-native-scrollable-tab-view';
import ShoppingList from './ShoppingList';
import HomePage from './HomePage';

class ScrollTabBar extends Component {

    static defaultProps = {
        tabItems: [
            {'tabName': '待付款', component: ShoppingList, status: 0},
            {'tabName': '已付款', component: ShoppingList, status: 1},
            {'tabName': '已失效', component: ShoppingList, status: 2},
        ],
    };

    constructor(props) {
        super(props);
    }

    _goToPage() {

    }

    render() {
        const items = this.props.tabItems;
        let tabItemsView = [];
        if (items) {
            for (const item of items) {
                const tabName = item.tabName;
                const status = item.status;
                let SPPage = item.component;
                tabItemsView.push(<SPPage key={`item${tabName}`} tabLabel={tabName} status={status}/>);
            }
        }
        return (
            <ScrollTableView
                style={{marginTop: 64}}
                locked={false} //是否可以手指拖动
                tabBarPosition='top'//位置
                initialPage={0}//默认选中的tab
                tabBarUnderlineColor='#137acf'
                tabBarBackgroundColor='white'
                tabBarActiveTextColor='#333333'
                tabBarInactiveTextColor='#9d9d9d'
                renderTabBar={() => <DefaultTabBar/>}
                tabBarTextStyle={{fontSize: 16}}
                onChangeTab={(obj) => {
                    console.log(obj.i);
                }}
                onScroll={(position) => {
                    console.log(position);
                }}
            >
                {tabItemsView}
            </ScrollTableView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default ScrollTabBar;
