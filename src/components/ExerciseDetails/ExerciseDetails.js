import React from 'react';
import './ExerciseDetails.css'

const ExerciseDetails = (props) => {
    const {gymSet} = props;
    let totalTime = 0;
    for (const time of gymSet) {
        totalTime = totalTime + time.time;
    }
    return (
        <div className='exercise-details'>
            <div className="break">
                <h2>Add A Break</h2>
            </div>
            <div className="details">
                <h2>Exercise Details</h2>
                <div className="exercise-time">
                    <h3>Exercise time</h3>
                    <p>{totalTime}s</p>
                </div>
                <div className="exercise-time break">
                    <h3>Break time</h3>
                    <p>180s</p>
                </div>
            </div>
            <button>Activity Completed</button>
        </div>
    );
};

export default ExerciseDetails;