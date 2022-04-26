import React from 'react';
import './CardPequeno.css';
import styled from 'styled-components';

const ContainerPai = styled.div`
     display: flex;
     align-items: center;
     border: 1px solid black;
     padding: 20px 35px;
     margin-bottom: 10px;
     height: 35px;

`;




function CardPequeno (props) {

    return (
        <ContainerPai>
            <p><strong>{props.nome}</strong></p>
            <span> {props.informacoesEmail} </span>
            <span> {props.informacoesEndereco} </span>
        </ContainerPai>
    )
}

export default CardPequeno;