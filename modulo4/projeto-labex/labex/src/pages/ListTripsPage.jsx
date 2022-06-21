import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getTrips } from '../services/RequestApi'
import {BsFillHouseFill} from "react-icons/bs"
import {BsFillFilePersonFill} from "react-icons/bs"

const ListTripsPage = () => {
  const navigate = useNavigate();
  const [trips, setTrips] = useState([])



  const useGetTrips = async () => {
    const response = await getTrips()
    setTrips(response)
  }

  return (
    <>
      <h2>Lista de Viagens</h2>
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
        <div>
        <button onClick={() => navigate("/")}>Home <BsFillHouseFill/></button>
        <button onClick={() => navigate("/login")}>Login <BsFillFilePersonFill/></button>
        </div>
    </>
  );
}

export default ListTripsPage;