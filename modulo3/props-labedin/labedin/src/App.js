import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import styled from 'styled-components';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="./components/img/Natália.png" 
          nome="Natália Amaral" 
          descricao="Olá, bem vindes! Meu nome é Natália, tenho 26 anos. Nascida e criada na cidade de Matão, no interior de São Paulo.
          Sou a mais velha dentre três irmão. Sou casada e mãe de dois pets, Nami e Jhin.
          Atualmente apenas estudo. Faço inglês online na Wise Up durante o dia e a noite estudo Web Full Stack na instituição Labenu!"
        />
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div>
        <CardPequeno
         nome="Email:"
         informacoesEmail="nataliaheloisa95@gmail.com"
        />
      </div>

      <div>
        <CardPequeno
         nome="Endereço:"
         informacoesEndereco="José Labenu, 500 - Matão-SP"/>
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="./." 
          nome="DSC Odonto" 
          descricao="Trabalhava para dois irmãos dentistas. Atuava organizando as agendas, atendendo telefones, mantendo a ordem dos materiais
          odontológicos, emitindo notas fiscais e auxiliando em cirurgias." 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="Aff Cred Intermediações de Negócios" 
          descricao="Uma empresa representante do banco bmg. Atuava realizando vendas dos limites de cartões de créditos consignado e venda de
          seguro prestamista. Essas vendas tinham como foco aposentados e pensionistas" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
