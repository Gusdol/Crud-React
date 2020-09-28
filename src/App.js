import React, { useState, useEffect } from 'react';

import Formulario from './components/formulario/Formulario';
import Header from './components/header/Header';
import Resultado from './components/resultado/Resultado';

import clienteAxios from './config/axios';

function App() {

  const [ingresar, guardarIngresar] = useState([]);

  //funcion que muestra los resultados
  const consultarApi = () => {
    clienteAxios.get('/api/personas')
    
        .then(respuesta => {
          guardarIngresar(respuesta.data);
        })
        .catch(error => {
          console.log(error)
        })
       
  }
  // funcion que agrega los registros
  const crearPersona = (ingresar) => {

      clienteAxios.post('/api/personas', ingresar)
    
        .then(respuesta => {
          consultarApi();
          console.log('Creado exitoso');
        })
        .catch(error => {
          console.log(error)
        }) 
        
  }
  // funcion que elimina los registros
  const eliminarCita = id => {

    clienteAxios.delete(`/api/personas/${id}`)
  
      .then(respuesta => {
        consultarApi();
        console.log('eliminado correctamente');
      })
      .catch(error => {
        console.log(error)
      }) 
}


  useEffect(() => {
    consultarApi();
  }, []);
  
  return (
  
    
    <div className="container">
      <Header />
        <div className="">
            <Formulario
              crearPersona={crearPersona}
            />
        </div>
        <div className="">    
              <Resultado
                formulario={ingresar}
                eliminarCita={eliminarCita}
            />    
        </div>
     </div>       
  );
}

export default App;
