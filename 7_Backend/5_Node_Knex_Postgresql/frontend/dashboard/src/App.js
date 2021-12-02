import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import axiosInstance from "./config";
import "./App.css";
import DataTable from "./components/table/DataTable";
import ModalForm from "./components/modal/Modal";

function App() {
    const [items, setItems] = useState([]);

    const getItems = async () => {
        try {
            const res = await axiosInstance.get("/persons");
            setItems(res.data);
        } catch (error) {
            console.log(error);
        }
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
