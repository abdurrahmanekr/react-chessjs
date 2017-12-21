import React, { Component } from 'react';
import classNames from 'classnames';

import {
    join,
    isMovable,
    isPlus,
    isPromotion,
} from '../../utils';

export default class Piece extends Component {
    render() {
        const {
            x,
            y,
            color,
            movable,
            plus,
            promotion,
            onPieceClick,
            piece,
            selected,
        } = this.props;

        return (
            <span
                className={classNames(
                    'square',
                    { 'selected': selected },
                    { 'white': color === 'light' },
                    { 'movable': movable },
                    { 'movable-plus': plus },
                    { 'movable-promotion': promotion },
                )}
                onClick={e => onPieceClick(e, x, y)}>
                { piece }
                {
                    x === 8 &&
                    <span className="number bottom">{y}</span>
                }
            </span>
        );
    }
}
