import React from 'react';

export function join() {
    var str = '';
    for (var i = 0; i < arguments.length; i++)
        str += String(arguments[i]);
    return str;
}

export function getSide(side, chess) {
    var arr = [];
    if (side === chess.BLACK) {
        for (var i = 1; i < 9; i++)
            arr.push(String(i))
    }
    else {
        for (var i = 8; i > 0; i--)
            arr.push(String(i))
    }

    return arr;
}

export function isMovable(x, y, chess, piece) {
    const square = piece && chess.get(piece);
    const moves = chess.moves({ square: piece });

    return moves.find(z => {
        return z.match(
            new RegExp(square && square.type !== chess.PAWN ? (square.type.toUpperCase() + '.?' + join(x, y)) : join(x, y), 'g')
        ) !== null
    });
}

export function isPlus(x, y, chess, piece) {
    const square = piece && chess.get(piece);
    const moves = chess.moves({ square: piece });

    if (moves.length === 0 || !square)
        return false;

    return moves.find(z => {
        return  z.match(new RegExp('.*x' + join(x, y) + '\\+?')) !== null ||
                z.match(new RegExp('.*x?' + join(x, y) + '\\+')) !== null
    })
}

export function isPromotion(x, y, chess, piece) {
    const square = piece && chess.get(piece);
    const moves = chess.moves({ square: piece });

    if (moves.length === 0 || !square)
        return false;

    return moves.find(z => {
        return z.match(new RegExp(`.*x?(${join(x, y)})=.`)) !== null
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
    const square = chess.get(join(x, y));

    if (moves.length === 0 ||
        square ||
        chess.turn() === chess.WHITE && y !== '1' ||
        chess.turn() === chess.BLACK && y !== '8'
    ) return false;

    return moves.find(z => {
        return  z.match('O-O-O') !== null && 
                join(x, y).match(new RegExp('c1|c8')) ||
                z.match('O-O') !== null &&
                join(x, y).match(new RegExp('g1|g8'))
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

export function getCapture(chess) {
    var history = chess.history({verbose: true});
    var initial = {
        w: { p: 0, n: 0, b: 0, r: 0, q: 0 },
        b: { p: 0, n: 0, b: 0, r: 0, q: 0 },
    };

    var captured = history.reduce(function(acc, move) {
        if ('captured' in move) {
            var piece = move.captured;
            // switch colors since the history stores the color of the player doing the
            // capturing, not the color of the captured piece
            var color = move.color == 'w' ? 'b' : 'w';
            acc[color][piece] += 1;
            return acc;
        } else {
            return acc;
        }
    }, initial);
    return captured;
}
