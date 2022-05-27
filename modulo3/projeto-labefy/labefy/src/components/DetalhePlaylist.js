import React from "react";
import axios from "axios";
import Swal from "sweetalert2";
import styled from "styled-components";


const ImgLogo = styled.img`
height: 12vh;
margin-right: 20px;
margin-left: 30px;

@media screen and (min-device-width: 320px) and (max-device-width: 480px) {
  height: 8vh;
}
`;

const HeaderPrincipal = styled.div`
display: flex;
flex-direction: row;
justify-content: start;
align-items: center;
width: 98, 7vw;
height: 15vh;
background-color: black;
color: red;
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
  Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

@media screen and (min-device-width: 320px) and (max-device-width: 480px) {
  font-size: 20px;
  width: 100vw;
}
`;

const DivPrincipal = styled.div`
display: flex;
flex-direction: column;
text-align: center;
`;

const CardMusica = styled.div`
display: inline-block;
display: flex;
border: 2px solid black;
align-items: center;
width: 800px;
margin-bottom: 20px;
padding-left: 10px;
justify-content: space-evenly;
background-image: linear-gradient(to left, red, red, red);
height: 80px;
font-size: 15px;
color: black;

@media screen and (min-device-width: 320px) and (max-device-width: 480px) {
  font-size: 10px;
  width: 300px;
  display: flex;
  align-items: center;
  text-align: center;
}
`;

const CardAudio = styled.audio`
@media screen and (min-device-width: 320px) and (max-device-width: 480px) {
  width: 100px;
  height: 40px;
}
`;

const MainPrincipal = styled.div`
color: red;
height: 70vh;
background-image: url(https://w0.peakpx.com/wallpaper/366/745/HD-wallpaper-blue-sector-abstract-blue-cloud-kor4-rts-laser-line-neon-smoke-texture.jpg);
width: 98, 5vw;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background-size: cover;
background-position: center;
font-size: 50px;
text-shadow: red;
position: relative;
display: flex;
font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;

@media screen and (min-device-width: 320px) and (max-device-width: 480px) {
  font-size: 25px;
  width: 100vw;
  min-height: 110vh;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
`;

const InputMusic = styled.input`
background: transparent;
border: none;
border-bottom: 1px solid gray;
margin-bottom: 15px;
width: 50%;
height: 35px;
color: red;
font-size: 20px;
color: red;
border-bottom: 2px solid gray;
`;

const ButtonMusic = styled.button`
border: 2px solid gray;;
background-image: linear-gradient(to left, red, red, red);
width: 50%;
height: 35px;
border-radius: 20px;
color: black;
margin-bottom: 30px;

@media screen and (min-device-width: 320px) and (max-device-width: 480px) {
  font-size: 12px;
  width: 50%;
}
`;

const ButtonPlaylist = styled.button`
display: flex;
margin: auto;
margin-top: 30px;
margin-bottom: 30px;
padding: 15px;
width: 200px;
text-align: center;
justify-content: center;
align-items: center;
font-size: 25px;
flex-direction: column;
border-radius: 20px;
border: 1px solid gray;
height: 60px;
background-image: linear-gradient(to left, red, red, red);
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
background-color:black;
color:red;
height: 15vh;
width: 98, 5vw;

@media screen and (min-device-width: 320px) and (max-device-width: 480px) {
  width: 100vw;
  font-size: 12px;
}
`;

const  headers ={
    headers:{
        Authorization: "Natália-Amaral-Hopper",
    },
};

class DetalhePlaylist extends React.Component {
    state = {
        name: "" ,
        artist: "" ,
        url: "" ,
        listaMusicas: [] ,
    };

    adicionaMusica = () => {
        const body = {
            name: this.state.name,
            artist: this.state.artist,
            url: this.state.url
        }
    };

     musicaAdicionada = (id) => {
        if (window.confirm("Música Adicionada")) {
          axios
            .post(
              `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks${id}`,
              headers
            )
            .then((respostas) => {
              console.log(respostas);
              Swal.fire("", "Música adicionada com sucesso!", "success");
              this.setState({ name: "", artist: "", url: "" });
              this.pegarMusicaPlaylist();
            })
            .catch((erros) => {
            Swal.fire("", "Algo deu Errado :(", "error");
            console.log(erros);
            });
        }
      };

      onchangeNome = (event) => {
        this.setState({ name: event.target.value });
      };

      onchangeArtista = (event) => {
        this.setState({ artist: event.target.value });
      };
    
      onchangeLink = (event) => {
        this.setState({ url: event.target.value });
      };
    
      pegarMusicaPlaylist = () => {
        axios
          .get(
            `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists${this.props.playSelect.id}/tracks`,
            headers
          )
          .then((response) => {
            this.setState({ listaMusicas: response.data.result.tracks });
            console.log("Atenção", response.data.result.tracks);
          })
          .catch((err) => {
              console.log(err)
            });
      };
    
      componentDidMount() {
        this.pegarMusicaPlaylist();
      }


render() {
  const retornaMusica = this.state.listaMusicas.map((music) => {
    return (
      <CardMusica>
        <h4>Nome:</h4>
        <p>{music.name}</p>
        <h4>Artista:</h4>
        <p>{music.artist}</p>
        <h4>Música:</h4>
        <p>
          <CardAudio controls src={music.url} />
        </p>
      </CardMusica>
    );
  });

  return (
    <DivPrincipal>
      <HeaderPrincipal>
        <ImgLogo src="/img/resso.png" />
        <h1>Labesso</h1>
      </HeaderPrincipal>

      <MainPrincipal>
        <h3>Adicionar</h3>
        <InputMusic
          placeholder={"Nome da Música"}
          value={this.state.name}
          onChange={this.onchangeNome}
        />
        <InputMusic
          placeholder={"Nome do Artista"}
          value={this.state.artist}
          onChange={this.onchangeArtista}
        />
        <InputMusic
          placeholder={"Link da Música"}
          value={this.state.url}
          onChange={this.onchangeLink}
        />

        <div>
              <ButtonMusic onClick={this.adicionaMusica}>
                Adicionar Música
              </ButtonMusic>

          {retornaMusica}

          <ButtonPlaylist onClick={this.props.renderizaPaginaVoltar}>
           Voltar para Biblioteca
          </ButtonPlaylist>
        </div>
      </MainPrincipal>

      <FooterList>
                &copy; 2022 All rights reserved.
                <p>Projeto Desenvolvido por Natália Amaral ♥</p>
      </FooterList>
    </DivPrincipal>
  );
  }
}

export default DetalhePlaylist;