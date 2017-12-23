import React, { Component } from 'react';

import {
    join,
    getPiece,
    isMovable,
    isPlus,
    isPromotion,
    isCastle,
} from '../../utils';

import Piece from '../Piece/Piece';

export default class Board extends Component {

    getPiece(x, y) {
        const chess = this.props.chess;
        const square = chess.get(join(x, y));
        if (!square)
            return {
                piece: ' ',
            };
        return {
            piece: getPiece(chess, (square.type || '').toLowerCase(), square.color).cmp,
            color: square.color === 'w' ? 'white' : 'black',
        };
    }

    render() {
        const {
            chess,
            selectedPiece,
            onPieceClick,
        } = this.props;

        return (
            <div
                className="board">
                {
                    ['8', '7', '6', '5', '4', '3', '2', '1'].map((y, i) => (
                        <div
                            className='line'
                            key={i}>
                            <span className="number left">{y}</span>
                            {
                                ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'].map((x, j) => (
                                    <Piece
                                        key={j}
                                        x={x}
                                        y={y}
                                        selected={selectedPiece === join(x, y)}
                                        color={chess.square_color(join(x, y))}
                                        movable={isMovable(x, y, chess, selectedPiece)}
                                        plus={isPlus(x, y, chess, selectedPiece)}
                                        promotion={isPromotion(x, y, chess, selectedPiece)}
                                        castle={isCastle(x, y, chess, selectedPiece)}
                                        onPieceClick={onPieceClick}
                                        piece={this.getPiece(x, y).piece}/>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
        );
    }
}
