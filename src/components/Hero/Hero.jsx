import React from "react";
import { TypeAnimation } from "react-type-animation";

import profileImage from "/assets/images/profile.jpg";
import QuickSocialLinks from "../QuickSocialLinks/QuickSocialLinks";
import Container from "../Container/Container";

const Hero = () => {
    return (
        <Container>
            <div className="h-[calc(100dvh-150px)] flex flex-col-reverse xl:flex-row justify-around items-center gap-12">
                {/* content div */}
                <div className="xl:flex-1">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-">
                            Hi, I am{" "}
                            <span className="text-accent text-3xl font-bold">
                                Yasin Arafat
                            </span>{" "}
                            <br />
                            <TypeAnimation
                                preRenderFirstString={true}
                                sequence={[
                                    1000,
                                    "React Developer",
                                    1000,
                                    "Frontend Developer",
                                    1000,
                                    "MERN Stack",
                                    500,
                                ]}
                                speed={50}
                                // style={{ fontSize: "3rem" }}
                                className="font-semibold text-xl md:text-3xl"
                                repeat={Infinity}
                            />
                        </h2>

                        <p className="my-4 text-gray-600 text-sm sm:text-base md:text-lg text-left">
                            A Creative Frontend Developer dedicated to designing
                            visually stunning, responsive, and user-focused web
                            applications that deliver seamless, engaging digital
                            experiences.
                        </p>
                    </div>

                    <QuickSocialLinks></QuickSocialLinks>
                </div>

                {/* image div */}
                <div className="flex xl:flex-1 justify-end">
                    <img
                        className="w-52 sm:w-60 md:w-64 lg:w-80 xl:w-96 rounded-full outline-4 outline-blue-500 "
                        src={profileImage}
                        alt="profile image"
                    />
                </div>
            </div>
        </Container>
    );
};

export default Hero;
