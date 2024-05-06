import { Fragment } from "react";
import "./head.css";
import shoes1 from "../../material/shoes - top.png";
import shoes2 from "../../material/shoes -center.png";
import shoes3 from "../../material/shoes-button.png";
import shoes from "../../material/shoes.png";
import Navs from "../1-nav/nav";
import Cards from "../3-card/card";
import Main2 from "../4-slide_picture/slide";
import End from "../5-end/end";
import Foot from "../footer/foot";
import { Link } from "react-router-dom";

const Head = () =>{
    return(
        <Fragment>
            <Navs />
          <div className="head">
                <div className="head_sec1">
                    <small>do it now.</small>
                    <h2 className="slide_txt">running shoes</h2>
                  
                    <Link className="links btn btn-outline-success bt_shoes" id="bt_shoes" to="/products">
                        take a look
                    </Link>
                </div>
                <div className="head_sec2">
                    <img src={shoes1}/>
                    <img className="slide_shoes" src={shoes2}/>
                    <img src={shoes3}/>
                </div>
            </div>
            <Cards/>
            <Main2 />
            <End/>
            <Foot/>
        </Fragment>
    );
}

export default Head;


                // <div className="head_sec3">
                //         <img className="btn_shoes" src={shoes}/>                        
                // </div>

