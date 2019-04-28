import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Header extends Component {
    constructor() {
        super();
    }

    render () {
        return (
            <Navbar bg="light" expand="lg">
                <Link className="navbar-brand" to="/">CpoolZ</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="text-left">
                        <Link className="nav-link" to="/">Sign In</Link>
                        <Link className="nav-link" to="/signUp">Sign Up</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;