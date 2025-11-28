import React from "react";
import Container from "../../components/Container/Container";
import MainTitle from "../../components/MainTitle/MainTitle";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

import image1 from "../../assets/images/recipe-book-homepage.png";
import image2 from "../../assets/images/bookshelf-homepage.png";
import image3 from "../../assets/images/market-track-homepage.png";

const recipeBookFeatures = [
    {
        icon: "mdi:book-plus-outline",
        description: "Users can contribute by adding their favorite books.",
        color: "text-blue-500",
    },
    {
        icon: "mdi:bookshelf",
        description: "Personal dashboard to manage books added by the user.",
        color: "text-green-500",
    },
    {
        icon: "mdi:star-circle-outline",
        description: "Highlights the most highly rated books for quick discovery.",
        color: "text-yellow-500",
    },
    {
        icon: "mdi:filter-variant",
        description: "Quickly browse books by categories like Fiction, Science, or History.",
        color: "text-purple-500",
    },
    {
        icon: "mdi:book-open-page-variant-outline",
        description: "In-depth view with book summary, author info, and reviews.",
        color: "text-pink-500",
    },
    {
        icon: "mdi:pencil-outline",
        description: "Author can update their books.",
        color: "text-indigo-500",
    },
    {
        icon: "mdi:delete-outline",
        description: "Authors can delete their books.",
        color: "text-red-500",
    },
    {
        icon: "mdi:thumb-up-outline",
        description: "Community-driven upvotes for highlighting quality reviews.",
        color: "text-teal-500",
    },
];

const bookshelfFeatures = [
    {
        icon: "mdi:book-plus-outline",
        description: "Authors can add new books easily.",
        color: "text-blue-500",
    },
    {
        icon: "mdi:pencil-outline",
        description: "Authors can edit their books.",
        color: "text-purple-500",
    },
    {
        icon: "mdi:delete-outline",
        description: "Authors can delete books they added.",
        color: "text-red-500",
    },
    {
        icon: "mdi:bookshelf",
        description: "Users can view all available books.",
        color: "text-green-500",
    },
    {
        icon: "mdi:star-circle-outline",
        description: "Featured books are highlighted for users.",
        color: "text-yellow-500",
    },
    {
        icon: "mdi:thumb-up-outline",
        description: "Users can upvote quality books.",
        color: "text-teal-500",
    },
    {
        icon: "mdi:comment-outline",
        description: "Users can post reviews or comments.",
        color: "text-pink-500",
    },
    {
        icon: "mdi:book-open-page-variant-outline",
        description: "Users can see detailed book information.",
        color: "text-indigo-500",
    },
];

const marketTrackFeatures = [
    {
        icon: "mdi:account-outline",
        description: "User role-based options for user, vendor, admin.",
        color: "text-blue-500",
    },
    {
        icon: "mdi:login",
        description: "Login or register via Google or email/password.",
        color: "text-green-500",
    },
    {
        icon: "mdi:account-check-outline",
        description: "Admin approval required for vendors to add products.",
        color: "text-yellow-500",
    },
    {
        icon: "mdi:package-variant-closed",
        description: "Vendors can add product with price, description, market.",
        color: "text-purple-500",
    },
    {
        icon: "mdi:check-circle-outline",
        description: "Admin approves products before site display.",
        color: "text-green-600",
    },
    {
        icon: "mdi:bullhorn-outline",
        description: "Vendors can create advertisements for their products.",
        color: "text-pink-500",
    },
    {
        icon: "mdi:sort",
        description: "Users can sort products by price or date.",
        color: "text-indigo-500",
    },
    {
        icon: "mdi:chart-line",
        description: "View product price trends.",
        color: "text-teal-500",
    },
    {
        icon: "mdi:comment-outline",
        description: "Users can review and comment on products.",
        color: "text-yellow-400",
    },
    {
        icon: "mdi:cart-outline",
        description: "Users can buy products and add to watchlist.",
        color: "text-red-500",
    },
    {
        icon: "mdi:account-cog-outline",
        description: "Admin can change roles of any user.",
        color: "text-purple-600",
    },
    {
        icon: "mdi:eye-off-outline",
        description: "Unapproved products/ads remain hidden from site.",
        color: "text-gray-500",
    },
    {
        icon: "mdi:clipboard-list-outline",
        description: "Admin can view all orders, products, users.",
        color: "text-blue-600",
    },
    {
        icon: "mdi:receipt-outline",
        description: "Users can view their payment and order history.",
        color: "text-orange-500",
    },
];

const recipeBookChallenges = [
    { icon: "mdi:recipe", description: "Managing recipe database efficiently.", color: "text-red-500" },
    { icon: "mdi:lock-outline", description: "Implementing secure login and role-based access.", color: "text-yellow-500" },
    { icon: "mdi:pencil-outline", description: "Smooth Add, Edit, Delete without UI break.", color: "text-purple-500" },
    { icon: "mdi:filter-variant", description: "Filtering recipes by category efficiently.", color: "text-green-500" },
];

const recipeBookFuturePlans = [
    { icon: "mdi:star-outline", description: "Add recipe rating feature.", color: "text-yellow-400" },
    { icon: "mdi:account-multiple-outline", description: "Enable user social profiles.", color: "text-blue-500" },
    { icon: "mdi:cloud-upload-outline", description: "Allow recipe image uploads.", color: "text-indigo-500" },
    { icon: "mdi:bell-outline", description: "Add notifications for new recipes.", color: "text-pink-500" },
];

const bookshelfChallenges = [
    { icon: "mdi:book-plus-outline", description: "Handling book addition, edit, and deletion.", color: "text-blue-500" },
    { icon: "mdi:comment-outline", description: "Implementing reviews and user comments safely.", color: "text-pink-500" },
    { icon: "mdi:filter-variant", description: "Category-wise filtering efficiently.", color: "text-green-500" },
    { icon: "mdi:cellphone-link", description: "Responsive design for mobile and desktop.", color: "text-indigo-500" },
];

const bookshelfFuturePlans = [
    { icon: "mdi:chart-line", description: "Show book rating trends.", color: "text-green-500" },
    { icon: "mdi:bookmark-outline", description: "Enable watchlist for users.", color: "text-yellow-500" },
    { icon: "mdi:bell-outline", description: "Notifications for newly added books.", color: "text-pink-500" },
    { icon: "mdi:share-variant", description: "Allow sharing books on social media.", color: "text-blue-500" },
];

const marketTrackChallenges = [
    { icon: "mdi:account-outline", description: "Managing user roles and permissions.", color: "text-indigo-500" },
    { icon: "mdi:package-variant-closed", description: "Vendor product management efficiently.", color: "text-purple-500" },
    { icon: "mdi:check-circle-outline", description: "Admin approval workflow for products and ads.", color: "text-green-500" },
    { icon: "mdi:cart-outline", description: "Handling user orders, watchlist, and payments.", color: "text-yellow-500" },
];

const marketTrackFuturePlans = [
    { icon: "mdi:chart-bar", description: "Add advanced price trend analytics.", color: "text-green-500" },
    { icon: "mdi:bullhorn-outline", description: "Enable vendor advertising campaigns.", color: "text-purple-500" },
    { icon: "mdi:credit-card-outline", description: "Implement multiple payment options.", color: "text-yellow-500" },
    { icon: "mdi:account-multiple-outline", description: "Allow role change automation for users.", color: "text-blue-500" },
];


const Projects = () => {
    return (
        <Container>
            <div className="">
                <div className="text-white">
                    <MainTitle text={"Projects"}></MainTitle>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                    <ProjectCard
                        image={image1}
                        projectName={"Recipe Book"}
                        buttonText={"View More"}
                        features={recipeBookFeatures}
                        challenges={recipeBookChallenges}
                        futurePlans={recipeBookFuturePlans}
                        live="https://recipe-book-app-e138e.web.app/"
                        github="https://github.com/arafat-yasin-2413/my-recipe-book-client"
                    ></ProjectCard>
                    <ProjectCard
                        image={image2}
                        projectName={"Bookshelf"}
                        buttonText={"View More"}
                        features={bookshelfFeatures}
                        challenges={bookshelfChallenges}
                        futurePlans={bookshelfFuturePlans}
                        live="https://bookshelf-project-d43ac.web.app/"
                        github="https://github.com/arafat-yasin-2413/my-bookshelf-client"
                    ></ProjectCard>
                    <ProjectCard
                        image={image3}
                        projectName={"Market Track"}
                        buttonText={"View More"}
                        features={marketTrackFeatures}
                        challenges={marketTrackChallenges}
                        futurePlans={marketTrackFuturePlans}
                        live="https://market-track-project.web.app/"
                        github="https://github.com/arafat-yasin-2413/my-market-track-client"
                    ></ProjectCard>
                </div>
            </div>
        </Container>
    );
};

export default Projects;
