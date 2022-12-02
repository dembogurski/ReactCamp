import './App.css';
import Testimonio from './componentes/Testimonio.js'

function App() {
  
  return (

    <div className="App">
      <div className="contenedor-principal">
      
        <h1>Esto es lo que dicen nuestros Alumnos</h1>

        <Testimonio 
           imagen='iris'
           nombre='Iris Vera'
           pais='Paraguay'          
           cargo='Encargada de RRHH'
           empresa='Marijoa Tejidos'
           testimonio='Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como Encargada de RRHH en Marijoa'
         />
         <Testimonio 
           imagen='rosa'
           nombre='Rosa de Isasa'
           pais='Paraguay'          
           cargo='Gerente de Sucursal'
           empresa='Marijoa Tejidos'
           testimonio='Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como Encargada de RRHH en Marijoa'
         /> 
        <Testimonio 
           imagen='andreal'
           nombre='Andrea Lopez'
           pais='Paraguay'          
           cargo='Encargada de Facturacion Contable'
           empresa='Marijoa Tejidos'
           testimonio='Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como Encargada de RRHH en Marijoa'
         /> 
         
      </div>
    </div>
  );
}

export default App;


