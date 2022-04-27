import React from 'react';
import '../components/Mensagem'

export class Mensagem extends React.Component{
    state = {
        nomeRemetente: '',
        conteudo: ''
    }

    onChangeNome = (event) => {
        this.setState({nomeRemetente: event.target.value})
    }

    onChangeConteudo = (event) => {
        this.setState({conteudo: event.target.value})
    }

    render(){
        return (
            <div>
                <input 
                        value={this.state.nomeRemetente}
                        onChange={this.onChangeNome}
                    />
                    <input 
                        type="text"
                        placeholder="Mensagem"
                        name={this.props.conteudo}
                        value={this.state.conteudo}
                        onChange={this.onChangeConteudo}
                    />
                    <button onClick={this.onClickEnviar}>Enter</button>
            </div>

        );
    }
}