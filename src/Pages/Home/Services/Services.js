import React, { useEffect, useState } from 'react';
import SingleService from './SingleService';
// import { PhotoProvider, PhotoView } from 'react-photo-view';
// import 'react-photo-view/dist/react-photo-view.css';



const Services = ({ service }) => {
    // const { image } = service;
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div >
            <div className='mt-9'>
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
            {/* <PhotoProvider>
                <PhotoView src="/1.jpg">
                    <img src={image} alt="" />
                </PhotoView>
            </PhotoProvider> */}


        </div>
    );
};

export default Services;