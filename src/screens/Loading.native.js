import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native';

import Client from '../utils/client';

import { Chess } from 'chess.js';

export default class Loading extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rival: null,
            rivalId: null,
            loading: false,
            lock: false,
        };
        this.play = this.play.bind(this);
        this.openGame = this.openGame.bind(this);
    }

    play() {
        var self = this;
        self.setState({
            loading: true,
        });
        Client.emit('getRandomGamer', {}, (res) => {
            self.state.rival = res.name;
            self.state.rivalId = res.id;
            self.state.lock = true;
            self.setState(self.state);
            setTimeout(() => {
                self.setState({
                    loading: false,
                });
                self.openGame(self.state.rivalId, self.state.rival);
            }, 500);
        });
    }

    openGame(id, name) {
        const navigation = this.props.navigation;
        navigation.navigate('Game', {
            id: id,
            chess: new Chess(),
            side: 'w',
            rival: name,
            me: Client.name,
        });
    }

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
                            <Image
                                style={styles.userPhoto}
                                source={require('../assets/user.png')}/>
                        </View>
                        <View
                            style={styles.userName}>
                            <Text
                                style={styles.userNameText}>
                                {this.state.rival || '?'}
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
                                onPress={this.play}
                                style={[styles.playButtonBody, styles.buttonBody, { backgroundColor: '#44dd66' }]}>
                                <Text
                                    style={styles.buttonText}>
                                    Play {this.state.loading && '...'}
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
        backgroundColor: '#ffaa55',
        justifyContent: 'center',
        alignItems: 'center',
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
});

Loading.navigationOptions = {
    title: 'Game Setting',
    // header: null,
}
