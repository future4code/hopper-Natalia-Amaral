import React from "react";
import axios from "axios";
import Swal from "sweetalert2";
import styled from "styled-components";

const Imagem = styled.img`
height: 12vh;
margin-right:20px;
margin-left:  30px;

@media screen and (min-device-width: 320px) and (max-device-width: 480px) {
  height: 8vh;
}
`;

const Cabecalho = styled.div`
display: flex;
flex-direction: row;
justify-content: start;
align-items: center;
width: 98vw 7vw;
height: 12vh;
background-color: black;
color: red;
`;

const MainPrincipal = styled.div`
  background-image: url(https://w0.peakpx.com/wallpaper/366/745/HD-wallpaper-blue-sector-abstract-blue-cloud-kor4-rts-laser-line-neon-smoke-texture.jpg) ;
  color:red;
  height: 76vh;
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  font-size: 50px;
  display: flex;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    font-size: 25px;
    width: 100vw;
    height: 110vh;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

const Input = styled.input`
  height: 40px;
  background: transparent;
  border: none;
  border-bottom: 1px solid red;
  justify-content: center;
  text-align: center;
  align-items: center;
  display: flex;
  color: red;
  font-size: 35px;
  margin: auto;
  margin-top: 44px;
  width: 500px;
  :focus {
    outline: none;
  }
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    font-size: 25px;
    display: flex;
    text-align: center;
    justify-content: center;
    width: 250px;
  }
`;

const Button = styled.button`
display: flex;
margin: auto;
margin-top: 40px;
padding: 15px;
width: 200px;
text-align: center;
justify-content: center;
align-items: center;
font-size: 25px;
flex-direction: column;
border-radius: 20px;
border: 2px solid black;
height: 60px;
background-color: red;
color: black;

@media screen and (min-device-width: 320px) and (max-device-width: 480px) {
  font-size: 15px;
  width: 150px;
}
`;

const ButtonPlaylist = styled.button`
  display: flex;
  margin: auto;
  margin-top: 40px;
  padding: 15px;
  width: 200px;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  flex-direction: column;
  border-radius: 20px;
  border: 2px solid black;
  height: 60px;
  background-color: red;
  color: black;

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    font-size: 15px;
    width: 150px;
  }
`;

const FooterList = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  background-color: #090a09;
  color: white;
  height: 12vh;
  width: 98, 5vw;
  color: red;

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 100vw;
    font-size: 12px;
  }
`;

const headers ={
    headers:{
        Authorization: "Natália-Amaral-Hopper",
    },
};
class CriarPlaylist extends React.Component {
    state = {
        nomeDaPlaylist: "",
      };
    
      criaPlaylist = (e) => {
        this.setState({ nomeDaPlaylist: e.target.value });
      };


    criarPlaylist = () => {
      const body = {
          name: this.state.nomeDaPlaylist,
      };

      axios.post(
          `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists` ,
          body ,
          headers
      )
      .then((response) => {
        console.log(response.data.result);
        this.setState({ nomeDaPlaylist: "" });
        Swal.fire("", "Playlist criada com sucesso!", "success");
      })
      .catch((err) => {
        Swal.fire("", "Algo deu errado!", "error");
        console.log(err);
      });
  };

    render (){
        return(
            <div>
                <Cabecalho>
                    <Imagem src="/img/resso.png"/>
                    <h1>Labesso</h1>
                </Cabecalho>

                <MainPrincipal>
                  <div>
                    <h3>Criar Playlist</h3>
                    <Input
                      placeholder={"Nome"}
                      value={this.state.nomeDaPlaylist}
                       onChange={this.criaPlaylist}
                    />
                <Button onClick={this.criarPlaylist}>
                  Criar Playlist
                </Button>

                <ButtonPlaylist onClick={this.props.irParaLista}>
                  Sua Biblioteca
                </ButtonPlaylist>
                  </div>
                </MainPrincipal>
                <FooterList>
                &copy; 2022 All rights reserved.
                <p>Projeto Desenvolvido por Natália Amaral ♥</p>
                </FooterList>
            </div>
        )
    }
}

export default CriarPlaylist;