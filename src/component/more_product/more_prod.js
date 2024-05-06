import { Fragment } from "react";
import Card_a from "../3-card/single_card";
import s from "../../material/shoes.png";
import ball from "../../material/ball.png";
import chair from "../../material/chair.png";
import phone from "../../material/phone2.png";
import shirt from "../../material/shirt.png";
import Navs from "../1-nav/nav";

const Prod = () =>{
    return(
        <Fragment>
            <Navs/>
            <div className="card_con">
                <Card_a  title="phones" price="220$" img={phone}/> 
                <Card_a  title="chair"  price="500$" img={chair}/> 
                <Card_a  title="shirts" price="80$" img={shirt}/> 
                <Card_a  title="shoes"  price="200$" img={s}/> 
                <Card_a  title="balls"  price="100$" img={ball}/> 
            </div>
        </Fragment>
    );
}

export default Prod;