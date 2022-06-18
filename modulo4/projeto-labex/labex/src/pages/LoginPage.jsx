import React from "react";
import { useNavigate } from "react-router-dom"
import styled from "styled-components";

const Img = styled.img`
height: 9vh;
margin-right:20px;
margin-left:  10px;
@media screen and (min-device-width: 320px) and (max-device-width: 480px) {
  height: 8vh;
}
`;

const HeaderPrincipal = styled.div`
display: flex;
flex-direction: row;
justify-content: start;
align-items: center;
text-align: center;
height: 12vh;
background-color: rgb(255, 246, 142);
color: rgb(95, 102, 153);
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
  Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  
@media screen and (min-device-width: 320px) and (max-device-width: 480px) {
  font-size: 20px;
  width: 100vw;
}
`;

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  background-color: rgb(255, 246, 142);
  color: rgb(95, 102, 153);
  height: 10vh;
  width: 98, 5vw;
  color: rgb(95, 102, 153);
  padding-top: 10px;
  
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 100vw;
    font-size: 12px;
  }
`;

const Button = styled.button`
display: inline-block;
margin-top: 30px;
width: 100px;
text-align: center;
justify-content: space-between;
align-items: center;
font-size: 13px;
border-radius: 8px;
border: 1px solid black;
height: 30px;
background-color: rgb(255, 246, 142);
color: rgb(95, 102, 153);
transition: 0.5s all ease;
  &:hover {
    background-color:  rgb(95, 102, 153);
    color: white;
  }

  
@media screen and (min-device-width: 320px) and (max-device-width: 480px) {
  font-size: 15px;
  width: 150px;
}
`;

const Nav = styled.nav`
  padding-top: 150px;
  height: 61vh;
  width: 100vw;
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  background-size: cover;
  background-color: rgb(95, 102, 153);;
  background-repeat: no-repeat;
  background-position: center;
  font-size: 20px;
  display: flex;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;

  form{
    font-size: 15px;
  }

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

const LoginPage = () => {
    const navigate = useNavigate();

    return(
        <div>
            <HeaderPrincipal>
                <Img src="../imagens/possivel-logo.png"/>
                <h2 onClick={() => navigate("/")}>LabeX</h2>
            </HeaderPrincipal>
            <Nav>
            <h2>Fazer login</h2>
                <form>
                    Nome: <input></input><br/>
                    Email: <input type="text" ></input><br/>
                </form>
                <Button type="submit" value="Enviar">Enviar</Button>
            </Nav>
            <Footer>
                 &copy; 2022 All rights reserved.
                <p>Projeto Desenvolvido por Natália Amaral ♥</p>
            </Footer>
        </div>
    )
}



export default LoginPage;