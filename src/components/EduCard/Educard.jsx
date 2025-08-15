import React from "react";

const Educard = ({degree, institution, duration}) => {
    return (
        <div className="border-t-4 border-t-slate-500 rounded-md shadow py-4 px-2">
            <h2>{degree}</h2>

            <p>{institution}</p>

            <p>{duration}</p>
        </div>
    );
};

export default Educard;
