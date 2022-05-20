import './App.css';
import React from 'react';
import CriarUsuario from './components/CriarUsuario';
import ListaUsuarios from './components/ListaUsuarios';

class App extends React.Component{
  render(){
    return(
      <div>
        <CriarUsuario/>
        <ListaUsuarios/>
      </div>
    )
  }
};

export default App;
