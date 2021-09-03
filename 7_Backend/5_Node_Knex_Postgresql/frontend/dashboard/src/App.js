import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import "./App.css";
import DataTable from "./components/table/DataTable";
import ModalForm from "./components/modal/Modal";

function App() {
    const [items, setItems] = useState([]);

    const getItems = () => {
        fetch("http://localhost:3000/persons")
            .then((response) => response.json())
            .then((items) => setItems(items))
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        getItems();
    }, []);

    return (
        <Container className="App">
            <Row>
                <Col>
                    <h1>CRUD de usuarios</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <DataTable items={items} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <ModalForm buttonLabel={"Add Item"} />
                </Col>
            </Row>
        </Container>
    );
}

export default App;
