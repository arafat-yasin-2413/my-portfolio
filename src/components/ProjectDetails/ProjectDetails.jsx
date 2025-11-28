import React from "react";
import Container from "../Container/Container";
import MainTitle from "../MainTitle/MainTitle";

import { Icon } from "@iconify/react/dist/iconify.js";
import { Link, useLocation } from "react-router";
import ProjectTech from "../ProjectTech/ProjectTech";
import Subtitle from "../SubTitle/Subtitle";

const ProjectDetails = () => {
    const location = useLocation();
    const {
        projectName,
        projectImage,
        features,
        live,
        github,
        challenges,
        futurePlans,
    } = location.state || {};

    console.log(location.state);

    // if (location.state === null) {
    //     console.log("hello null");
    // }

    return (
        <Container>
            {location.state === null || features.length === 0 ? (
                <>
                    <div className="h-screen flex flex-col justify-center items-center text-center">
                        <p className="text-xl font-semibold">
                            You have come here by{" "}
                            <span className="text-red-400 underline">
                                direct link
                            </span>
                            .{" "}
                            <Link
                                to="/projects"
                                className="bg-accent text-white px-2 py-1 rounded-md cursor-pointer hover:bg-accent/80"
                            >
                                Go Back
                            </Link>{" "}
                            and Come Here again Clicking the{" "}
                            <span className="text-accent underline">
                                View Details
                            </span>{" "}
                            button in the project card. <br />
                        </p>
                    </div>
                </>
            ) : (
                <>
                    <section>
                        {/* special page heading */}
                        <div className="bg-white flex justify-center py-2 rounded-md">
                            <p className="text-xs sm:text-sm">
                                | You are now seeing Project Details |
                            </p>
                        </div>

                        {/* project name */}
                        <div className="mt-8 flex items-center text-white gap-1">
                            <MainTitle text={projectName}></MainTitle>
                        </div>

                        {/* main details section */}
                        <section className="my-6">
                            {/* project image */}
                            <div>
                                <img className="" src={projectImage} alt="" />
                            </div>

                            {/* content */}

                            {/* technologies */}
                            <ProjectTech></ProjectTech>

                            {/* brief description */}
                            <div className="mt-8 text-white">
                                <div className="border-b-2 w-fit border-gray-200 ">
                                    <Subtitle
                                        text={"Brief Description"}
                                    ></Subtitle>
                                </div>

                                <div className="my-4">
                                    {features.map((feature, idx) => (
                                        <p
                                            key={idx}
                                            className="flex items-center gap-2 mb-1 text-xs sm:text-sm md:text-base"
                                        >
                                            <Icon
                                                icon={feature.icon}
                                                width="20"
                                                className={`${feature.color}`} 
                                            />
                                            {feature.description}
                                        </p>
                                    ))}
                                </div>
                            </div>

                            {/* links */}
                            <div className="mt-8 flex items-center gap-4">
                                <Link
                                    to={live}
                                    className="btn text-xs sm:text-sm bg-accent text-white hover:bg-accent/80 flex items-center gap-2"
                                >
                                    <Icon
                                        icon="material-symbols:open-in-new"
                                        width="20"
                                    />
                                    Live Site
                                </Link>

                                <Link
                                    to={github}
                                    className="btn text-xs sm:text-sm bg-accent text-white hover:bg-accent/80 flex items-center gap-2"
                                >
                                    <Icon
                                        icon="ri:github-line"
                                        width="24"
                                        height="24"
                                    />{" "}
                                    Client Repo
                                </Link>
                            </div>

                            {/* Challenges */}
                            <div className="mt-8 text-white">
                                <div className="border-b-2 w-fit border-gray-200 ">
                                    <Subtitle
                                        text={"Challenges Faced"}
                                    ></Subtitle>
                                </div>

                                <div className="my-4">
                                    {challenges.map((challenge, idx) => (
                                        <p
                                            key={idx}
                                            className="flex items-center gap-2 mb-2 text-xs sm:text-sm md:text-base"
                                        >
                                            <Icon
                                                icon={challenge.icon}
                                                width="22"
                                                className={`${challenge.color}`} 
                                            />
                                            {challenge.description}
                                        </p>
                                    ))}
                                </div>
                            </div>
                            
                            {/* Future Plans */}
                            <div className="mt-8 text-white">
                                <div className="border-b-2 w-fit border-gray-200 ">
                                    <Subtitle
                                        text={"Future Plans"}
                                    ></Subtitle>
                                </div>

                                <div className="my-4">
                                    {futurePlans.map((plan, idx) => (
                                        <p
                                            key={idx}
                                            className="flex items-center gap-2 mb-2 text-xs sm:text-sm md:text-base"
                                        >
                                            <Icon
                                                icon={plan.icon}
                                                width="22"
                                                className={`${plan.color}`} 
                                            />
                                            {plan.description}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </section>
                    </section>
                </>
            )}
        </Container>
    );
};

export default ProjectDetails;
