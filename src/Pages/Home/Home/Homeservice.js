import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SingleService from '../Services/SingleService';


const Homeservice = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://server-side-rosy.vercel.app/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className='mt-9 p-6'>
                <h2 className='mt-8 text-black font-bold text-7xl text-center'>Food Counter</h2>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <SingleService
                        key={service._id}
                        service={service}


                    ></SingleService>)
                }

            </div>
            <div className='mx-auto w-96 mt-9 px-6 text-center'>
                <Link to='/services' ><button className="btn btn-primary ">See All</button></Link>
            </div>
        </div>
    );
};

export default Homeservice;