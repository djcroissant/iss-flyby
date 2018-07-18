import React from 'react';

// Import images
import circle_one from '../../../assets/images/circle_one.png';

const Location = () => (
    <div className="step-container">
        <div className="step-component">
            <img src={circle_one} className="circle_number" alt="1" />
        </div>
        <div className="step-component">
            <h3>Enter your location</h3>
            <label>
                <input
                    type="text"
                />
            </label>
        </div>
        <div className="step-component">
            <h3>MAP</h3>
            <h3>MAP</h3>
            <h3>MAP</h3>
            <h3>MAP</h3>
            <h3>MAP</h3>
            <h3>MAP</h3>
        </div>
    </div>
)

export default Location