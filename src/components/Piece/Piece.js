import React, { Component } from 'react';
import classNames from 'classnames';

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
                    { 'movable-castle': castle },
                )}
                onClick={e => onPieceClick(e, x, y)}>
                { piece }
                {
                    y === '1' &&
                    <span className="number bottom">{x}</span>
                }
            </span>
        );
    }
}
