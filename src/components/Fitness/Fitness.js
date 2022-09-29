import React from 'react';
import './Fitness.css'

const Fitness = (props) => {
    const {title, img, content, age, time} = props.excersice;
    return (
        <div className='fitness'>
            <img src={img} alt="" />
            <div className="fitness-info">
                <h2>{title}</h2>
                <p>{content}</p>
                <strong>For Age: {age}</strong>
                <p><strong>Time Required: {time}s</strong></p>
            </div>
        </div>
    );
};

export default Fitness;