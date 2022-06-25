import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { planets } from '../hooks/Planets';
import {BsFillHouseFill} from "react-icons/bs"
import {BsFillPlusCircleFill} from "react-icons/bs"
import styled from 'styled-components';
import useForm from '../hooks/UseForm';
import axios from 'axios';
import useProtectedPage from '../hooks/useProtectedPages';

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-items:center;
  justify-content: center;
  flex-direction:column;
  background-image:url(https://www.eusemfronteiras.com.br/wp-content/uploads/2019/03/44449792_m.jpg);
  background-size: cover;
  height: 100vh;
`;

const Header = styled.header`
  display: flex;
  position: absolute;
  padding-bottom: 470px;
  padding-left: 15px;
  flex-direction: column;
  align-items: center;
  color: white;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-items:center;
  justify-content: center;
  flex-direction:column;

  input{
    background-color: #d6d0d0;
    height: 3vh;
    width: 20vw;
    border-color: #c07575;
    border-radius: 5em;
    border: 1px solid;
  }

  select{
    background-color: #d6d0d0;
    height: 3vh;
    width: 20vw;
    border-color: #c07575;
    border-radius: 5em;
    border: 1px solid;
  }
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

const CreateTripPage = () => {
  const [idTrip, setTripId] = useState("");
  const [trips, setTrips] = useState("");
  const navigate = useNavigate();
  useProtectedPage();

  const { form, onChange, cleanFields } = useForm({
    name: "",
    description: "",
    planet: "",
    durationInDays: "",
    date:""
  });

  const clearInput = () => {
    cleanFields()
    setTripId("")
}
  const cadastrar = (event) => {
    event.preventDefault();
    sendApplication(form, idTrip, clearInput)
    console.log("Formulário enviado!", form);
    cleanFields();
  };

   const sendApplication = () => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/natalia-amaral-hopper/trips`
    const headers = { auth: localStorage.getItem("token")}
    axios
    .post( url, form, {headers})
    .then((res) => { 
          setTrips(res.data.trip)
          alert("Viagem criada com sucesso!")
          cleanFields()
          console.log(res.data)          
    })
    .catch((err) => 
          console.log(err.response.message))
  }

  return (
    <Div>
      <Header>
      <h1>Criar viagem</h1>
      </Header>
      <Form onSubmit={cadastrar}>
        <input
          name={"name"}
          value={form.name}
          placeholder="Nome"
          onChange={onChange}
          required
          pattern={"^.{3,}"}
          title={"O nome deve ter no mínimo 3 letras"}
          /><br/>
        <select
          name={"planet"}
          value={form.planet}
          placeholder="Planeta"
          onChange={onChange}
          required
        ><br/>
          <option value={''} disabled>
            Escolha um Planeta
          </option>
          {planets.map(planet => {
            return (
              <option value={planet} key={planet}>
                {planet}
          </option>
            )
          })}
        </select><br/>
        <input
          name={"date"}
          value={form.date}
          placeholder="Texto de Candidatura"
          onChange={onChange}
          pattern={"^.{3,}"}
          required
          type={"date"}
        /><br/>
        <input
          name={"description"}
          value={form.description}
          placeholder="Descrição"
          onChange={onChange}
          pattern={"^.{3,}"}
          required
          title={"A descrição deve ter no mínimo 3 caracteres"}
          /><br/>
        <input
          name={"durationInDays"}
          value={form.durationInDays}
          placeholder="Duração da viagem"
          onChange={onChange}
          type="number"
          required
        /><br/>
        <DivFilho>
          <button onClick={() => navigate("/")}>Home <BsFillHouseFill/></button>
          <button onClick={() => navigate ("/admin/trips/create")}>Criar <BsFillPlusCircleFill/></button>
        </DivFilho>
      </Form>
    </Div>
  );
}

export default CreateTripPage;