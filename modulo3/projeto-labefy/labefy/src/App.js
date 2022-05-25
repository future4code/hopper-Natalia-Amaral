import React from 'react';
import CriarPlaylist from './components/CriarPlaylist';
import DetalhePlaylist from './components/DetalhePlaylist';
import ListaPlaylist from './components/ListaPlaylist';

class App extends React.Component {
  state = {
    telaInicial: "cadastrar"
  }

  escolheTela = () => {
    switch (this.state.telaInicial){
      case "cadastrar":
        return <CriarPlaylist irParaLista={this.irParaLista}/>
      case "lista":
        return <ListaPlaylist irParaCadastro={this.irParaCadastro}/>
      default:
        return <div>Página não encontrada!!</div>
    }
  }


    irParaCadastro = () => {
      this.setState({telaInicial: "cadastrar"})
    }
  
    irParaLista = () => {
      this.setState({telaInicial: "lista"})
    }


    render (){
        return(
            <div>
              {this.escolheTela()}
            </div>
        )
    }
}

export default App;
