import React from 'react';

export function join() {
    var str = '';
    for (var i = 0; i < arguments.length; i++)
        str += String(arguments[i]);
    return str;
}

export function isMovable(x, y, chess, piece) {
    const square = piece && chess.get(piece);
    const moves = chess.moves({ square: piece });

    return moves.find(z => {
        return z.match(
            new RegExp(square && square.type !== chess.PAWN ? (square.type.toUpperCase() + '.?' + join(y, x)) : join(y, x), 'g')
        ) !== null
    });
}

export function isPlus(x, y, chess, piece) {
    const square = piece && chess.get(piece);
    const moves = chess.moves({ square: piece });

    if (moves.length === 0 || !square)
        return false;

    return moves.find(z => {
        return  z.match(new RegExp('.*x' + join(y, x) + '\\+?')) !== null ||
                z.match(new RegExp('.*x?' + join(y, x) + '\\+')) !== null
    })
}

export function isPromotion(x, y, chess, piece) {
    const square = piece && chess.get(piece);
    const moves = chess.moves({ square: piece });

    if (moves.length === 0 || !square)
        return false;

    return moves.find(z => {
        return z.match(new RegExp(`.*x?(${join(y, x)})=.`)) !== null
    })
}

export function isWinner(player, chess) {
    if (chess.in_checkmate()) {
        if (chess.turn() === player)
            return false
        return true
    }
    else if (chess.game_over())
        return '1/2';

    return null
}

export function isCastle(x, y, chess, piece) {
    const moves = chess.moves({ square: piece });
    const square = chess.get(join(y, x));

    if (moves.length === 0 ||
        square ||
        chess.turn() === chess.WHITE && x !== '1' ||
        chess.turn() === chess.BLACK && x !== '8'
    ) return false;

    return moves.find(z => {
        return  z.match('O-O-O') !== null && 
                join(y, x).match(new RegExp('c1|c8')) ||
                z.match('O-O') !== null &&
                join(y, x).match(new RegExp('g1|g8'))
    })
}

export function getPiece(chess, type, color) {
    switch(type) {
        case chess.PAWN:
            return {
                name: 'PAWN',
                cmp: <img
                        className='piece'
                        src={color === 'w' ? require('../assets/pawn.svg') : require('../assets/pawnB.svg')}
                        alt="PAWN"
                        style={{color: 'red'}}/>
            };
        case chess.KNIGHT:
            return {
                name: 'KNIGHT',
                cmp: <img
                        className='piece'
                        src={color === 'w' ? require('../assets/knight.svg') : require('../assets/knightB.svg')}
                        alt="KNIGHT"
                        style={{color: 'red'}}/>
            };
        case chess.BISHOP:
            return {
                name: 'BISHOP',
                cmp: <img
                        className='piece'
                        src={color === 'w' ? require('../assets/bishop.svg') : require('../assets/bishopB.svg')}
                        alt="BISHOP"
                        style={{color: 'red'}}/>
            };
        case chess.ROOK:
            return {
                name: 'ROOK',
                cmp: <img
                        className='piece'
                        src={color === 'w' ? require('../assets/rook.svg') : require('../assets/rookB.svg')}
                        alt="ROOK"
                        style={{color: 'red'}}/>
            };
        case chess.QUEEN:
            return {
                name: 'QUEEN',
                cmp: <img
                        className='piece'
                        src={color === 'w' ? require('../assets/queen.svg') : require('../assets/queenB.svg')}
                        alt="QUEEN"
                        style={{color: 'red'}}/>
            };
        case chess.KING:
            return {
                name: 'KING',
                cmp: <img
                        className='piece'
                        src={color === 'w' ? require('../assets/king.svg') : require('../assets/kingB.svg')}
                        alt="KING"
                        style={{color: 'red'}}/>
            };
    }
}