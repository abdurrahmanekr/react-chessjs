import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native';

import {
    getCapture,
} from '../../utils'

export default class UserBoard extends Component {
    render() {
        const {
            chess,
            side,
            photo,
            name,
        } = this.props;

        return (
            <View
                style={styles.body}>
                <View
                    style={styles.userPhoto}>
                    <Image
                        style={styles.userPhoto}
                        source={photo}/>
                </View>
                <View
                    style={styles.center}>
                    <View
                        style={styles.userName}>
                        <Text
                            style={styles.userNameText}>
                            {name}
                        </Text>
                    </View>
                    <View
                        style={styles.userPieces}>
                        <Text
                            style={styles.userNameText}>
                            {JSON.stringify(getCapture(chess)[side])}
                        </Text>
                    </View>
                </View>
                <View
                    style={styles.timeBody}>
                    <View
                        style={styles.time}>
                        <Text
                            style={styles.timeText}>
                            12:00
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#eee',
    },
    userPhoto: {
        width: 45,
        height: 45,
    },
    center: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingLeft: 10,
    },
    userName: {
        flex: 1,
    },
    userNameText: {
        fontSize: 15,
        color: '#333333',
    },
    userPieces: {
        flex: 1,
    },
    timeBody: {
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    time: {
        backgroundColor: '#adadad',
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 5,
    },
    timeText: {
        fontSize: 17,
        color: '#fff',
    },
});
