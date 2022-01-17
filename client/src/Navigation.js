import React, { Component } from "react";
import {LinkContainer} from "react-router-bootstrap";
import {Button, Nav, NavDropdown, Navbar, Container} from "react-bootstrap";

class Navigation extends React.Component {
    render() {
        return (
            <div className="navbar">
                <Navbar bg="success" variant="dark" expand="lg">
                    <Container>
                        <LinkContainer to="/"><Navbar.Brand>Lekáreň Xbanter</Navbar.Brand></LinkContainer>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <LinkContainer to="/"><Nav.Link>Domov</Nav.Link></LinkContainer>
                                <LinkContainer to="/vitaminy-mineraly"><Nav.Link>Vitamíny a minerály</Nav.Link></LinkContainer>
                                <LinkContainer to="/kozmetika"><Nav.Link>Kozmetika</Nav.Link></LinkContainer>
                                <LinkContainer to="/sport"><Nav.Link>Šport</Nav.Link></LinkContainer>
                                <LinkContainer to="/vyzivove-doplnky"><Nav.Link>Výživové doplnky</Nav.Link></LinkContainer>
                                <LinkContainer to="/optika"><Nav.Link>Optika</Nav.Link></LinkContainer>
                                <LinkContainer to="/akcie"><Nav.Link>Akcie</Nav.Link></LinkContainer>
                                <LinkContainer to="/cart"><Nav.Link>Košík</Nav.Link></LinkContainer>
                                <NavDropdown title="Správa webu" id="basic-nav-dropdown">
                                    <LinkContainer to="/product-list"><NavDropdown.Item>Zoznam produktov</NavDropdown.Item></LinkContainer>
                                    <LinkContainer to="/add-product"><NavDropdown.Item>Pridávanie produktov</NavDropdown.Item></LinkContainer>
                                    <NavDropdown.Divider />
                                    <LinkContainer to="/admin"><NavDropdown.Item>Admin centrum</NavDropdown.Item></LinkContainer>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default Navigation;