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

export default class Profile extends Component {
    render() {
        return (
            <View>
                <Text>Profile</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({

});

Profile.navigationOptions = {
    header: null,
}
