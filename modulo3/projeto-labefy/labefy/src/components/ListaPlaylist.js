import React from "react";
import axios from "axios";
import Swal from "sweetalert2";
import DetalhePlaylist from "./DetalhePlaylist";
import styled from "styled-components";

const ImgLogo = styled.img`
  height: 12vh;
  margin-right: 20px;
  margin-left: 30px;

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    height: 8vh;
  }
`;

const CabecalhoPrincipal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  width: 98, 5vw;
  height: 12vh;
  background-color:black;
  color: red;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    font-size: 20px;
    width: 100vw;
  }
`;

const MainPrincipal = styled.div`
  color: red;
  background-image: url(https://w0.peakpx.com/wallpaper/366/745/HD-wallpaper-blue-sector-abstract-blue-cloud-kor4-rts-laser-line-neon-smoke-texture.jpg);
  min-height: 73vh;
  width: 98, 5vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-position: center;
  background-size: cover;
  font-size: 50px;
  text-shadow: red;
  display: flex;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  position: relative;

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

const PlayListCard = styled.div`
  border: 1px solid gray;
  color: black;
  font-size: 30px;
  background-image: linear-gradient(to left, red, red, red);
  display: flex;
  width: 50%;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 12px;
  margin-bottom: 20px;
  flex-direction: left;

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    font-size: 15px;
    width: 50%;
  }
`;

const ButtonListCard = styled.button`
  margin-left: 10px;
  border-radius: 15px;
  height: 35px;
  background-color: black;
  color: red;
  width: 100px;

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    font-size: 12px;
    width: 80px;
  }
`;

const FooterList = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  background-color: black;
  height: 15vh;
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

class ListaPlaylist extends React.Component {
    state = {
        playlist: [],
        pagDetalhe: false,
        playSelect: "",
      };

      pegarPlay = () => {
        axios
          .get(
            `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists` ,
            headers
          )
          .then((response) => {
            this.setState({ playlist: response.data.result.list });
            console.log("Atenção", response.data.result.list);
          })
          .catch((err) => {
            console.log(err);
          });
      };

      componentDidMount() {
        this.pegarPlay();
      }

      deletarUsuario = (id) => {
        if (window.confirm("Deseja deletar essa Playlist?")) {
          axios
            .delete(
              `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`,
              headers
            )
            .then((respostas) => {
              console.log(respostas);
              Swal.fire("", "A Playlist foi apagada com sucesso!", "success");
              this.pegarPlay();
            })
            .catch((erros) => {
              Swal.fire("", "Ops! Algo deu Errado :(", "error");
              console.log(erros);
            });
        }
      };
      
      renderizaPaginaDetalhe = (selectplaylist) => {
        this.setState({ paginaDetalhe: true, playSelect: selectplaylist });
      };
    
      renderizaPaginaVoltar = () => {
        this.setState({ paginaDetalhe: false });
      };
    

    render (){
        if (this.state.paginaDetalhe) {
          return (
            <DetalhePlaylist
              renderizaPaginaVoltar={this.renderizaPaginaVoltar}
              playSelect={this.state.playSelect}
            />
          );
        }
        const retornaLista = this.state.playlist.map((playlists) => {
          return (
            <PlayListCard key={playlists.id}>
              {playlists.name}
              <div>
                <ButtonListCard onClick={() => this.deletarUsuario(playlists.id)}>
                  Deletar
                </ButtonListCard>
    
                <ButtonListCard
                  onClick={() => this.renderizaPaginaDetalhe(playlists)}
                >
                  Mostrar Mais
                </ButtonListCard>
              </div>
            </PlayListCard>
          );
        });
    
        return (
          <div>
            <CabecalhoPrincipal >
              <ImgLogo src="/img/resso.png"/>
              <h1>Labesso</h1>
            </CabecalhoPrincipal >
    
            <MainPrincipal>
              <h3>Playlists</h3>
              {retornaLista}
    
              <div>
                <ButtonPlaylist onClick={this.props.irParaCadastro}>
                  Voltar para ínicio
                </ButtonPlaylist>
              </div>
            </MainPrincipal>
    
            <FooterList>
                &copy; 2022 All rights reserved.
                <p>Projeto Desenvolvido por Natália Amaral ♥</p>
            </FooterList>
          </div>
        );
      }
    }

export default ListaPlaylist;