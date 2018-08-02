import React from 'react';
import PropTypes from 'prop-types';
import Flyby from './Flyby.js';

const table = (flybys) => (
    <div className="block-section">
        <h2>Upcoming flyovers:</h2>
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Rise Time</th>
                    <th>Duration (minutes)</th>
                </tr>
            </thead>
            <tbody>
                {flybys.map((flyby) => (
                    <Flyby risetime={flyby.risetime} duration={flyby.duration} />
                ))}
            </tbody>
        </table>
    </div>
);

function FlybyTable({ flybys }) {
    console.log('hi!!')
    console.log(flybys)
    if (flybys.length > 0) {
        return table(flybys)
    } else {
        return null
    }
}

FlybyTable.propTypes = {
    flybys: PropTypes.arrayOf(
        PropTypes.shape({
            risetime: PropTypes.number.isRequired,
            duration: PropTypes.number.isRequired
        }).isRequired
    ).isRequired
}


export default FlybyTable