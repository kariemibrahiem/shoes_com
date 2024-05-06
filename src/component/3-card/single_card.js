import { Fragment } from "react";
import shoes from "../../material/shoes.png"
import { Button, Card } from "react-bootstrap";
import "./card.css";
const Card_a = (props) =>{
    return(
        <Fragment>
                <Card className="card_main" style={{ width: '18rem' }}>
                    <Card.Img variant="top" className="card_img" src={props.img} />
                    <Card.Body>
                        <Card.Title><h2>{props.title}</h2></Card.Title>
                        <Card.Text>{props.price}</Card.Text>
                        <Button variant="primary m-1">take it to home</Button>
                        <Button variant="success m-1">add to likes</Button>
                    </Card.Body>
                </Card>  
        </Fragment>
    );
}

export default Card_a;