import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view';

import {
    TabBar,
} from '../elements'

import Client from '../utils/client';

export default class Home extends Component {
    render() {
        return (
            <View>
                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate('NewGame', {});
                    }}
                    style={styles.playButton}>
                    <Text
                        style={styles.playButtonText}>
                        Play
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    playButton: {
        padding: 10,
        margin: 10,
        backgroundColor: 'lightgreen',
        borderWidth: 1,
        borderColor: 'green',
        borderRadius: 5,
    },
    playButtonText: {
        fontSize: 17,
        color: 'green',
    }
});

Home.navigationOptions = {
    header: null,
}
