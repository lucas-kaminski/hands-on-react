import React from 'react'; //Importa o React
import ReactDOM from 'react-dom'; // Integração entre React e WEB
import App from './App'; //Outro arquivo app

ReactDOM.render( //Renderizer em tela o app dentro do documento que tem id root
  <App />, //função app da app.js
  document.getElementById('root')
);

