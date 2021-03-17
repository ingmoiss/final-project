import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import logo from "../../img/zaguatech.png";

export const Navbarcentral = () => {
	const { store, actions } = useContext(Context);
	var loggedIn = sessionStorage.getItem("is_logged");

	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<Link to="/">
					<img className="py-1" src={logo} alt="Logo" style={{ width: "100px" }} />
				</Link>
				{
					(console.log("nav", loggedIn),
					loggedIn != "true" ? (
						<div className="ml-auto">
							<Link to="/log-in">
								<button id="iniciar" type="button" className="btn btn-outline-info rounded-pill mr-1">
									Ingresar
									<i className="far fa-user ml-2" />
								</button>
							</Link>
							<Link to="/sign-up">
								<button type="button" className="btn btn-info rounded-pill ml-1">
									Registrarse
									<i className="fas fa-sign-in-alt ml-2" />
								</button>
							</Link>
						</div>
					) : (
						<div className="ml-auto">
							<button
								id="cerrar"
								type="button"
								className="btn btn-outline-info rounded-pill"
								onClick={() => {
									actions.logOut();
								}}>
								Salir
								<i className="fas fa-sign-out-alt ml-2"></i>
							</button>
						</div>
					))
				}
			</nav>
		</div>
	);
};