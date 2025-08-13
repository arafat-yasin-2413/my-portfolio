import React from 'react';

const Container = ({children}) => {
    return (
        <div className='w-9/12 mx-auto my-12'>
            {children}
        </div>
    );
};

export default Container;