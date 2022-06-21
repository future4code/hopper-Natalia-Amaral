import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getTrips } from '../services/RequestApi'
import {BsFillHouseFill} from "react-icons/bs"
import {BsFillFilePersonFill} from "react-icons/bs"
import styled from 'styled-components'

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-items:center;
  justify-content: center;
  flex-direction:column;
  background-image:url(https://super.abril.com.br/wp-content/uploads/2022/04/A-nova-mensagem-que-cientistas-querem-enviar-ao-espaco.jpg);
  background-size: cover;
  height: 100vh;
`;

const Header = styled.header`
  display: flex;
  position: absolute;
  padding-bottom: 200px;
  padding-left: 15px;
  flex-direction: column;
  align-items: center;
  color: white;
`;

const DivFilho = styled.div`  
  display: flex;
  flex-direction: row;

  button{
  position: relative;
  border-color: white;
  border-radius: 10em;
  border: 1px solid;
  margin: 20px; 
  padding: 1em;
  padding-left: 2em;
  padding-right: 2em;
  font-size:1em;
  font-weight: bold;
  text-align: center;
  color: white;
  cursor: pointer;
  margin-top: 50px;
  background-color: transparent;
  box-shadow: 0 0 40px 40px transparent inset, 0 0 0 0 white;
  -webkit-transition: all 150ms ease-in-out;
  transition: all 150ms ease-in-out;
    :hover {
     box-shadow: 0 0 10px 0 white inset, 0 0 10px 4px white;
    }
  }
`;

const ListTripsPage = () => {
  const navigate = useNavigate();
  const [trips , setTrips] = useState([])

  useEffect(() => {getTrips()}, []);

  return (
    <Div>
       <Header>
      <h1>Lista de viagens</h1>
      </Header>
      {trips &&
        trips.map(trip => (
          <ul key={trip.id}>
            <li>
              <strong>Nome:</strong>
              {trip.name}
            </li>
            <li>
              <strong>Descrição:</strong>
              {trip.description}
            </li>
            <li>
              <strong>Planeta:</strong>
              {trip.planet}
            </li>
            <li>
              <strong>Duração:</strong>
              {trip.durationInDays}
            </li>
            <li>
              <strong>Data:</strong>
              {trip.date}
            </li>
          </ul>
        ))}
        <DivFilho>
        <button onClick={() => navigate("/")}>Home <BsFillHouseFill/></button>
        <button onClick={() => navigate("/login")}>Login <BsFillFilePersonFill/></button>
        </DivFilho>
    </Div>
  );
}

export default ListTripsPage;