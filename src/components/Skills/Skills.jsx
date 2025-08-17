import React from "react";
import Container from "../Container/Container";
import MainTitle from "../MainTitle/MainTitle";
import { Icon } from "@iconify/react/dist/iconify.js";
import IconCard from "../IconCard/IconCard";
import Frontend from "../Frontend/Frontend";
import Backend from "../Backend/Backend";

const Skills = () => {
    return (
        <Container>
            <div>
                <div>
                    <MainTitle text={"Skills"}></MainTitle>
                </div>

                <div>
                    <p className="my-4 lg:w-1/2">
                        Skilled in modern web technologies to build responsive,
                        high-performance applications that deliver seamless user
                        experiences.
                    </p>
                </div>

                <div className="">
                    <Frontend></Frontend>
                </div>
                <Backend></Backend>
            </div>
        </Container>
    );
};

export default Skills;
