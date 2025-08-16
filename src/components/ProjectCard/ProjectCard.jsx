import React from "react";
import { Link } from "react-router";

const ProjectCard = ({ image, projectName, buttonText }) => {
    return (
        <div className="border border-gray-100 rounded-xl bg-white p-6">
            <div className="border-b border-gray-200">
                <img className="w-full mb-4 rounded-t-xl " src={image} alt="" />
            </div>

            <div className="mt-2">
                <h2 className="text-xl font-semibold mb-2">{projectName}</h2>

                <Link to="/projectDetails">
                    <h4 className="bg-accent w-fit px-3 py-1 rounded mb-4 cursor-pointer">
                        {buttonText}
                    </h4>
                </Link>
            </div>
        </div>
    );
};

export default ProjectCard;
