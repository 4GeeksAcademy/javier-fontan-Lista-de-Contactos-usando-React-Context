import React from "react";
import { NameAgenda } from "../component/nameAgenda";

export const CreateAgenda = () => {
    return (
        <div className="container">
            <h1 className="text-center pt-2">Crear agenda de contactos</h1>
            <div className="pt-4">
                <NameAgenda />
            </div>
        </div>
    );
};
