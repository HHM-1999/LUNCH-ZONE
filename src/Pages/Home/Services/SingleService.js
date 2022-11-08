import React from 'react';
import { Link } from 'react-router-dom';

const SingleService = ({ service }) => {
    const { image, Name, price, _id, short_description } = service;
    return (
        <div className='mx-auto'>
            <div className="card w-96  bg-base-100 shadow-xl p-6 mx-auto h-full">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{Name}</h2>
                    <p className='text-2xl text-blue-600 font-semibold'>Price : {price}</p>
                    <p>{short_description.slice(0, 70)}...</p>
                    <div className="card-actions justify-end">
                        <Link to={`/details/${_id}`}> <button className="btn btn-primary">View Details</button></Link>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default SingleService;