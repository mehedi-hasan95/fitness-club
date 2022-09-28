import React from 'react';
import Fitness from '../Fitness/Fitness';
import Header from '../Header/Header';
import './Home.css'

const Home = () => {
    return (
        <div className='home'>
            <div className="home-left">
                <Header></Header>
                <Fitness></Fitness>
            </div>
            <div className="home-right">

            </div>
        </div>
    );
};

export default Home;