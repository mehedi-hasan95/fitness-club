import React from 'react';
import trainerImg from '../../imgs/Trainer.jpg';
import './Trainer.css'

const Trainer = () => {
    return (
        <div className="trainer-wrap">
            <div className='trainer'>
                <img src={trainerImg} alt="" />
                <div className="trainer-info">
                    <h3>Mehedi Hasan</h3>
                    <h5>Jessore, Bangladesh</h5>
                </div>
            </div>
            <div className="trainer-details">
                <div className="details">
                    <h2>62<span>KG</span></h2>
                    <h4>Weight</h4>
                </div>
                <div className="details">
                    <h2>5.8</h2>
                    <h4>Height</h4>
                </div>
                <div className="details">
                    <h2>26<span>yrs</span></h2>
                    <h4>Age</h4>
                </div>
            </div>
        </div>
    );
};

export default Trainer;