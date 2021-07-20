import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link className="link" to="/">Home</Link>
            <Link className="link" to="about">About</Link>
            <Link className="link" to="carrito">Carrito</Link>
            <Link className="link" to="login">Login</Link>
            <Link className="link" to="admin">Admin</Link>
        </nav>
    )
}

export default Navbar
