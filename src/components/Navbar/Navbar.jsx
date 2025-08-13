import React from "react";
import { HiMenu } from "react-icons/hi";
import Container from "../Container/Container";
import Logo from "../Logo/Logo";

const Navbar = () => {
    return (
        <nav className="sticky z-50 top-0 bg-primary text-white">
            <div className="w-10/12 mx-auto border">
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div
                                tabIndex={0}
                                role="button"
                                className="btn btn-ghost lg:hidden"
                            >
                                <HiMenu className="text-2xl"></HiMenu>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                            >
                                <li>
                                    <a>Item 1</a>
                                </li>

                                <li>
                                    <a>Item 3</a>
                                </li>
                            </ul>
                        </div>
                        <a className="text-xl -ml-2"><Logo></Logo></a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li>
                                <a>Item 1</a>
                            </li>

                            <li>
                                <a>Item 3</a>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar-end -mr-2">
                        <a className="btn">Button</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
