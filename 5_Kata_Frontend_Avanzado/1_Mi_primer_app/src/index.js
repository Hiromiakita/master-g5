import React from 'react';
import ReactDOM from 'react-dom';

// componente principal
import App from './App';
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // Obtiene el Id del elemento html para dibujar lo que hay en App
  document.getElementById('root')
);


