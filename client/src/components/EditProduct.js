import { useState, useEffect } from 'react'
import axios from "axios";
import { useHistory, useParams } from 'react-router-dom';
import {Button, Form, Row, Col} from "react-bootstrap";
import {Formik} from "formik";

const EditProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const history = useHistory();
    const { id } = useParams();

    const updateProduct = async (e) => {
        e.preventDefault();
        await axios.patch(`http://localhost:3001/products/${id}`,{
            name: name,
            price: price
        });
        history.push("/");
    }

    useEffect(() => {
        getProductById();
    }, []);

    const getProductById = async () => {
        const response = await axios.get(`http://localhost:3001/products/${id}`);
        setName(response.data.name);
        setPrice(response.data.price);
    }

    return (
        <div align="center">
            <Form onSubmit={ updateProduct }>
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
                            <Form.Label>Cena</Form.Label>
                            <Form.Control
                                className="w-25"
                                type="number"
                                step="0.01"
                                placeholder="Cena"
                                value={ price }
                                onChange={ (e) => setPrice(e.target.value) }/>
                        </Form.Group>
                </Row>
                <Button as="input" type="submit" value="Upraviť" />
            </Form>
        </div>
    )
}

export default EditProduct