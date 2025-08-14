import React from 'react';
import { FaCode, FaEnvelope, FaHome, FaRegFileAlt, FaUser } from 'react-icons/fa';
import { NavLink } from 'react-router';

const NavbarLinks = () => {
    return (
        <>
            <li><NavLink to="/" className="nav  flex items-center gap-1"><FaHome className="text-blue-500"></FaHome><span>Home</span></NavLink></li>
            <li><NavLink to="/about" className="nav  flex items-center gap-1"><FaUser className="text-blue-500"></FaUser><span>About</span></NavLink></li>
            <li><NavLink to="/projects" className="nav  flex items-center gap-1"><FaCode className="text-blue-500"></FaCode><span>Projects</span></NavLink></li>
            <li><NavLink to="/contact" className="nav  flex items-center gap-1"><FaEnvelope className="text-blue-500"></FaEnvelope><span>Contact</span></NavLink></li>
            <li><NavLink to="/resume" className="nav  flex items-center gap-1"><FaRegFileAlt className="text-blue-500"></FaRegFileAlt><span>Resume</span></NavLink></li>
        </>
    );
};

export default NavbarLinks;