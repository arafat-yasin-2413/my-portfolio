import React from "react";
import { TypeAnimation } from "react-type-animation";

import profileImage from "/assets/images/profile.jpg";

const Hero = () => {
    return (
        <div className="h-[calc(100dvh-150px)] flex flex-col xl:flex-row justify-around items-center gap-12 border">
            {/* content div */}
            <div className="flex-1 border-2 border-red-200">
                <div>
                    <h2 className="text-[2.5rem]">
                        Hi, I am Yasin Arafat <br />
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
                            repeat={Infinity}
                        />
                    </h2>


                    <p className="my-4">
                        A Creative Frontend Developer dedicated to designing visually stunning, responsive, and user-focused web applications that deliver seamless, engaging digital experiences.

                    </p>
                </div>
            </div>

            {/* image div */}
            <div className="flex-1 flex justify-center border-2 border-green-300">
                <img
                    className="w-80 rounded-full outline-4 outline-blue-500 "
                    src={profileImage}
                    alt="profile image"
                />
            </div>
        </div>
    );
};

export default Hero;
