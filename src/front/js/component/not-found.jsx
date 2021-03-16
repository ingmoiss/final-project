import React from "react";
import { Link } from "react-router-dom";
import perro from "../../img/perro.png";

export function NotFound() {
	return (
		<div className="container">
			<div className="row">
				<div className="col">
					<h1 className="not-found">404</h1>
					<h1>La Página no funciona</h1>
				</div>
				<div className="col">
					<img src={perro} alt="" />
				</div>
			</div>
		</div>
	);
}
