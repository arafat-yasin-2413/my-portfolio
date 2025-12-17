import React from 'react';
import Container from '../Container/Container';
import MainTitle from '../MainTitle/MainTitle';
import { Icon } from '@iconify/react/dist/iconify.js';
import IconCard from '../IconCard/IconCard';

const Tools = () => {
    return (
        <Container>


            <div>
                <div className="text-white">
                    <MainTitle text={"Tools"}></MainTitle>
                </div>

                <div>
                    <p className="my-4 text-white lg:w-1/2">
                        Proficient with essential development tools that streamline workflow, enhance productivity, and ensure efficient project delivery.
                    </p>
                </div>


                <div className='grid grid-cols-3 sm:grid-cols-6 gap-2 justify-items-center xl:w-1/2 xl:mx-auto'>
                    {/* vs code */}
                    <IconCard icon={<Icon icon="skill-icons:vscode-light" width="40" height="40" />} ></IconCard>

                    {/* github */}
                    <IconCard icon={<Icon icon="skill-icons:github-dark" width="40" height="40" />} ></IconCard>

                    {/* git */}
                    <IconCard icon={<Icon icon="skill-icons:git" width="40" height="40" />} ></IconCard>

                    {/* axios */}
                    <IconCard icon={<Icon icon="devicon-plain:axios" className="text-white" width="40" height="40" />}></IconCard>

                    {/* firebase */}
                    <IconCard icon={<Icon icon="devicon:firebase" width="40" height="40" />} ></IconCard>

                    {/* postman */}
                    <IconCard icon={<Icon icon="logos:postman-icon" width="40" height="40" />} ></IconCard>

                    {/* stripe */}
                    <IconCard icon={<Icon icon="logos:stripe" width="40" height="40" />} ></IconCard>

                    {/* netlify */}
                    <IconCard icon={<Icon icon="material-icon-theme:netlify" width="40" height="40" />} ></IconCard>

                    {/* vercel */}
                    <IconCard icon={<Icon icon="devicon:vercel" width="40" height="40" />} ></IconCard>

                    {/* npm */}
                    <IconCard icon={<Icon icon="devicon:npm" width="40" height="40" />} ></IconCard>

                    {/* figma */}
                    <IconCard icon={<Icon icon="material-icon-theme:figma" width="40" height="40" />} ></IconCard>

                    {/* chrome */}
                    <IconCard icon={<Icon icon="logos:chrome" width="40" height="40" />}></IconCard>

                </div>
            </div>
        </Container>
    );
};

export default Tools;