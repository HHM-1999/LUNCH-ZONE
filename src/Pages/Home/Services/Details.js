import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const { Name, image, price, rating, short_description } = useLoaderData();
    return (
        <div className='mx-9  h-full p-6'>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={image} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{Name}</h2>
                    <p><span className='text-orange'>Price:</span>{price}</p>
                    <p>Rating:{rating}</p>
                    <p>Description:{short_description}</p>

                </div>
            </div>

        </div>
    );
};

export default Details;