import React from "react";
import { HiMenu } from "react-icons/hi";
import Container from "../Container/Container";
import Logo from "../Logo/Logo";
import NavbarLinks from "../NavbarLinks/NavbarLinks";
import { Link } from "react-router";

const Navbar = () => {
    return (
        <nav className="sticky z-50 top-0 shadow backdrop-blur-md">
            <div className="w-9/12 mx-auto">
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div
                                tabIndex={0}
                                role="button"
                                className="lg:hidden"
                            >
                                <HiMenu className="text-2xl mr-4 cursor-pointer"></HiMenu>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                            >
                                <NavbarLinks></NavbarLinks>
                            </ul>
                        </div>
                        <Link to="/" className="text-xl -ml-2">
                            <Logo></Logo>
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1"></ul>
                    </div>
                    <div className="navbar-end -mr-2">
                        <ul className="flex gap-6">
                            <NavbarLinks></NavbarLinks>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
