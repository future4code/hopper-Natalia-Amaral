import React, { useState } from 'react'
import { countries } from '../hooks/Countries';
import {BsFillHouseFill} from "react-icons/bs"
import {IoIosRocket} from 'react-icons/io'
import { useNavigate } from 'react-router-dom';
import useRequestApi from '../hooks/useRequestApi';
import axios from 'axios';
import useForm from '../hooks/UseForm';


const ApplicationFormPage = () => {
  const [idTrip, setTripId] = useState("");
  const [success, setSuccess] = useState(false)
  const [trips] = useRequestApi("https://us-central1-labenu-apis.cloudfunctions.net/labeX/:natalia-amaral-hopper/trips", {})
  const navigate = useNavigate();

  const onChangeTripId = (event) => {
    setTripId(event.target.value)
};

  const { form, onChange, cleanFields } = useForm({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country:""
  });

  const clearInput = () => {
    cleanFields()
    setTripId("")
}

  const register = (event) => {
    event.preventDefault();
    sendApplication(form, idTrip, clearInput)
    console.log("Enviado!", form);
    cleanFields();
  };

  const OptionTrip = trips && trips.trips.map((nome) => {
    return <option key={nome.id} value={nome.id}>{nome.name}</option>
  });

  const sendApplication = () => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/:natalia-amaral-hopper/trips/${idTrip}/apply`
    const headers = { "Content-Type": "application/json"}
    axios
    .post( url, form, {headers})
    .then((res) => { 
          if(!setSuccess(res.data.success))
          alert("Incrição enviada com sucesso!")
          cleanFields()
          console.log(res.data)          
    })
    .catch((err) => 
          console.log(err.response.message))
  };


    return (
      <div>
          <header>
            <nav>
              <button onClick={() => navigate("/trips/list")}></button>
            </nav>
          </header>
          <div>
            <h3>Inscreva-se para uma viagem</h3>
            <form onSubmit={register}>
              <select  
              defaultValue="" 
              onChange={onChangeTripId}>
                <option value="" disabled>Escolha uma viagem</option>
                {OptionTrip}
              </select>
              <input
                name={"name"}
                value={form.name}
                placeholder="Nome"
                onChange={onChange}
                required
                pattern={"^.{3,}"}
                title={"O nome deve ter no mínimo 3 letras"}
              />
              <input
                name={"age"}
                value={form.age}
                placeholder="Idade"
                onChange={onChange}
                type={"number"}
                min={18}
                required
              />
              <input
                name={"applicationText"}
                value={form.applicationText}
                placeholder="Texto de Candidatura"
                onChange={onChange}
                pattern={"^.{3,}"}
                required
                title={"O texto deve ter no mínimo 3 caracteres"}
              />
              <input
                name={"profession"}
                value={form.profession}
                placeholder="Profissão"
                onChange={onChange}
                pattern={"^.{10,}"}
                required
                title={"A profissão deve ter no mínimo 10 caracteres"}
              />
              <select
                name={"country"}
                value={form.country}
                placeholder="País"
                onChange={onChange}
                required
              >
            <option value={""} disabled>Escolha um País</option>
              {countries.map((item)=>{
                return <option value={item} key={item}>{item}</option>
              })}
            </select>
            </form>
          </div>
          <button onClick={() => navigate("/")}>Home <BsFillHouseFill/></button>
          <button type='submit'> Enviar <IoIosRocket/> </button>
    </div>
  );
}

export default ApplicationFormPage;