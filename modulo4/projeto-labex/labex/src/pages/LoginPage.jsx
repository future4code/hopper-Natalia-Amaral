import React from 'react'
import { useNavigate } from 'react-router-dom'
import {BsFillHouseFill} from "react-icons/bs"
import {BsFillPlusCircleFill} from "react-icons/bs"

const LoginPage = () => {
  const navigate = useNavigate()
  return (
    <>
      <h1>Fazer login</h1>
      <form>
        Email: <input
          placeholder={'E-mail'}
          type={'email'}
          name={'email'}
          value=""
          onChange=""
          required
        /><br/>
        Senha: <input
          placeholder={'Senha'}
          type={'password'}
          name={'password'}
          value=""
          onChange=""
          required
          /><br/>
        <buttons>
           <button onClick={() => navigate("/")}>Home <BsFillHouseFill/></button>
           <button onClick={() => navigate ("/admin/trips/create")}>Criar Viagem <BsFillPlusCircleFill/></button>
        </buttons>
      </form>
    </>
  );
}

export default LoginPage;