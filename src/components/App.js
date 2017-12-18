import React, { Component } from 'react';
import './App.css';
import classNames from 'classnames';
import Chess from 'chess.js';

const chess = new Chess();
console.log(chess);

function join() {
    var str = '';
    for (var i = 0; i < arguments.length; i++)
        str += String(arguments[i]);
    return str;
}

export default class App extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            selectedPiece: null,
        };

        this.onPieceClick = this.onPieceClick.bind(this);
    }

    componentWillMount() {
        var self = this;
        var interval = setInterval(() => {
            if (!chess.game_over()) {
                var moves = chess.moves();
                var move = moves[Math.floor(Math.random() * moves.length)];
                chess.move(move);

                // debugger;
                self.setState({ test: 1 });
            } else {
                clearInterval(interval);
            }
        }, 3000)
    }

    getStone(type, color) {
        switch(type) {
            case chess.PAWN:
                return {
                    name: 'PAWN',
                    cmp: <img className='piece' src={color === 'w' ? require('../assets/pawn.svg') : require('../assets/pawnB.svg')} alt="PAWN" style={{color: 'red'}}/>
                };
            case chess.KNIGHT:
                return {
                    name: 'KNIGHT',
                    cmp: <img className='piece' src={color === 'w' ? require('../assets/knight.svg') : require('../assets/knightB.svg')} alt="KNIGHT" style={{color: 'red'}}/>
                };
            case chess.BISHOP:
                return {
                    name: 'BISHOP',
                    cmp: <img className='piece' src={color === 'w' ? require('../assets/bishop.svg') : require('../assets/bishopB.svg')} alt="BISHOP" style={{color: 'red'}}/>
                };
            case chess.ROOK:
                return {
                    name: 'ROOK',
                    cmp: <img className='piece' src={color === 'w' ? require('../assets/rook.svg') : require('../assets/rookB.svg')} alt="ROOK" style={{color: 'red'}}/>
                };
            case chess.QUEEN:
                return {
                    name: 'QUEEN',
                    cmp: <img className='piece' src={color === 'w' ? require('../assets/queen.svg') : require('../assets/queenB.svg')} alt="QUEEN" style={{color: 'red'}}/>
                };
            case chess.KING:
                return {
                    name: 'KING',
                    cmp: <img className='piece' src={color === 'w' ? require('../assets/king.svg') : require('../assets/kingB.svg')} alt="KING" style={{color: 'red'}}/>
                };
        }
    }

    calc(x, y) {
        var square = chess.get(join(y, x));
        if (!square)
            return {
                stone: ' ',
            };
        return {
            stone: this.getStone((square.type || '').toLowerCase(), square.color).cmp,
            color: square.color === 'w' ? 'white' : 'black',
        };
    }

    onPieceClick(e, x, y) {
        var piece = join(y, x);
        if (this.state.selectedPiece !== piece) {
            this.setState({
                selectedPiece: piece,
            })
        }
    }

    render() {
        const img1 = 'https://randomuser.me/api/portraits/men/1.jpg'; 
        const img2 = 'https://randomuser.me/api/portraits/women/10.jpg'; 
        return (
            <div className='container'>
                <div className="title">
                    <div className={"player player1 " + (chess.turn() === 'w' ? 'your-turn' : '')}>
                        <span className="player-img"><img src={img1}/></span>
                        <div>Jhorge Cary</div>
                    </div>
                    <div className="chess-point">
                        <div className="point-title">Point</div>
                        <span className='point'>{1}</span>
                    </div>
                    <div className={"player player2 " + (chess.turn() === 'b' ? 'your-turn' : '')}>
                        <span className="player-img"><img src={img2}/></span>
                        <div>Izabella Girlsway</div>
                    </div>
                </div>
                <div className="board">
                {
                    [1, 2, 3, 4, 5, 6, 7, 8].map((x, i) => (
                        <div
                            className='line'
                            key={i}>
                            {
                                ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'].map((y, j) => (
                                    <span
                                        key={j}
                                        className={classNames(
                                            'square',
                                            { 'selected': this.state.selectedPiece === join(y, x)},
                                            { 'white': chess.square_color(join(y, x)) === 'light' },
                                        )}
                                        onClick={e => this.onPieceClick(e, x, y)}>
                                        {this.calc(x, y).stone}
                                    </span>
                                ))
                            }
                        </div>
                    ))
                }
                </div>
            </div>
        );
    }
}