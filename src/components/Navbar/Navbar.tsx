import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <NavLink to="/">
                    <h1>Star Wars Catalogue</h1>
                </NavLink>
            </div>
            <ul className="navbar__links">
                <li>
                    <NavLink to="/catalogue">
                        Catalogue
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/filter">
                        Filter
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
