import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const SingleService = ({ service, Handleadd }) => {
    const { Name, price, _id, short_description } = service;
    return (
        <div className='mx-auto p-6'>
            <div className="card w-96  bg-base-100 shadow-xl p-6 mx-auto h-full">
                <figure><PhotoProvider>
                    <PhotoView src={service?.image}>
                        <img src={service?.image} alt="Foods" />
                    </PhotoView>
                </PhotoProvider>
                </figure>
                <div className="card-body">
                    <h2 className=" text-2xl card-title">{Name}</h2>
                    <p className=' text-blue-600 font-semibold'>Price : {price}</p>
                    <p>{short_description?.slice(0, 50)}....</p>
                    <div className="p-2
                     text-center flex flex-wrap gap-2">
                        <Link to={`/details/${_id}`}> <button className="btn btn-primary ">View Details</button></Link>
                        <Link onClick={() => Handleadd(service._id)} to="/addservice"> <button className="btn btn-primary ">Add Service</button></Link>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default SingleService;