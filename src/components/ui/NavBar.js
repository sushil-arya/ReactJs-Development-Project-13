import React from 'react'
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
            <>
                <Nav >
                                <Nav.Item>
                                    <Link className="nav-link active" to="/home">Home</Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Link className="nav-link" to="/login">Login</Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Link className="nav-link" to="/register">Register</Link>
                                </Nav.Item>
                </Nav>
            
            </>
    )
}
