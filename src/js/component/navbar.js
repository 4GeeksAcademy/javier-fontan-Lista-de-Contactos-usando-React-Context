import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/addContact">
				<span className="navbar-brand mb-0 h1">Añadir nuevo contacto</span>
			</Link>
			<div className="ml-auto">
				<Link to="/createAgenda">
					<button className="btn btn-primary">Crear agenda</button>
				</Link>
			</div>
		</nav>
	);
};
