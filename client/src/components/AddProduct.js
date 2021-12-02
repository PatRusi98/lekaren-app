import { useState } from 'react'
import axios from "axios";
import { useHistory } from 'react-router-dom';
import {Button} from "react-bootstrap";

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
        <div>
            <form onSubmit={ saveProduct }>
                <div className="field">
                    <label className="label">Názov</label>
                    <input
                        className="input"
                        type="text"
                        placeholder="Názov"
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
                    <Button as="input" type="submit" value="Uložiť" />
                </div>
            </form>
        </div>
    )
}

export default AddProduct