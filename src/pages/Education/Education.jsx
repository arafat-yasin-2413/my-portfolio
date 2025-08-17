import React from "react";
import MainTitle from "../../components/MainTitle/MainTitle";
import Container from "../../components/Container/Container";

const Education = () => {
    return (
        <Container>
            <MainTitle text={"Education"}></MainTitle>

            <div className="mt-4">
                <div className="border-t-4 border-t-black rounded-md shadow py-4 px-2 flex flex-col items-center gap-8">
                    <div className="border rounded-full border-gray-200 bg-white">
                        <img
                            className="w-32 sm:w-36 md:w-40"
                            src="/assets/images/miu.png"
                            alt=""
                        />
                    </div>
                    <div className="bg-white w-full rounded-md border border-gray-100 p-4">
                        <h2 className="text-xl mb-2 font-semibold">
                            Bachelor of Science in CSE
                        </h2>

                        <p className="text-base">
                            Manarat International University
                        </p>

                        <p className="font-semibold mt-2">2020-2024</p>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Education;
