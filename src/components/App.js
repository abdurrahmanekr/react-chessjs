import React, { Component } from 'react';
import Chess from 'chess.js';

const chess = new Chess();

export default class App extends Component {
    render() {
        return (
            <pre>
                {chess.ascii()}
            </pre>
        );
    }
}