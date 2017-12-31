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

import {
    join,
    isMovable,
    isPlus,
    isPromotion,
    isCastle,
} from '../utils';

import Board from '../components/Board/Board.native'
import UserBoard from '../components/UserBoard/UserBoard.native'

export default class Game extends Component {
    constructor(props) {
        super(props);
        this.params = this.props.navigation.state.params || {};
        this.state = {
            selectedPiece: null,
        };
        this.onPiecePress = this.onPiecePress.bind(this);
    }

    onPiecePress(e, x, y) {
        const chess = this.params.chess;

        var piece = join(x, y);
        var square = chess.get(piece);

        var moves = chess.moves({ square: piece });

        if (this.state.selectedPiece !== piece) {
            var xNew = piece[0], yNew = piece[1];
            var move =  isMovable(xNew, yNew, chess, this.state.selectedPiece) || 
                        isPlus(xNew, yNew, chess, this.state.selectedPiece) ||
                        isPromotion(xNew, yNew, chess, this.state.selectedPiece) ||
                        isCastle(xNew, yNew, chess, this.state.selectedPiece)

            if (move) {
                chess.move(move);
            }

            this.setState({
                selectedPiece: piece,
            })
        }
    }

    render() {
        const {
            chess,
            side,
            rival,
            me,
        } = this.params;

        return (
            <ScrollView
                style={styles.body}>
                <UserBoard
                    chess={chess}
                    name={rival}
                    side={chess.BLACK === side ? chess.WHITE : chess.BLACK}
                    photo={require('../assets/user.png')}/>
                <Board
                    onPiecePress={this.onPiecePress}
                    selectedPiece={this.state.selectedPiece}
                    side={side}
                    chess={chess}/>
                <UserBoard
                    chess={chess}
                    name={me}
                    side={side}
                    photo={require('../assets/user.png')}/>
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
