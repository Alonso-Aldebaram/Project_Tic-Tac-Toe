import React, { Component } from 'react'
import Tablero from './Tablero'

export default class Juego extends Component {
    constructor(props) {
        super(props);
        this.state = {
            xIsNext: true,
            stepNumber: 0,
            history: [
                { squares: Array(9).fill(null) }
            ]
        }
    }
    jumpTo(step){
        this.setState({
            stepNumber: step,
            xIsNext: (step%2)===0
        })
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        const winner = calculateWinner(squares);
        if (winner || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat({
                squares: squares
            }),
            xIsNext: !this.state.xIsNext,
            stepNumber: history.length
        });

    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);
        const moves = history.map((step, move) => {
            const desc = move ? 'Regresar al turno #' + move : 'Comenzar el juego';
            return (
                <li key={move}>
                    <button className="comenzar" onClick={() => { this.jumpTo(move) }}>
                        {desc}
                    </button>
                </li>
            )
        });
        let status;
        if (winner) {
            status = 'El ganador es ' + winner;
        } else {
            status = 'El siguiente jugador es ' + (this.state.xIsNext ? 'X' : 'O');
        }


        return (
            <>
            <div className="titulo">
                <h3>El juego del gato</h3>
                <p>"Desarrollado por Abraham"</p>
            </div>
            <div className="juego">
                <div className="tablero-juego">
                    <Tablero onClick={(i) => this.handleClick(i)}
                        squares={current.squares} />
                </div>
                <div className="info-juego">
                    <div>{status}</div>
                    <ul className="movimientos">{moves}</ul>
                </div>
            </div>
            </>
        )
    }
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
            return squares[a];
        }
    }

    return null;
}