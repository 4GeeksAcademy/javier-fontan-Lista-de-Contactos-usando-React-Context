import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const NameAgenda = () => {
    const { store, actions } = useContext(Context);
    const [agendaSlug, setAgendaSlug] = useState("");
    const [fetchAgenda, setFetchAgenda] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        if (agendaSlug) {
            actions.createAgenda(agendaSlug).then(() => {
                navigate("/addContact");
            }).catch(error => {
                console.error("Error al crear agenda", error);
            });
        } else {
            console.log("Debe ingresar un nombre para la agenda");
        }
    };

    const handleFetch = (e) => {
        if (fetchAgenda) {
            actions.fetchContacts(fetchAgenda).then(() => {
                navigate("/contacts");
            }).catch(error => {
                console.error("Error al cargar la agenda", error);
            });
        } else {
            console.log("Debe ingresar el nombre de la agenda");
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="row g-3 justify-content-center mt-2">
                <div className="col-auto">
                    <label htmlFor="agendaSlug" className="form-label pt-1"><strong>Crear nueva agenda:</strong></label>
                </div>
                <div className="col-4">
                    <input
                        type="text"
                        className="form-control"
                        id="agendaSlug"
                        value={agendaSlug}
                        onChange={(e) => setAgendaSlug(e.target.value)}
                        placeholder="Escoge un nombre para tu agenda"
                    />
                </div>
                <div className="col-auto">
                    <button
                        type="submit"
                        className="btn btn-secondary mb-3">
                        Guardar agenda y crear nuevo contacto
                    </button>
                </div>
            </form>

            <form onSubmit={handleFetch} className="row g-3 justify-content-center mt-2">
                <div className="col-auto">
                    <label htmlFor="fetchAgenda" className="form-label pt-1"><strong>Acceder a agenda existente:</strong></label>
                </div>
                <div className="col-4">
                    <input
                        type="text"
                        className="form-control"
                        id="fetchAgenda"
                        value={fetchAgenda}
                        onChange={(e) => setFetchAgenda(e.target.value)}
                        placeholder="Ingresa el nombre de tu agenda"
                    />
                </div>
                <div className="col-auto">
                    <button
                        type="submit"
                        className="btn btn-secondary mb-3">
                        Ir a contactos
                     </button>
                </div>
            </form>
        </>
    );
};
