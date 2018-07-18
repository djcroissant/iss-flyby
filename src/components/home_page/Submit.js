import React from 'react';

// Import images
import circle_three from '../assets/images/circle_three.png';

const Submit = () => (
    <div className="step-container">
        <div className="step-component">
            <img src={circle_three} className="circle_number" alt="1" />
        </div>
        <div className="step-component">
            <a href="#" className="button middle calculate">Calculate Passovers</a>
        </div>
    </div>
)

export default Submit