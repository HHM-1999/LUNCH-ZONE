import React from 'react';

const DeliveryProcess = () => {
    return (
        <div>
            <h1 className='mt-9 text-black font-bold text-6xl text-center'>How can I deliver foods</h1>
            <div>
                <div className='flex flex-wrap mx-9 gap-20 mt-9 mb-9'>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className='image-fluid'><img src="https://img.freepik.com/free-vector/home-delivery-worker-collection_23-2148527085.jpg?size=626&ext=jpg&ga=GA1.2.89839238.1664401225&semt=ais" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-center mt-14">
                                CHOOSE YOUR ORDER

                            </h2>
                            <p>Select your food from counter</p>

                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className='image-fluid'><img src="https://img.freepik.com/free-vector/man-riding-scooter-white-background_1308-46416.jpg?size=626&ext=jpg&ga=GA1.2.89839238.1664401225&semt=ais" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-center"> FAST DELIVERY</h2>
                            <p>Place to order your food. I always doing fastest delivery</p>



                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className='image-fluid'><img src="https://img.freepik.com/free-vector/boy-enjoy-eating-fast-food_1308-106716.jpg?size=626&ext=jpg&ga=GA1.2.89839238.1664401225&semt=sph" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-center mt-14">ENJOY YOUR MEAL</h2>
                            <p>Thanks to Choose my Food </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeliveryProcess;