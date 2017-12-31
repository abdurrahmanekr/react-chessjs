import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native';

import {
    join,
    getPiece,
    isMovable,
    isPlus,
    isPromotion,
    isCastle,
    getSide,
} from '../../utils';

import Piece from '../Piece/Piece.native';

import Dimensions from 'Dimensions';

export default class Board extends Component {

    getPiece(x, y) {
        const chess = this.props.chess;
        const square = chess.get(join(x, y));
        if (!square)
            return {
                piece: ' ',
            };
        return {
            piece: square.type,
            color: square.color === 'w' ? 'white' : 'black',
        };
    }

    render() {
        const {
            chess,
            side,
            selectedPiece,
            onPiecePress,
        } = this.props;

        return (
            <View
                style={styles.board}>
                {
                    getSide(side, chess).map((y, i) => (
                        <View
                            style={styles.line}
                            key={i}>
                            {
                                true && <Text
                                    style={styles.numberLeft}>
                                    {y}
                                </Text>
                            }
                            {
                                ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'].map((x, j) => (
                                    <Piece
                                        key={j}
                                        x={x}
                                        y={y}
                                        numberShow={chess.BLACK === side ? y === '8' : y === '1'}
                                        selected={selectedPiece === join(x, y)}
                                        color={chess.square_color(join(x, y))}
                                        movable={isMovable(x, y, chess, selectedPiece)}
                                        plus={isPlus(x, y, chess, selectedPiece)}
                                        promotion={isPromotion(x, y, chess, selectedPiece)}
                                        castle={isCastle(x, y, chess, selectedPiece)}
                                        onPiecePress={onPiecePress}
                                        piece={this.getPiece(x, y).piece}/>
                                ))
                            }
                        </View>
                    ))
                }
            </View>
        );
    }
}

const {
    height,
    width,
} = Dimensions.get('window');

const styles = StyleSheet.create({
    board: {
        flexDirection: 'column',
        flex: 1,
    },
    line: {
        height: width/8,
        borderRightWidth: 1,
        borderRightColor: '#ccc',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        flexDirection: 'row',
    },
    numberLeft: {
        position: 'absolute',
        zIndex: 1,
        top: 2,
        left: 2,
        fontSize: 10,
        backgroundColor: 'transparent',
    },
});
