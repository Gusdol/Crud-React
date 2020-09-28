import React, { useState } from 'react';

import Formulario from './components/formulario/Formulario';
import Header from './components/header/Header';
import Resultado from './components/resultado/Resultado';

function App() {

  const [ingresar, guardarIngresar] = useState([]);

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
