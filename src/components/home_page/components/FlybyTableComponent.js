import React from 'react';
import PropTypes from 'prop-types';
import Flyby from './Flyby.js';
import { ms_to_time, ms_to_date, twelve_to_twentyfour } from '../../../helpers/time_conversions.js'

function checkResults(flybys, time) {
  let results = false
  flybys.map((flyby) => {
    let localRisetime = twelve_to_twentyfour(ms_to_time(flyby.risetime))
    if (localRisetime > time.on || localRisetime < time.off) {
      results = true
    }
  })
  return results
}

const results_out_of_range = (flybys) => (
  <div className="block-section">
    <span>There are no flyovers in the specified time window before {ms_to_date(flybys.slice(-1)[0].risetime)}</span>
  </div>
)


const table = (flybys, time) => (
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
        {flybys.map((flyby) => {
          let localRisetime = twelve_to_twentyfour(ms_to_time(flyby.risetime))
          if (localRisetime > time.on || localRisetime < time.off) {
            return (<Flyby risetime={flyby.risetime} duration={flyby.duration} />)
          }
        })}
      </tbody>
    </table>
  </div>
);

function FlybyTable({ flybys, time }) {
  if (flybys.length < 1) {
    return null
  } else if (checkResults(flybys, time)) {
    return table(flybys, time)
  } else {
    return results_out_of_range(flybys)
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