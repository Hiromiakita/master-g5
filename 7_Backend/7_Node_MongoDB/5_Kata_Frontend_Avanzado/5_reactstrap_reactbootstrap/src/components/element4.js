import React from "react";
// import { Row, Col } from 'reactstrap';
import { Row, Col } from "react-bootstrap";

//ESTAMOS IMPORTANDO ELEMENTOS DE AMBAS LIBRERIAS (REACTSTRAP Y REACT-BOOTSTRAP), FIJARSE BIEN CUALES SE ESTAN LLAMANDO Y A CUAL LIBRERIA PERTENECEN
// VISUALMENTE NO SE VERAN DIFERENCIAS

const Element4 = (props) => {
    return (
        <div className="wrap4" id="gallery">
            <Row>
                <Col lg="4" className="photo photo1">
                    <h1>City</h1>
                </Col>
                <Col lg="4" className="photo photo2">
                    <h1>Time</h1>
                </Col>
                <Col lg="4" className="photo photo3">
                    <h1>Food</h1>
                </Col>
            </Row>
            <Row>
                <Col lg="4" className="photo photo4">
                    <h1>Home</h1>
                </Col>
                <Col lg="4" className="photo photo5">
                    <h1>Liqued</h1>
                </Col>
                <Col lg="4" className="photo photo6">
                    <h1>Ocean</h1>
                </Col>
            </Row>
        </div>
    );
};

export default Element4;
