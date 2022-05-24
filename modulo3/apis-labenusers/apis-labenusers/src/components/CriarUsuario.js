import React from "react";
import axios from "axios";
import styled from "styled-components";

const Div = styled.div`
    text-align: center;
`;


class CriarUsuario extends React.Component {

  state = {
    inputName: "",
    inputEmail: ""
  }

  onChangeName = (event) => {
    this.setState({inputName: event.target.value})
  }

  onChangeEmail = (event) => {
    this.setState({inputEmail: event.target.value})
  }

  criarUsuario = () => {

    const body = {
      name: this.state.inputName,
      email: this.state.inputEmail
    }
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body, {
      headers: {
        Authorization: "natalia-amaral-hopper"
      }
    })
    .then(()=>{
      alert("Sucesso")
      this.setState({inputName: ""})
      this.setState({inputEmail: ""})
    })
    .catch((err)=>{
      alert("Erro", err.response.data)
    })
  }

  render(){
    return(
      <Div>
        <h1>Criar Conta</h1>

        <input placeholder="Nome" 
          value={this.state.inputName} 
          onChange={this.onChangeName}>
        </input>

        <input placeholder="Email"
          value={this.state.inputEmail}
          onChange={this.onChangeEmail}>
        </input>

        <button onClick={this.criarUsuario}>Criar Usuário</button>
      </Div>
    )
  }
};

export default CriarUsuario;