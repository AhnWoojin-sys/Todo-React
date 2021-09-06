import React, {useState} from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logoimg from './images/logo.png'


function Navigation(){
    const[open, setOpen] = useState(false);
        return (
            <Navbar collapseOnSelect fixed='top' bg="info" variant='dark'>
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Brand><img
                        src={logoimg}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="TodoApp logo"
                    /></Navbar.Brand>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/action" onClick={()=>{setOpen(!open)}}>ssibal</NavDropdown.Item>
                    </NavDropdown>
                </Container>
            </Navbar>
        )
}

export default Navigation;