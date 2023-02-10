import React from 'react';

const AboutMe = () => {
    return (
        <div>
            <h1 className='mt-8 text-black font-bold text-7xl text-center p-9'>About me</h1>
            <div className='mt-8 mx-56'>
                <div className="card card-side bg-base shadow-xl ">
                    <figure><img src="https://img.freepik.com/free-photo/sassy-blonde-girl-show-okay-sign-wink-smiling-assure-you-will-like-this-best-choice-ever-made_176420-33331.jpg?size=626&ext=jpg&ga=GA1.2.89839238.1664401225&semt=sph" alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title"> Hey!!! Welcome To Huma's Lunch Zone .</h2>
                        <h5>Hello there,

                            My name is Huma and I am very glad you’ve stopped by to read my cooking blog.</h5>
                        <p>Actually nevertheless it is still hard for me to differentiate the dishes I prepare (and my mom prepares, and my grand mom does till now) by various Bangali Dishes  they are supposed to be belong to.That is why you can find from various Bangali dishes on my website.
                        </p>
                        <p>Enjoy my Food !!!</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;