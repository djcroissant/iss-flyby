import React from 'react';
import Select from 'react-select';

// Import images
import circle_two from '../assets/images/circle_two.png';


const Time = () => (
    <div className="step-container">
        <div className="step-component">
            <img src={circle_two} className="circle_number" alt="2" />
        </div>
        <div className="step-component">
            <h3>Enter your timeframe</h3>
            <div className="time-selections">
                <div className="time-select">
                    <span>Earliest:</span>
                    <Select 
                        name="time-select"
                        options={this.time_range()} 
                        placeholder="Select a start time" 
                    />
                </div>
                <div className="time-select">
                    <span>Latest:</span>
                    <Select 
                        name="time-select"
                        options={this.time_range()} 
                        placeholder="Select a start time" 
                    />
                </div>
            </div>
        </div>
    </div>
)

export default Time