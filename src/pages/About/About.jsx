import React from "react";
import MainTitle from "../../components/MainTitle/MainTitle";
import Container from "../../components/Container/Container";
import Lottie from "lottie-react";

import developerAnim from "../../assets/animations/web developmemt.json"


const About = () => {
    return (
        <Container>
            <div>
                <div className="">
                    <MainTitle text={"About Me"}></MainTitle>
                </div>

                <div className="flex flex-col-reverse my-4 lg:flex-row lg:justify-center lg:items-center lg:gap-8">
                    <div className="flex-1">
                        <p className="text-justify mt-4 mb-2">
                            Hello! I’m Md Yasin Arafat, a passionate Frontend &
                            MERN Stack Developer with a strong focus on crafting
                            modern, user-friendly, and scalable web
                            applications.
                        </p>

                        <p className="text-justify mb-2">
                            My programming journey started out of
                            curiosity—experimenting with simple websites,
                            tweaking layouts, and gradually diving deeper into
                            JavaScript then React.
                        </p>

                        <p className="text-justify mb-2">
                            I enjoy working on projects where design meets
                            functionality—transforming complex problems into
                            clean, elegant, and intuitive solutions.
                        </p>

                        <p className="text-justify mb-2">
                            Outside of coding, I’m a curious explorer at heart.
                            I love playing football, keeping up with tech
                            trends, and sketching ideas when inspiration
                            strikes. These hobbies help me stay balanced,
                            refresh my creativity, and often spark new ways of
                            thinking about my work.
                        </p>

                        <p className="text-justify mb-2">
                            At my core, I’m someone who values continuous
                            growth, collaboration, and problem-solving.
                        </p>
                    </div>

                    <div className="flex-1">
                        <div className="flex justify-center items-center">
                            <Lottie animationData={developerAnim} loop={true} autoplay={true} 
                            style={{ width: "300px", height: "300px"}} ></Lottie>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default About;
