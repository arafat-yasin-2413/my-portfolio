import React from "react";
import Container from "../Container/Container";
import MainTitle from "../MainTitle/MainTitle";
import { Icon } from "@iconify/react/dist/iconify.js";
import IconCard from "../IconCard/IconCard";

const Skills = () => {
    return (
        <Container>
            <div>

                <div>
                    <MainTitle text={"Skills"}></MainTitle>
                </div>

                <div>
                    <p className="my-4">
                        Skilled in modern web technologies to build responsive, high-performance applications that deliver seamless user experiences.
                    </p>
                </div>

                <div className="flex gap-4 items-center">

                    <IconCard icon={<Icon icon="devicon:html5" width="64" height="64" />} text={"HTML"}></IconCard>

                    {/* css */}
                    <IconCard icon={<Icon icon="skill-icons:css" width="64" height="64" />}
                    text={"CSS"}>

                    </IconCard>
                    
                    
                    {/* js */}
                    <IconCard icon={<Icon icon="vscode-icons:file-type-js-official" width="64" height="64" />} text={"JS"}></IconCard>
                    

                    {/* tailwind */}
                    <IconCard icon={<Icon icon="devicon:tailwindcss" width="64" height="64" />} text={"Tailwind"}>

                    </IconCard>

                    {/* daisyui */}
                    <IconCard icon={<Icon icon="logos:daisyui-icon" width="64" height="64" />} text={"DaisyUI"}></IconCard>
                    

                    
                    {/* vite */}
                    <IconCard icon={<Icon icon="devicon:vitejs" width="64" height="64" />} text={"Vite"}></IconCard>
                    
                
                    {/* react */}
                    <IconCard icon={<Icon icon="devicon:react" width="64" height="64" />} text={"React"}></IconCard>
                    
               

                    {/* mongodb */}
                    <IconCard icon={<Icon icon="logos:mongodb-icon" width="64" height="64" />} text={"MongoDB"}></IconCard>   
                    

                    {/* node js */}
                    <IconCard icon={<Icon icon="vscode-icons:file-type-node" width="64" height="64" />} text={"Node js"}></IconCard>
                    

                    {/* express js */}
                    <IconCard icon={<Icon icon="skill-icons:expressjs-light" width="64" height="64" />} text={"Express"}></IconCard>
                    
               
                </div>




            </div>
        </Container>
    );
};

export default Skills;
