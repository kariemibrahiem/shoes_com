import { Fragment } from "react";
import End from "../5-end/end";
import Foot from "../footer/foot";
import Navs from "../1-nav/nav";

const Contact = () =>{
    return(
        <Fragment>
            <div>
                <Navs/>
                <End />
                <Foot />
            </div>
        </Fragment>
    );
}

export default Contact;