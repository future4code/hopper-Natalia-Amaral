import React from 'react';
import './CardPequeno.css';

function CardPequeno (props) {

    return (
        <div>
            <p><strong>{props.nome}</strong></p>
            <span> {props.informacoesEmail} </span>
            <span> {props.informacoesEndereco} </span>
        </div>
    )
}

export default CardPequeno;