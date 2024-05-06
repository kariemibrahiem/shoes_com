import { Fragment } from "react";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import "./foot.css"
const Foot= () =>{
    return(
        <Fragment>
            <div className="footer row">
                <h2>end of trip</h2><br></br>
                <div className="col-4">
                    <ul>
                        <li><a href=""/>closes</li>
                        <li><a href=""/>iphone</li>
                        <li><a href=""/>foods</li>
                    </ul>
                </div>
                <div className="col-4">
                    <ul>
                        <li><a href=""/> supplier </li>
                        <li><a href=""/> service </li>
                        <li><a href=""/> connect </li>
                    </ul>
                </div>
                <div className="col-4">
                    <h4>send to contact</h4>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                    <Form.Control
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    />
                </InputGroup>
                <Button variant="outline-secondary" type="submit">Send</Button>
                </div>
                <br/>
                <hr  className="m-1"/>
            </div>
        </Fragment>
    );
}

export default Foot;