import React from "react";
import { GoContainer } from "react-icons/go";
import MainTitle from "../../components/MainTitle/MainTitle";
import Container from "../../components/Container/Container";
import Educard from "../../components/EduCard/Educard";

const Education = () => {
    return (
        <Container>
            <MainTitle text={"Education"}></MainTitle>
            
            <div className="lg:flex items-center gap-8 my-8 space-y-8 lg:space-y-0">

                <Educard degree={"Bachelor of Science in CSE"} institution={"Manarat International University"} duration={"2020-2024"}></Educard>
                <Educard degree={"HSC"} institution={"Jahangirnagar University School & College"} duration={"2016-2018"}></Educard>

            </div>
        </Container>
    );
};

export default Education;
