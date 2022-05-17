import React from "react";
import Perguntas from "./Perguntas";
import Opcoes from "./Opcoes";

class Dados extends React.Component {
  render() {
    return (
      <div>
        <h3>DADOS GERAIS</h3>
        <Perguntas pergunta={"1. Qual o seu nome?"} />
        <Perguntas pergunta={"2. Qual sua idade?"} />
        <Perguntas pergunta={"3. Qual seu email?"} />
        <Opcoes
          pergunta={"4. Qual a sua escolaridade?"}
          opcoes={[
            "Ensino médio incompleto",
            "Ensino médio completo",
            "Ensino superior incompleto",
            "Ensino superior completo"
          ]}
        />
      </div>
    );
  }
}

export default Dados;