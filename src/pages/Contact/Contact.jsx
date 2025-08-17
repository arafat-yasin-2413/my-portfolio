import React from "react";
import Container from "../../components/Container/Container";
import MainTitle from "../../components/MainTitle/MainTitle";
import Lottie from "lottie-react";


import contactAnimation from "../../assets/animations/Contact us.json"
import { Icon } from "@iconify/react/dist/iconify.js";

const Contact = () => {
    return (
        <Container>
            <div>

                <div>
                    <MainTitle text={"Contact Me"}></MainTitle>
                </div>

                <div className="flex justify-center items-center ">


                    <div className="">
                        <Lottie animationData={contactAnimation} loop={true} style={{ width: "300px"}}></Lottie>
                    <div className="my-4 bg-white p-8 rounded border-2 border-gray-200/50">
                        <p className="flex items-center gap-2 mb-1"><Icon icon="line-md:email-opened-alt-twotone" className="text-blue-600" width="24" height="24" />yasinarafat1396@gmail.com</p>
                        <p className="flex items-center gap-2 mb-1"><Icon icon="bx:phone" className="text-blue-400" width="24" height="24" />+8801799566455</p>
                        <p className="flex items-center gap-2 mb-1"><Icon icon="ri:whatsapp-line" className="text-green-500" width="24" height="24" />+8801799566455</p>
                    </div>
                    </div>

                
                
                </div>



            </div>
        </Container>
    );
};

export default Contact;
