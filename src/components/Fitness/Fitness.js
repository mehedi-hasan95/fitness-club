import React from 'react';

const Fitness = (props) => {
    const {title, img, content, age, time} = props.excersice;
    return (
        <div>
            <h2>{title}</h2>
        </div>
    );
};

export default Fitness;