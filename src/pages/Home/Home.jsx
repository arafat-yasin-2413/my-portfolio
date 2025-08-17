import React, { useEffect, useRef } from "react";
import Hero from "../../components/Hero/Hero";
import About from "../About/About";
import Tools from "../../components/Tools/Tools";
import Skills from "../../components/Skills/Skills";
import Education from "../Education/Education";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

const Home = ({ scrollTo }) => {
    const homeRef = useRef();
    const aboutRef = useRef();
    const projectsRef = useRef();
    const contactRef = useRef();

    useEffect(() => {
        if (scrollTo === "home")
            homeRef.current.scrollIntoView({ behavior: "smooth" });
        if (scrollTo === "about")
            aboutRef.current.scrollIntoView({ behavior: "smooth" });
        if (scrollTo === "projects")
            projectsRef.current.scrollIntoView({ behavior: "smooth" });
        if (scrollTo === "contact")
            contactRef.current.scrollIntoView({ behavior: "smooth" });
    }, [scrollTo]);

    return (
        <>
            <section ref={homeRef} id="home">
                <Hero></Hero>
            </section>

            <section ref={aboutRef} id="about">
                <About></About>
            </section>

            <Skills></Skills>

            <Tools></Tools>

            <Education></Education>
            <section ref={projectsRef} id="projects" className="scroll-mt-24">
                <Projects></Projects>
            </section>

            <section ref={contactRef} id="contact">
                <Contact></Contact>
            </section>
        </>
    );
};

export default Home;
