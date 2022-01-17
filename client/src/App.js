import './App.css';
import React, {Component} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import Navigation from "./Navigation.js";
import Login from "./Login.js";
import Signup from "./Signup";
import Home from "./Home.js";
import Footer from "./Footer";
import Cart from "./Cart.js";
import UnderConstruction from "./UnderConstruction.js";
import Account from "./Account";
import EditAccount from "./EditAccount";
import Dashboard from "./Dashboard";

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Navigation/>
                <div>
                    <Switch>
                        {/* Routes */}
                        <Route path="/" exact={Home}>
                            <Home/>
                        </Route>

                        <Route path="/add-product">
                            <AddProduct/>
                        </Route>

                        <Route path="/edit-product">
                            <EditProduct/>
                        </Route>

                        <Route path="/product-list">
                            <ProductList/>
                        </Route>

                        <Route path="/login">
                            <Login/>
                        </Route>

                        <Route path="/signup">
                            <Signup/>
                        </Route>

                        <Route path="/my-account">
                            <Account/>
                        </Route>

                        <Route path="/edit-account">
                            <EditAccount/>
                        </Route>

                        <Route path="/cart">
                            <Cart/>
                        </Route>

                        <Route path="/admin">
                            <Dashboard/>
                        </Route>

                        {/* Under construction */}
                        <Route path="/vitaminy-mineraly" exact component={UnderConstruction}/>
                        <Route path="/kozmetika" exact component={UnderConstruction}/>
                        <Route path="/sport" exact component={UnderConstruction}/>
                        <Route path="/vyzivove-doplnky" exact component={UnderConstruction}/>
                        <Route path="/optika" exact component={UnderConstruction}/>
                        <Route path="/akcie" exact component={UnderConstruction}/>
                        <Route path="/*" exact component={UnderConstruction}/>

                    </Switch>
                </div>
                <Footer/>
            </BrowserRouter>
        );
    }
}

