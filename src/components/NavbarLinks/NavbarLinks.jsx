import React from 'react';
import { FaCode, FaEnvelope, FaHome, FaRegFileAlt, FaUser } from 'react-icons/fa';
import { NavLink } from 'react-router';

const NavbarLinks = () => {
    return (
        <

        >
            <li><NavLink to="/" className="nav  flex items-center gap-1.5 sm:text-[1rem] md:text-[1.1rem] text-white"><FaHome ></FaHome><span>Home</span></NavLink></li>
            <li><NavLink to="/about" className="nav  flex items-center gap-1 sm:text-[1rem] md:text-[1.1rem] text-white"><FaUser ></FaUser><span>About</span></NavLink></li>
            <li><NavLink to="/projects" className="nav  flex items-center gap-1 sm:text-[1rem] md:text-[1.1rem] text-white"><FaCode ></FaCode><span>Projects</span></NavLink></li>
            <li><NavLink to="/contact" className="nav  flex items-center gap-1 sm:text-[1rem] md:text-[1.1rem] text-white"><FaEnvelope ></FaEnvelope><span>Contact</span></NavLink></li>
            <li><NavLink to="/resume" className="nav  flex items-center gap-1 sm:text-[1rem] md:text-[1.1rem] text-white"><FaRegFileAlt ></FaRegFileAlt><span>Resume</span></NavLink></li>
        </>
    );
};

export default NavbarLinks;