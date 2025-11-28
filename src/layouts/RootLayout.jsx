import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";

const RootLayout = () => {
    return (
        <div className="bg-zinc-700">
            <Navbar></Navbar>

            <div className="">
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default RootLayout;
