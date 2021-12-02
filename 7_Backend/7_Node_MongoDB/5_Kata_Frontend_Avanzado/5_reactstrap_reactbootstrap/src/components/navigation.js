import React, { useState } from "react";
// import {
//     Collapse,
//     Navbar,
//     NavbarToggler,
//     NavbarBrand,
//     Nav,
//     NavItem,
//     NavLink,
// } from "reactstrap";

import { Navbar, Nav } from "react-bootstrap";

//ESTAMOS IMPORTANDO ELEMENTOS DE AMBAS LIBRERIAS (REACTSTRAP Y REACT-BOOTSTRAP), FIJARSE BIEN CUALES SE ESTAN LLAMANDO Y A CUAL LIBRERIA PERTENECEN
// VISUALMENTE NO SE VERAN DIFERENCIAS

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    //function
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            {/* REACTSTRAP */}
            {/* <Navbar light expand="md">
                <NavbarBrand href="/">Reactstrap</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="#service">Service</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#gallery">Gallery</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#contact">Contact</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar> */}

            {/* REACT-BOOTSTRAP */}

            <Navbar bg="light" expand="md">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle
                    onClick={toggle}
                    aria-controls="basic-navbar-nav"
                />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto ">
                        <Nav.Link href="#service">Service</Nav.Link>
                        <Nav.Link href="#gallery">Gallery</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Navigation;
