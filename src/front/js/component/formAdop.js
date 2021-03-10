import React, { Component } from "react";

export const FormAdop = () => {
	return (
		<body
			style={{
				backgroundImage: `url(https://ak.picdn.net/shutterstock/videos/17178685/thumb/1.jpg)`
			}}>
			<div className="container my-3">
				<div className="row">
					<div className="col-md">
						<h1 className="font text-center mb-0 mt-3" style={{ color: "black" }}>
							Formulario de Adopción
						</h1>
					</div>
				</div>

				<div className="text-center d-flex justify-content-center align-items-center ">
					<form className="rounded shadow px-2" style={{ width: "600px" }} /*onSubmit={}*/>
						<div className="form-row my-2">
							<div className="col-md ">
								<input
									type="text"
									className="form-control form-control-lg"
									placeholder="Nombre"
									required
									//onChange={}
								/>
							</div>
						</div>
						<div className="form-row my-2">
							<div className="col-md">
								<input
									type="text"
									className="form-control form-control-lg"
									placeholder="Apellido"
									required
									//onChange={}
								/>
							</div>
						</div>
						<div className="form-row my-2">
							<div className="col-md">
								<input
									type="email"
									className="form-control form-control-lg"
									placeholder="Nombre de Fundacion"
									required
									//onChange={}
								/>
							</div>
						</div>
						<div className="form-row my-2">
							<div className="col-md">
								<input
									type="email"
									className="form-control form-control-lg"
									placeholder="Nombre de la mascota"
									required
									//onChange={}
								/>
							</div>
						</div>
						<div className="form-row my-2">
							<div className="col-md">
								<div className="form-floating">
									<textarea
										className="form-control"
										placeholder="Descripción de la mascota"
										id="floatingTextarea2"
										style={{ height: "100px" }}
									/>
								</div>
							</div>
						</div>
						<div className="form-row my-2">
							<div className="col-md">
								<div className="row">
									<div className="col">
										<input type="text" className="form-control" placeholder="Tamaño" />
									</div>
									<div className="col">
										<input type="text" className="form-control" placeholder="Sexo" />
									</div>
									<div className="col">
										<input type="text" className="form-control" placeholder="Temperamento" />
									</div>
									<div className="col">
										<input type="text" className="form-control" placeholder="Edad Aprox" />
									</div>
								</div>
							</div>
						</div>
						<div className="form-row my-2">
							<div className="col-md">
								<select className="form-control form-control-lg">
									<option selected>Provincia</option>
									<option>Limon</option>
									<option>Cartago</option>
									<option>Heredia</option>
									<option>San Jose</option>
									<option>Alajuela</option>
									<option>Puntarenas</option>
									<option>Guanacaste</option>
								</select>
							</div>
						</div>
						<div className="submit-row my-2 d-flex justify-content-end">
							<div className="form-check form-check-inline">
								<input
									className="form-check-input"
									type="checkbox"
									id="inlineCheckbox1"
									value="option1"
								/>
								<label className="form-check-label" htmlFor="inlineCheckbox1">
									Vacunas al dia
								</label>
							</div>
							<button type="submit" className="btn btn-primary mr-1">
								Enviar informacion
							</button>
						</div>
					</form>
				</div>
			</div>
		</body>
	);
};
