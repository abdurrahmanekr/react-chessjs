import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
} from 'react-native';

import Client from '../utils/client';

import Board from '../components/Board/Board.native'

export default class Game extends Component {
    constructor(props) {
        super(props);
        this.params = this.props.navigation.state.params || {};
        this.state = {
            selectedPiece: null,
        };
    }

    onPieceClick() {
        debugger;
    }

    render() {
        const {
            chess,
            side,
        } = this.params;

        return (
            <ScrollView
                style={styles.body}>
                <Board
                    onPieceClick={this.onPieceClick}
                    selectedPiece={this.state.selectedPiece}
                    side={side}
                    chess={chess}/>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

Game.navigationOptions = {
    title: 'Game',
    // header: null,
}
