import React from "react";
import Subtitle from "../SubTitle/Subtitle";
import IconCard from "../IconCard/IconCard";
import { Icon } from "@iconify/react/dist/iconify.js";

const Backend = () => {
    return (
        <>
            <div className="mt-8">
                <div className="text-center text-white mt-4">
                    <Subtitle text={"Backend"}></Subtitle>
                </div>

                <div className="border border-gray-200 w-30 mx-auto mb-4"></div>

                <div className="flex gap-4 my-2 justify-center items-center">

                    
                    {/* js */}
                    <IconCard icon={<Icon icon="vscode-icons:file-type-js-official" width="40" height="40" />} ></IconCard>
                    

                    {/* mongodb */}
                    <IconCard icon={<Icon icon="logos:mongodb-icon" width="40" height="40" />} ></IconCard>   
                    

                    {/* node js */}
                    <IconCard icon={<Icon icon="vscode-icons:file-type-node" width="40" height="40" />} ></IconCard>
                    

                    {/* express js */}
                    <IconCard icon={<Icon icon="lineicons:expressjs" className="text-white" width="40" height="40" />} ></IconCard>
                    
                </div>



            </div>
        </>
    );
};

export default Backend;
