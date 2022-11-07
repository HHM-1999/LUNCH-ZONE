import React from 'react';


const Banner = () => {
    return (
        <div className='mt-9 flex flex-wrap gap-4'>

            <div className='w-auto mx-9'>
                <div className="carousel rounded-box">
                    <div className="carousel-item">
                        <img src="https://img.freepik.com/free-photo/dahi-puri-chat-is-indian-road-side-snack-item-which-is-especially-popular-state-maharashtra-india_466689-73908.jpg?size=626&ext=jpg&ga=GA1.2.89839238.1664401225&semt=sph" alt="Burger" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://img.freepik.com/premium-photo/chicken-fried-momo-with-sauce-served-rustic-wooden-background-selective-focus_726363-698.jpg?size=626&ext=jpg&ga=GA1.2.89839238.1664401225&semt=sph" alt="Burger" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://img.freepik.com/free-photo/aloo-paratha-gobi-paratha-also-known-as-potato-cauliflower-stuffed-flatbread-dish-originating-from-indian-subcontinent_466689-76173.jpg?size=626&ext=jpg&ga=GA1.2.89839238.1664401225&semt=sph" alt="Burger" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://img.freepik.com/free-photo/paneer-butter-masala-cheese-cottage-curry-served-with-rice-laccha-paratha_466689-73715.jpg?size=626&ext=jpg&ga=GA1.2.89839238.1664401225&semt=sph" alt="Burger" />
                    </div>

                </div>

            </div>
            {/* <div>
                <h1 className='text-black text-4xl font-bold mb-5 mx-56 '>Cool Guys!!! I've got you covered</h1>
                <h1 className='text-black text-4xl font-bold mx-56'>Everyday of the week..</h1>
            </div> */}

        </div>
    );
};

export default Banner;