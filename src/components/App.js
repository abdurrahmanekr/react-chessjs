import React, { Component } from 'react';
import './App.css';
import Chess from 'chess.js';

const chess = new Chess();
console.log(chess);

export default class App extends Component {
    constructor(props) {
        super(props);
    
        this.state = {test: 1};
    }

    componentWillMount() {
        var self = this;
        var interval = setInterval(() => {
            if (!chess.game_over()) {
                var moves = chess.moves();
                var move = moves[Math.floor(Math.random() * moves.length)];
                chess.move(move);

                // debugger;
                self.setState({test: 1})
            } else {
                clearInterval(interval);
            }
        }, 100)
    }

    getStone(type, color) {
        switch(type) {
            case chess.PAWN:
                return {
                    name: 'PAWN',
                    cmp: <img className='piece' src={require('../assets/pawn.svg')} alt="PAWN" style={{color: 'red'}}/>
                };
            case chess.KNIGHT:
                return {
                    name: 'KNIGHT',
                    cmp: <img className='piece' src={require('../assets/knight.svg')} alt="KNIGHT" style={{color: 'red'}}/>
                };
            case chess.BISHOP:
                return {
                    name: 'BISHOP',
                    cmp: <img className='piece' src={require('../assets/bishop.svg')} alt="BISHOP" style={{color: 'red'}}/>
                };
            case chess.ROOK:
                return {
                    name: 'ROOK',
                    cmp: <img className='piece' src={require('../assets/rook.svg')} alt="ROOK" style={{color: 'red'}}/>
                };
            case chess.QUEEN:
                return {
                    name: 'QUEEN',
                    cmp: <img className='piece' src={require('../assets/queen.svg')} alt="QUEEN" style={{color: 'red'}}/>
                };
            case chess.KING:
                return {
                    name: 'KING',
                    cmp: <img className='piece' src={require('../assets/king.svg')} alt="KING" style={{color: 'red'}}/>
                };
        }
    }

    calc(x, y) {
        var square = chess.get(`${String(y)}${String(x)}`);
        if (!square)
            return {
                stone: ' ',
            };
        return {
            stone: this.getStone((square.type || '').toLowerCase()).cmp,
            color: square.color === 'w' ? 'white' : 'black',
        };
    }

    render() {
        return (
            <div>
                {
                    [1, 2, 3, 4, 5, 6, 7, 8].map((x, i) => (
                        <div
                            className='line'
                            key={i}>
                            {
                                ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'].map((y, j) => (
                                    <span
                                        key={j}
                                        className='square'
                                        style={{
                                            color: this.calc(x, y).color,
                                            backgroundColor: chess.square_color(`${String(y)}${String(x)}`) === 'dark' ? '#ccc' : 'white',
                                        }}>
                                        {this.calc(x, y).stone}
                                    </span>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
        );
    }
}