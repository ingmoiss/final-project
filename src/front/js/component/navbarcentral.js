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
				&nbsp;
				<div id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<button id="iniciar" type="button" className="btn btn-primary">
								Iniciar Sesion &nbsp;
								<i className="far fa-user" />
							</button>
						</li>
						<li className="nav-item">
							<button id="cerrar" type="button" className="btn btn-secondary">
								Cerrar Sesion &nbsp;
								<i className="fas fa-sign-in-alt" />
							</button>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
};
