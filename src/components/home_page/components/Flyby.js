import React from 'react';
import PropTypes from 'prop-types';
import { ms_to_time, ms_to_date, s_to_min } from '../../../helpers/time_conversions.js'

const Flyby = ({risetime, duration}) => (
    <tr key={risetime.toString()}>
        <td>{ms_to_date(risetime)}</td>
        <td>{ms_to_time(risetime)}</td>
        <td>{s_to_min(duration)}</td>
    </tr>
);

Flyby.propTypes = {
    risetime: PropTypes.number.isRequired,
    duration: PropTypes.number.isRequired
}

export default Flyby