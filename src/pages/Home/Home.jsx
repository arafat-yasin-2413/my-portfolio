import React from "react";
import Hero from "../../components/Hero/Hero";
import About from "../About/About";
import Tools from "../../components/Tools/Tools";
import Skills from "../../components/Skills/Skills";

const Home = () => {
    return (
        <>
            <Hero></Hero>

            <About></About>

            <Skills></Skills>

            <Tools></Tools>
        </>
    );
};

export default Home;
