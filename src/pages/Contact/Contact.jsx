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
                    <div>
                        <p className="flex items-center gap-2 mb-1"><Icon icon="line-md:email-opened-alt-twotone" width="24" height="24" />yasinarafat1396@gmail.com</p>
                        <p className="flex items-center gap-2 mb-1"><Icon icon="bx:phone" width="24" height="24" />+8801799566455</p>
                        <p className="flex items-center gap-2 mb-1"><Icon icon="ri:whatsapp-line" width="24" height="24" />+8801799566455</p>
                    </div>
                    </div>

                
                
                </div>



            </div>
        </Container>
    );
};

export default Contact;
