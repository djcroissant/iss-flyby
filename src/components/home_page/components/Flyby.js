import React from 'react';
import PropTypes from 'prop-types';


function s_to_min(seconds) {
    // takes number of seconds in string form
    // converts to minutes and rounds to nearest whole number
    // returns minutes in string form
    const s = parseInt(seconds);            // API gives seconds as string
    const m = Math.round(s / 60);
    return m.toString();
}

function ms_convert (milliseconds, type) {
    const ms = parseInt(milliseconds);      // API gives milliseconds as string
    const date = new Date(ms * 1000);       // api cuts trailing zeros
    switch(type) {
      case 'date':
        return date.toLocaleDateString();
      case 'time':
        return date.toLocaleTimeString();
      default:
        return ''
    }
}

const Flyby = ({risetime, duration}) => (
    <tr key={risetime.toString()}>
        <td>{ms_convert(risetime, 'date')}</td>
        <td>{ms_convert(risetime, 'time')}</td>
        <td>{s_to_min(duration)}</td>
    </tr>
);

Flyby.propTypes = {
    risetime: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired
}

export default Flyby