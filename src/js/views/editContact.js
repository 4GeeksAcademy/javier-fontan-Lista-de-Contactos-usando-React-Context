import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const EditContact = () => {
    const { store, actions } = useContext(Context);
    const { id } = useParams();
    const navigate = useNavigate();
    
    
    const [contact, setContact] = useState({
        name: "",
        email: "",
        phone: "",
        address: ""
    });

    useEffect(() => {

        const existingContact = store.contact.find((c) => c.id === parseInt(id));
        if (existingContact) {
            setContact(existingContact);
        } else {
            
            console.error("Contacto no encontrado");
            navigate("/contacts");  
        }
    }, [id, store.contact, navigate]);

    const handleChange = (e) => {
        setContact({
            ...contact,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await actions.updateContact(store.agenda.slug, contact, id);
            navigate("/contacts");
        } catch (error) {
            console.error("Error al guardar los cambios:", error);
        }
    };

    return (
        <div className="container">
            <h1 className="text-center pt-2">Editar Contacto</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3 pt-3">
                    <label htmlFor="name" className="form-label">Nombre Completo</label>
                    <input
                        value={contact.name}
                        onChange={handleChange}
                        name="name"
                        type="text"
                        className="form-control"
                        id="fullName"
                        placeholder="Ingrese el nombre completo"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        value={contact.email}
                        onChange={handleChange}
                        name="email"
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Ingrese el email"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Teléfono</label>
                    <input
                        value={contact.phone}
                        onChange={handleChange}
                        name="phone"
                        type="tel"
                        className="form-control"
                        id="phone"
                        placeholder="Ingrese el teléfono"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Dirección</label>
                    <input
                        value={contact.address}
                        onChange={handleChange}
                        name="address"
                        type="text"
                        className="form-control"
                        id="address"
                        placeholder="Ingrese la dirección"
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary me-2">
                    Guardas Cambios
                </button>
                <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => navigate("/contacts")}>
                    Volver a Contactos
                </button>
            </form>
        </div>
    );
};
