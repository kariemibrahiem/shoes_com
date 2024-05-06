import { Fragment } from "react";
import "./end.css";
import cycle from "../../material/headphone2.png";
import { Link } from "react-router-dom";
const End = () =>{
    return(
        <Fragment>

            <div className="end row">
                <h2 className="card_title text-success end_title">the contact page</h2>
                <div className="col-6">
                    <h2>the ice moon</h2>    
                    <p>fly to the star with all fun</p>
                    <p>to race with th ice you must be faster then the air</p>
                    <Link to="/products" className="btn btn-outline-success try">
                        try to fly
                    </Link>
                </div>
                <div className="col-6">
                    <img src={cycle} className="bike" alt="" />
                </div>

            </div>
        </Fragment>
    );
}

export default End;