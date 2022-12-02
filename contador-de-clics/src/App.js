
import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClics] =useState(0); 

  const manejarClick = () => {
    setNumClics(  numClicks + 1 );

  }

  const reiniciarContador = () =>{
     setNumClics(0);
  }

  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
         <img  className='freecoedecamp-logo'
         src={freeCodeCampLogo} 
         alt='Logo de freeCodeCamp'
         />
      </div>      

      <div className='contenedor-principal'>
         <Contador numClicks={numClicks} />
          

            <Boton 
               texto='Click'
               esBotonDeClic={true}
               manejarClick={manejarClick}/>
            <Boton 
            texto='Reiniciar'
            esBotonDeClic={false}
            manejarClick={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
