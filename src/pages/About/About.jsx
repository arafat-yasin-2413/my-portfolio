import React from "react";
import MainTitle from "../../components/MainTitle/MainTitle";
import Container from "../../components/Container/Container";
import Lottie from "lottie-react";

import developerAnim from "../../assets/animations/web developmemt.json"


const About = () => {
    return (
        <Container>
            <div className="h-screen flex justify-center items-center">

            <div className="flex flex-col">

                <div className="">
                    <MainTitle text={"About Me"}></MainTitle>
                </div>

                <div className="flex flex-col-reverse my-4 xl:flex-row lg:justify-center lg:items-center lg:gap-8">
                    <div className="flex-1 text-sm md:text-base xl:text-lg">
                        <p className="mt-4 mb-2">
                            <span className="font-bold">H</span>ello! I’m <span className="text-accent font-semibold">Md Yasin Arafat</span>, a passionate <span className="text-accent">Frontend</span> & <span className="text-accent">MERN</span> Stack Developer with a strong focus on crafting
                            modern, user-friendly, and scalable web
                            applications.
                        </p>

                        <p className="mb-2">
                            <span className="font-bold">M</span>y programming journey started out of
                            curiosity—experimenting with simple websites,
                            tweaking layouts, and gradually diving deeper into
                            JavaScript then React.
                        </p>

                        <p className="mb-2">
                            <span className="font-bold">I</span> enjoy working on projects where design meets
                            functionality—transforming complex problems into
                            clean, elegant, and intuitive solutions.
                        </p>

                        <p className="mb-2">
                            <span className="font-bold">O</span>utside of coding, I’m a curious explorer at heart.
                            I love playing football, keeping up with tech
                            trends, and sketching ideas when inspiration
                            strikes. These hobbies help me stay balanced,
                            refresh my creativity.
                        </p>

                        <p className="mb-2">
                            <span className="font-bold">A</span>t my core, I’m someone who values continuous
                            growth, collaboration, and problem-solving.
                        </p>
                    </div>

                    <div className="flex-1 my-4">
                        <div className="flex justify-center items-center w-full mx-auto">
                            <Lottie animationData={developerAnim} loop={true} autoplay={true} 
                            style={{ width: "300px" }} ></Lottie>
                        </div>
                    </div>
                </div>

                </div>
            </div>
        </Container>
    );
};

export default About;
