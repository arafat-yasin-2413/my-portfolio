import React from "react";

const ProjectCard = ({ image, projectName, buttonText }) => {
    return (
        <div className="border border-gray-100 rounded-xl bg-white p-6">
            <div className="border-b border-gray-200">
                <img className="w-full mb-4 rounded-t-xl " src={image} alt="" />
            </div>

            <div className="mt-2">
                <h2 className="text-xl font-semibold mb-2">{projectName}</h2>
                <h4 className="bg-accent w-fit px-3 py-1 rounded mb-4 cursor-pointer">
                    {buttonText}
                </h4>
            </div>
        </div>
    );
};

export default ProjectCard;
