import {
    Container as Contenedor,
    Row as Fila,
    Col as Columna,
} from "reactstrap";

// import { Container, Row, Col } from "react-bootstrap";

import Navigation from "./components/navigation";
import Element3 from "./components/element3";
import Element4 from "./components/element4";
import "./App.css";

//ESTAMOS IMPORTANDO ELEMENTOS DE AMBAS LIBRERIAS (REACTSTRAP Y REACT-BOOTSTRAP) Y SE HAN RENOMBRADO (CON UN ALIAS) PARA DIFERENCIARLAS, FIJARSE BIEN CUALES SE ESTAN LLAMANDO Y A CUAL LIBRERIA PERTENECEN
// VISUALMENTE NO SE VERAN DIFERENCIAS

function App() {
    return (
        <div className="App">
            {/* Template con reactstrap */}

            <Navigation />

            <Contenedor fluid>
                <Fila>
                    <Columna className="element3">
                        <Element3 />
                    </Columna>
                </Fila>
                <Fila>
                    <Columna className="element4">
                        <Element4 />
                    </Columna>
                </Fila>

                <p>
                    ****************************************************************
                </p>
            </Contenedor>

            {/* Template con react bootstrap */}
            {/* <Navigation />

            <Container fluid>
                <Row>
                    <Col className="element3">
                        <Element3 />
                    </Col>
                </Row>
                <Row>
                    <Col className="element4">
                        <Element4 />
                    </Col>
                </Row>
            </Container> */}
        </div>
    );
}

export default App;
