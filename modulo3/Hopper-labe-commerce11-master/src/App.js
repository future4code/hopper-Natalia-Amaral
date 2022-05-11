import React from 'react';
import './App.css';


class App extends React.Component {
  render(){
    return (
      <div>
        <div>
          <h3>Filtros</h3>

          <label>Valor mínimo:</label>
          <input type="number"/>

          <label>Valor máximo:</label>
          <input type="number"/>

          <label>Procure pelo nome:</label>
          <input type="text"/>
        </div>
        
        <div>
          <div>
            <h3>Quantidade de produtos:</h3>
              <div>
                <p>Ordenação:</p>
                <select>
                  <option>Crescente</option>
                  <option>Decrescente</option>
                </select>

              </div>
          </div>
          <div>
            <h2> Produtos </h2>
          </div>
        </div>


        <div className='carrinho'>
          <h3>Carrinho:</h3>
          <p>Valor total: R$0,00</p>
        </div>
      </div>
      
    );
  }
}

export default App;