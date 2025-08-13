import React from 'react';
import { NavLink } from 'react-router';

const NavbarLinks = () => {
    return (
        <>
            <li><NavLink to="/" className="nav">Home</NavLink></li>
            <li><NavLink to="/about" className="nav">About</NavLink></li>
            <li><NavLink to="/projects" className="nav">Projects</NavLink></li>
            <li><NavLink to="/contact" className="nav">Contact</NavLink></li>
            <li><NavLink to="/resume" className="nav">Resume</NavLink></li>
        </>
    );
};

export default NavbarLinks;