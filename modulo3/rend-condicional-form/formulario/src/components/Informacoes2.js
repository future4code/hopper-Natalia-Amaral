import React from "react";
import Informacoes from "./Informacoes";
import Perguntas from "./Perguntas";
import Opcoes from "./Opcoes";

class Informacoes2 extends React.Component {
  render() {
    return (
      <div>
        <h3>INFORMAÇÕES GERAIS DE ENSINO</h3>
        <Perguntas
          pergunta={"5. Por que você não terminou um curso de graduação?"}
        />
        <Opcoes
          pergunta={"6. Você fez algum curso complementar?"}
          opcoes={["Nenhum", "Curso técnico", "Curso de inglês"]}
        />
      </div>
    );
  }
}

export default Informacoes2;