import React, { useState } from 'react';
import './ExerciseDetails.css'

const ExerciseDetails = (props) => {
    const {gymSet} = props;
    let totalTime = 0;
    for (const time of gymSet) {
        totalTime = totalTime + time.time;
    }
    const [newValue, setNewValue] = useState([]);
    const newNum = 0;
    const newFunction = id => {
        const newNumber = [...newValue, id];
        setNewValue(newNumber);
    }
    
    return (
        <div className='exercise-details'>
            <div className="break">
                <h2>Add A Break</h2>
                <div className="break-time">
                    <button onClick={() => newFunction(10)}>10<span>s</span></button>
                    <button onClick={() => newFunction(20)}>20<span>s</span></button>
                    <button onClick={() => newFunction(30)}>30<span>s</span></button>
                    <button onClick={() => newFunction(40)}>40<span>s</span></button>
                </div>
            </div>
            <div className="details">
                <h2>Exercise Details</h2>
                <div className="exercise-time">
                    <h3>Exercise time</h3>
                    <p>{totalTime}s</p>
                </div>
                <div className="exercise-time break">
                    <h3>Break time</h3>
                    <p>{newValue}s</p>
                </div>
            </div>
            <button className='activity'>Activity Completed</button>
        </div>
    );
};

export default ExerciseDetails;