import { useState } from 'react'
import axios from "axios";
import { useHistory } from 'react-router-dom';
import {Button, Form, Row} from "react-bootstrap";

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const saveProduct = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:3001/users',{
            email: email,
            password: password
        });
        history.push("/");
    }

    return (
        <div align="center">
            <Form onSubmit={ saveProduct }>
                <Row className="align-items-center">
                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            className="w-25"
                            type="text"
                            placeholder="Názov"
                            value={ email }
                            onChange={ (e) => setEmail(e.target.value) }/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Heslo</Form.Label>
                        <Form.Control
                            className="w-25"
                            type="text"
                            placeholder="Heslo"
                            value={ password }
                            onChange={ (e) => setPassword(e.target.value) }/>
                    </Form.Group>
                </Row>
                <Button as="input" type="submit" value="Registrovat" />
            </Form>
        </div>
    )
}

export default Signup