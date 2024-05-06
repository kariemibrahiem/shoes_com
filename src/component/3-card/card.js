import { Fragment } from "react";
import shoes from "../../material/shoes.png"
import { Button, Card } from "react-bootstrap";
import "./card.css";
import Card_a from "./single_card";
import s from "../../material/shoes.png";
import ball from "../../material/ball.png";
import chair from "../../material/chair.png";
import phone from "../../material/phone2.png";
import shirt from "../../material/shirt.png";
import axios from "axios";
import { useEffect } from "react";
const Cards = () =>{


    return(
        <Fragment>
                   <h2 className="card_title">our new products</h2>
            <div className="card_con">
                <Card_a  title="shoes"  price="200$" img={s}/> 
                <Card_a  title="balls"  price="100$" img={ball}/> 
                <Card_a  title="shirts" price="80$" img={shirt}/> 
                <Card_a  title="phones" price="220$" img={phone}/> 
                <Card_a  title="chair"  price="500$" img={chair}/> 
            </div>
        </Fragment>
    );
}

export default Cards;