import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const { Name, image, price, rating, short_description } = useLoaderData();
    return (
        <div>
            <h2>{Name}</h2>
        </div>
    );
};

export default Details;