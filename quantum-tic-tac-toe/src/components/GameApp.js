import React from 'react';
import { Board } from './Board';

export class GameApp extends React.Component {
    render() {
        return (
            <div>
                <h1>Quantum Tic-Tac-Toe</h1>
                <div className="game">
                    <div className="game-board">
                    <Board />
                    </div>
                </div>
            </div>
        );
    }
}