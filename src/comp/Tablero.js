import React, { Component } from 'react';
import Casilla from '../comp/Casilla';

export default class Tablero extends Component {
    renderSquare(i){
        return (
        <Casilla 
            valor={this.props.squares[i]}
            onClick={()=>this.props.onClick(i)}
        />
        );
    }
    render() {
        return (
            <div>
                <div className="fila-tablero">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="fila-tablero">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="fila-tablero">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}