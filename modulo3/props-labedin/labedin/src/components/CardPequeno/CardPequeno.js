import React from 'react';
import './CardPequeno'

function CardPequeno(props) {
    return (
        <div className="card-container">
            <div>
                <h3><p>{props.email}</p></h3>
                <p>{ props.endereco }</p>
            </div>
        </div>
    )
}

export default CardPequeno;