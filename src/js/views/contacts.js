import React, { useContext, useEffect } from "react";
import { ContactCard } from "../component/contactCard";
import { Navbar } from "../component/navbar";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";

export const Contacts = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();


    const { agenda, contact } = store;


    useEffect(() => {
        if (!agenda.slug) {
            navigate("/");
        }
    }, [agenda.slug, navigate]);


	return (

		<div className="container">
			<Navbar/>
			<div>
			{store.contact.map((contact) => (
                 <ContactCard key={contact.id} contact={contact} />
             ))}		
			</div>
		</div>
	)
};
