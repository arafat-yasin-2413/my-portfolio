import React from 'react';

const IconCard = ({icon, text}) => {
    return (
        <div className="border flex flex-col items-center"> 
            {icon}
            <span className='my-1'>{text}</span>
        </div>
    );
};

export default IconCard;