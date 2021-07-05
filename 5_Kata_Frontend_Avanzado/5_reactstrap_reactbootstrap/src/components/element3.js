import React from "react";
import { Row, Col, Alert } from "reactstrap";
// import { Row, Col, Alert } from "react-bootstrap";

//ESTAMOS IMPORTANDO ELEMENTOS DE AMBAS LIBRERIAS (REACTSTRAP Y REACT-BOOTSTRAP), FIJARSE BIEN CUALES SE ESTAN LLAMANDO Y A CUAL LIBRERIA PERTENECEN
// VISUALMENTE NO SE VERAN DIFERENCIAS

const Element3 = (props) => {
    return (
        <div className="wrap3" id="service">
            <h1>At Your Service</h1>
            <Alert color={"warning"}>This is a alert</Alert>
            <div className="block"></div>
            <Row>
                <Col lg="3">
                    <div className="img1"></div>
                    <h2>Sturdy Templates</h2>
                    <p>
                        Our templates are updated regularly so they don't break.
                    </p>
                </Col>
                <Col lg="3">
                    <div className="img2"></div>
                    <h2>Ready to Ship</h2>
                    <p>
                        You can use this theme as is, or you can make changes!
                    </p>
                </Col>
                <Col lg="3">
                    <div className="img3"></div>
                    <h2>Up to Date</h2>
                    <p>We update dependencies to keep things fresh.</p>
                </Col>
                <Col lg="3">
                    <div className="img4"></div>
                    <h2>Made with Love</h2>
                    <p>You have to make your websites with love these days!</p>
                </Col>
            </Row>
        </div>
    );
};

export default Element3;
