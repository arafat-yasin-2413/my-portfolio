import React from 'react';

const IconCard = ({icon}) => {
    return (
        <div className="border-2 rounded-full w-fit p-3 flex justify-center items-center border-gray-200/50"> 
            {icon}
            <span className='my-1'></span>
        </div>
    );
};

export default IconCard;