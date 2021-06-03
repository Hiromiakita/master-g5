import {Link, NavLink} from 'react-router-dom'

import React from 'react'

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink activeClassName='active' to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink activeClassName='active' to='/about'>About</NavLink>
                </li>
                <li>
                    <NavLink activeClassName='active' to='/contact'>Contact</NavLink>
                </li>
                <li>
                    <NavLink activeClassName='active' to='/login'>Login</NavLink>
                </li>
                <li>
                    <NavLink activeClassName='active' to='/profile'>Profile</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
