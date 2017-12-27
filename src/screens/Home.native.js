import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view';

import {
    TabBar,
} from '../elements'

export default class Home extends Component {
    render() {
        return (
            <ScrollableTabView
                renderTabBar={() => <TabBar/>}>
                <View tabLabel="ios-home"><Text>Test</Text></View>
            </ScrollableTabView>
        );
    }
}

const styles = StyleSheet.create({

});

Home.navigationOptions = {
    header: null,
}
