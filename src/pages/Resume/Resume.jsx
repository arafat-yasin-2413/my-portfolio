import React from "react";
import { Link } from "react-router";

const Resume = () => {
    return (
        
            <div className="h-screen flex flex-col justify-center items-center">
                <p className="text-center text-2xl text-accent">Resume is not ready yet</p>
                <p className="my-4">
                    <Link to="/" className="bg-accent text-white px-2 py-1 hover:bg-accent/80 rounded-md text-xl ">Go Home</Link>
                </p>
            </div>
        
    );
};

export default Resume;
