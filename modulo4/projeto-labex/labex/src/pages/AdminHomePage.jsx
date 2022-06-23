import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useProtectedPages from '../hooks/useProtectedPages'

const  AdminHomePage = () => {
  const [id, setTripId] = useState("")
  const [nameTrips, setTrips] = useState([]);
  const navigate = useNavigate();
  useProtectedPages();
  
  const getTrips = ()=>{
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/:natalia-amaral-hopper/trips`)
    .then((res) => {setTrips(res.data.trips);
      console.log(res)
    })
    .catch((err) => {console.log(err);
    })
};

const deleteTrip = (id) => {
  const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/:natalia-amaral-hopper/trips/${id}`
  const headers = { auth: localStorage.getItem("token")}
  axios
    .delete( url, {headers})
      .then((res) => {
        setTripId(res.data)
        alert("Removido")
        getTrips()
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response);
        alert("Erro, tente novamente")
      });
}
  
useEffect(() => {getTrips()}, []);

const receiveId = (id) => {
  console.log('guarda id',id);
  localStorage.setItem('id', id)
}

const tripList = nameTrips.map((trip) =>{
  return (
  <div key={trip.id}>
    <div>
      <div to="/admin/trips/:id">
        <button onClick={() => receiveId(trip.id)}></button> 
      </div>
         <p><strong> Nome: </strong>{trip.name}</p>
    </div>
      <button onClick={()=>{deleteTrip(trip.id)}}></button>
  </div>
  )
});

  return (
    <div>
      <header>
        <nav>
          <button onClick={() => navigate("/")}></button>
          <div>
            <button onClick={() => navigate("/admin/trips/create")}>Criar Viagem</button> 
            <div>
              <button onClick={() => navigate("/login")}>Logout</button></div>     
          </div>       
        </nav>
      </header>
      <container>
        <h3>Lista de Viagens</h3>
        <div>
        {tripList}
        </div>
      </container>
    </div>

  );
}
         
export default AdminHomePage;
