import React from "react";
import Subtitle from "../SubTitle/Subtitle";
import IconCard from "../IconCard/IconCard";
import { Icon } from "@iconify/react/dist/iconify.js";

const Frontend = () => {
    return (
        <>
            <div className="">
                <div className="text-center mt-4">
                    <Subtitle text={"Frontend"}></Subtitle>
                </div>

                <div className="border border-gray-200 w-36 mx-auto mb-4"></div>

                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 justify-items-center xl:w-1/2 xl:mx-auto">
                    {/* html */}
                    <IconCard
                        icon={
                            <Icon icon="devicon:html5" width="40" height="40" />
                        }
                        text={"HTML"}
                    ></IconCard>

                    
                    {/* css */}
                    <IconCard
                        icon={
                            <Icon
                                icon="skill-icons:css"
                                width="40"
                                height="40"
                            />
                        }
                        text={"CSS"}
                    ></IconCard>

                    {/* tailwind */}
                    <IconCard
                        icon={
                            <Icon
                                icon="devicon:tailwindcss"
                                width="40"
                                height="40"
                            />
                        }
                    ></IconCard>

                    {/* daisyui */}
                    <IconCard
                        icon={
                            <Icon
                                icon="logos:daisyui-icon"
                                width="40"
                                height="40"
                            />
                        }
                    ></IconCard>

                    {/* vite */}
                    <IconCard
                        icon={
                            <Icon
                                icon="devicon:vitejs"
                                width="40"
                                height="40"
                            />
                        }
                    ></IconCard>

                    {/* react */}
                    <IconCard
                        icon={
                            <Icon icon="devicon:react" width="40" height="40" />
                        }
                    ></IconCard>
                </div>

               
                
            </div>
        </>
    );
};

export default Frontend;
