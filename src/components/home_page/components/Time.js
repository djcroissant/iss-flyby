import React from 'react';
import Select from 'react-select';

// Import images
import circle_two from '../../../assets/images/circle_two.png';

function hours(size, startAt = 0, suffix) {
    let startAtValue;
    if (suffix === "p.m.") {
        startAtValue = startAt + 12;
    } else {
        startAtValue = startAt;
    }
    return [...Array(size).keys()].map(i => ({value: (i + startAtValue), label: ((i + startAt).toString() + ":00" + suffix)}));
}

function time_range() {
    let options = [{value: 12, label: "Noon"}]
    options.push.apply(options, hours(11, 1, 'p.m.'));
    options.push({value: 0, label: "Midnight"});
    options.push.apply(options, hours(11, 1, 'a.m.'));
    return options;
};

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
                        options={time_range()} 
                        placeholder="Select a start time" 
                    />
                </div>
                <div className="time-select">
                    <span>Latest:</span>
                    <Select 
                        name="time-select"
                        options={time_range()} 
                        placeholder="Select a start time" 
                    />
                </div>
            </div>
        </div>
    </div>
)

export default Time