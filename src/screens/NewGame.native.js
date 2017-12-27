import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

export default class NewGame extends Component {
    render() {
        return (
            <View
                style={styles.body}>
                <TouchableOpacity
                    style={[styles.shape, styles.shape1]}>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.shape, styles.shape2]}>

                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
    },
    shape: {
        // flex: 1,
        position: 'absolute',
        transform: [{
            rotate: '45deg'
        }]
    },
    shape1: {
        width: '100%',
        height: 700,
        left: -115,
        top: -200,
        backgroundColor: 'blue',
    },
    shape2: {
        width: '100%',
        height: 700,
        right: -115,
        bottom: -200,
        backgroundColor: 'red',
    },
});

NewGame.navigationOptions = {
    title: 'New Game'
}
