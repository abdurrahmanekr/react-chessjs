import React, { Component } from 'react';
import './App.css';
import classNames from 'classnames';
import Chess from 'chess.js';

import {
    join,
    isMovable,
    isPlus,
    isPromotion,
    isCastle,
} from '../utils';

import client from '../utils/client';

import Board from './Board/Board';
import LeaderBoard from './LeaderBoard/LeaderBoard';

const chess = new Chess();

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedPiece: null,
        };
        client.connect();
    }

    onPieceClick(e, x, y) {
        var piece = join(x, y);
        var square = chess.get(piece);
        client.emit('startGame');

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
        const img1 = 'https://randomuser.me/api/portraits/men/1.jpg';
        const img2 = 'https://randomuser.me/api/portraits/women/10.jpg';

        return (
            <div className='container'>
                <LeaderBoard
                    chess={chess}
                    player1={{
                        name: 'Jhorge Cary',
                        img: img1,
                    }}
                    player2={{
                        name: 'Izabella Girlsway',
                        img: img2,
                    }}/>
                <Board
                    chess={chess}
                    side={chess.WHITE}
                    selectedPiece={this.state.selectedPiece}
                    onPieceClick={this.onPieceClick.bind(this)}/>
            </div>
        );
    }
}
