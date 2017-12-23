import React, { Component } from 'react';
import classNames from 'classnames';

import {
    isWinner,
} from '../../utils'

export default class LeaderBoard extends Component {
    render() {
        const {
            chess,
            player1,
            player2,
        } = this.props;

        return (
            <div className="title">
                <div
                    className={classNames(
                        'player',
                        'player1',
                        { 'your-turn': chess.turn() === 'w' },
                    )}>
                    <span className="player-img">
                        <img src={player1.img}/>
                        {
                            isWinner(chess.WHITE, chess) === true &&
                            <img src={player1.img} className='winner-player'/>
                        }
                    </span>
                    <div>{ player1.name }</div>
                </div>

                <div className="chess-point">
                    <div className="point-title">Point</div>
                    <span className='point'>{1}</span>
                </div>

                <div
                    className={classNames(
                        'player',
                        'player2',
                        { 'your-turn': chess.turn() !== 'w' },
                    )}>
                    <span className="player-img">
                        <img src={player2.img}/>
                        {
                            isWinner(chess.BLACK, chess) === true &&
                            <img src={player2.img} className='winner-player'/>
                        }
                    </span>
                    <div>{ player2.name }</div>
                </div>
            </div>
        );
    }
}