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
                    onPress={() => {
                        this.props.navigation.navigate('Loading')
                    }}
                    style={[styles.shape, styles.shape1]}>
                    <View
                        style={styles.shapeButton}>
                        <Text
                            style={styles.shapeButtonText}>
                            Computer
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate('Loading')
                    }}
                    style={[styles.shape, styles.shape2]}>
                    <View
                        style={styles.shapeButton}>
                        <Text
                            style={styles.shapeButtonText}>
                            Multiplayer
                        </Text>
                    </View>
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
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
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
