import React from 'react';

const DeliveryProcess = () => {
    return (
        <div>
            <h1 className='mt-9 text-black font-bold text-6xl text-center p-9'>How can I deliver foods</h1>
            <div>
                <div className='flex flex-wrap mx-9 gap-20 mt-9 mb-9'>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className='image-fluid'><img src="https://img.freepik.com/free-vector/safe-food-delivery_23-2148573179.jpg?size=626&ext=jpg&ga=GA1.1.89839238.1664401225&semt=ais" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-center">
                                CHOOSE YOUR ORDER

                            </h2>
                            <p>Select your food from counter</p>

                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className='image-fluid'><img src="https://img.freepik.com/premium-vector/safe-food-delivery_23-2148547689.jpg?size=626&ext=jpg&ga=GA1.1.89839238.1664401225&semt=ais" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-center"> FAST DELIVERY</h2>
                            <p>Place to order your food. I always doing fastest delivery</p>



                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className='image-fluid'><img src="https://img.freepik.com/free-vector/food-delivery-family-composition-food-courier-is-met-doorstep-by-whole-family-illustration_1284-64776.jpg?size=626&ext=jpg&ga=GA1.1.89839238.1664401225&semt=ais" alt="Shoes" /></figure>
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