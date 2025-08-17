import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <p className='text-2xl'>
                Error 404 <Link to="/" className='btn bg-accent hover:bg-accent/80'>Go Home</Link>
            </p>
        </div>
    );
};

export default ErrorPage;