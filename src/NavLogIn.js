import React from 'react';
import './Navigation.css'

import {Link} from 'react-router-dom';

const NavLogIn = () => {
    return (
        <nav>
            <ul className='nav-links'>
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/login">
                    <li>Login</li>
                </Link>
                <Link to="/signUp">
                    <li>Sign Up</li> 
                </Link>
            </ul>
        </nav>

    );
}


export default NavLogIn;


