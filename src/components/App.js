import React, { Component } from 'react';
import './App.css';
import classNames from 'classnames';
import Chess from 'chess.js';

import {
    join,
    isMovable,
    isPlus,
    isPromotion,
} from '../utils';

import Board from './Board/Board';

const chess = new Chess();

export default class App extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            selectedPiece: null,
        };
    }

    onPieceClick(e, x, y) {
        var piece = join(y, x);
        var square = chess.get(piece);

        var moves = chess.moves({ square: piece });

        if (this.state.selectedPiece !== piece) {
            var xNew = piece[1], yNew = piece[0];
            var move =  isMovable(xNew, yNew, chess, this.state.selectedPiece) || 
                        isPlus(xNew, yNew, chess, this.state.selectedPiece) ||
                        isPromotion(xNew, yNew, chess, this.state.selectedPiece);

            if (move) {
                chess.move(move);
            }

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
                <Board
                    chess={chess}
                    selectedPiece={this.state.selectedPiece}
                    onPieceClick={this.onPieceClick.bind(this)}/>
            </div>
        );
    }
}