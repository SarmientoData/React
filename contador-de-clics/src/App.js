import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState } from 'react';

function App() {

  //useState es un hook q permite agregar un estado a un componente funcional

  const [numClics, setNumClics] = useState(0);

  const manejarClic= () => {
    console.log('Se hizo click en el botón Clic');
    setNumClics (numClics + 1);
  }

  const reiniciarContador= () => {
    console.log('Se hizo click en el botón Reiniciar');
    setNumClics (10000);
  }



  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          className="freecodecamp-logo"
          src={freeCodeCampLogo}
          alt="logo de freecodecamp"/>
    </div>
    <div className="contenedor-principal">
      <Contador numClics={numClics}
       />
      <Boton
       texto="Clic" esBotonDeClic={true}
      manejarClic={manejarClic}/>
      <Boton texto="Reiniciar" esBotonDeClic={false}
      manejarClic={reiniciarContador}/>
    </div>
    </div>)
  }


export default App;
