import React, { useState, useEffect } from 'react';

import Formulario from './components/formulario/Formulario';
import Header from './components/header/Header';
import Resultado from './components/resultado/Resultado';

import clienteAxios from './config/axios';

function App() {

  const [ingresar, guardarIngresar] = useState([]);
  const [existeeditar, guardarExisteEditar] = useState(false);
  const [editar, guardarEditar] = useState({
    id:"",
    nombre: "",
    apellido: "",
    documento: "",
    telefono: ""
  })

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
  const eliminarPersona = id => {

    clienteAxios.delete(`/api/personas/${id}`)
  
      .then(respuesta => {
        consultarApi();
        console.log('eliminado correctamente');
      })
      .catch(error => {
        console.log(error)
      }) 
}

  // funcion que edita los registros
  const editarPersona = ingresar => {
    // activa los inputs y label en el formulario
    let activo = document.querySelectorAll('label');
    for( let activos of activo) {
      activos.classList.add('active');
    }

    let input = document.querySelectorAll('input');
    for( let inputs of input) {
      inputs.classList.add('valid');
    }
         guardarEditar({
          id: ingresar.id,
          nombre: ingresar.nombre,
          apellido: ingresar.apellido,
          documento: ingresar.documento,
          telefono: ingresar.telefono
        }) 


        guardarExisteEditar(true);
  }

  const editarPersonaApi = persona => {

    clienteAxios.put(`/api/personas/${persona.id}`, persona)
        .then(respuesta => {
          consultarApi();
          guardarExisteEditar(false);
          console.log('editado correctamente');
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
              editar={editar}
              existeeditar={existeeditar}
              editarPersonaApi={editarPersonaApi}
            />
        </div>
        <div className="">    
              <Resultado
                formulario={ingresar}
                eliminarPersona={eliminarPersona}
                editarPersona={editarPersona}
            />    
        </div>
     </div>       
  );
}

export default App;
