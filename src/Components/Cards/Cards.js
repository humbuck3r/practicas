import React from "react";
import {Card,Button} from 'react-bootstrap'
import '../Cards/Cards.css'
import img from '../../Assets/Img/vet1.jpg'
import img2 from '../../Assets/Img/veterinario-1.gif'

const Cards = () => {
  return (
    <>
      <div className="tarjetas">
        <Card className="tarj" style={{ width: "18rem" }}>
          <Card.Img variant="bottom" src={img2} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card className="tarj" style={{ width: "18rem" }}>
          <Card.Img variant="bottom" src={img2} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card className="tarj" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={img2} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Cards;
