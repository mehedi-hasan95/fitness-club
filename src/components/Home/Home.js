import React, { useEffect, useState } from 'react';
import ExerciseDetails from '../ExerciseDetails/ExerciseDetails';
import Fitness from '../Fitness/Fitness';
import Header from '../Header/Header';
import Trainer from '../Trainer/Trainer';
import './Home.css'

const Home = () => {

    const [fitness, setFitness] = useState([]);
    useEffect( ()=>{
        fetch('fitness.json')
        .then(res => res.json())
        .then(data => setFitness( data ))
    },[]);
    

    // Click handaler
    const [gym, setGym] = useState([]);
    const clickHandle = excersiceName => {
        const newGym = [...gym, excersiceName];
        setGym(newGym);
    }
    
    return (
        <div className='home-container'>
            <div className="home-left">
                <Header></Header>
                <h2>Select today’s exercise</h2>
                <div className="all-excersice">
                {
                    fitness.map(gym => <Fitness excersice={gym} key={gym.id} clickHandle={clickHandle}></Fitness>)
                }
                </div>
            </div>
            <div className="home-right">
                <Trainer></Trainer>
                <ExerciseDetails gymSet = {gym}></ExerciseDetails>
            </div>
        </div>
    );
};

export default Home;