import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import logo from "../../img/logo-zaguatech.png";

export const Navbarcentral = () => {
	const { store, actions } = useContext(Context);
	var loggedIn = store.login;

	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<Link to="/">
					<a className="py-1">
						<img src={logo} style={{ width: "150px" }} />
					</a>
				</Link>
				{loggedIn != "true" ? (
					<div className="ml-auto">
						<Link to="/log-in">
							<button id="iniciar" type="button" className="btn btn-outline-info rounded-pill mr-1">
								Log In
								<i className="far fa-user ml-2" />
							</button>
						</Link>
						<Link to="/sign-up">
							<button type="button" className="btn btn-info rounded-pill ml-1">
								Sign Up
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
							Log Out
							<i className="fas fa-sign-out-alt ml-2"></i>
						</button>
					</div>
				)}
			</nav>
		</div>
	);
};
