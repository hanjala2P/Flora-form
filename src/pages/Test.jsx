import React from 'react';
import { useLoaderData } from 'react-router';

const Test = () => {
    const data = useLoaderData();
    console.log(data); // Log the fetched data to the console
    return (
        <div>
            <h1>Test Page</h1>
        </div>
    );
};

export default Test;