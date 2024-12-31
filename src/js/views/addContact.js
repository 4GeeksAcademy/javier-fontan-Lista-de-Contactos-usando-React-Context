import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddContact = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    const [contacto, setContacto] = useState({
        name: "",
        email: "",
        phone: "",
        address: ""
    });

   
    const handleChange = (e) => {
        const { name, value } = e.target;
        setContacto((prev) => ({ ...prev, [name]: value }));
    };

   
    const handleSubmit = (e) => {
        e.preventDefault(); 
        

        actions.createContact(store.agenda.slug, contacto).then(() => {
            navigate("/contacts");
        });
    };

    useEffect(() => {
        if (!store.agenda.slug) {
            navigate("/");
        }
    }, [store.agenda.slug, navigate]);

    return (
        <div className="container">
            <h1 className="text-center pt-2">Nuevo Contacto</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3 pt-3">
                    <label htmlFor="name" className="form-label">Nombre Completo</label>
                    <input
                        value={contacto.name}
                        onChange={handleChange}
                        name="name"
                        type="text"
                        className="form-control"
                        id="fullName"
                        placeholder="Enter Full Name"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        value={contacto.email}
                        onChange={handleChange}
                        name="email"
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter email"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Teléfono</label>
                    <input
                        value={contacto.phone}
                        onChange={handleChange}
                        name="phone"
                        type="tel"
                        className="form-control"
                        id="phone"
                        placeholder="Enter phone"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Dirrección</label>
                    <input
                        value={contacto.address}
                        onChange={handleChange}
                        name="address"
                        type="text"
                        className="form-control"
                        id="address"
                        placeholder="Enter address"
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-secondary me-2"
                >
                    Guardar
                </button>
            </form>
            <button
                type="button"
                className="btn btn-link"
                onClick={() => navigate("/contacts")}
            >
                Volver a contactos
            </button>
        </div>
    );
};
