import React from 'react';
import './Questions.css'

const Questions = () => {
    return (
        <div className='question-section'>
            <h2>How does react work?</h2>
            <p>React is a fully open-source JavaScript library used to create user interfaces. It is a declarative and component-based UI library. It is used to build single-page applications and view layers for web and mobile. React keeps the DOM away from you, providing a simpler programming model and better performance. React always has a one-way data flow. When a React app is designed, the connection between the parent and child components needs to be created. By doing this, various errors can be debugged very easily. And if a bug is found, it can be fixed quickly.</p>

            <h2>What is the difference between props and state?</h2>
            <p><strong>Props:</strong> Props cannot be modified, props are also read-only and immutable. It is an object that stores attribute values ​​of tags and works like HTML attributes. Arrow messages when changing props. It allows data to be passed from one component to another. It is similar to function arguments and can be passed to components just like arguments passed to a function.</p>
            <p><strong>State:</strong> State is an updatable structure that is used to hold data or information about components and can change over time. It represents the element's local state or information. It can only be accessed or modified inside the component or directly by the component.</p>

            <h2>what does useEffect do in react exclude data load with API?</h2>
            <p>The useEffect Hook allows you to perform side effects in your components. useEffect accepts two arguments. The second argument is optional. Virtually all applications, except the simplest applications, rely on side effects to function in one way or another. By using this useEffect hook, you signal that your component should do something after rendering. React will remember the function you passed (we'll refer to it as our "effect"), and call it after performing DOM updates.</p>
        </div>
    );
};

export default Questions;