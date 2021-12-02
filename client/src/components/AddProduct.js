import { useState } from 'react'
import axios from "axios";
import { useHistory } from 'react-router-dom';
import {Button, Form, Row} from "react-bootstrap";

const AddProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const history = useHistory();

    const saveProduct = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:3001/products',{
            name: name,
            price: price
        });
        history.push("/");
    }

    return (
        <div align="center">
            <Form onSubmit={ saveProduct }>
                <Row className="align-items-center">
                    <Form.Group className="mb-3">
                        <Form.Label>Názov</Form.Label>
                        <Form.Control
                            className="w-25"
                            type="text"
                            placeholder="Názov"
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
                <Button as="input" type="submit" value="Uložiť" />
            </Form>
        </div>
    )
}

export default AddProduct