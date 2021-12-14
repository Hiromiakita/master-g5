import React, { useState } from "react";
import { Button, Modal, ModalBody, ModalHeader } from "reactstrap";
import AddEditForm from "../forms/AddEditForm";

const ModalForm = (props) => {
    const [toggle, setToggle] = useState(false);

    const modal = () => {
        setToggle(!toggle);
    };

    const closeModal = (
        <button onClick={modal} className="close">
            &times;
        </button>
    );

    const label = props.buttonLabel;
    let button = "";
    let title = "";

    if (label === "Edit") {
        button = (
            <Button
                color="warning"
                onClick={modal}
                style={{ float: "left", marginRight: "10px" }}
            >
                {label}
            </Button>
        );
        title = "Edit item";
    } else {
        button = (
            <Button
                color="success"
                onClick={modal}
                style={{ float: "left", marginRight: "10px" }}
            >
                {label}
            </Button>
        );

        title = "Add new item";
    }

    return (
        <>
            {button}
            <div>
                <Modal isOpen={toggle} toggle={modal}>
                    <ModalHeader toggle={modal} close={closeModal}>
                        {title}
                    </ModalHeader>
                    <ModalBody>
                        <AddEditForm item={props.item} />
                    </ModalBody>
                </Modal>
            </div>
        </>
    );
};

export default ModalForm;
