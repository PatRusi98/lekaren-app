import { useState, useEffect } from 'react'
import axios from "axios";
import { useHistory, useParams } from 'react-router-dom';
import {Button, Form, Row, Col} from "react-bootstrap";
import {Formik} from "formik";

const EditProduct = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const { id } = useParams();

    const updateUser = async (e) => {
        e.preventDefault();
        await axios.patch(`http://localhost:3001/users/${id}`,{
            name: name,
            surname: surname,
            password: password
        });
        history.push("/");
    }

    useEffect(() => {
        getUserById();
    }, []);

    const getUserById = async () => {
        const response = await axios.get(`http://localhost:3001/users/${id}`);
        setName(response.data.name);
        setPassword(response.data.price);
    }

    return (
        <div align="center">
            <Form onSubmit={ updateUser }>
                <Row className="align-items-center">
                    <Form.Group className="mb-3">
                        <Form.Label>Meno</Form.Label>
                        <Form.Control
                            className="w-25"
                            type="text"
                            placeholder="Meno"
                            value={ name }
                            onChange={ (e) => setName(e.target.value) }/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Priezvisko</Form.Label>
                        <Form.Control
                            className="w-25"
                            type="text"
                            placeholder="Priezvisko"
                            value={ surname }
                            onChange={ (e) => setSurname(e.target.value) }/>
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
                <Button as="input" type="submit" value="Upraviť" />
            </Form>
        </div>
    )
}

export default EditProduct