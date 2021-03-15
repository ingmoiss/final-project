import React, { useState, useContext, useEffect } from "react";
import { Row, Col, Table, Media, Container, Button } from "react-bootstrap";
import { useParams, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import WhatsAppWidget from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";
export function Cat(props) {
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
		<Container>
			<Media className="mt-5">
				{store.pets.map((each, i) => {
					if (i == intId) {
						return (
							<div key={i}>
								<WhatsAppWidget
									phoneNumber={each.phone_number}
									companyName={each.fundation_name}
									message="¡Buen día! 👋🏼        ¿Deseas más información de esta mascota?"
									textReplyTime="Típicamente responde en una hora"
									sendButton="Enviar"
								/>
								<Row>
									<Col sm>
										<img
											width={400}
											height={300}
											className="align-self-center mr-3"
											src={each.imageURL}
											alt="Generic placeholder"
										/>
									</Col>
									<Col sm>
										<Media.Body className="text-center">
											<h5>{each.pet_name}</h5>
											<p>{each.description}</p>
										</Media.Body>
									</Col>
								</Row>
								<Table responsive="md">
									<thead>
										<tr>
											<th>Nombre de la Fundación</th>
											<th>Sexo</th>
											<th>Edad</th>
											<th>Tamaño</th>
											<th>Ubicación</th>
											<th>Temperamento</th>
											<th>Vacunas</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>{each.fundation_name}</td>
											<td>{each.sexo}</td>
											<td>{each.edad}</td>
											<td>{each.tamaño}</td>
											<td>{each.province}</td>
											<td>{each.temperamento}</td>
											<td>{each.vacunas ? "Si" : "No"}</td>
										</tr>
									</tbody>
								</Table>
								<Button variant="dark" onClick={() => goBack()}>
									Volver
								</Button>
							</div>
						);
					}
				})}
			</Media>
		</Container>
	);
}

Cat.propTypes = {
	data: PropTypes.any
};
