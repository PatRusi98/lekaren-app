import { useState, useEffect } from 'react'
import axios from "axios";
import LoginForm from "./LoginForm";
import { Link } from "react-router-dom";
import {Button, Nav, NavDropdown, Navbar, Container, Table} from "react-bootstrap";

function Login() {
    const [user, setUser] = useState({email: ""});
    const [error, setError] = useState("");

    const getProducts = async () => {
        const response = await axios.get('http://localhost:3001/users');
        setUser(response.data);
    }

    const Login = details => {
        if (details.email == user.email && details.password == user.password) {
            setUser({
                email: details.email
            });
        } else {

        }
    }
    useEffect(() => {
        getProducts();
    }, []);

    const deleteProduct = async (id) => {
        await axios.delete(`http://localhost:3001/products/${id}`);
        getProducts();
    }

    return (
        <div>
            <Table striped bordered hover>
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
                { user.map((product, index) => (
                    <tr key={ product.id }>
                        <td>{ product.id }</td>
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
            </Table>

        </div>
    )
}

export default ProductList