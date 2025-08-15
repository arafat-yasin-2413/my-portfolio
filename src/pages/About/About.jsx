import React from "react";
import MainTitle from "../../components/MainTitle/MainTitle";
import Container from "../../components/Container/Container";

const About = () => {
    return (
        <Container>
            <div>
                <div className="border">
                    <MainTitle text={"About Me"}></MainTitle>
                </div>

                <div>
                    <p className="text-justify my-4">
                        I’m a passionate MERN stack developer specializing in
                        building dynamic, responsive, and user-focused web
                        applications. With expertise in React, Node.js, Express,
                        and MongoDB, I craft clean, maintainable code and
                        seamless user experiences. I enjoy transforming complex
                        ideas into functional, visually appealing solutions,
                        always focusing on performance and scalability. Driven
                        by curiosity and continuous learning, I stay updated
                        with modern web technologies to deliver innovative
                        results. My goal is to combine technical skills with
                        creative problem-solving to build digital products that
                        truly make an impact.
                    </p>
                </div>
            </div>
        </Container>
    );
};

export default About;
