import React, {useState} from "react";
import '../hojas-de-estilo/TareaFormulario.css';
import {v4 as uuidv4} from 'uuid';

function TareaFormulario( props ){

   const [input, setInput] = useState('');

   const manejarCambio = e => {
      setInput(e.target.value);            
   };

   /* e es el evento */
   const manejarEnvio = e => {
      e.preventDefault();
      console.log("Enviando formulario...");
      const tareaNueva = {
         id: uuidv4(),
         texto : input,
         completada:false
      }
      console.log(tareaNueva);
      props.onSubmit(tareaNueva);
   };

   return (
       <form className='tarea-formulario' onSubmit={manejarEnvio}>
         <input 
            className='tarea-input'
            type='text'
            placeholder='Escribe una Tarea'
            name='texto'
            onChange={manejarCambio}
         />
         <button className='tarea-boton'  >Agregar Tarea</button>  
       </form>
   );
}


export default TareaFormulario;