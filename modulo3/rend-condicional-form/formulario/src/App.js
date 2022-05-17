import logo from './logo.svg';
import './App.css';
import React from 'react';
import Dados from './components/Dados';
import Informacoes from './components/Informacoes';
import Informacoes2 from './components/Informacoes2';
import Final from './components/Final';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      etapa: 1
    };
  }

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Dados />;
      case 2:
        return <Informacoes />;
      case 3:
        return <Informacoes2 />;
      case 4:
        return <Final />;
    
    }
  };

  proximaEtapa = () => {
    this.setState({ etapa: this.state.etapa + 1 });
  };

  render() {
    return (
      <div className="App">
        {this.renderizaEtapa()}
        <br />
        {this.state.etapa !== 4 && (
          <button onClick={this.proximaEtapa}>Próxima etapa</button>
        )}
      </div>
    );
  }
}

export default App;