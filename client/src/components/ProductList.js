import { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import {Button, Nav, NavDropdown, Navbar, Container} from "react-bootstrap";

const ProductList = () => {
    const [products, setProduct] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        const response = await axios.get('http://localhost:3001/products');
        setProduct(response.data);
    }

    const deleteProduct = async (id) => {
        await axios.delete(`http://localhost:3001/products/${id}`);
        getProducts();
    }

    return (
        <div>
            <table className="table is-striped is-fullwidth">
                <thead>
                <tr>
                    <th>id</th>
                    <th>Názov produktu</th>
                    <th>Cena</th>
                    <th>Obrázok</th>
                    <th>Vytvorený</th>
                    <th>Upravený</th>
                    <th>Možnosti</th>
                </tr>
                </thead>
                <tbody>
                { products.map((product, index) => (
                    <tr key={ product.id }>
                        <td>{ index + 1 }</td>
                        <td>{ product.name }</td>
                        <td>{ product.price }</td>
                        <td>{ product.image }</td>
                        <td>{ product.createdAt }</td>
                        <td>{ product.updatedAt }</td>
                        <td>
                            <Link to={`/edit-product/${product.id}`}><Button variant="primary">Upraviť</Button></Link>
                            <Button onClick={ () => deleteProduct(product.id) } variant="danger">Vymazať</Button>
                        </td>
                    </tr>
                )) }
                </tbody>
            </table>
        </div>
    )
}

export default ProductList