import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import Subtitle from "../SubTitle/Subtitle";

const ProjectTech = () => {
    return (
        <div className="mt-8">
            <div className="border-b-2 w-fit border-gray-200 text-white">
                <Subtitle text={"Technologies"}></Subtitle>
            </div>

            <div className="flex items-center gap-4 my-4">
                
                <Icon icon="devicon:react" width="40" height="40"  />
                <Icon icon="devicon:tailwindcss" width="40" height="40"  />
                <Icon icon="logos:daisyui-icon" width="40" height="40"  />
                <Icon icon="devicon:firebase" width="40" height="40"  />
                <Icon icon="logos:mongodb-icon" width="40" height="40"  />
                <Icon
                    icon="vscode-icons:file-type-node"
                    width="48"
                    height="48"
                />
                <Icon
                    icon="skill-icons:expressjs-light"
                    width="48"
                    height="48"
                />
            </div>
        </div>
    );
};

export default ProjectTech;
