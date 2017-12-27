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

import Home from './Home.native';
import Profile from './Profile.native';

export default class Pages extends Component {
    render() {
        const navigation = this.props.navigation;
        return (
            <ScrollableTabView
                renderTabBar={() => <TabBar/>}>
                <Home
                    navigation={navigation}
                    tabLabel="ios-home"/>
                <Profile
                    navigation={navigation}
                    tabLabel="ios-person"/>
            </ScrollableTabView>
        );
    }
}

Pages.navigationOptions = {
    header: null,
}
