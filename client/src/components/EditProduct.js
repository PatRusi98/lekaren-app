/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import axios from "axios";
import { useHistory, useParams } from 'react-router-dom';
import {Button} from "react-bootstrap";

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
        <div>
            <form onSubmit={ updateProduct }>
                <div className="field">
                    <label className="label">Meno</label>
                    <input
                        className="input"
                        type="text"
                        placeholder="Meno"
                        value={ name }
                        onChange={ (e) => setName(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">Cena</label>
                    <input
                        className="input"
                        type="number"
                        step="0.01"
                        placeholder="Cena"
                        value={ price }
                        onChange={ (e) => setPrice(e.target.value) }
                    />
                </div>

                <div className="field">
                    <Button as="input" type="submit" value="Upraviť" />
                </div>
            </form>
        </div>
    )
}

export default EditProduct