import React from 'react';
import Container from '../Container/Container';
import MainTitle from '../MainTitle/MainTitle';
import { Icon } from '@iconify/react/dist/iconify.js';
import IconCard from '../IconCard/IconCard';

const Tools = () => {
    return (
        <Container>


        <div>
            <div>
                    <MainTitle text={"Tools"}></MainTitle>
                </div>

                <div>
                    <p className="my-4">
                        Proficient with essential development tools that streamline workflow, enhance productivity, and ensure efficient project delivery.
                    </p>
                </div>


                <div className='flex items-center gap-4'>
                    {/* vs code */}
                    <IconCard icon={<Icon icon="skill-icons:vscode-light" width="64" height="64" />} text={"VS Code"}></IconCard>

                    {/* github */}
                    <IconCard icon={<Icon icon="skill-icons:github-dark" width="64" height="64" />} text={"Github"}></IconCard>
                    
                    {/* git */}
                    <IconCard icon={<Icon icon="skill-icons:git" width="64" height="64" />} text={"Git"}></IconCard>

                    {/* firebase */}
                    <IconCard icon={<Icon icon="devicon:firebase" width="64" height="64" />} text={"Firebase"}></IconCard>

                    {/* postman */}
                    <IconCard icon={<Icon icon="logos:postman-icon" width="64" height="64" />} text={"Postman"}></IconCard>

                    {/* stripe */}
                    <IconCard icon={<Icon icon="logos:stripe" width="64" height="64" />} text={"Stripe"}></IconCard>

                    {/* netlify */}
                    <IconCard icon={<Icon icon="material-icon-theme:netlify" width="64" height="64" />} text={"Netlify"}></IconCard>

                    {/* vercel */}
                    <IconCard icon={<Icon icon="devicon:vercel" width="64" height="64" />} text={"Vercel"}></IconCard>

                    {/* npm */}
                    <IconCard icon={<Icon icon="devicon:npm" width="64" height="64" />} text={"NPM"}></IconCard>

                    {/* figma */}
                    <IconCard icon={<Icon icon="material-icon-theme:figma" width="64" height="64" />} text={"Figma"}></IconCard>


                </div>
        </div>
        </Container>
    );
};

export default Tools;