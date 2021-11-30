import './App.css';
import Product from "./product";
import {useEffect, useState} from "react";
import ProductForm from "./productForm";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import {Button, Nav, NavDropdown, Navbar, Container} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";


function App() {


    const [cart, setCart] = useState([])
    const [data, setData] = useState([])
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState()

    const onNewProductHandler = (product) => {
        const newData = [...data];
        newData.push(product);
        setData(newData)
    }

    useEffect(() => {
        fetch('http://localhost:3001/products')
            .then(response => {
                if (response.ok) {
                return response.json()
                }
                throw new Error(`Unable to get data: ${response.statusText}`)
            })
            .then(json => setData(json))
            .catch((err) => setError(err.message))
            .finally(()=> setIsPending(false))
    }, [])

    const addToCartHandler = function (product) {
        console.log(product.name + " clicked")
        const newCart = [...cart]
        newCart.push(product);
        console.log(newCart);
        setCart(newCart)
    }

    const removeFromCartHandler = function (product) {
        const newCart = [...cart]
        const productIndex = cart.findIndex(item=> item.id === product.id)
        newCart.splice(productIndex, 1)
        setCart(newCart)
    }

  return (
      <Router>
        <div className="App">
            <Navbar bg="success" variant="dark" expand="lg">
                <Container>
                    <LinkContainer to="/"><Navbar.Brand>Lekaren Xbanter</Navbar.Brand></LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
                            <LinkContainer to="/edit-products"><Nav.Link>Edit Products</Nav.Link></LinkContainer>
                            <LinkContainer to="/cart"><Nav.Link>Cart</Nav.Link></LinkContainer>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Switch>
                <Route path="/edit-products">
                    <ProductForm onNewProduct={onNewProductHandler}/>
                </Route>
                <Route path="/cart">
                    <h1>Cart</h1>
                    {cart.map(item=> <div>{item.name} <button variant="outline-danger" onClick={() => removeFromCartHandler(item)}/></div>)}
                </Route>
                <Route path="/">

                    {<div>{cart.length}</div>}
                    {isPending && <div>Loading data...</div>}
                    {error && <div>{error}</div>}

                    <div style={{
                        display: "flex",
                        flexWrap: "wrap",
                        margin: "5px",
                        padding: "5px"
                    }}>
                        {data.map(item => <Product key={item.id} product={item} onClickHandler={addToCartHandler}/>)}
                    </div>
                </Route>
            </Switch>

        </div>

      </Router>
  );
}

export default App;
