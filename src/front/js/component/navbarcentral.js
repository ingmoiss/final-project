import React from "react";
import { Link } from "react-router-dom";
export const Navbarcentral = () => {
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<Link to="/">
					<a className="nav-link">
						<img
							id="logo"
							src="https://pbs.twimg.com/profile_images/2341972759/ema34randgce8sdtq73c_400x400.png"
						/>
					</a>
				</Link>
				<div className="ml-auto">
					<Link to="/sign-up">
						<button id="iniciar" type="button" className="btn btn-primary mr-1">
							Iniciar Sesion
							<i className="far fa-user" />
						</button>
					</Link>
					<button id="cerrar" type="button" className="btn btn-secondary ml-1 ">
						Cerrar Sesion
						<i className="fas fa-sign-in-alt" />
					</button>
				</div>
			</nav>
		</>
	);
};
