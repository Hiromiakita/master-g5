import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="about">About</Link>
                <Link to="carrito">Carrito</Link>
                <Link to="login">Login</Link>
                <Link to="admin">Admin</Link>
            </nav>
        </div>
    )
}

export default Navbar
