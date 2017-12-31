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
                <View
                    style={[styles.shape, styles.shape1, styles.shapeTransform]}>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.navigate('Loading')
                        }}
                        style={[styles.shapeTouch]}>
                        <View
                            style={styles.shapeButton}>
                            <Text
                                style={styles.shapeButtonText}>
                                Computer
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View
                    style={[styles.shape, styles.shape2, styles.shapeTransform]}>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.navigate('Loading')
                        }}
                        style={[styles.shapeTouch]}>
                        <View
                            style={styles.shapeButton}>
                            <Text
                                style={styles.shapeButtonText}>
                                Multiplayer
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
    },
    shape: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // flex: 1,
        position: 'absolute',
    },
    shapeTouch: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
        position: 'absolute',
    },
    shapeTransform: {
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
    shapeButton: {
        // backgroundColor: 'black',
        height: 100,
        transform: [{
            rotate: '-45deg'
        }]
    },
    shapeButtonText: {
        color: '#fff',
        fontSize: 19,
    }
});

NewGame.navigationOptions = {
    title: 'New Game'
}
