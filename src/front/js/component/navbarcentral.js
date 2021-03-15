import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import logo from "../../img/zaguatech.png";

export const Navbarcentral = () => {
	const { store, actions } = useContext(Context);
	var loggedIn = store.login;

	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<Link to="/">
					<img className="py-1" src={logo} alt="Logo" style={{ width: "90px" }} />
				</Link>
				<div className="ml-auto">
					<div className="dropdown">
						<button
							className="btn btn-outline-info rounded-pill dropdown-toggle"
							type="button"
							id="dropdownMenuButton"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false">
							Menú
						</button>
						<div className="dropdown-menu mr-5" aria-labelledby="dropdownMenuButton">
							<a className="dropdown-item" href="#">
								Action
							</a>
							<a className="dropdown-item" href="#">
								Another action
							</a>
							<a className="dropdown-item" href="#">
								Something else here
							</a>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};
