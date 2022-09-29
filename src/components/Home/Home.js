import React, { useEffect, useState } from 'react';
import Fitness from '../Fitness/Fitness';
import Trainer from '../Trainer/Trainer';
import './Home.css'

const Home = () => {

    const [fitness, setFitness] = useState([]);
    useEffect( ()=>{
        fetch('fitness.json')
        .then(res => res.json())
        .then(data => setFitness( data ))
    },[]);
    console.log( fitness );
    return (
        <div className='home-container'>
            <div className="home-left">
                <div className="all-excersice">
                {
                    fitness.map(gym => <Fitness excersice={gym}></Fitness>)
                }
                </div>
            </div>
            <div className="home-right">
                <Trainer></Trainer>
            </div>
        </div>
    );
};

export default Home;