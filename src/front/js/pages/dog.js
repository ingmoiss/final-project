import React, { useState, useContext, useEffect } from "react";
import { Row, Col, Table, Media, Container, Button, Image } from "react-bootstrap";
import { useParams, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import WhatsAppWidget from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";
import "../../styles/index.scss";

export function Dog(props) {
	const { store, actions } = useContext(Context);
	const { id } = useParams();
	const intId = parseInt(id);
	const history = useHistory();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	const goBack = () => {
		history.goBack();
	};
	return (
		<Container className="mt-5">
			{store.pets.map((each, i) => {
				if (i == intId) {
					return (
						<div key={i} id="relative">
							<Row>
								<Col md>
									<Image
										style={({ maxHeight: "370px" }, { maxWidth: "370px" })}
										className="align-self-center mr-3 w-100"
										src={each.imageURL}
										alt="Generic placeholder"
										rounded
									/>
								</Col>
								<Col md>
									<Media.Body className="text-center">
										<h5 className="text-center">{each.pet_name}</h5>
										<p className="text-justify">{each.description}</p>
										<h5 className="text-left">Temperamento:</h5>
										<p className="text-left">{each.temperamento}</p>
									</Media.Body>
								</Col>
							</Row>
							<Row className="mt-4">
								<Col md>
									<Table responsive="md">
										<thead>
											<tr>
												<th className="text-center">Nombre de la Fundación</th>
												<th className="text-center">Sexo</th>
												<th className="text-center">Edad</th>
												<th className="text-center">Tamaño</th>
												<th className="text-center">Ubicación</th>
												<th className="text-center">Vacunas</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td className="text-center">{each.fundation_name}</td>
												<td className="text-center">{each.sexo}</td>
												<td className="text-center">{each.edad}</td>
												<td className="text-center">{each.tamaño}</td>
												<td className="text-center">{each.province}</td>
												<td className="text-center">{each.vacunas ? "Si" : "No"}</td>
											</tr>
										</tbody>
									</Table>
								</Col>
							</Row>
							<Row className="">
								<Col md>
									<Button variant="dark" onClick={() => goBack()}>
										Volver
									</Button>
								</Col>
							</Row>
							<Row>
								<Col className="fixed-bottom">
									<WhatsAppWidget
										phoneNumber={each.phone_number}
										companyName={each.fundation_name}
										message="¡Buen día! 👋🏼        ¿Deseas más información de esta mascota?"
										textReplyTime="Típicamente responde en una hora"
										sendButton="Enviar"
										className="prueba"
									/>
								</Col>
							</Row>
						</div>
					);
				}
			})}
		</Container>
	);
}

Dog.propTypes = {
	data: PropTypes.any
};
