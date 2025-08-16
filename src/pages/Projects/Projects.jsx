import React from "react";
import Container from "../../components/Container/Container";
import MainTitle from "../../components/MainTitle/MainTitle";
import ProjectCard from "../../components/ProjectCard/ProjectCard";


import image1 from "../../assets/images/recipe-book-homepage.png"
import image2 from "../../assets/images/bookshelf-homepage.png"
import image3 from "../../assets/images/market-track-homepage.png"

const Projects = () => {
    return (
        <Container>
            <div className="">
                <MainTitle text={"Projects"}></MainTitle>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                    <ProjectCard image={image1} projectName={"Recipe Book"} buttonText={"View More"}></ProjectCard>
                    <ProjectCard image={image2} projectName={"Bookshelf"} buttonText={"View More"}></ProjectCard>
                    <ProjectCard image={image3} projectName={"Market Track"} buttonText={"View More"}></ProjectCard>
                </div>
            </div>
        </Container>
    );
};

export default Projects;
