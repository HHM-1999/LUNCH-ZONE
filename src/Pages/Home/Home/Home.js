import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Banner from '../Banner/Banner';
import Contact from '../DeliveryProcess/DeliveryProcess';
import Homeservice from './Homeservice';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Homeservice></Homeservice>
            <AboutMe></AboutMe>
            <Contact></Contact>
        </div>
    );
};

export default Home;