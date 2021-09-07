import React, {useState} from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logoimg from './images/logo.png'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';


function Navigation(){
    const[open, setOpen] = useState(false);
        return (
            <Navbar collapseOnSelect fixed='top' bg="info" variant='dark'>
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav"> </Navbar.Collapse>
                    <Nav className="me-auto">
                    <Navbar.Brand><img
                        src={logoimg}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="TodoApp logo"
                    /></Navbar.Brand>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    </NavDropdown>
                    </Nav>
                </Container>
            </Navbar>
        )
}

export default Navigation;