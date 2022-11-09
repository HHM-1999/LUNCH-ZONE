import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const SingleService = ({ service }) => {
    const { Name, price, _id, short_description } = service;
    return (
        <div className='mx-auto p-6'>
            <div className="card w-96  bg-base-100 shadow-xl p-6 mx-auto h-full">
                <figure><PhotoProvider>
                    <PhotoView src={service?.image}>
                        <img src={service?.image} alt="Shoes" />
                    </PhotoView>
                </PhotoProvider>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{Name}</h2>
                    <p className='text-2xl text-blue-600 font-semibold'>Price : {price}</p>
                    <p>{short_description.slice(0, 70)}...</p>
                    <div className="p-2
                     text-center">
                        <Link to={`/details/${_id}`}> <button className="btn btn-primary ">View Details</button></Link>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default SingleService;