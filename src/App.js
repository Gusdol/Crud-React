import React, { useState, useEffect } from 'react';

import Formulario from './components/formulario/Formulario';
import Header from './components/header/Header';
import Resultado from './components/resultado/Resultado';

import clienteAxios from './config/axios';

function App() {

  const [ingresar, guardarIngresar] = useState([]);


  const consultarApi = () => {
    clienteAxios.get('/api/personas')
    
        .then(respuesta => {
          guardarIngresar(respuesta.data);
        })
        .catch(error => {
          console.log(error)
        })
       
  }

  useEffect(() => {
    consultarApi();
  }, []);


    // Función que tome las citas actuales y agregue la nueva
    const crearCita = formulario => {
      guardarIngresar([ ...ingresar, formulario ]);
    }

    // Función que elimina una cita por su id
    const eliminarCita = id => {
      const nuevasCitas = ingresar.filter(formulario => formulario.id !== id );
      guardarIngresar(nuevasCitas);
    }
   
  return (
  
    
    <div className="container">
      <Header />
        <div className="">
            <Formulario
              crearCita={crearCita}
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
