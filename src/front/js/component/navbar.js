import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<a className="nav-link" href="/">
					<img
						id="logo"
						src="https://pbs.twimg.com/profile_images/2341972759/ema34randgce8sdtq73c_400x400.png"
					/>
				</a>
				&nbsp;
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item active" />
						<li className="nav-item">
							<a className="nav-link" href="#" />
						</li>
						<li className="nav-item">
							<button id="iniciar" type="button" className="btn btn-primary">
								Iniciar Sesion &nbsp;
								<i className="far fa-user" />
							</button>
						</li>
						<li className="nav-item">
							<button id="cerrar" type="button" className="btn btn-secondary">
								Cerrar Sesion &nbsp;
								<i className="fas fa-sign-out-alt" />
							</button>
						</li>
					</ul>
				</div>
			</nav>

			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<a className="navbar-brand" href="/form">
					Formulario
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div className=" container-fluid navbar-nav">
						<a className="nav-link active" href="#">
							Perros <span className="sr-only" />
						</a>
						<a className="nav-link" href="#">
							Gatos
						</a>
						<a className="nav-link" href="#">
							Veterinarios
						</a>
						<a className="nav-link disabled" href="#" aria-disabled="true">
							¿Quienes somos?
						</a>
					</div>
				</div>
			</nav>
		</>
	);
};
