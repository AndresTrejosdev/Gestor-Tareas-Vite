import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Obtener el elemento root del DOM
const rootElement = document.getElementById('root');

// Verificar que el elemento existe antes de crear el root
if (!rootElement) {
  throw new Error('No se pudo encontrar el elemento con id "root"');
}

// Crear el root usando la nueva API de React 18
const root = ReactDOM.createRoot(rootElement);

// Renderizar la aplicación
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);