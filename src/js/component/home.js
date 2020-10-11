import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Navbar } from "./Navbar.js";
import { Card } from "./Card.js";
import { Jumbotrom } from "./Jumbotrom.js";
import { Footer } from "./Footer.js";

//create your first component
export function Home() {
	return (
		<div className="container-fluid">
			<Navbar />
			<div className="container">
				<div className="row">
					<div className="col">
						<Jumbotrom />
					</div>
				</div>
				<div className="row">
					<div className="col">
						<Card />
					</div>
					<div className="col">
						<Card />
					</div>
					<div className="col">
						<Card />
					</div>
					<div className="col">
						<Card />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
