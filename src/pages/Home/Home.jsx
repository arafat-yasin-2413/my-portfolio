import React from "react";
import Container from "../../components/Container/Container";
import Hero from "../../components/Hero/Hero";
import About from "../About/About";
import Technologies from "../../components/Technologies/Technologies";

const Home = () => {
    return (
        <>
            <Hero></Hero>

            <About></About>

            <Technologies></Technologies>
        </>
    );
};

export default Home;
