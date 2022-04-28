import React from 'react';
import styled from 'styled-components';
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const Button = styled.button`
  text-transform: uppercase;
  background-color: gray;
  color: black;
  height: 3vh;
  width: 100%;
  border-style: 2px 2px 2px 2px solid;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const Input = styled.input`
  flex-direction: row;
  text-align:center;
  color: black;
  background-color: pink;
`;





class App extends React.Component {

  state = {
    internautas: [
      {
        nomeUsuario: "Paulinha",
        fotoUsuario: "bla",
        fotoPost: "bla"
      },
      {
        nomeUsuario: "Aninha",
        fotoUsuario: "bla",
        fotoPost: "bla"
      },
      {
        nomeUsuario: "Joana",
        fotoUsuario: "bla",
        fotoPost: "bla"
      }

    ],

    valorInputInternauta:"",
    valorInputFoto:"",
    valorInputPost:""

  };

  adicionaInternauta = () => {
    let novoInternauta = {
      nomeUsuario: this.state.valorInputInternauta,
      fotoUsuario: this.state.valorInputFoto,
      fotoPost: this.state.valorInputPost
    };

    let novoInternautas = [...this.state.internautas, novoInternauta];
    this.setState({internautas:novoInternautas});
  };

  onChangeInputUsuario = (event) =>{
    this.setState({valorInputInternauta: event.target.value});
  };

  onChangeInputFoto = (event) =>{
    this.setState({valorInputFoto: event.target.value});
  };

  onChangeInputPost = (event) =>{
    this.setState({valorInputPost: event.target.value});
  };


  render() {

    const listaUsuario = this.state.internautas.map((internautas) => {
      return(
        <p>
          {internautas.nomeUsuario} , {internautas.fotoUsuario} , {internautas.fotoPost}
        </p>
      )
    });
    
    return (
      <MainContainer>

        <Post
          nomeUsuario={'Paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

        <Post
        nomeUsuario={'Anninha'}
        fotoUsuario={'https://picsum.photos/50/51'}
        fotoPost={'https://picsum.photos/200/151'}
        />

        <Post
        nomeUsuario={'Joana'}
        fotoUsuario={'https://picsum.photos/50/52'}
        fotoPost={'https://picsum.photos/200/152'}
        />

      <div>
        <Input
          value={this.state.valorInputInternauta}
          onChange={this.onChangeInputInternauta}
          placeholder={"Nome"}/>

        <Input
          value={this.state.valorInputFoto}
          onChange={this.onChangeInputFoto}
          placeholder={"Foto Perfil"}/>
          

        <Input
          value={this.state.valorInputPost}
          onChange={this.onChangeInputPost}
          placeholder={"Post"}/>

        <Button onClick={this.adicionaUsuario}><strong>Adicionar</strong></Button>
      </div>

      </MainContainer>
    );
  }
}

export default App;
