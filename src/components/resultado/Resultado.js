import React, { Fragment } from "react";

function Resultado({ formulario, eliminarPersona, editarPersona }) {
  
  return (
    <Fragment>
      <div>
        <div id="card2" className="col s12 m6 card">
          <h3 className="center-align">Mostrar</h3>
          <table className="centered responsive-table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>telefono</th>
                <th>Cedula</th>
                <th>Acciones</th>
              </tr>
            </thead>
           
                <tbody> 
                    {formulario.map(add => (
                        <tr>
                        <td>{add.nombre}</td>
                        <td>{add.apellido}</td>
                        <td>{add.telefono}</td>
                        <td>{add.cedula}</td>
        
                        <td>
                          <button 
                              href="!#" 
                              className="waves-effect waves-light btn"
                              onClick={ () => editarPersona(add)}
                          >
                            <i className="tiny material-icons">create</i>
                          </button>
                          {"  "}
                          <button
                            href="!#"
                            className="waves-effect waves-light btn red accent-3"
                            onClick={ () => eliminarPersona(add.id)}
                          >
                            <i className="tiny material-icons">delete</i>
                          </button>
                        </td>
                      </tr>
                    ))}
                                  
              </tbody>
            
            
          </table>
        </div>
      </div>
    </Fragment>
  );
}

export default Resultado;
