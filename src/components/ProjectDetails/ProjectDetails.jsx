import React from "react";
import Container from "../Container/Container";
import MainTitle from "../MainTitle/MainTitle";

import image from "../../assets/images/bookshelf-homepage.png";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router";

const ProjectDetails = () => {
    return (
        <Container>
            <section>
                {/* page title */}
                <div className="">
                    <MainTitle text={"Project Details"}></MainTitle>
                </div>

                {/* main details section */}
                <section className="my-6">
                    {/* project name */}
                    <div className="flex items-center gap-2">
                        <Icon icon="game-icons:bookshelf" width="40" />
                        <h2 className="my-4">Bookshelf</h2>
                    </div>

                    {/* project image */}
                    <div>
                        <img className="" src={image} alt="" />
                    </div>

                    {/* content */}

                    {/* technologies */}
                    <div className="my-4">
                        <div className="flex items-center gap-2">
                            <Icon icon="teenyicons:cog-outline" width="20" />
                            <h4>Technologies</h4>
                        </div>

                        <div className="flex items-center gap-4 mt-2">
                            <Icon icon="devicon:react" width="48" height="48" />
                            <Icon
                                icon="devicon:tailwindcss"
                                width="48"
                                height="48"
                            />
                            <Icon
                                icon="logos:daisyui-icon"
                                width="48"
                                height="48"
                            />
                            <Icon
                                icon="devicon:firebase"
                                width="48"
                                height="48"
                            />
                            <Icon
                                icon="logos:mongodb-icon"
                                width="48"
                                height="48"
                            />
                            <Icon
                                icon="vscode-icons:file-type-node"
                                width="48"
                                height="48"
                            />
                            <Icon
                                icon="skill-icons:expressjs-light"
                                width="48"
                                height="48"
                            />
                        </div>
                    </div>

                    {/* brief description */}
                    <div className="my-4">
                        <div className="mb-4 flex items-center gap-2">
                            <Icon icon="mdi:file-document-outline" width="24" height="24" />
                            <h4>Brief Description</h4>
                        </div>

                        <div>
                            <p className="flex items-center gap-2 mb-1">
                                <Icon icon="mdi:book-plus-outline" width="20" />
                                Users can contribute by adding their favorite
                                books.
                            </p>

                            <p className="flex items-center gap-2 mb-1">
                                <Icon icon="mdi:bookshelf" width="20" />
                                Personal dashboard to manage books added by the
                                user.
                            </p>

                            <p className="flex items-center gap-2 mb-1">
                                <Icon
                                    icon="mdi:star-circle-outline"
                                    width="20"
                                />
                                Highlights the most highly rated books for quick
                                discovery.
                            </p>

                            <p className="flex items-center gap-2 mb-1">
                                <Icon icon="mdi:filter-variant" width="20" />
                                Quickly browse books by categories like Fiction,
                                Science, or History.
                            </p>

                            <p className="flex items-center gap-2 mb-1">
                                <Icon
                                    icon="mdi:book-open-page-variant-outline"
                                    width="20"
                                />
                                In-depth view with book summary, author info,
                                and reviews.
                            </p>

                            <p className="flex items-center gap-2 mb-1">
                                <Icon icon="mdi:pencil-outline" width="20" />
                                Author can update their books.
                            </p>

                            <p className="flex items-center gap-2 mb-1">
                                <Icon icon="mdi:delete-outline" width="20" />
                                Authors can delete their books.
                            </p>

                            <p className="flex items-center gap-2 mb-1">
                                <Icon icon="mdi:thumb-up-outline" width="20" />
                                Community-driven upvotes for highlighting
                                quality reviews.
                            </p>
                        </div>
                    </div>

                    {/* links */}
                    <div className="my-4 flex items-center gap-4">
                        <Link
                            to="https://bookshelf-project-d43ac.web.app/"
                            className="btn flex items-center gap-2"
                        >
                            <Icon
                                icon="material-symbols:open-in-new"
                                width="20"
                            />
                            Live Site
                        </Link>

                        <Link
                            to="https://github.com/arafat-yasin-2413/my-bookshelf-client"
                            className="btn flex items-center gap-2"
                        >
                            <Icon icon="icon-park:github" width="20" />
                            Client Repo
                        </Link>
                    </div>

                    {/* Challenges */}
                    <div className="my-4">
                        <div className="mb-4">
                            <h4 className="flex items-center gap-2">
                                <Icon
                                    icon="mdi:bullseye-arrow"
                                    className="text-red-500"
                                    width="24"
                                />
                                Challenges Faced
                            </h4>
                        </div>

                        <div>
                            <p className="flex items-center gap-2 mb-2">
                                <Icon
                                    icon="mdi:state-machine"
                                    className="text-blue-500"
                                    width="22"
                                />
                                Handling book list, reviews, and user actions
                                without performance issues.
                            </p>
                            <p className="flex items-center gap-2 mb-2">
                                <Icon
                                    icon="mdi:lock-outline"
                                    className="text-yellow-500"
                                    width="22"
                                />
                                Implementing secure login, protecting routes,
                                and role-based access.
                            </p>
                            <p className="flex items-center gap-2 mb-2">
                                <Icon
                                    icon="mdi:pencil-outline"
                                    className="text-purple-500"
                                    width="22"
                                />
                                Ensuring smooth Add, Edit, and Delete without
                                breaking UI/UX.
                            </p>
                            <p className="flex items-center gap-2 mb-2">
                                <Icon
                                    icon="mdi:filter-variant"
                                    className="text-green-500"
                                    width="22"
                                />
                                Implementing category-wise filtering and
                                top-rated showcase efficiently.
                            </p>
                            <p className="flex items-center gap-2 mb-2">
                                <Icon
                                    icon="mdi:comment-quote-outline"
                                    className="text-pink-500"
                                    width="22"
                                />
                                Designing a user-friendly flow for adding
                                comments, upvoting reviews, and preventing
                                duplicates.
                            </p>
                            <p className="flex items-center gap-2 mb-2">
                                <Icon
                                    icon="mdi:cellphone-link"
                                    className="text-indigo-500"
                                    width="22"
                                />
                                Making the site fully functional across mobile,
                                tablet, and desktop.
                            </p>
                        </div>
                    </div>

                    {/* Future plans */}
                    <div className="my-4">

                        <div className="flex items-center gap-2">
                            <Icon icon="mdi:rocket-launch-outline" className="text-indigo-600" width="28" />

                            <h4>Future Plans</h4>
                        </div>

                        <div>
                            <p className="flex items-center gap-2 mb-2">
                                <Icon icon="mdi:account-circle-outline" className="text-blue-500" width="22" />
                                Allow users to create profiles, track reading history, and get personalized book recommendations.

                            </p>
                            <p className="flex items-center gap-2 mb-2">
                                <Icon icon="mdi:magnify-expand" className="text-green-500" width="22" />
                                Add multi-criteria search (author, price range, tags) with smarter filters.

                            </p>
                            <p className="flex items-center gap-2 mb-2">
                                <Icon icon="mdi:bookmark-outline" className="text-purple-500" width="22" />
                                Users can save books for later and set monthly/yearly reading targets.

                            </p>
                            <p className="flex items-center gap-2 mb-2">
                                <Icon icon="mdi:share-variant-outline" className="text-pink-500" width="22" />
                                Suggest similar books and let users share reviews or reading lists with friends.

                            </p>
                        </div>

                    </div>


                </section>
            </section>
        </Container>
    );
};

export default ProjectDetails;
