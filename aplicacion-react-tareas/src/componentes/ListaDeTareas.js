import React, {useState} from "react";
import TareaFormulario from "./TareaFormulario";
import '../hojas-de-estilo/ListaDeTareas.css';
import Tarea from './Tarea';


function ListaDeTareas(){


    const [tareas, setTareas] = useState([]);

    const agregarTarea= tarea =>{         
        console.log("Tarea Agregada");
        console.log(tarea);
        if(tarea.texto.trim() !== ''){
            tarea.texto = tarea.texto.trim();
            const tareasActualizadas = [tarea,...tareas];
            setTareas(tareasActualizadas);
        }else{
            alert('Ingrese una Tarea valida...');
        }
        //setTareas(tarea);
    }
 
    const eliminarTarea  = id => { 
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
        setTareas(tareasActualizadas);
    }; 

    const completarTarea = id => {
        console.log("Tarea Completada "+id);
        const tareasActualizadas = tareas.map(tarea => {
           if(tarea.id === id){
              tarea.completada = !tarea.completada;
           }
           return tarea;
        });
        setTareas(tareasActualizadas);
    };

    return (
        <>
            <TareaFormulario  onSubmit={agregarTarea} />
            <div className='tareas-lista-contenedor'>
                {
                    tareas.map((tarea) => 
                        <Tarea 
                            key={tarea.id}
                            id={tarea.id}
                            texto={tarea.texto}
                            completada={tarea.completada} 
                            completarTarea={completarTarea} 
                            eliminartarea={eliminarTarea}   
                        />
                    )
                }
            </div>
        </>
    );
}

export default ListaDeTareas;