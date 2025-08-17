import React from "react";
import NavbarLinks from "../NavbarLinks/NavbarLinks";
import { Link } from "react-router";
import { FaFacebookF, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Icon } from "@iconify/react/dist/iconify.js";

const Footer = () => {
    return (
        <div className="pt-32 pb-4 bg-secondary">
            <div className="flex justify-center items-center">
                <ul className="flex flex-col gap-6 sm:flex-row">
                    <NavbarLinks></NavbarLinks>
                </ul>
            </div>

            <div className="border border-gray-200/50 w-1/2 mx-auto mt-8"></div>

            <div className="flex justify-center mt-8">
                <div className="flex items-center gap-4 my-4">
                    <Link to="https://www.linkedin.com/in/yasin-arafat-dev/" className="hover:text-blue-500"><FaLinkedin size={24}></FaLinkedin></Link>
                    <Link to="https://github.com/arafat-yasin-2413" className="hover:text-blue-500"><FaGithub size={24}></FaGithub></Link>
                    <Link to="https://www.facebook.com/yasin.arafat.482092/" className="hover:text-blue-500"><FaFacebookF size={24}></FaFacebookF></Link>
                    <Link to="https://x.com/YasinArafa43087" className="hover:text-blue-500"><FaTwitter size={24}></FaTwitter></Link>
                </div>
            </div>


            <div className="border border-gray-200/50 mt-8"></div>


                <p className="flex justify-center items-center gap-1 my-2"><Icon icon="si:copyright-alt-line" width="24" height="24" /> 2025 All Rights Reserved. Md Yasin Arafat.</p>


            <div className="border border-gray-200/50"></div>
        </div>
    );
};

export default Footer;
