import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native';

import Dimensions from 'Dimensions';

export default class Piece extends Component {
    render() {
        const {
            x,
            y,
            color,
            movable,
            plus,
            promotion,
            castle,
            onPiecePress,
            piece,
            selected,
            numberShow,
        } = this.props;

        return (
            <TouchableOpacity
                style={[
                    styles.square,
                    color === 'light' && styles.white,
                    selected && styles.selected,
                    movable && styles.movable,
                    plus && styles.movablePlus,
                    promotion && styles.movablePromotion,
                    castle && styles.movableCastle,
                ]}
                onPress={e => onPiecePress(e, x, y)}>
                <Text>{ piece }</Text>
                {
                    true && numberShow &&
                    <Text style={styles.numberBottom}>{x}</Text>
                }
            </TouchableOpacity>
        );
    }
}

const {
    height,
    width,
} = Dimensions.get('window');

const styles = StyleSheet.create({
    square: {
        width: width/8,
        height: width/8,
        borderLeftWidth: 1,
        borderLeftColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ccc',
    },
    selected: {
        backgroundColor: '#8fecf6',
    },
    white: {
        backgroundColor: '#ffffff',
    },
    movable: {
        backgroundColor: '#888888',
    },
    movablePlus: {
        backgroundColor: '#ff7171',
    },
    movablePromotion: {
        backgroundColor: '#fdff97',
    },
    movableCastle: {
        backgroundColor: '#fdff97',
    },
    numberBottom: {
        position: 'absolute',
        zIndex: 1,
        bottom: 2,
        right: 2,
        fontSize: 10,
        backgroundColor: 'transparent',
    },
});
