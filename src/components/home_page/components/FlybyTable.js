import React from 'react';
import PropTypes from 'prop-types';
import Flyby from './Flyby.js';

const FlybyTable = ({ flybys }) => (
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

FlybyTable.propTypes = {
    flybys: PropTypes.arrayOf(
        PropTypes.shape({
            risetime: PropTypes.string.isRequired,
            duration: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
}

export default FlybyTable