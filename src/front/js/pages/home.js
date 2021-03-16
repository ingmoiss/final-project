import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Carousel, Container, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../img/Luis-Larraburo.jpg";
import logo1 from "../../img/Luis-Alvarado1.jpg";
export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<Container>
			<Carousel className="carousel">
				<Carousel.Item rounded>
					<a href="https://www.pedigree.com/" target="_blank" rel="noopener noreferrer">
						<img
							style={{ height: "500px" }}
							className="d-block w-100"
							src="https://www.elpublicista.info/wp-content/uploads/2018/06/Pedrigree.png"
							alt="Characters"
							rounded
						/>
					</a>
				</Carousel.Item>

				<Carousel.Item>
					<a href="https://www.hillspet.co.cr/" target="_blank" rel="noopener noreferrer">
						<img
							style={{ height: "500px" }}
							className="d-block w-100"
							src="https://www.hillspet.es/content/dam/cp-sites/hills/hills-pet/global/2020-homepage-redesign/hillspet-homepage-heropacklockup-packaged.png"
							alt="Characters"
							rounded
						/>
					</a>
				</Carousel.Item>
				<Carousel.Item>
					<a href="https://escuelacaninalatejera.es/" target="_blank" rel="noopener noreferrer">
						<img
							style={{ height: "500px" }}
							className="d-block w-100"
							src="https://i.ytimg.com/vi/kTZjtPfDWmo/maxresdefault.jpg"
							alt="Characters"
							rounded
						/>
					</a>
				</Carousel.Item>
				<Carousel.Item>
					<a href="https://www.purina-latam.com/cam/cr" target="_blank" rel="noopener noreferrer">
						<img
							style={{ height: "500px" }}
							className="d-block w-100"
							src="https://i.ytimg.com/vi/zthc86WuMAI/maxresdefault.jpg"
							alt="Characters"
							rounded
						/>
					</a>
				</Carousel.Item>
			</Carousel>
			<div className="flex-row d-flex justify-content-center">
				<div>
					<div className="card " style={{ marginTop: "30px" }}>
						<span className=" text-center p-3">Vive nuestras experiencias</span>
					</div>
				</div>
			</div>
			<Carousel className="carousel1" style={{ marginTop: "50px" }}>
				<Carousel.Item rounded>
					<div className="media">
						<div className="media-body">
							<h5 className="mt-0 mb-1">Media object</h5>
							Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
							Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
							ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
						</div>
						<img
							className="d-flex ml-3"
							src="/images/pathToYourImage.png"
							alt="Generic placeholder image"
						/>
					</div>
				</Carousel.Item>

				<Carousel.Item>
					<div className="media">
						<div className="media-body">
							<h5 className="mt-0 mb-1">Media object</h5>
							Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
							Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
							ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
						</div>
						<img
							className="d-flex ml-3"
							src="/images/pathToYourImage.png"
							alt="Generic placeholder image"
						/>
					</div>
				</Carousel.Item>
				<Carousel.Item>
					<div className="media">
						<div id="texto" className="media-body">
							<h5 className="mt-0 mb-1">Mas que una mascota!</h5>
							<a id="texto2">
								A sido una de la expericias mas bonitas que he tenido en mi vida adopte a Scott cuando
								apenas tenia quince dias de nacido, hubieron momentos en los que pense que realmente no
								lo iba lograrlo puesto que el estaba muy pequeño pero aqui esta y tiene nueve años
								conmigo y espero que este muchos años mas, y por supuesto tambien tengo a mi perrita
								negra que justo va cumplir un año de vivir y la concentida de la casa :) adoptar una
								mascota es un acto muy noble y animalito estara muy agradecido asi que los invito
								adoptar a ustedes tambien!!
							</a>
						</div>
						<div data-spy="scroll" id="texto2" data-target="texto" data-offset="0" className="" />
						<img
							className="d-block w-50"
							// style={{ borderRadius: "50%" }}
							src={logo1}
							alt="Generic placeholder image"
						/>
					</div>
				</Carousel.Item>
				<Carousel.Item>
					<div className="media">
						<div className="media-body">
							<h5 className="mt-0 mb-1">Una amiga fiel en casa!</h5>
							Así es como puedo describir mis días desde la llegada de Coqueta a mi casa, es una perrita
							muy bien portada, amigable y fiel. Coqueta poco a poco ha ido superando su abandono en las
							calles, desde que la adoptamos ha estado súper contenta y agradecida. No se cansa de correr
							por toda la casa, y pues claro, una que otra diablura que sin duda alguna nos saca una
							sonrisa. Agradezco a Zaguatec por su ayuda en este proceso de adopcion. Recomendado al 100%.
						</div>
						<img
							className="d-block w-50"
							// style={{ borderRadius: "50%" }}
							src={logo}
							alt="Generic placeholder image"
						/>
					</div>
				</Carousel.Item>
			</Carousel>
		</Container>
	);
};
