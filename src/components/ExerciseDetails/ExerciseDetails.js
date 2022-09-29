import React, { useState } from 'react';
import './ExerciseDetails.css';

// Toast

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ExerciseDetails = (props) => {
    const { gymSet } = props;
    let totalTime = 0;
    for (const time of gymSet) {
        totalTime = totalTime + time.time;
    }
    const [newValue, setNewValue] = useState([]);
    const newFunction = id => {
        const newNumber = [id];
        setNewValue(newNumber);
        console.log(id);
    }

    // toast 
    const notify = () => toast("Thank you very much");

    return (
        <div className='exercise-details'>
            <div className="break">
                <h2>Add A Break</h2>
                <div className="break-time">
                    <button onClick={() => newFunction(10)}>10s</button>
                    <button onClick={() => newFunction(20)}>20s</button>
                    <button onClick={() => newFunction(30)}>30s</button>
                    <button onClick={() => newFunction(40)}>40s</button>
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
            <button onClick={notify} className='activity'>Activity Completed</button>
            <ToastContainer />
        </div>
    );
};

export default ExerciseDetails;