import React, {useState} from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logoimg from './images/logo.png'


function Navigation(){
    const[open, setOpen] = useState(false);
        return (
            <Navbar collapseOnSelect fixed='top' bg="info" variant='dark'>
                <Container>
                    <Navbar.Brand href="/"><img
                        src={logoimg}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="TodoApp logo"
                    />  TodoApp</Navbar.Brand>
                    <Nav className="mr-auto">
                        <NavDropdown title="List" id="basic-nav-dropdown">
                        </NavDropdown>
                    </Nav>
                </Container>
            </Navbar>
        )
}
export default Navigation;