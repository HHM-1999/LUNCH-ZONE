import React, { useEffect, useState } from 'react';
import SingleService from './SingleService';




const Services = ({ service }) => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://server-side-rosy.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    const Handleadd = (id) => {
        const proceed = window.confirm('Do you want to add in cart ?');
        if (proceed) {
            fetch(`https://server-side-rosy.vercel.app/services/${id}`, {
                method: 'POST'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.addCount > 0) {
                        alert("Successfully added");
                    }
                    const remaining = services.filter(ser =>
                        ser._id !== id);
                    setServices(remaining);
                })
        }
    }
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
                        Handleadd={Handleadd}

                    ></SingleService>)
                }




            </div>





        </div>
    );
};

export default Services;