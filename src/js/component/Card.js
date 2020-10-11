import React from "react";

export function Card() {
	return (
		<div className="card">
			<img className="card-img-top" src="..." alt="card-image-cap" />
			<div className="card-body" id="cardBody">
				<h5 className="card-title">Card title</h5>
				<p className="card-title">
					Some quick example text to build in the card title and make
					up the bulk on the card.
				</p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
		// <Card style={{ width: "18rem" }}>
		// 	<Card.Img variant="top" src="holder.js/100px180" />
		// 	<Card.Body>
		// 		<Card.Title>Card Title</Card.Title>
		// 		<Card.Text>
		// 			Some quick example text to build on the card title and make
		// 			up the bulk of the card's content.
		// 		</Card.Text>
		// 		<Button variant="primary">Go somewhere</Button>
		// 	</Card.Body>
		// </Card>
	);
}
