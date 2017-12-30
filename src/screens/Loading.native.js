import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

export default class Loading extends Component {
    render() {
        return (
            <View
                style={styles.body}>
                <View
                    style={styles.topContent}>
                    <View
                        style={styles.user}>
                        <View
                            style={styles.userPhoto}>
                        </View>
                        <View
                            style={styles.userName}>
                            <Text
                                style={styles.userNameText}>
                                Jhorge
                            </Text>
                        </View>
                    </View>
                    <View
                        style={styles.vs}>
                        <Text
                            style={styles.vsText}>
                            VS
                        </Text>
                    </View>
                    <View
                        style={styles.user}>
                        <View
                            style={styles.userPhoto}>
                        </View>
                        <View
                            style={styles.userName}>
                            <Text
                                style={styles.userNameText}>
                                Izabella
                            </Text>
                        </View>
                    </View>
                </View>
                <View
                    style={styles.bottomContent}>
                    <View
                        style={styles.buttons}>
                        <View
                            style={styles.button}>
                            <TouchableOpacity
                                style={[styles.buttonBody, { backgroundColor: '#3aaaa2' }]}>
                                <Text
                                    style={styles.buttonText}>
                                    1 Minute
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View
                        style={styles.buttons}>
                        <View
                            style={[styles.button, styles.playButton]}>
                            <TouchableOpacity
                                style={[styles.playButtonBody, styles.buttonBody, { backgroundColor: '#44dd66' }]}>
                                <Text
                                    style={styles.buttonText}>
                                    Play
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#fff',
    },
    // top content
    topContent: {
        flex: 1,
        flexDirection: 'row',
    },
    user: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    vs: {
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    vsText: {
        fontSize: 21,
    },
    userPhoto: {
        width: 80,
        height: 80,
        borderRadius: 25,
        backgroundColor: 'red',
    },
    userName: {
        paddingTop: 10,
        paddingBottom: 10,
    },
    userNameText: {
        fontSize: 17,
        color: '#333',
    },
    // bottom content
    bottomContent: {
        flex: 2,
        backgroundColor: '#efefef',
    },
    buttons: {
        flexDirection: 'row',
    },
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
        paddingBottom: 20,
    },
    buttonBody: {
        padding: 20,
        paddingLeft: 30,
        paddingRight: 30,
        borderRadius: 5,
        backgroundColor: '#3aaaa2',
    },
    buttonText: {
        fontSize: 20,
        color: '#fff',
    },
    playButton: {
        flex: 1,
    },
    playButtonBody: {
        width: '90%',
        alignItems: 'center',
    },
    playButtonText: {

    },
});

Loading.navigationOptions = {
    title: 'Loading',
    // header: null,
}
