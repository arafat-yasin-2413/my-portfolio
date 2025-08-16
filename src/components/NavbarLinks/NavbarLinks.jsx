import React from 'react';
import { FaCode, FaEnvelope, FaHome, FaRegFileAlt, FaUser } from 'react-icons/fa';
import { NavLink } from 'react-router';

const NavbarLinks = () => {
    return (
        <

        >
            <li><NavLink to="/" className="nav  flex items-center gap-1 sm:text-[1rem] md:text-[1.1rem]"><FaHome className="text-blue-500"></FaHome><span>Home</span></NavLink></li>
            <li><NavLink to="/about" className="nav  flex items-center gap-1 sm:text-[1rem] md:text-[1.1rem]"><FaUser className="text-blue-500"></FaUser><span>About</span></NavLink></li>
            <li><NavLink to="/projects" className="nav  flex items-center gap-1 sm:text-[1rem] md:text-[1.1rem]"><FaCode className="text-blue-500"></FaCode><span>Projects</span></NavLink></li>
            <li><NavLink to="/contact" className="nav  flex items-center gap-1 sm:text-[1rem] md:text-[1.1rem]"><FaEnvelope className="text-blue-500"></FaEnvelope><span>Contact</span></NavLink></li>
            <li><NavLink to="/resume" className="nav  flex items-center gap-1 sm:text-[1rem] md:text-[1.1rem]"><FaRegFileAlt className="text-blue-500"></FaRegFileAlt><span>Resume</span></NavLink></li>
        </>
    );
};

export default NavbarLinks;