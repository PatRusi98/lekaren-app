import React, {Component, useState} from "react";
import Footer from "./Footer";
import {Button, Form, Row} from "react-bootstrap";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validate() {
        return email.length > 0 && password.length > 0;
    }

    function loginHandler(e) {
        e.preventDefault();
    }

    return (
        <div align="center">
            <Form onSubmit={ loginHandler }>
                <Row className="align-items-center">
                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            className="w-25"
                            type="text"
                            placeholder="Email"
                            value={ email }
                            onChange={ (e) => setEmail(e.target.value) }/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Heslo</Form.Label>
                        <Form.Control
                            className="w-25"
                            type="password"
                            placeholder="Heslo"
                            value={ password }
                            onChange={ (e) => setPassword(e.target.value) }/>
                    </Form.Group>
                </Row>
                <Button as="input" type="submit" value="Prihlasit sa" />
            </Form>
        </div>
    );
}
