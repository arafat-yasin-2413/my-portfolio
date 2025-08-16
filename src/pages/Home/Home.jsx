import React from "react";
import Hero from "../../components/Hero/Hero";
import About from "../About/About";
import Tools from "../../components/Tools/Tools";
import Skills from "../../components/Skills/Skills";
import Education from "../Education/Education";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

const Home = () => {
    return (
        <>
            <Hero></Hero>

            <About></About>

            <Skills></Skills>

            <Tools></Tools>

            <Education></Education>

            <Projects></Projects>

            <Contact></Contact>
        </>
    );
};

export default Home;
