import React from "react";
import { FaFacebookF, FaFileDownload, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { Link } from "react-router";

const QuickSocialLinks = () => {
    return (

        <>
        
            <div className="flex items-center gap-4 my-4 text-white">
                <Link to="https://www.linkedin.com/in/yasin-arafat-web/" className="hover:text-blue-500 text-xl sm:text-2xl md:text-3xl"><FaLinkedin></FaLinkedin></Link>
                <Link to="https://github.com/arafat-yasin-2413" className="hover:text-blue-500 text-xl sm:text-2xl md:text-3xl"><FaGithub></FaGithub></Link>
                <Link to="https://www.facebook.com/yasin.arafat.482092/" className="hover:text-blue-500 text-xl sm:text-2xl md:text-3xl"><FaFacebookF></FaFacebookF></Link>
                <Link to="https://x.com/YasinArafa43087" className="hover:text-blue-500 text-xl sm:text-2xl md:text-3xl"><FaTwitter></FaTwitter></Link>
            </div>
        
            <div className="mb-8">
                <Link to="/resume" className="flex justify-center items-center bg-accent hover:bg-accent/90 text-white tracking-wider w-fit rounded px-3 py-1 md:py-2 text-sm font-bold"><span>Resume</span><IoMdDownload size={24}></IoMdDownload> </Link>
            </div>
    
        </>
    );
};

export default QuickSocialLinks;
