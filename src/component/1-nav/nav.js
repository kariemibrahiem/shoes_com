import React, { Fragment } from "react";
import { Button } from "@mui/material";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./nav.css"
import { Link } from "react-router-dom";

const Navs= () => {
return(
        <Fragment>
                {/* the new nav */}
                <Navbar expand="md" className="bg-body-tertiary nav_con_1">
                    <Container>
                        <Navbar.Brand href="#home"><h2>poryto</h2></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav bg-primary" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link  className="btn btn-outline-danger btn_nav">
                                <Link className="links" to="/home">
                                    Home
                                </Link>
                            </Nav.Link>
                            <Nav.Link  className="btn btn-outline-danger btn_nav">
                                <Link className="links" to="/products">
                                more product
                                </Link>
                            </Nav.Link>
                            <Nav.Link href="#link" className="btn btn-outline-danger btn_nav">
                                <Link className="links" to="/contact">
                                    contact us
                                </Link>
                            </Nav.Link>
                            <NavDropdown className="btn btn-success btn_drop" title="our places" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">cairo</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">nasr city</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">el-menofya</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                <Link className="links" to="/contact">
                                    connect to ask
                                </Link>
                            </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

        </Fragment>
    );
}
export default Navs;