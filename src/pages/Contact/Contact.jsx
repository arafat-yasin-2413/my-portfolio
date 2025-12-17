import React from "react";
import Container from "../../components/Container/Container";
import MainTitle from "../../components/MainTitle/MainTitle";
import Lottie from "lottie-react";
import { Icon } from "@iconify/react";

import contactAnimation from "../../assets/animations/Contact us.json";

const Contact = () => {
    return (
        <Container>
            <section className="py-20">
                
                {/* Title */}
                <div className="text-white text-center mb-14">
                    <MainTitle text="Contact Me" />
                    <p className="text-gray-400 mt-3 text-sm md:text-base max-w-md mx-auto">
                        Let’s connect and discuss opportunities or collaborations
                    </p>
                </div>

                {/* Column Layout */}
                <div className="flex flex-col items-center gap-14">

                    {/* Animation */}
                    <Lottie
                        animationData={contactAnimation}
                        loop
                        className="w-72 md:w-96"
                    />

                    {/* Contact Cards */}
                    <div className="w-full max-w-xl space-y-6">

                        {/* Email Card */}
                        <div className="group flex items-center gap-5 p-6 rounded-2xl
                            bg-gradient-to-r from-white/95 to-white/80
                            border border-white/20 shadow-md
                            hover:shadow-xl hover:-translate-y-1 transition">

                            <div className="w-12 h-12 flex items-center justify-center rounded-full
                                bg-blue-100 text-blue-600">
                                <Icon icon="line-md:email-opened-alt-twotone" width="26" />
                            </div>

                            <div>
                                <p className="text-xs uppercase tracking-wider text-gray-500">
                                    Email
                                </p>
                                <p className="text-gray-800 font-medium break-all">
                                    yasinarafat1396@gmail.com
                                </p>
                            </div>
                        </div>

                        {/* Phone Card */}
                        <div className="group flex items-center gap-5 p-6 rounded-2xl
                            bg-gradient-to-r from-white/95 to-white/80
                            border border-white/20 shadow-md
                            hover:shadow-xl hover:-translate-y-1 transition">

                            <div className="w-12 h-12 flex items-center justify-center rounded-full
                                bg-blue-100 text-blue-500">
                                <Icon icon="bx:phone" width="26" />
                            </div>

                            <div>
                                <p className="text-xs uppercase tracking-wider text-gray-500">
                                    Phone
                                </p>
                                <p className="text-gray-800 font-medium">
                                    +880 1799 566 455
                                </p>
                            </div>
                        </div>

                        {/* WhatsApp Card */}
                        <div className="group flex items-center gap-5 p-6 rounded-2xl
                            bg-gradient-to-r from-white/95 to-white/80
                            border border-white/20 shadow-md
                            hover:shadow-xl hover:-translate-y-1 transition">

                            <div className="w-12 h-12 flex items-center justify-center rounded-full
                                bg-green-100 text-green-600">
                                <Icon icon="ri:whatsapp-line" width="26" />
                            </div>

                            <div>
                                <p className="text-xs uppercase tracking-wider text-gray-500">
                                    WhatsApp
                                </p>
                                <p className="text-gray-800 font-medium">
                                    +880 1799 566 455
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </Container>
    );
};

export default Contact;
