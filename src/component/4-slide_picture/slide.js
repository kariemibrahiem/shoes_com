import { Fragment } from "react";
import Carousel from 'react-bootstrap/Carousel';
import shoes from "../../material/shoes2.jpg";
import phone from "../../material/phone2.png";
import shirt from "../../material/shirt.png";
import "./slide.css"
const Main2 = ()=>{
    return(
        <Fragment>
            <div className="carousel_sec">
                <Carousel className="h-100">
                    <Carousel.Item className="h-100">
                        <img src={shoes} className="slide_img w-100"/>
                        <Carousel.Caption>
                        <h3>air max shoeses</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="h-100">
                        <img src={phone} className="slide_img"/>
                        <Carousel.Caption>
                        <h3>trade line from iphone</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="h-100">
                        <img className="slide_img" src={shirt}/>
                        <Carousel.Caption>
                        <h3>nike shirts</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </Fragment>
    );
}


export default Main2 ;