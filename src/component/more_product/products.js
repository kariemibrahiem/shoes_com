import { Fragment } from "react";
import Card_a from "../3-card/single_card";
import s from "../../material/shoes.png";
import ball from "../../material/ball.png";
import chair from "../../material/chair.png";
import phone from "../../material/phone2.png";
import shirt from "../../material/shirt.png";
import Prod from "./more_prod";
const Products = () =>{
    return(
        <Fragment>
            <h1 className="card_title"> products </h1>
            <Prod />
            <Prod />
            <Prod />
            <Prod />
        </Fragment>
    );
}

export default Products;