import React from 'react'
import { countries } from '../hooks/Countries';
import {BsFillHouseFill} from "react-icons/bs"
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-items:center;
  justify-content: center;
  flex-direction:column;
  background-image: url(https://paginanews.com.br/wp-content/uploads/2021/04/capturadepantall-5d810b602e90bd9af8d5719262f312fe-1200x600.jpg);
  background-size: cover;
  height: 100vh;
`;

const Header = styled.header`
  display: flex;
  position: absolute;
  padding-bottom: 500px;
  /* padding-left: 20px; */
  /* flex-direction: column; */
  color: white;
`;

const Form = styled.form`
 
  input{
    display: flex;
    flex-direction:column;
    background-color: #d6d0d0;
    height: 4vh;
    width: 21vw;
    border-color: white;
    border-radius: 1em;
    border: 1px solid;
  }

  select{
    display: flex;
    flex-direction:column;
    background-color: #d6d0d0;
    height: 4vh;
    width: 21vw;
    border-color: white;
    border-radius: 1em;
    border: 1px solid;
  }
`;

const DivFilho = styled.div`  

  button{
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

const ApplicationFormPage = () => {

  
  const navigate = useNavigate();

  return (
    <Div>
      <Header>
      <h3>Se inscreva para uma viagem</h3>
      </Header>
      <Form>
        <select defaultValue="" onChange="">
          <option value="" selected>
            Escolha uma Viagem
          </option>
        </select>
        <input
          placeholder={'Nome'}
          name={'name'}
          value=""
          onChange=""
          pattern={'^.{3,}$'}
          title={'O nome deve ter no mínimo 10 caracteres'}
          required
        />
        <input
          placeholder={'Idade'}
          type={'number'}
          name={'age'}
          value=""
          onChange=""
          required
          min={18}
        />
        <input
          placeholder={'Texto de Candidatura'}
          name={'applicationText'}
          value=""
          onChange=""
          required
          pattern={'^.{30,}$'}
          title={'O texto deve ter no mínimo 30 caracteres'}
        />
        <input
          placeholder={'Profissão'}
          name={'profession'}
          value=""
          onChange=""
          required
          pattern={'^.{10,}$'}
          title={'A profissão deve ter no mínimo 10 caracteres'}
        />
        <select
          placeholder={'País'}
          name={'country'}
          value=""
          onChange=""
          required
        >
          <option value={''} selected>
            Escolha um País
          </option>
          {countries.map(country => {
            return (
              <option value={country} key={country}>
                {country}
              </option>
            )
          })}
        </select>
        <DivFilho>
          <button onClick={() => navigate("/")}>Home <BsFillHouseFill/></button>
          <button type={'submit'}>Enviar</button>
        </DivFilho>
      </Form>
    </Div>
  )
}

export default ApplicationFormPage;