import React from 'react'
import { useNavigate } from 'react-router-dom'
import {BsFillHouseFill} from "react-icons/bs"
import {IoIosLogIn} from "react-icons/io"
import styled from 'styled-components'

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-items:center;
  justify-content: center;
  flex-direction:column;
  background-image:url(https://sm.ign.com/ign_br/news/m/mars-astro/mars-astronauts-could-go-mad-on-the-journey_hgu4.jpg);
  background-size: cover;
  height: 100vh;
`;

const Header = styled.header`
  display: flex;
  position: absolute;
  padding-bottom: 350px;
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
    border-color: white;
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

const LoginPage = () => {
  const navigate = useNavigate()
  return (
    <Div>
      <Header>
      <h1>Fazer login</h1>
      </Header>
      <Form>
        <input
          placeholder={'E-mail'}
          type={'email'}
          value=""
          onChange=""
        /><br/>
        <input
          placeholder={'Senha'}
          type={'password'}
          value=""
          onChange=""
          /><br/>
      </Form>
        <DivFilho>
        <button onClick={() => navigate("/")}>Home <BsFillHouseFill/></button>
        <button type="submit" value="Enviar" onClick={() => navigate ("/admin/trips/create")}>Entrar <IoIosLogIn/></button>
        </DivFilho>
      
    </Div>
  );
}

export default LoginPage;