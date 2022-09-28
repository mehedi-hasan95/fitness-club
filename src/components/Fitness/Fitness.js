import React from 'react';
import './Fitness.css'

const Fitness = (props) => {
    const {title, img, content, age, time} = props.excersice;
    return (
        <div className='fitness'>
            <img src={img} alt="" />
        </div>
    );
};

export default Fitness;