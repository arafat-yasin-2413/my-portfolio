import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import About from "../pages/About/About";
import Projects from "../pages/Projects/Projects";
import Contact from "../pages/Contact/Contact";
import Resume from "../pages/Resume/Resume";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: '/about',
                Component: About,
            },
            {
                path: '/projects',
                Component: Projects,
            },
            {
                path: '/contact',
                Component: Contact,
            },
            {
                path: '/resume',
                Component: Resume,
            },
        ]
    },

    {
        path: "/*",
        Component: ErrorPage,
    },
])