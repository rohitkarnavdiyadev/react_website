import React from 'react';
import {Container,Nav,Navbar} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import './Navigation.css';



const Navigation = () =>{
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                <Nav className="me-auto">
                    <NavLink className="navigation_icon" to="/" exact>Home</NavLink>
                    <NavLink className="navigation_icon" to="/about">About Us</NavLink>
                    <NavLink className="navigation_icon" to="/contact">Contact</NavLink>
                </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigation;

