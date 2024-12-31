import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
export const ContactCard = ({ contact }) => {
  const { store, actions } = useContext(Context);

  const eliminarContacto = async () => {
 
    const confirmacion = window.confirm(
      "¿Estás seguro? Con esta acción eliminarás el contacto de forma permanente."
    );
  
    if (confirmacion) {
      try {
      
        await actions.deleteContact(store.agenda.slug, contact.id);
  
     
        alert("¡Eliminado! El contacto ha sido eliminado.");
      } catch (error) {
        
        alert("Error al eliminar el contacto. Inténtalo nuevamente.");
        console.error("Error al eliminar el contacto:", error);
      }
    }
  };

  return (
    <div className="card mx-auto mb-1" style={{ width: "95%" }}>
      <div className="row g-0">
        <div className="col-md-2">
        </div>
        <div className="col-md-10">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <h5 className="card-title text-start">{contact.name}</h5>
              <div>
                <Link to={`/editContact/${contact.id}`}>
                  <button className="btn btn-link">
                    <i className="fas fa-pencil-alt"></i>
                  </button>
                </Link>
                <button className="btn btn-link" onClick={eliminarContacto}>
                  <i className="far fa-trash-alt"></i>
                </button>
              </div>
            </div>
            <p className="card-text text-start">{contact.address}</p>
            <p className="card-text text-start">{contact.phone}</p>
            <p className="card-text text-start">{contact.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
