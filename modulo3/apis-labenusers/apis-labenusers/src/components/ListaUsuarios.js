import React from "react";
import axios from "axios";
import styled from "styled-components";

const Div = styled.div`
    text-align: center;
`;


class ListaUsuarios extends React.Component {

    state = {
        users: [],
      };
      componentDidMount() {
        this.showAllUsers();
      }
    
      componentDidUpdate() {
        this.showAllUsers();
      }
    
      showAllUsers = () => {
        axios
          .get(
            "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
            {
              headers: {
                Authorization: "natalia-amaral-hopper",
              },
            }
          )
          .then((res) => {
            this.setState({ users: res.data });
            console.log(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      };
      deleteUser = (idDoUsuario) => {
        axios
          .delete(
            `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${idDoUsuario}`,
            {
              headers: {
                Authorization: "natalia-amaral-hopper",
              },
            }
          )
          .then((response) => {
            alert("Usuário deletado com sucesso!");
    
            console.log(response);
          })
          .catch((err) => {
            console.log(err.response);
          });
      };
      render() {
        const usuariosRenderizados = this.state.users.map((user) => {
          return (
            <Div>
              <p key={user.id}>{user.name}</p>
              <button onClick={() => this.deleteUser(user.id)}> Deletar </button>
            </Div>
          );
        });
    
        return (
          <Div>
            <h3> Lista de usuários:</h3>
            {usuariosRenderizados}
          </Div>
        );
      }
    };

export default ListaUsuarios;