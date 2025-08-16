import React from "react";
import { GoContainer } from "react-icons/go";
import MainTitle from "../../components/MainTitle/MainTitle";
import Container from "../../components/Container/Container";

const Education = () => {
    return (
        <Container>
            <MainTitle text={"Education"}></MainTitle>

            <div className="mt-4">
                <div className="border-t-4 border-t-black rounded-md shadow py-4 px-2 flex items-center gap-8">
                    <div>
                        <img
                            className="w-40"
                            src="/assets/images/miu.png"
                            alt=""
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl mb-2">
                            Bachelor of Science in CSE
                        </h2>

                        <p className="text-xl">
                            Manarat International University
                        </p>

                        <p>2020-2024</p>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Education;
