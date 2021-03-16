import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar border-top shadow-sm  navbar-light  mb-3" style={{ background: "#e3f2fd" }}>
			<div className="m-auto">
				<Link to="/formulario">
					<button className="btn">Registrar mascota</button>
				</Link>
			</div>
			<div className="m-auto">
				<Link to="/dogs">
					<button className="btn">Perros</button>
				</Link>
			</div>
			<div className="m-auto">
				<Link to="/cats">
					<button className="btn">Gatos</button>
				</Link>
			</div>
			<div className="m-auto">
				<Link to="/AboutUs">
					<button className="btn">¿Quiénes Somos?</button>
				</Link>
			</div>
		</nav>
	);
};
