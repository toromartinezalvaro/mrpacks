import React from 'react';
import logo from './logo.svg';
import './App.css';

//aqui estoy importando el componente "Navigation" de el archivo "Navigation.jsx"
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
        <h1 className= "welcome to Mr Packs">
        ¡Te damos la bienvenida a Mr packs!
        </h1>
        <Navigation tittle="¿quienes somos?"/>     
        <Navigation tittle="¿por que Mr Packs es la mejor opcion para ti?"/> 
        <Navigation tittle="Mi Primera navegacion"/> 
        <Navigation tittle="Mi Primera navegacion"/> 
        <Navigation tittle="Mi Primera navegacion"/>  
        <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
