import React from "react";
import { Button, Table } from "reactstrap";
import ModalForm from "../modal/Modal";

const DataTable = (props) => {
    const items = props.items.map((item) => (
        <tr>
            <th scope="row">{item.id}</th>
            <td>{item.first_name}</td>
            <td>{item.email}</td>
            <td>
                <div style={{ width: "110px" }}>
                    <ModalForm buttonLabel={"Edit"} item={item} />
                </div>
                <Button
                    color="danger"
                    onClick={() => console.log("Eliminar elemento")}
                >
                    Delete
                </Button>
            </td>
        </tr>
    ));

    return (
        <Table responsive hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>{items}</tbody>
        </Table>
    );
};

export default DataTable;
