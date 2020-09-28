import React, { useState, Fragment } from "react";
import "./Formulario.css";

function Formulario({ crearCita }) {
  // Crear State de Citas
  const [formulario, guardarFormulario] = useState({
    nombre: "",
    apellido: "",
    cedula: "",
    telefono: "",
  });

  // Función que se ejecuta cada que el usuario escribe en un input
  const actualizarState = (e) => {
    guardarFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  // Extraer los valores
    const { nombre, apellido, cedula, telefono } = formulario;

  // Cuando el usuario presiona agregar cita
    const submitCita = e => {
        e.preventDefault();

        // Validar
        if(nombre.trim() === '' || apellido.trim() === ''  || cedula.trim() === ''  || telefono.trim() === '' ){
            
            return;
        }
        // Eliminar el mensaje previo 
        

        // Asignar un ID
        

        // Crear la cita
        crearCita(formulario);

        // Reiniciar el form
        guardarFormulario({
            nombre: '',
            apellido: '',
            cedula: '',
            telefono: ''
        })
}


  return (
    <Fragment>
      <div className="row">
        <div id="card1" className="col s12 card">
            <form className="col s12" 
                onSubmit={submitCita}
            >
            <h3 className="center-align">Formulario</h3>
            <div className="row">
              <div className="input-field col s6">
                <input
                  name="nombre"
                  id="nombre"
                  type="text"
                  onChange={actualizarState}
                  className="validate"
                  value={nombre}
                />
                <label htmlFor="nombre">Nombre</label>
              </div>
              <div className="input-field col s6">
                <input
                  name="apellido"
                  id="apellido"
                  type="text"
                  onChange={actualizarState}
                  className="validate"
                  value={apellido}
                />
                <label htmlFor="apellido">Apellido</label>
              </div>
            </div>

            <div className="row">
              <div className="input-field col s12">
                <input
                  name="cedula"
                  id="cedula"
                  type="text"
                  onChange={actualizarState}
                  className="validate"
                  value={cedula}
                />
                <label htmlFor="cedula">Cedula</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  name="telefono"
                  id="telefono"
                  type="text"
                  onChange={actualizarState}
                  className="validate"
                  value={telefono}
                />
                <label htmlFor="telefono">Telefono</label>
              </div>
            </div>
            <div className="boton center-align">
              <button
                className="waves-effect waves-light btn-small"
                type="submit"
              >
                Agregar
              </button>
            </div>
          </form>
        </div>
    </div>

    </Fragment>
  );
}

export default Formulario;
