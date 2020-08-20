import React from 'react'

export default function Casilla(props) {
    return (
        <button className="casilla" onClick={props.onClick}>
            {props.valor}
        </button>
    )
}