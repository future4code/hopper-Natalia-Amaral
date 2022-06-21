import React from 'react'
import { useNavigate } from 'react-router-dom';
import { planets } from '../hooks/Planets';
import {BsFillHouseFill} from "react-icons/bs"
import {BsFillPlusCircleFill} from "react-icons/bs"


const CreateTripPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <h2>Criar Viagem</h2>
      <form>
        <input
          placeholder="Nome da viagem"
          type={"text"}
          name="name"
          pattern="^.{5,}$"
          onChange=""
          title="O nome da viagem deve ter no mínimo 5 caracteres"
          required=""
          value=""
          />
        <select
          placeholder={'Planeta'}
          name={'planet'}
          defaultValue={''}
          onChange=""
          required
        >
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
        </select>
        <input
          placeholder={'Data'}
          type={'date'}
          name={'date'}
          value=""
          onChange=""
          required
          min=""
        />
        <input
          placeholder="Descrição"
          name="description"
          required=""
          pattern="^.{30,}$"
          title="O nome deve ter no mínimo 30 caracteres"
          value=""
          />
        <input
        placeholder="Duração em dias"
        type="number"
        name="durationInDays"
        required=""
        min="50"
        value=""
        />
        <div>
          <button onClick={() => navigate("/")}>Home <BsFillHouseFill/></button>
          <button onClick={() => navigate ("/admin/trips/create")}>Criar <BsFillPlusCircleFill/></button>
        </div>
      </form>
    </>
  )
}

export default CreateTripPage;