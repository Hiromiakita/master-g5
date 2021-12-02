import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

const AddEditForm = (props) => {
    useEffect(() => {
        if (props.item) {
            const { id, first_name, email } = props.item;
            setForm({ id, first_name, email });
        }
    }, []);

    const [form, setForm] = useState({
        first_name: "",
        email: "",
    });

    const onChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div>
            <Form>
                <FormGroup>
                    <Label for={"first_name"}>First Name</Label>
                    <Input
                        value={form.firstName === null ? " " : form.first_name}
                        onChange={onChange}
                        type={"text"}
                        id={"firstName"}
                        name={"first_name"}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for={"email"}>Email</Label>
                    <Input
                        value={form.firstName === null ? " " : form.email}
                        onChange={onChange}
                        type={"text"}
                        id={"email"}
                        name={"email"}
                    />
                </FormGroup>
                <Button style={{ marginTop: "5px" }}>Submit</Button>
            </Form>
        </div>
    );
};

export default AddEditForm;
