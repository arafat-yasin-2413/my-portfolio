import React from "react";
import { FaFacebookF, FaFileDownload, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { Link } from "react-router";

const QuickSocialLinks = () => {
    return (

        <>
        
            <div className="flex items-center gap-4 my-4">
                <Link to="https://www.linkedin.com/in/yasin-arafat-dev/" className="hover:text-blue-500"><FaLinkedin size={48}></FaLinkedin></Link>
                <Link to="https://github.com/arafat-yasin-2413" className="hover:text-blue-500"><FaGithub size={48}></FaGithub></Link>
                <Link to="https://www.facebook.com/yasin.arafat.482092/" className="hover:text-blue-500"><FaFacebookF size={48}></FaFacebookF></Link>
                <Link to="https://x.com/YasinArafa43087" className="hover:text-blue-500"><FaTwitter size={48}></FaTwitter></Link>
            </div>
        
            <div className="mb-8">
                <Link className="flex justify-center items-center bg-orange-500 w-2/6 rounded py-3 font-bold"><span>Resume</span><IoMdDownload size={24}></IoMdDownload> </Link>
            </div>
    
        </>
    );
};

export default QuickSocialLinks;
