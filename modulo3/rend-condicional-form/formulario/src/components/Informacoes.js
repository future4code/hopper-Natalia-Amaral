import React from "react";
import Perguntas from "./Perguntas";
import Opcoes from "./Opcoes";

class Informacoes extends React.Component {
  render() {
    return (
      <div>
        <h3>INFORMAÇÕES DO ENSINO SUPERIOR</h3>
        <Perguntas pergunta={"5. Qual curso?"} />
        <Perguntas pergunta={"6. Qual a unidade de ensino?"} />
      </div>
    );
  }
}

export default Informacoes;